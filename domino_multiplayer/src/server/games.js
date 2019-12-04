const Manager = require("../utilities/Manager");
const auth = require("./auth");
const chat = require("./chat");

const gamesList = {};
const userRoomId = {};

function addGameToGamesList(req, res, next) {
  const gameNameOut = JSON.parse(req.body).gameName;
  let obj = null;
  if (gamesList[gameNameOut] !== undefined) {
    res.status(403).send("game name already exist!");
  } else {
    gamesList[gameNameOut] = createGameDataFromObj(req.body, req.session.id);
  }
  next();
}

function createGameDataFromObj(i_Obj, hostId) {
  const obj = JSON.parse(i_Obj);
  obj.id = obj.gameName;
  obj.hostId = hostId;
  obj.DominoStackLogic = new Manager.DominoStack();
  obj.validLocationsArray = createEmptyValidLocations();
  obj.boardMap = Manager.setInitialBoard(57);
  obj.numPlayerToStart = JSON.parse(obj.numPlayerToStart);
  obj.currentPlayerIndex = 0;
  obj.numberOfSubscribes = 0;
  obj.lostQueue = [];
  obj.winQueue = [];
  obj.finalWinner = null;
  obj.secondPlaceWinner = null;
  obj.finalLost = null;
  obj.isGameDone = false;
  obj.numOfUsersDone = 0;
  return obj;
}

function getGamesList() {
  return JSON.stringify(gamesList);
}

function getValidLocations(req, res, next) {
  const roomId = JSON.parse(getMyRoomId(req)).id;
  const gameData = gamesList[roomId];
  if (gameData !== undefined)
    return JSON.stringify({
      boardMap: gameData.boardMap,
      validLocationsArray: gameData.validLocationsArray,
      numOfPiece: gameData.DominoStackLogic.getNumOfPieces()
    });
  else {
    return JSON.stringify({
      boardMap: [],
      validLocationsArray: []
    });
  }
}

function removeGameFromGamesList(req, res, next) {
  const roomIdObj = JSON.parse(getMyRoomId(req));
  const roomId = roomIdObj.id;
  const gameData = gamesList[roomId];

  removeUserFromGame(req, res, next);

  if (gameData !== undefined) {
    for (var i = 0; i < gameData.numberOfSubscribes; i++) {
      delete userRoomId[gameData.subscribesList[i]];
    }
    chat.removeChatRoom(roomId);
    delete gamesList[roomId];
  }

  next();
}

function removeUserFromGame(req, res, next) {
  const roomIdObj = JSON.parse(getMyRoomId(req));
  const roomId = roomIdObj.id;
  const index = roomIdObj.subscribesListIndex;
  if (roomId !== "") {
    const gameData = gamesList[roomId];
    if (gameData.numberOfSubscribes <= 0) {
      res.sendStatus(401);
    } else {
      gamesList[roomId].subscribesList.splice(index, 1);
      gamesList[roomId].numberOfSubscribes--;
      delete userRoomId[req.session.id];
    }
  }
  next();
}

function removeAllUsersAndResetGame(req, res, next) {
  const roomIdObj = JSON.parse(getMyRoomId(req));
  const roomId = roomIdObj.id;
  const gameData = gamesList[roomId];

  if (gameData.isGameDone) {
    const gameName = gameData.gameName;
    const hostId = gameData.hostId;
    const name = gameData.hostName;
    const id = gameData.hostId;
    const numOfPlayers = JSON.stringify(gameData.numPlayerToStart);

    const gameDataObj = new Manager.GameData(
      name,
      hostId,
      gameName,
      numOfPlayers
    );

    removeGameFromGamesList(req, res, next);

    gamesList[gameName] = createGameDataFromObj(
      JSON.stringify(gameDataObj),
      hostId
    );
  }
  next();
}

function winExit(req, res, next) {
  const roomIdObj = JSON.parse(getMyRoomId(req));
  const roomId = roomIdObj.id;
  const index = roomIdObj.subscribesListIndex;
  if (roomId !== "") {
    const gameData = gamesList[roomId];
    if (gameData.numberOfSubscribes <= 0) {
      res.sendStatus(401);
    } else {
      userRoomId[req.session.id] = undefined;
    }
  }
  next();
}

