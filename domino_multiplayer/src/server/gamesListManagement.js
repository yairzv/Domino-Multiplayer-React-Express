const express = require("express");
const games = require("./games");
const auth = require("./auth");
const gamesListManagement = express.Router();

gamesListManagement.post("/addGame", games.addGameToGamesList, (req, res) => {
  res.sendStatus(200);
});

gamesListManagement.post("/addUser", games.addUserToGame, (req, res) => {
  res.sendStatus(200);
});

gamesListManagement.post(
  "/updateValidLocations",
  games.updateValidLocationsAndBoard,
  (req, res) => {
    res.sendStatus(200);
  }
);

gamesListManagement.post("/postStats", games.postStats, (req, res) => {
  res.sendStatus(200);
});

gamesListManagement.post(
  "/moveToNextTurn",
  games.moveToNextTurn,
  (req, res) => {
    res.sendStatus(200);
  }
);

gamesListManagement.get("/allGames", auth.userAuthentication, (req, res) => {
  let list = games.getGamesList();
  res.status(200).json(list);
});

gamesListManagement.get("/myRoomData", auth.userAuthentication, (req, res) => {
  let roomData = games.getMyRoomData(req);
  res.status(200).json(roomData);
});

gamesListManagement.get("/userData", auth.userAuthentication, (req, res) => {
  let userData = games.getUserData(req);
  res.status(200).json(userData);
});

gamesListManagement.get(
  "/getCart",
  auth.userAuthentication,
  games.isUserInRoom,
  (req, res) => {
    const cart = games.getNewCart(req);
    res.status(200).json(cart);
  }
);

gamesListManagement.get(
  "/getCard",
  auth.userAuthentication,
  games.isUserInRoom,
  (req, res) => {
    const card = games.getCard(req);
    res.status(200).json(card);
  }
);

gamesListManagement.get(
  "/getUsersRoomData",
  auth.userAuthentication,
  games.isUserInRoom,
  (req, res) => {
    const isAllPlayersIn = games.getUsersRoomData(req);
    res.status(200).json(isAllPlayersIn);
  }
);

gamesListManagement.get(
  "/isHost",
  auth.userAuthentication,
  games.isUserInRoom,
  (req, res) => {
    let isHost = games.isHost(req);
    res.status(200).json(isHost);
  }
);

gamesListManagement.get("/isGameDone", auth.userAuthentication, (req, res) => {
  let isGameDone = games.isGameDone(req);
  res.status(200).json(isGameDone);
});

gamesListManagement.get(
  "/amIWinOrLost",
  auth.userAuthentication,
  (req, res) => {
    let amIWinOrLost = games.amIWinOrLost(req);
    res.status(200).json(amIWinOrLost);
  }
);

gamesListManagement.post(
  "/removeAllUsersAndResetGame",
  games.removeAllUsersAndResetGame,
  (req, res) => {
    res.sendStatus(200);
  }
);

module.exports = gamesListManagement;
