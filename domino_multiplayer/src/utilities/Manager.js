class DominoStack {
  constructor() {
    this.piecesAmount = 28;
    this.indexesCardsBox = this.createShuffledArray(this.piecesAmount);
    this.indexesCardsBoxIndex = this.piecesAmount - 1;
    this.cardsArray = this.createCardsArray();
    this.numberOfDrawnFromStack = -7;
    this.getNumOfWithdrawals = this.getNumOfWithdrawals.bind(this);
    this.getNumOfPieces = this.getNumOfPieces.bind(this);
    this.reset = this.reset.bind(this);
  }

  getNumOfWithdrawals() {
    return this.numberOfDrawnFromStack;
  }

  getNumOfPieces() {
    return this.piecesAmount;
  }

  getCard() {
    let ret = null;
    if (this.piecesAmount > 0) {
      this.numberOfDrawnFromStack++;
      this.piecesAmount--;
      let cardIndex = this.indexesCardsBox.pop();
      ret = this.cardsArray[cardIndex];
      this.indexesCardsBoxIndex--;
      console.log("in getCard()");
      console.log("card: " + ret.side1 + ", " + ret.side2);
    }
    return ret;
  }

  createShuffledArray(size) {
    let a = new Array(size);
    for (let i = 0; i < size; i++) {
      a[i] = i;
    }
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  createCardsArray() {
    let arr = new Array(28);
    let arrIndex = 0;
    for (let i = 0; i < 7; i++) {
      for (let j = i; j < 7; j++) {
        arr[arrIndex] = { valid: undefined, side1: i, side2: j };
        console.log(arr[arrIndex]);
        arrIndex++;
      }
    }
    return arr;
  }

  setInitialCart() {
    let cart = new Array(7);
    for (let i = 0; i < 7; i++) {
      cart[i] = this.getCard();
    }
    return JSON.stringify({ cart: cart });
  }

  reset() {
    this.piecesAmount = 28;
    this.indexesCardsBox = this.createShuffledArray(this.piecesAmount);
    this.indexesCardsBoxIndex = this.piecesAmount - 1;
    this.cardsArray = this.createCardsArray();
    this.numberOfDrawnFromStack = -7;
  }
}
class Card {
  constructor(i_Valid, i_Side1, i_Side2, i_IsLaying) {
    this.valid = i_Valid;
    this.side1 = i_Side1;
    this.side2 = i_Side2;
    this.isLaying = i_IsLaying;
  }
}

class StatsObj {
  constructor(withdrawals, turns, scoreToAdd, turnLength, averageTurn) {
    this.withdrawals = withdrawals;
    this.turns = turns;
    this.scoreToAdd = scoreToAdd;
    this.turnLength = turnLength;
    this.averageTurnInSecsToAdd = averageTurn;
  }
}

class GameData {
  constructor(i_HostName, i_HostId, i_GameName, i_NumPlayerToStart) {
    this.id = i_HostId;
    this.gameName = i_GameName;
    this.numPlayerToStart = i_NumPlayerToStart;
    this.numberOfSubscribes = 0;
    this.isGameStart = false;
    this.subscribesList = new Array(i_NumPlayerToStart);
    this.subscribesList[0] = i_HostId;
    this.hostName = i_HostName;
  }
}

const createEmptyBoard = size => {
  let matrix = new Array(size);
  for (let i = 0; i < size; i++) {
    matrix[i] = new Array(size);
    for (let j = 0; j < size; j++) {
      matrix[i][j] = new Card(false);
    }
  }
  return matrix;
};

const setInitialBoard = size => {
  let board = createEmptyBoard(size);
  let mid = Math.floor(size / 2);
  board[mid][mid].valid = true;
  return board;
};

const secondsToTime = secs => {
  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
    minutes: minutes,
    seconds: seconds
  };
  return obj;
};

const removeRowColElementFromArray = (arr, row, col) => {
  let val = false;
  for (var idx = 0; idx < arr.length; idx++)
    if (arr[idx].i === row && arr[idx].j === col) {
      val = arr[idx].i === row && arr[idx].j === col;
      arr.splice(idx, 1);
      break;
    }
  return val;
};

const getCartAfterRemovePiece = (cart, indexCart) => {
  cart[indexCart] = new Card(false);
  const result = cart.filter(el => el.valid === false);

  return result;
};

const createEmptyValidLocations = () => {
  let matrix = new Array(7);
  for (let i = 0; i < 7; i++) {
    matrix[i] = new Array(0);
  }
  return matrix;
};

const createCopyRow = (matrix, i_Row) => {
  let size = 0;
  if (matrix[i_Row]) size = matrix[i_Row].length;

  const array = new Array(size);
  for (let i = 0; i < size; i++) {
    array[i] = matrix[i_Row][i];
  }
  return array;
};
class NeighborsObj {
  constructor(up, down, left, right) {
    this.up = up;
    this.down = down;
    this.left = left;
    this.right = right;
  }
}
module.exports = {
  Card,
  NeighborsObj,
  StatsObj,
  setInitialBoard,
  DominoStack,
  GameData,
  secondsToTime,
  removeRowColElementFromArray,
  createCopyRow,
  createEmptyValidLocations
};