function getMyRoomId(req) {
  if (userRoomId[req.session.id] !== undefined) {
    return JSON.stringify(userRoomId[req.session.id]);
  }
  return JSON.stringify({ id: "", subscribesListIndex: "" });
}

function getMyRoomData(req) {
  const roomIdObj = JSON.parse(getMyRoomId(req));
  const roomId = roomIdObj.id;
  let gameData = gamesList[roomId];
  const userData=getUserData(req);
  gameData={...gameData,userData:userData};
  return JSON.stringify(gameData);
}

function isHostOfThisGame(req) {
  const roomIdObj = JSON.parse(getMyRoomId(req));
  const roomId = roomIdObj.id;
  return JSON.stringify(gamesList[roomId].hostId === req.session.id);
}

function isUserInRoom(req, res, next) {
  if (JSON.parse(getMyRoomId(req).id === "")) {
    res.sendStatus(401);
  }
  next();
}

function addUserToGame(req, res, next) {
  const roomID = JSON.parse(req.body).gameName;
  const name = JSON.parse(req.body).name;

  const gameData = gamesList[roomID];

  if (gameData.numberOfSubscribes >= gameData.numPlayerToStart) {
    res.sendStatus(401);
  } else {
    gamesList[roomID].subscribesList[gameData.numberOfSubscribes] = {
      id: req.session.id,
      name: name,
      stats: null,
      isActivePlayer: true
    };

    userRoomId[req.session.id] =
     {
      id: roomID,
      subscribesListIndex: gamesList[roomID].numberOfSubscribes
    };
    gameData.numberOfSubscribes++;
    gamesList[roomID] = gameData;
    next();
  }
}

function getNewCart(req, res, next) {
  const roomId = JSON.parse(getMyRoomId(req)).id;
  const gameData = gamesList[roomId];
  return gameData.DominoStackLogic.setInitialCart();
}

function createEmptyValidLocations() {
  let matrix = new Array(7);
  for (let i = 0; i < 7; i++) {
    matrix[i] = new Array(0);
  }
  return matrix;
}

function updateValidLocationsAndBoard(req, res, next) {
  const roomId = JSON.parse(getMyRoomId(req)).id;
  const gameData = gamesList[roomId];
  const reqBodyObj = JSON.parse(req.body);
  const card = reqBodyObj.card;
  const row = reqBodyObj.row;
  const col = reqBodyObj.col;
  const side1Array = reqBodyObj.side1Array;
  const side2Array = reqBodyObj.side2Array;
  const isUpdateValidLocationNeeded = reqBodyObj.isUpdateValidLocation;
  gameData.boardMap = reqBodyObj.boardMap;

  if (isUpdateValidLocationNeeded) {
    removeValidLocation(roomId, row, col, card);
    moveToNextTurn(req, res, next);

    for (let i = 0; i < side1Array.length; i++) {
      gameData.validLocationsArray[card.side1].push(side1Array[i]);
    }

    for (let i = 0; i < side2Array.length; i++) {
      gameData.validLocationsArray[card.side2].push(side2Array[i]);
    }
  }
  next();
}

function removeValidLocation(roomId, row, col, card) {
  const gameData = gamesList[roomId];

  let length1 = gameData.validLocationsArray[card.side1].length;
  let length2 = gameData.validLocationsArray[card.side2].length;
  let arr1 = new Array(0);
  let arr2 = new Array(0);

  arr1 = Manager.createCopyRow(gameData.validLocationsArray, card.side1);
  arr2 = Manager.createCopyRow(gameData.validLocationsArray, card.side2);
  let output1 = Manager.removeRowColElementFromArray(arr1, row, col);
  let output2 = Manager.removeRowColElementFromArray(arr2, row, col);

  if (output1) {
    length1--;
    gameData.validLocationsArray[card.side1] = new Array(length1);
    for (let i = 0; i < length1; i++) {
      gameData.validLocationsArray[card.side1][i] = arr1[i];
    }
  }

  if (output2) {
    length2--;
    gameData.validLocationsArray[card.side2] = new Array(length2);
    for (let i = 0; i < length2; i++) {
      gameData.validLocationsArray[card.side2][i] = arr2[i];
    }
  }
}

function getCard(req) {
  const roomId = JSON.parse(getMyRoomId(req)).id;
  const gameData = gamesList[roomId];
  return JSON.stringify({ card: gameData.DominoStackLogic.getCard() });
}

