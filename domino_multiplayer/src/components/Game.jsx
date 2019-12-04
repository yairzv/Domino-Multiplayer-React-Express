import React from "react";
import Board from "../components/Board.jsx";
import Cart from "../components/Cart.jsx";
import Timer from "../components/Timer.jsx";
import Stats from "../components/Stats.jsx";
const Manager = require("../utilities/Manager");
import "../style/GameStyle.css";
import "../style/style2.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatContainer from "./ChatContainer.jsx";

const getInitialState = () => {
  const initialBoard = Manager.setInitialBoard(57);
  const initialValidLocation = Manager.createEmptyValidLocations();
  const initialState = {
    gameData: null,
    boardMap: initialBoard,
    validLocationsArray: initialValidLocation,
    cartMap: [],
    selectedCard: null,
    currentScore: 0,
    turn: 0,
    withdrawals: 0,
    numOfPiece: 0,
    average: { minutes: 0, seconds: 0 },
    timeToDisplay: null,
    isAllPlayersInRoom: false,
    isGameStarted: false,
    isUserDone: false,
    isGameDone: false,
    isMyTurn: false,
    isHost: false,
    numberOfSubscribes: 0,
    usersNamesInGame: [],
    usersRoomData: null,
    currentPlayerName: "",
    isWin: false,
    isLost: false,
    isMoveExist: true,
    winName: null,
    lostName: null
  };

  return initialState;
};
export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
    
    this.getGameDataObjToSetState=this.getGameDataObjToSetState.bind(this);
    this.getUpdatedStatsObj=this.getUpdatedStatsObj.bind(this);
    this.getGameData=this.getGameData.bind(this);
    this.getUserData=this.getUserData.bind(this);
    this.fetchUsersRoomData = this.fetchUsersRoomData.bind(this);
    this.handleDrawButton = this.handleDrawButton.bind(this);
    this.fetchIsHost = this.fetchIsHost.bind(this);
    this.handleExitButton = this.handleExitButton.bind(this);
    this.handleRemoveButton = this.handleRemoveButton.bind(this);
    this.handleWinExitToLobby = this.handleWinExitToLobby.bind(this);
    this.handleIsCurrUserInRoom = this.handleIsCurrUserInRoom.bind(this);
    this.fetchCart = this.fetchCart.bind(this);
    this.isTheFirstTurn = this.isTheFirstTurn.bind(this);
    this.fetchPostStats = this.fetchPostStats.bind(this);
    this.isCartEmpty = this.isCartEmpty.bind(this);
    this.handleResetGame = this.handleResetGame.bind(this);
    this.isExistPieceForValidSquares = this.isExistPieceForValidSquares.bind(
      this
    );
    this.fetchNextTurn = this.fetchNextTurn.bind(this);
    this.getTurnDuration = this.getTurnDuration.bind(this);
    this.cartEmptyFlag = false;
    this.currentTime = { minutes: 0, seconds: 0 };
    this.lastPieceTime = { minutes: 0, seconds: 0 };
    this.isTimerResetNeeded = false;
    this._isMounted = false;
    this.isCurrentUserGotCart = false;
    this.isUserUpdatedStats = false;
  }

  render() {
    const drawButton = (
      <button className="btn btn-outline-dark" onClick={this.handleDrawButton}>
        {" "}
        Draw
      </button>
    );
    const removeButton = this.createRemoveButton();
    const exitButton = this.createExitButton();
    const obj = this.createGameSentences();
    const gameStartSentence = obj.gameStartSentence;
    const gameSentence = obj.gameSentence;
    const gameTurnsSentence = obj.gameTurnsSentence;

    return (
      <div key="homeContainer" id="homeContainer">
        <div key="user-info-area-in-game" className="user-info-area">
          Hello {this.props.name}
          {exitButton}
          {removeButton}
        </div>

        <div id="gameAndDataFlex">
          <div id="roomData">
            <p className="roomText" key="game-room-name-title-in-game">
              game room name:{this.props.currentRoomName}
            </p>
            <p className="roomText" key="game-room-gameUsersList">
              users in room:
            </p>

            <ul key="gameUsersList">
              {Object.keys(this.state.usersNamesInGame).map((id, index) => (
                <li key={this.state.usersNamesInGame[id].name + index}>
                  {this.state.usersNamesInGame[id].name}
                </li>
              ))}
            </ul>

            <ChatContainer
              isUserConnected={!this.state.isGameDone}
              key="ChatContainer-lobby"
            />
          </div>

          <div id="gameFrame">
            <div id="statsFrame">
              {gameStartSentence}
              <Timer
                id="timer"
                sendCurrentTime={(m, s) => this.saveCurrentTime(m, s)}
                isResetNeeded={this.isTimerResetNeeded}
                isGameStarted={this.state.isGameStarted}
                isGameDone={this.state.isGameDone}
              />
              <Stats
                id="statistics"
                currentScore={this.state.currentScore}
                turn={this.state.turn}
                withdrawals={this.state.withdrawals}
                average={this.state.average}
              />
            </div>
            <div id="boardFrame">
              <Board
                cells={this.state.boardMap}
                onClick={(i, j) => this.handleBoardClick(i, j)}
              />
            </div>
            <div id="cartFrame">
              <Cart
                id="cartStyle"
                cart={this.state.cartMap}
                onClick={(i, value) => this.handleCartClick(i, value)}
              />
            </div>
            {drawButton}
            {gameTurnsSentence}
            {gameSentence}
          </div>
        </div>
      </div>
    );
  }

  isExistPieceForValidSquares(cartMap) {
    let isExist = false;
    let cards = new Array(7);

    if (this.state.isGameStarted) {
      for (let i = 0; i < cartMap.length; i++) {
        if (cartMap[i]) {
          cards[cartMap[i].side1] = true;
          cards[cartMap[i].side2] = true;
        }
      }
      for (let j = 0; j < 7; j++) {
        let num = this.state.validLocationsArray[j].length;
        if (cards[j] && num > 0) {
          isExist = true;
          break;
        }
      }
    }

    return isExist;
  }

  createExitButton() {
    let exitButton = null;
    if (!this.state.isAllPlayersInRoom || this.state.isGameDone) {
      exitButton = (
        <button
          key="exit"
          className="logout btn btn-outline-dark"
          onClick={this.handleExitButton}
        >
          exit
        </button>
      );
    } else if (
      !this.state.isGameDone &&
      this.state.isUserDone &&
      this.state.isWin
    ) {
      exitButton = (
        <button
          key="exit"
          className="logout btn btn-outline-dark"
          onClick={this.handleWinExitToLobby}
        >
          exit
        </button>
      );
    }
    return exitButton;
  }

  createRemoveButton() {
    let removeButton = null;
    if (
      this.state.isHost &&
      (this.state.numberOfSubscribes === 1 || this.state.isGameDone)
    ) {
      removeButton = (
        <button
          key="exitAndRemove"
          className="logout btn btn-outline-dark"
          onClick={this.handleRemoveButton}
        >
          remove game
        </button>
      );
    }
    return removeButton;
  }

  createGameSentences() {
    let gameStartSentence = null;
    let gameSentence = null;
    let gameTurnsSentence = null;

    if (!this.state.isGameDone && this.state.isGameStarted) {
      if (this.state.turn === 0) {
        gameStartSentence = <p>the game started!!! </p>;
      } else {
        gameStartSentence = null;
      }

      if (!this.state.isMyTurn) {
        gameTurnsSentence = <p>it's {this.state.currentPlayerName} turn </p>;
      } else {
        gameTurnsSentence = <p>it's your turn! </p>;
      }
    }

    if (!this.state.isAllPlayersInRoom) {
      gameTurnsSentence = <p>we waiting for more players </p>;
    }

    if (this.state.isGameStarted) {
      if (this.state.isUserDone && this.state.isWin) {
        gameSentence = <p>YOU WIN!!!</p>;
      } else if (this.state.isGameDone && this.state.isLost) {
        gameSentence = <p>YOU LOST:(</p>;
      }
    }

    return {
      gameStartSentence: gameStartSentence,
      gameTurnsSentence: gameTurnsSentence,
      gameSentence: gameSentence
    };
  }

  isTheFirstTurn() {
    return this.state.boardMap[28][28].valid;
  }

  getTurnDuration() {
    const turnLength = {
      minutes: this.currentTime.minutes - this.lastPieceTime.minutes,
      seconds: this.currentTime.seconds - this.lastPieceTime.seconds
    };

    return turnLength;
  }

  saveCurrentTime(m, s) {
    this.currentTime = { minutes: m, seconds: s };
  }

  handleExitButton() {
    this.setState(
      () => ({ isGameStarted: false, isGameDone: true }),
      () => {
        this.props.exitToLobbyHandler();
      }
    );
  }

  handleWinExitToLobby() {
    this.setState(
      () => ({ isGameStarted: false, isGameDone: true }),
      () => {
        this.props.winExitToLobbyHandler();
      }
    );
  }

  handleRemoveButton() {
    this.setState(
      () => ({ isGameStarted: false, isGameDone: true }),
      () => {
        this.props.removeAndExitHandler();
      }
    );
  }

  handleDrawButton() {
    if (this.state.isMyTurn && this.state.isGameStarted) {
      return fetch("/games/getCard", {
        method: "GET",
        credentials: "include"
      })
        .then(response => {
          if (!response.ok) {
            throw response;
          }
          return response.json();
        })
        .then(domino => {
          this.setState(prevState => {
            const cartMap = [...prevState.cartMap];
            let _isExistPiece = true;
            const newWithdrawals = prevState.withdrawals + 1;
            const newTurn = prevState.turn + 1;

            let isUserDone = false;
            if (JSON.parse(domino).card !== null) {
              cartMap.push(JSON.parse(domino).card);
            } else if (
              !this.isTheFirstTurn() &&
              (!this.isExistPieceForValidSquares(cartMap) &&
                JSON.parse(domino).card === null)
            ) {
              _isExistPiece = false;
            }
            this.isMoveExistChanged = false;

            if (prevState.isMoveExist !== _isExistPiece) {
              this.isMoveExistChanged = true;
            }

            console.log("isMoveExistChanged: " + this.isMoveExistChanged);

            return {
              withdrawals: newWithdrawals,
              cartMap: cartMap,
              isUserDone: isUserDone,
              turn: newTurn
            };
          });
        })
        .then(() => {
          this.fetchPostStats();
        })
        .then(() => {
          this.fetchNextTurn();
        });
    }
  }

  fetchNextTurn() {
    return fetch("/games/moveToNextTurn", {
      method: "POST",
      credentials: "include"
    }).then(response => {
      if (!response.ok) {
        throw response;
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    if (this.timeoutId2) {
      clearTimeout(this.timeoutId2);
    }
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
    this.getGameData();
    this.fetchUsersRoomData();
    this.fetchIsHost();
    }
  }

  fetchCart() {
    return fetch("/games/getCart", {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(cart => {
        this.setState({ cartMap: JSON.parse(cart).cart });
      });
  }

  getUserData() {
    const interval = 2000;
    if (!this.state.isGameDone) {
      return fetch("/games/userData", { method: "GET", credentials: "include" })
        .then(response => {
          if (!response.ok) {
            throw response;
          }
          this.timeoutId5 = setTimeout(this.getUserData, interval);
          return response.json();
        })
        .then(userData => {
        let _isGameStarted=this.state.isGameStarted;
        let _isGameDone=this.state.isGameDone;
        let isCurrUserInRoom= JSON.parse(userData.roomId).id !== "";
        if (!isCurrUserInRoom) 
          {
            _isGameStarted=false;
            _isGameDone=true;
          }
         
          this.setState(() => ({
            isMyTurn: userData.isMyTurn,
            isGameStarted: _isGameStarted,
            isGameDone: _isGameDone,
            currentPlayerName: userData.currentPlayerName
          }));

          if(!isCurrUserInRoom)
          {
            this.props.handleIsCurrUserInRoom();
          }
      
        })
        .catch(err => {
          throw err;
        });
    }
  }

  handleIsCurrUserInRoom() {
    this.setState(() => ({
      isGameStarted: false,
      isGameDone: true
    }));
    this.props.handleIsCurrUserInRoom();
  }

  fetchIsHost() {
    return fetch("/games/isHost", {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(isUserHost => {
        this.setState(() => ({ isHost: JSON.parse(isUserHost) }));
      });
  }
  
  getGameData(){
    const interval = 2000;
    if (!this.state.isGameDone) {
      return fetch("/games/myRoomData", {
        method: "GET",
        credentials: "include"
      })
        .then(response => {
          if (!response.ok) {
            throw response;
          }
          this.timeoutId2 = setTimeout(this.getGameData, interval);
          return response.json();
        }).then(serverOutput => {
          
          const _gameData = JSON.parse(serverOutput);
          const isCurrUserInRoom= JSON.parse(_gameData.userData.roomId).id !== "";
          const updatedStatsObj = this.getUpdatedStatsObj(_gameData);
          const gameDataObjToSetState = this.getGameDataObjToSetState(_gameData);
          const newState=Object.assign(updatedStatsObj,gameDataObjToSetState);
         
          this.setState(() => (newState));
          if(!isCurrUserInRoom)
          {
            this.props.handleIsCurrUserInRoom();
          }     
        }).then(() => {
          if (this.state.isGameDone) {
            (() => this.fetchAmIWinOrLost())();
          }
        });;
  }
  }

  getUpdatedStatsObj(_gameData) 
  {
   const numOfPieceInStack = _gameData.numOfPiece;
   let _isGameDone=this.state.isGameDone;
   let _isGameStarted=this.state.isGameStarted;
   let _isMoveExist = true;
   const isCurrUserInRoom= JSON.parse(_gameData.userData.roomId).id !== "";
 
   if (
     !this.isExistPieceForValidSquares([...this.state.cartMap]) &&
     numOfPieceInStack === 0 &&
     !this.isTheFirstTurn()
   ) {
     _isMoveExist = false;
   }
 
   if (this.state.isGameStarted) 
   {
     _isGameDone=_gameData.isGameDone;
   }
   if (!isCurrUserInRoom) 
     {
       _isGameStarted=false;
       _isGameDone=true;
     }
 
     return {
       isGameStarted: _isGameStarted,
       isGameDone: _isGameDone,
       isMoveExist: _isMoveExist,
     };
  }
 
  getGameDataObjToSetState(_gameData)
  {
     return{
       gameData:_gameData,
       boardMap: _gameData.boardMap,
       validLocationsArray: _gameData.validLocationsArray,
       numOfPiece: _gameData.numOfPiece,
       isMyTurn: _gameData.userData.isMyTurn,
       currentPlayerName: _gameData.userData.currentPlayerName
     };
   }

  fetchUsersRoomData() {
    const interval = 2000;
    if (this.state.isGameDone || !this.state.isGameStarted) {
      return fetch("/games/getUsersRoomData", {
        method: "GET",
        credentials: "include"
      })
        .then(response => {
          if (!response.ok) {
            throw response;
          }
          if (!this.state.isGameDone && !this.state.isGameStarted)
            this.timeoutId2 = setTimeout(
              this.fetchUsersRoomData,
              interval
            );

          return response.json();
        })
        .then(usersRoomData => {
          this.setState(() => ({
            isAllPlayersInRoom: usersRoomData.isAllPlayersIn,
            isGameStarted: usersRoomData.isAllPlayersIn,
            numberOfSubscribes: usersRoomData.numberOfSubscribes,
            usersNamesInGame: [...usersRoomData.names],
            winName: usersRoomData.winName,
            lostName: usersRoomData.lostName,
          }));
        })
        .then(() => {
          if (this.state.isGameDone && this.state.isGameStarted)
            this.props.sendUsersRoomDataToHome(
              this.currentTime,
              this.state.usersNamesInGame,
              this.state.winName,
              this.state.lostName
            );

          this.handleResetGame();
        });
    }
    if (!this.isCurrentUserGotCart && this.state.isAllPlayersInRoom) {
      this.isCurrentUserGotCart = true;
      this.fetchCart();
    }
  }

  handleResetGame() {
    if (this.state.isGameDone && this.state.isLost) {
      return fetch("/games/removeAllUsersAndResetGame", {
        method: "POST",
        credentials: "include"
      }).then(response => {
        if (!response.ok) {
          throw response;
        }
      });
    }
  }

  fetchPostStats() {
    const objToPost = {
      turn: this.state.turn,
      currentScore: this.state.currentScore,
      average: this.state.average,
      withdrawals: this.state.withdrawals,
      isCartEmpty: this.isCartEmpty(),
      isMoveExist: this.state.isMoveExist
    };

    return fetch("/games/postStats", {
      method: "POST",
      body: JSON.stringify(objToPost),
      credentials: "include"
    }).then(response => {
      if (!response.ok) {
        throw response;
      }
    });
  }

  fetchAmIWinOrLost() {
    return fetch("/games/amIWinOrLost", {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(AmIWinOrLost => {
        this.setState(() => ({
          isUserDone: true,
          isWin: AmIWinOrLost.win,
          isLost: AmIWinOrLost.lost
        }));
      })
      .then(() => {
        this.fetchUsersRoomData();
      });
  }

  handleCartClick(indexCart, card) {
    if (this.state.isGameStarted && this.state.isMyTurn) {
      console.log("clicked" + indexCart);
      this.isTimerResetNeeded = false;
      const boardMap = this.getBoardWithSignsCells(
        [...this.state.boardMap],
        card
      );

      const objToPost = {
        isUpdateValidLocation: false,
        boardMap: boardMap,
        card: card
      };

      fetch("/games/updateValidLocations", {
        method: "POST",
        body: JSON.stringify(objToPost),
        credentials: "include"
      })
        .then(response => {
          if (!response.ok) {
            throw response;
          }
        })
        .then(() => {
          this.setState(prevState => {
            const boardMap = this.getBoardWithSignsCells(
              [...prevState.boardMap],
              card
            );
            const obj = this.getUpdatedCart([...prevState.cartMap], indexCart);
            const cartMap = obj.cartMap;
            const turn = obj.turn;
           // const withdrawals = 0;
            return {
              boardMap: boardMap,
              cartMap: cartMap,
              selectedCard: { value: card, index: indexCart },
              turn: turn//,
            //  withdrawals: withdrawals
            };
          });
        });
    }
  }

  getUpdatedCart(cartMap, indexCart) {
    for (let i = 0; i < cartMap.length; i++) {
      if (cartMap[i].valid) cartMap[i].valid = undefined;
    }
    cartMap[indexCart].valid = true;
    let numOfTurnsToAdd = 0;
    return {
      cartMap: cartMap,
      turn: this.state.turn + numOfTurnsToAdd
    };
  }

  getBoardWithSignsCells(board, card) {
    if (this.state.selectedCard !== null) {
      let prevSelectedCard = this.state.selectedCard["value"];
      this.updateValidCellsInBoard(board, prevSelectedCard, false);
    }
    this.updateValidCellsInBoard(board, card, true);
    return board;
  }

  toggleCellValid(board, row, col, booleanVal) {
    board[row][col].valid = booleanVal;
  }

  updateValidCellsInBoard(board, card, booleanVal) {
    const { side1, side2 } = card;

    for (
      let col = 0;
      col < this.state.validLocationsArray[side1].length;
      col++
    ) {
      this.toggleCellValid(
        board,
        this.state.validLocationsArray[side1][col].i,
        this.state.validLocationsArray[side1][col].j,
        booleanVal
      );
    }

    for (
      let col = 0;
      col < this.state.validLocationsArray[side2].length;
      col++
    ) {
      this.toggleCellValid(
        board,
        this.state.validLocationsArray[side2][col].i,
        this.state.validLocationsArray[side2][col].j,
        booleanVal
      );
    }
  }

  toggleCellValid(board, row, col, booleanVal) {
    board[row][col].valid = booleanVal;
  }

  handleBoardClick(row, col) {
    this.runMove(row, col);
  }

  runMove(row, col) {
    const { boardMap } = this.state;

    if (this.state.selectedCard) {
      const { side1, side2 } = this.state.selectedCard["value"];

      let neighborsObj = this.getNeighborsObj(row, col);
      let card = new Manager.Card(false, side1, side2, true);

      const neighborName = Object.keys(neighborsObj).filter(function(row) {
        return neighborsObj[row] !== null;
      });
      const neighborLocation = neighborsObj[neighborName];

      if (neighborLocation) {
        let piece = boardMap[neighborLocation.row][neighborLocation.col];
        card = this.createPiece(neighborName[0], piece, side1, side2);
      }

      this.locatePieceOnBoard(row, col, card);
    }
  }

  getNeighborsObj(row, col) {
    let neighborsObj = new Manager.NeighborsObj(
      this.checkNeighborPiece(row - 1, col),
      this.checkNeighborPiece(row + 1, col),
      this.checkNeighborPiece(row, col - 1),
      this.checkNeighborPiece(row, col + 1)
    );
    return neighborsObj;
  }

  checkNeighborPiece(row, col) {
    const { boardMap } = this.state;
    let obj = null;
    if (this.state.selectedCard) {
      const { side1, side2 } = this.state.selectedCard["value"];

      if (
        boardMap[row][col].side1 === side1 ||
        boardMap[row][col].side2 === side2 ||
        boardMap[row][col].side1 === side2 ||
        boardMap[row][col].side2 === side1
      ) {
        obj = { row: row, col: col };
      }
    }
    return obj;
  }

  createPiece(neighborName, neighborPiece, side1, side2) {
    let position = this.selectPosition(neighborName, neighborPiece);

    let card = new Manager.Card(false, side1, side2, position);

    if (this.checkPiecePosition(neighborName, neighborPiece, side1, side2)) {
      card = new Manager.Card(false, side2, side1, position);
    }

    return card;
  }

  selectPosition(neighborName, piece) {
    let position = piece.isLaying;
    if (
      (!position && neighborName === "left") ||
      (!position && neighborName === "right") ||
      (position && neighborName === "up") ||
      (position && neighborName === "down")
    ) {
      position = !position;
    }
    return position;
  }

  checkPiecePosition(neighborName, neighborPiece, side1, side2) {
    return (
      (side1 === neighborPiece.side1 &&
        (neighborName === "down" || neighborName === "right")) ||
      (side2 === neighborPiece.side2 &&
        (neighborName === "up" || neighborName === "left"))
    );
  }

  locatePieceOnBoard(row, col, card) {
    if (card.side1 === card.side2) {
      card.isLaying = !card.isLaying;
    }
    this.updateValidLocationInServer(row, col, card);

    let scoreAddition = card.side1 + card.side2;
    this.isTimerResetNeeded = false;
    const average = this.calculateAverageOfTurn();
    this.setState(prevState => {
      const newBoardMap = this.getUpdatedBoard(
        [...prevState.boardMap],
        card,
        row,
        col
      );

      const newScore = this.getUpdatedScore(
        prevState.currentScore,
        scoreAddition
      );
      const newTurn = prevState.turn + 1;
      return {
        boardMap: newBoardMap,
        currentScore: newScore,
        turn: newTurn,
        average: average
      };
    });
  }

  calculateAverageOfTurn() {
    this.lastPieceTime = this.currentTime;
    let seconds = this.lastPieceTime.minutes * 60 + this.lastPieceTime.seconds;
    let averageInSecondsFormat = seconds / (this.state.turn + 1);
    return Manager.secondsToTime(averageInSecondsFormat);
  }

  getUpdatedScore(score, addition) {
    score += addition;
    return score;
  }

  removePieceFromCart() {
    let _isWin = false;
    const { index } = this.state.selectedCard;
    this.setState(
      prevState => {
        const newCartMap = this.getCartMapAfterRemoveCard(
          index,
          prevState.cartMap
        );

        let isEmptyCart = this.isCartEmpty();
        let isUserDone = isEmptyCart;
        if (isEmptyCart) {
          isUserDone = isEmptyCart;
          _isWin = true;
        }
        return {
          cartMap: newCartMap,
          isUserDone: isUserDone,
          isWin: _isWin
        };
      },
      () => {
        if (this.state.isUserDone) this.fetchPostStats();
      }
    );
  }

  getCartMapAfterRemoveCard(index, cartMap) {
    cartMap[index] = new Manager.Card(false);
    return cartMap;
  }

  isCartEmpty() {
    let index = null;
    let isEmpty = false;
    const { cartMap } = this.state;
    if (this.state.selectedCard) {
      index = this.state.selectedCard.index;
      isEmpty = true;
      for (let i = 0; i < cartMap.length; i++) {
        if (i !== index && cartMap[i].side1 !== undefined) {
          isEmpty = false;
        }
      }
    }
    return isEmpty;
  }

  getCartAfterAddPiece(cart, card, indexCart) {
    card.valid = undefined;
    cart[indexCart] = card;
    return cart;
  }

  getUpdatedBoard(board, card, row, col) {
    board[row][col] = card;
    this.updateValidCellsInBoard(board, card, false);
    return board;
  }

  updateValidLocationInServer(row, col, card) {
    const objToPost = this.updateValidLocationsAndBoard(row, col, card);

    fetch("/games/updateValidLocations", {
      method: "POST",
      body: JSON.stringify(objToPost),
      credentials: "include"
    })
      .then(response => {
        if (!response.ok) {
          throw response;
        }
      })
      .then(() => {
        if (objToPost.isUpdateValidLocation) this.removePieceFromCart();
      });
  }

  updateValidLocationsAndBoard(row, col, card) {
    const { isLaying } = card;
    const isJoker = card.side1 === card.side2;
    let side1Array = new Array(0);
    let side2Array = new Array(0);

    if (isJoker || isLaying) {
      if (this.isEmptyAndNotValid(row, col - 1)) {
        side1Array.push({
          i: row,
          j: col - 1
        });
      }
      if (this.isEmptyAndNotValid(row, col + 1)) {
        side2Array.push({
          i: row,
          j: col + 1
        });
      }
    }
    if (isJoker || isLaying === false) {
      if (this.isEmptyAndNotValid(row - 1, col)) {
        side1Array.push({
          i: row - 1,
          j: col
        });
      }
      if (this.isEmptyAndNotValid(row + 1, col)) {
        side2Array.push({
          i: row + 1,
          j: col
        });
      }
    }

    const newBoard = this.getUpdatedBoard(
      [...this.state.boardMap],
      card,
      row,
      col
    );
    return {
      isUpdateValidLocation: true,
      boardMap: newBoard,
      card: card,
      row: row,
      col: col,
      side1Array: side1Array,
      side2Array: side2Array
    };
  }

  isEmptyAndNotValid(row, col) {
    const { boardMap } = this.state;
    return (
      boardMap[row][col].valid !== true &&
      boardMap[row][col].isLaying === undefined
    );
  }
}