function getUsersRoomData(req) {
  const roomId = JSON.parse(getMyRoomId(req)).id;
  const gameData = gamesList[roomId];
  if (
    gameData !== undefined &&
    gameData.finalLost !== null &&
    gameData.finalWinner !== null
  ) {
    return {
      isAllPlayersIn: gameData.numberOfSubscribes === gameData.numPlayerToStart,
      names: gameData.subscribesList,
      numberOfSubscribes: gameData.numberOfSubscribes,
      winName: JSON.parse(auth.getUserInfo(gameData.finalWinner)).name,
      lostName: JSON.parse(auth.getUserInfo(gameData.finalLost)).name,
    };
  } else if (
    gameData !== undefined &&
    (gameData.finalLost === null || gameData.finalWinner === null)
  ) {
    return {
      isAllPlayersIn: gameData.numberOfSubscribes === gameData.numPlayerToStart,
      names: gameData.subscribesList,
      numberOfSubscribes: gameData.numberOfSubscribes,
      winner: null,
      lost: null,
    };
  } else {
    return null;
  }
}

function getUserData(req)
{
  return {
    isMyTurn:isMyTurn(req),
    currentPlayerName: getCurrentPlayer(req),
    roomId: getMyRoomId(req)
  }
}

function moveToNextTurn(req, res, next) {
  const roomId = JSON.parse(getMyRoomId(req)).id;
  const gameData = gamesList[roomId];
  const indexPlayer = gameData.currentPlayerIndex;
  if (req.session.id === gameData.subscribesList[indexPlayer].id) {
    if (indexPlayer + 1 === JSON.parse(gameData.numberOfSubscribes)) {
      const nextPlayer1 = gameData.subscribesList[0];
      gameData.currentPlayerIndex = 0;
      if (
        nextPlayer1.id === gameData.finalWinner ||
        nextPlayer1.id === gameData.finalLost
      ) {
        gameData.currentPlayerIndex = 1;
      }
    } else {
      const nextPlayer2 =
        gameData.subscribesList[gameData.currentPlayerIndex + 1];
      if (
        nextPlayer2.id === gameData.finalWinner ||
        nextPlayer2.id === gameData.finalLost
      ) {
        gameData.currentPlayerIndex++;
        if (
          gameData.currentPlayerIndex + 1 ===
          JSON.parse(gameData.numberOfSubscribes)
        ) {
          gameData.currentPlayerIndex = -1;
        }
      }

      gameData.currentPlayerIndex++;
    }
  }
  next();
}

function isMyTurn(req) {
  const roomId = JSON.parse(getMyRoomId(req)).id;

  const gameData = gamesList[roomId];

  if (gameData !== undefined) {
    const indexPlayer = gameData.currentPlayerIndex;
    const currPlayer = gameData.subscribesList[gameData.currentPlayerIndex];
    if (
      currPlayer.id === gameData.finalWinner ||
      currPlayer.id === gameData.finalLost
    ) {
      return false;
    }

    return req.session.id === gameData.subscribesList[indexPlayer].id;
  }
  return false;
}

function getCurrentPlayer(req) {
  const roomId = JSON.parse(getMyRoomId(req)).id;
  const gameData = gamesList[roomId];
  if (gameData !== undefined) {
    const indexPlayer = gameData.currentPlayerIndex;
    const currentPlayerId = gameData.subscribesList[indexPlayer].id;

    return JSON.parse(auth.getUserInfo(currentPlayerId)).name;
  } else return "";
}

function isGameDone(req) {
  const getMyRoomIdObj = JSON.parse(getMyRoomId(req));
  const roomId = getMyRoomIdObj.id;
  const gameData = gamesList[roomId];
  return gameData.isGameDone;
}

function postStats(req, res, next) {
  const getMyRoomIdObj = JSON.parse(getMyRoomId(req));
  const roomId = getMyRoomIdObj.id;
  const gameData = gamesList[roomId];

  const myIndex = userRoomId[req.session.id].subscribesListIndex;

  const objToPost = JSON.parse(req.body);

  gameData.subscribesList[myIndex].stats = JSON.parse(req.body);

  if (objToPost.isCartEmpty) updateWinner(req, objToPost);
  else if (!objToPost.isCartEmpty && !objToPost.isMoveExist)
    updateLose(req, objToPost);
  else if (!objToPost.isCartEmpty && objToPost.isMoveExist) {
    for (let i = 0; i < gameData.lostQueue.length; i++) {
      if (gameData.lostQueue[i].id === req.session.id) {
        console.log("object just removed: " + gameData.lostQueue[i].id);
        gameData.lostQueue.splice(i, 1);
      }
    }
  }
  next();
}

function updateLose(req) {
  const getMyRoomIdObj = JSON.parse(getMyRoomId(req));
  const roomId = getMyRoomIdObj.id;
  const gameData = gamesList[roomId];
  const myIndex = userRoomId[req.session.id].subscribesListIndex;

  if (gameData.finalWinner !== null && gameData.secondPlaceWinner !== null) {
    gameData.finalLost = req.session.id;
  } else {
    let isExist = false;
    for (let i = 0; i < gameData.lostQueue.length; i++) {
      if (gameData.lostQueue[i].id === req.session.id) {
        isExist = true;
      }
    }
    if (!isExist)
      gameData.lostQueue.push({
        id: req.session.id,
        score: gameData.subscribesList[myIndex].stats.score
      });
    gameData.numOfUsersDone++;
    gameData.lostQueue.sort((a, b) => b.score - a.score);
    console.log("lostQueue after sort:" + JSON.stringify(gameData.lostQueue));

    if (gameData.finalWinner !== null && gameData.finalLost.length === 2) {
      gameData.finalLost = gameData.lostQueue[0].id;
      gameData.isGameDone = true;
    } else if (
      gameData.finalWinner === null &&
      gameData.lostQueue.length === 2
    ) {
      if (gameData.numberOfSubscribes === 2) {
        gameData.finalLost = gameData.lostQueue[1].id;
        gameData.finalWinner = gameData.lostQueue[0].id;
        gameData.isGameDone = true;
      }
    } else if (gameData.lostQueue.length === 3) {
      gameData.finalLost = gameData.lostQueue[0].id;
      gameData.finalWinner = gameData.lostQueue[2].id;
      gameData.isGameDone = true;
    }
  }
}

function updateWinner(req, objToPost) {
  const getMyRoomIdObj = JSON.parse(getMyRoomId(req));
  const roomId = getMyRoomIdObj.id;
  const gameData = gamesList[roomId];

  if (gameData.finalWinner === null && objToPost.isCartEmpty) {
    gameData.finalWinner = req.session.id;
    if (gameData.numberOfSubscribes === 2) {
      for (let i = 0; i < 2; i++) {
        if (gameData.subscribesList[i].id !== gameData.finalWinner)
          gameData.finalLost = gameData.subscribesList[i].id;
      }
      gameData.isGameDone = true;
    }
  } else if (gameData.secondPlaceWinner === null && objToPost.isCartEmpty) {
    gameData.secondPlaceWinner = req.session.id;

    for (let i = 0; i < gameData.numberOfSubscribes; i++) {
      if (
        gameData.subscribesList[i].id !== gameData.finalWinner &&
        gameData.subscribesList[i].id !== gameData.secondPlaceWinner
      )
        gameData.finalLost = gameData.subscribesList[i].id;
    }
    gameData.isGameDone = true;
  }
}

function amIWinOrLost(req, res, next) {
  const getMyRoomIdObj = JSON.parse(getMyRoomId(req));
  const roomId = getMyRoomIdObj.id;
  const gameData = gamesList[roomId];
  if (gameData.finalWinner === req.session.id)
    return { win: true, lost: false };
  else if (gameData.finalLost === req.session.id)
    return { win: false, lost: true };
  else return { win: false, lost: false };
}

module.exports = {
  addGameToGamesList,
  getGamesList,
  removeGameFromGamesList,
  removeUserFromGame,
  winExit,
  getMyRoomId,
  addUserToGame,
  isUserInRoom,
  getNewCart,
  getValidLocations,
  updateValidLocationsAndBoard,
  removeAllUsersAndResetGame,
  getCard,
  getUsersRoomData,
  isMyTurn,
  moveToNextTurn,
  getCurrentPlayer,
  isHost: isHostOfThisGame,
  getMyRoomData,
  isGameDone,
  postStats,
  amIWinOrLost,
  getUserData
};
