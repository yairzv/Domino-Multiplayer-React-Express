/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\User\\Desktop\\development\\Web Development course\\New folder\\domino_multiplayer\\node_modules\\react\\index.js'");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\User\\Desktop\\development\\Web Development course\\New folder\\domino_multiplayer\\node_modules\\react-dom\\index.js'");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\User\\Desktop\\development\\Web Development course\\New folder\\domino_multiplayer\\node_modules\\css-loader\\lib\\css-base.js'");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\User\\Desktop\\development\\Web Development course\\New folder\\domino_multiplayer\\node_modules\\style-loader\\lib\\addStyles.js'");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DominoStack = function () {
  function DominoStack() {
    _classCallCheck(this, DominoStack);

    this.piecesAmount = 28;
    this.indexesCardsBox = this.createShuffledArray(this.piecesAmount);
    this.indexesCardsBoxIndex = this.piecesAmount - 1;
    this.cardsArray = this.createCardsArray();
    this.numberOfDrawnFromStack = -7;
    this.getNumOfWithdrawals = this.getNumOfWithdrawals.bind(this);
    this.getNumOfPieces = this.getNumOfPieces.bind(this);
    this.reset = this.reset.bind(this);
  }

  _createClass(DominoStack, [{
    key: "getNumOfWithdrawals",
    value: function getNumOfWithdrawals() {
      return this.numberOfDrawnFromStack;
    }
  }, {
    key: "getNumOfPieces",
    value: function getNumOfPieces() {
      return this.piecesAmount;
    }
  }, {
    key: "getCard",
    value: function getCard() {
      var ret = null;
      if (this.piecesAmount > 0) {
        this.numberOfDrawnFromStack++;
        this.piecesAmount--;
        var cardIndex = this.indexesCardsBox.pop();
        ret = this.cardsArray[cardIndex];
        this.indexesCardsBoxIndex--;
        console.log("in getCard()");
        console.log("card: " + ret.side1 + ", " + ret.side2);
      }
      return ret;
    }
  }, {
    key: "createShuffledArray",
    value: function createShuffledArray(size) {
      var a = new Array(size);
      for (var i = 0; i < size; i++) {
        a[i] = i;
      }
      for (var _i = a.length - 1; _i > 0; _i--) {
        var j = Math.floor(Math.random() * (_i + 1));
        var _ref = [a[j], a[_i]];
        a[_i] = _ref[0];
        a[j] = _ref[1];
      }
      return a;
    }
  }, {
    key: "createCardsArray",
    value: function createCardsArray() {
      var arr = new Array(28);
      var arrIndex = 0;
      for (var i = 0; i < 7; i++) {
        for (var j = i; j < 7; j++) {
          arr[arrIndex] = { valid: undefined, side1: i, side2: j };
          console.log(arr[arrIndex]);
          arrIndex++;
        }
      }
      return arr;
    }
  }, {
    key: "setInitialCart",
    value: function setInitialCart() {
      var cart = new Array(7);
      for (var i = 0; i < 7; i++) {
        cart[i] = this.getCard();
      }
      return JSON.stringify({ cart: cart });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.piecesAmount = 28;
      this.indexesCardsBox = this.createShuffledArray(this.piecesAmount);
      this.indexesCardsBoxIndex = this.piecesAmount - 1;
      this.cardsArray = this.createCardsArray();
      this.numberOfDrawnFromStack = -7;
    }
  }]);

  return DominoStack;
}();

var Card = function Card(i_Valid, i_Side1, i_Side2, i_IsLaying) {
  _classCallCheck(this, Card);

  this.valid = i_Valid;
  this.side1 = i_Side1;
  this.side2 = i_Side2;
  this.isLaying = i_IsLaying;
};

var StatsObj = function StatsObj(withdrawals, turns, scoreToAdd, turnLength, averageTurn) {
  _classCallCheck(this, StatsObj);

  this.withdrawals = withdrawals;
  this.turns = turns;
  this.scoreToAdd = scoreToAdd;
  this.turnLength = turnLength;
  this.averageTurnInSecsToAdd = averageTurn;
};

var GameData = function GameData(i_HostName, i_HostId, i_GameName, i_NumPlayerToStart) {
  _classCallCheck(this, GameData);

  this.id = i_HostId;
  this.gameName = i_GameName;
  this.numPlayerToStart = i_NumPlayerToStart;
  this.numberOfSubscribes = 0;
  this.isGameStart = false;
  this.subscribesList = new Array(i_NumPlayerToStart);
  this.subscribesList[0] = i_HostId;
  this.hostName = i_HostName;
};

var createEmptyBoard = function createEmptyBoard(size) {
  var matrix = new Array(size);
  for (var i = 0; i < size; i++) {
    matrix[i] = new Array(size);
    for (var j = 0; j < size; j++) {
      matrix[i][j] = new Card(false);
    }
  }
  return matrix;
};

var setInitialBoard = function setInitialBoard(size) {
  var board = createEmptyBoard(size);
  var mid = Math.floor(size / 2);
  board[mid][mid].valid = true;
  return board;
};

var secondsToTime = function secondsToTime(secs) {
  var divisor_for_minutes = secs % (60 * 60);
  var minutes = Math.floor(divisor_for_minutes / 60);

  var divisor_for_seconds = divisor_for_minutes % 60;
  var seconds = Math.ceil(divisor_for_seconds);

  var obj = {
    minutes: minutes,
    seconds: seconds
  };
  return obj;
};

var removeRowColElementFromArray = function removeRowColElementFromArray(arr, row, col) {
  var val = false;
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx].i === row && arr[idx].j === col) {
      val = arr[idx].i === row && arr[idx].j === col;
      arr.splice(idx, 1);
      break;
    }
  }return val;
};

var getCartAfterRemovePiece = function getCartAfterRemovePiece(cart, indexCart) {
  cart[indexCart] = new Card(false);
  var result = cart.filter(function (el) {
    return el.valid === false;
  });

  return result;
};

var createEmptyValidLocations = function createEmptyValidLocations() {
  var matrix = new Array(7);
  for (var i = 0; i < 7; i++) {
    matrix[i] = new Array(0);
  }
  return matrix;
};

var createCopyRow = function createCopyRow(matrix, i_Row) {
  var size = 0;
  if (matrix[i_Row]) size = matrix[i_Row].length;

  var array = new Array(size);
  for (var i = 0; i < size; i++) {
    array[i] = matrix[i_Row][i];
  }
  return array;
};

var NeighborsObj = function NeighborsObj(up, down, left, right) {
  _classCallCheck(this, NeighborsObj);

  this.up = up;
  this.down = down;
  this.left = left;
  this.right = right;
};

module.exports = {
  Card: Card,
  NeighborsObj: NeighborsObj,
  StatsObj: StatsObj,
  setInitialBoard: setInitialBoard,
  DominoStack: DominoStack,
  GameData: GameData,
  secondsToTime: secondsToTime,
  removeRowColElementFromArray: removeRowColElementFromArray,
  createCopyRow: createCopyRow,
  createEmptyValidLocations: createEmptyValidLocations
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./style2.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./style2.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!./bootstrap.min.css", function() {
			var newContent = require("!!../../../css-loader/index.js!./bootstrap.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./GameStyle.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./GameStyle.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidPiece = exports.EmptyPiece = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Piece = function Piece(props) {
  var valid = props.valid,
      side1 = props.side1,
      side2 = props.side2,
      isLaying = props.isLaying;


  var cardInCartSelected = valid;

  var getDegree = function getDegree(isLaying, side1, side2) {
    var deg;
    if (!isLaying && side1 <= side2) deg = 0;else {
      if (isLaying === true) deg = 90;else deg = 180;

      if (side1 < side2) deg *= -1;
    }

    return deg;
  };
  var getImageName = function getImageName(side1, side2) {
    return "p" + Math.min(side1, side2) + "_" + Math.max(side1, side2);
  };

  var imgName = getImageName(side1, side2);
  var imagePath = __webpack_require__(37)("./" + imgName + ".svg");
  var degree = getDegree(isLaying, side1, side2);
  var transform = "rotate(" + degree + "deg)";
  var width = "5vw";
  var height = width;
  var styleCopy = null;
  cardInCartSelected ? styleCopy = validStyle : styleCopy = containerStyle;

  return _react2.default.createElement(
    "div",
    { style: styleCopy },
    _react2.default.createElement("img", { src: imagePath, style: { height: height, width: width, transform: transform } })
  );
};

exports.default = Piece;
var EmptyPiece = exports.EmptyPiece = function EmptyPiece() {
  return _react2.default.createElement("div", { style: containerStyle });
};

var ValidPiece = exports.ValidPiece = function (_React$Component) {
  _inherits(ValidPiece, _React$Component);

  function ValidPiece(props) {
    _classCallCheck(this, ValidPiece);

    var _this = _possibleConstructorReturn(this, (ValidPiece.__proto__ || Object.getPrototypeOf(ValidPiece)).call(this, props));

    _this.validPieceRef = _react2.default.createRef();
    _this.scrollIntoCenter = _this.scrollIntoCenter.bind(_this);
    return _this;
  }

  _createClass(ValidPiece, [{
    key: "scrollIntoCenter",
    value: function scrollIntoCenter() {
      if (this.validPieceRef.current) {
        this.validPieceRef.current.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
        console.log("afters scrolled");
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollIntoCenter();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { ref: this.validPieceRef, style: validStyle });
    }
  }]);

  return ValidPiece;
}(_react2.default.Component);

var size = "5vw";
var imageStyle = {
  width: size,
  height: size
};

var containerStyle = {
  width: size,
  height: size,
  backgroundColor: "white"
};

var validStyle = {
  width: size,
  height: size,
  backgroundColor: "green"
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(7);

__webpack_require__(8);

var _baseContainer = __webpack_require__(28);

var _baseContainer2 = _interopRequireDefault(_baseContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_baseContainer2.default, null), document.getElementById("root"));

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\r\n.home-base-container {\r\n  justify-content: center;\r\n}\r\n\r\n.new-game-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 27vh;\r\n}\r\n\r\n.games-rooms-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.chat-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  padding-top: 2vh;\r\n  height: 24vh;\r\n  width: 52vh;\r\n}\r\n.chat-container .converssion-area-wrpper {\r\n  border: 1px solid #ccc;\r\n  height: 16vh;\r\n  overflow: auto;\r\n}\r\n\r\n.chat-container .chat-input-wrapper {\r\n  margin-bottom: 8px;\r\n  width: 100%;\r\n  display: flex;\r\n}\r\n\r\n.chat-container .chat-input-wrapper input {\r\n  line-height: 16px;\r\n  font-size: 16px;\r\n  margin: 1px;\r\n  height: 48px;\r\n  padding: 8px;\r\n  box-sizing: border-box;\r\n  flex-grow: 1;\r\n}\r\n\r\n.chat-container .chat-input-wrapper .btn {\r\n  flex-grow: 0;\r\n  width: 88px;\r\n  margin: 0 2px 0 5px;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\User\\Desktop\\development\\Web Development course\\New folder\\domino_multiplayer\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css'");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LoginModal = __webpack_require__(29);

var _LoginModal2 = _interopRequireDefault(_LoginModal);

var _UsersList = __webpack_require__(30);

var _UsersList2 = _interopRequireDefault(_UsersList);

var _GamesList = __webpack_require__(31);

var _GamesList2 = _interopRequireDefault(_GamesList);

var _NewGameModal = __webpack_require__(33);

var _NewGameModal2 = _interopRequireDefault(_NewGameModal);

var _Game = __webpack_require__(35);

var _Game2 = _interopRequireDefault(_Game);

var _GameSummary = __webpack_require__(75);

var _GameSummary2 = _interopRequireDefault(_GameSummary);

__webpack_require__(9);

__webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseContainer = function (_React$Component) {
  _inherits(BaseContainer, _React$Component);

  function BaseContainer(props) {
    _classCallCheck(this, BaseContainer);

    var _this = _possibleConstructorReturn(this, (BaseContainer.__proto__ || Object.getPrototypeOf(BaseContainer)).call(this, props));

    _this.state = {
      showLogin: true,
      showLobby: false,
      showGame: false,
      showGameSummary: true,
      usersRoomData: null,
      currentTime: { minutes: 0, seconds: 0 },
      winName: null,
      lostName: null,
      currentUser: {},
      currentRoomName: null
    };
    _this._isMounted = false;
    _this.handleSucceededLogin = _this.handleSucceededLogin.bind(_this);
    _this.handleLoginError = _this.handleLoginError.bind(_this);
    _this.handleSucceedCreateNewRoom = _this.handleSucceedCreateNewRoom.bind(_this);
    _this.handleCreateRoomError = _this.handleCreateRoomError.bind(_this);
    _this.fetchUserInfo = _this.fetchUserInfo.bind(_this);
    _this.logoutHandler = _this.logoutHandler.bind(_this);
    _this.renderGame = _this.renderGame.bind(_this);
    _this.removeAndExitToLobbyHandler = _this.removeAndExitToLobbyHandler.bind(_this);
    _this.handleIsCurrUserInRoom = _this.handleIsCurrUserInRoom.bind(_this);
    _this.handleSucceedJoinToRoom = _this.handleSucceedJoinToRoom.bind(_this);
    _this.exitToLobbyHandler = _this.exitToLobbyHandler.bind(_this);
    _this.handleGoToLobbyButton = _this.handleGoToLobbyButton.bind(_this);
    _this.winExitToLobbyHandler = _this.winExitToLobbyHandler.bind(_this);
    _this.handleGameDone = _this.handleGameDone.bind(_this);
    _this._isMounted = false;
    return _this;
  }

  _createClass(BaseContainer, [{
    key: "render",
    value: function render() {
      if (this.state.showLogin) {
        return _react2.default.createElement(_LoginModal2.default, {
          key: "login-modal-loginPage",
          loginSuccessHandler: this.handleSucceededLogin,
          loginErrorHandler: this.handleLoginError
        });
      } else if (this.state.showLobby) {
        return this.renderLobby();
      } else if (this.state.showGame && !this.state.showGameSummary) {
        return this.renderGame();
      } else if (!this.state.showGame && this.state.showGameSummary) return this.renderGameSummary();else return null;
    }
  }, {
    key: "handleSucceededLogin",
    value: function handleSucceededLogin() {
      this.setState(function () {
        return { showLobby: true, showLogin: false };
      }, this.getUserName);
    }
  }, {
    key: "handleLoginError",
    value: function handleLoginError() {
      console.error("login failed");
      this.setState(function () {
        return { showLogin: true };
      });
    }
  }, {
    key: "renderGame",
    value: function renderGame() {
      return _react2.default.createElement(_Game2.default, {
        removeAndExitHandler: this.removeAndExitToLobbyHandler,
        exitToLobbyHandler: this.exitToLobbyHandler,
        winExitToLobbyHandler: this.winExitToLobbyHandler,
        name: this.state.currentUser.name,
        handleIsCurrUserInRoom: this.handleIsCurrUserInRoom,
        currentRoomName: this.state.currentRoomName,
        sendUsersRoomDataToHome: this.handleGameDone,
        fetchToggle: !this.state.showLogin
      });
    }
  }, {
    key: "renderLobby",
    value: function renderLobby() {
      return _react2.default.createElement(
        "div",
        { key: "home-base-container-lobby", className: "home-base-container" },
        _react2.default.createElement(
          "div",
          { key: "user-info-area-lobby", className: "user-info-area" },
          "Hello ",
          this.state.currentUser.name,
          _react2.default.createElement(
            "button",
            _defineProperty({
              key: "logout-btn-lobby",
              className: "logout btn",
              onClick: this.logoutHandler
            }, "className", "btn btn-outline-dark"),
            "Logout"
          ),
          _react2.default.createElement(
            "h1",
            { key: "Domino multiplayer-lobby" },
            "Domino multiplayer"
          )
        ),
        _react2.default.createElement(
          "div",
          {
            key: "games-rooms-container-lobby",
            className: "games-rooms-container"
          },
          _react2.default.createElement(
            "div",
            { key: "new-game-area-lobby", className: "new-game-area" },
            _react2.default.createElement(_NewGameModal2.default, {
              key: "NewGameModal-lobby",
              currentUser: this.state.currentUser,
              createNewGameSuccessHandler: this.handleSucceedCreateNewRoom,
              createNewGameErrorHandler: this.handleCreateRoomError,
              addRoomToUser: this.handleAddRoomToUser,
              updateMyRoomId: this.updateMyRoomId
            })
          ),
          _react2.default.createElement(
            "div",
            { key: "games-list-area-lobby", className: "games-list-area" },
            _react2.default.createElement(_GamesList2.default, {
              key: "GamesList-lobby",
              handleJoinToGame: this.handleSucceedJoinToRoom,
              name: this.state.currentUser.name,
              fetchToggle: !this.state.showLogin
            })
          ),
          _react2.default.createElement(
            "div",
            { key: "users-list-area-lobby", className: "users-list-area" },
            _react2.default.createElement(_UsersList2.default, {
              fetchToggle: !this.state.showLogin,
              key: "UsersList-lobby"
            })
          )
        )
      );
    }
  }, {
    key: "renderGameSummary",
    value: function renderGameSummary() {
      return _react2.default.createElement(_GameSummary2.default, {
        handleGoToLobbyButton: this.handleGoToLobbyButton,
        usersRoomData: this.state.usersRoomData,
        currentTime: this.state.currentTime,
        winName: this.state.winName,
        lostName: this.state.lostName,
        currentRoomName: this.state.currentRoomName,
        createNewGameSuccessHandler: this.handleSucceedCreateNewRoom
      });
    }
  }, {
    key: "getUserName",
    value: function getUserName() {
      var _this2 = this;

      this.fetchUserInfo().then(function (userInfo) {
        _this2.setState(function () {
          return {
            currentUser: JSON.parse(userInfo),
            showLobby: true,
            showLogin: false
          };
        });
      }).catch(function (err) {
        if (err.status === 401) {
          _this2.setState(function () {
            return { showLogin: true };
          });
        } else {
          throw err;
        }
      });
    }
  }, {
    key: "fetchUserInfo",
    value: function fetchUserInfo() {
      return fetch("/users", { method: "GET", credentials: "include" }).then(function (response) {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      });
    }
  }, {
    key: "removeAndExitToLobbyHandler",
    value: function removeAndExitToLobbyHandler() {
      var _this3 = this;

      fetch("/users/removeGame", {
        method: "POST",
        credentials: "include"
      }).then(function (response) {
        if (!response.ok) {
          throw response;
        }
        return response;
      }).then(function () {
        _this3.handleGoToLobbyButton();
      });
    }
  }, {
    key: "exitToLobbyHandler",
    value: function exitToLobbyHandler() {
      var _this4 = this;

      fetch("/users/exit", { method: "GET", credentials: "include" }).then(function (response) {
        if (!response.ok) {
          console.log("failed to logout user " + _this4.state.currentUser.name + " ", response);
        }
        _this4.handleGoToLobbyButton();
      });
    }
  }, {
    key: "handleGoToLobbyButton",
    value: function handleGoToLobbyButton() {
      var currentRoomName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this.setState(function () {
        return {
          currentRoomName: currentRoomName,
          showGame: false,
          showLobby: true,
          showLogin: false,
          showGameSummary: false
        };
      });
    }
  }, {
    key: "winExitToLobbyHandler",
    value: function winExitToLobbyHandler() {
      var _this5 = this;

      fetch("/users/winExit", { method: "GET", credentials: "include" }).then(function (response) {
        if (!response.ok) {
          console.log("failed to logout user " + _this5.state.currentUser.name + " ", response);
        }
        _this5.setState(function () {
          return {
            showGame: false,
            showLobby: true,
            showLogin: false,
            showGameSummary: false
          };
        });
      });
    }
  }, {
    key: "logoutHandler",
    value: function logoutHandler() {
      var _this6 = this;

      fetch("/users/logout", { method: "GET", credentials: "include" }).then(function (response) {
        if (!response.ok) {
          console.log("failed to logout user " + _this6.state.currentUser.name + " ", response);
        }
        _this6.setState(function () {
          return {
            currentUser: { name: "" },
            showLogin: true,
            showGameSummary: false
          };
        });
      });
    }
  }, {
    key: "handleGameDone",
    value: function handleGameDone(currTime, usersRoomData, win, lost) {
      var _this7 = this;

      this.setState(function () {
        return {
          currentRoomName: _this7.state.currentRoomName,
          showLobby: false,
          showGame: false,
          showGameSummary: true,
          usersRoomData: usersRoomData,
          usersStats: usersRoomData.names,
          currentTime: currTime,
          winName: win,
          lostName: lost
        };
      });
    }
  }, {
    key: "handleSucceedCreateNewRoom",
    value: function handleSucceedCreateNewRoom(currentRoomName) {
      this.setState(function () {
        return {
          currentRoomName: currentRoomName,
          showLobby: true,
          showGameSummary: false
        };
      });
    }
  }, {
    key: "handleSucceedJoinToRoom",
    value: function handleSucceedJoinToRoom(currentRoomName) {
      this.setState(function () {
        return {
          currentRoomName: currentRoomName,
          showLobby: false,
          showGame: true,
          showGameSummary: false
        };
      });
    }
  }, {
    key: "handleIsCurrUserInRoom",
    value: function handleIsCurrUserInRoom() {
      this.setState(function () {
        return { showGame: false, showLobby: true };
      });
    }
  }, {
    key: "handleCreateRoomError",
    value: function handleCreateRoomError() {
      console.error("create new room failed");
      this.setState(function () {
        return { showLobby: true };
      });
    }
  }]);

  return BaseContainer;
}(_react2.default.Component);

exports.default = BaseContainer;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserData = function UserData(i_UserName) {
  _classCallCheck(this, UserData);

  this.name = i_UserName;
};

var LoginModal = function (_React$Component) {
  _inherits(LoginModal, _React$Component);

  function LoginModal(props) {
    _classCallCheck(this, LoginModal);

    var _this = _possibleConstructorReturn(this, (LoginModal.__proto__ || Object.getPrototypeOf(LoginModal)).call(this, props));

    _this.state = {
      errMessage: ""
    };

    _this.handleLogin = _this.handleLogin.bind(_this);
    return _this;
  }

  _createClass(LoginModal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "login-page-wrapper" },
        _react2.default.createElement(
          "div",
          { className: "row justify-content-center" },
          _react2.default.createElement(
            "h1",
            { className: "display-4" },
            "Domino multiplayer"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row mt-3 justify-content-center" },
          _react2.default.createElement(
            "form",
            { className: "form-group", onSubmit: this.handleLogin },
            _react2.default.createElement("input", { type: "text", className: "username-input  form-control", placeholder: "User Name", name: "userName" }),
            _react2.default.createElement("input", { className: "submit-btn btn btn-success", type: "submit", value: "Login" })
          )
        ),
        this.renderErrorMessage()
      );
    }
  }, {
    key: "renderErrorMessage",
    value: function renderErrorMessage() {
      if (this.state.errMessage) {
        return _react2.default.createElement(
          "div",
          { className: "login-error-message" },
          this.state.errMessage
        );
      }
      return null;
    }
  }, {
    key: "handleLogin",
    value: function handleLogin(e) {
      var _this2 = this;

      e.preventDefault();
      var userName = e.target.elements.userName.value;
      var userObj = new UserData(userName);
      console.log("handleLogin: userObj" + JSON.stringify(userObj));
      if (userName === "") {
        this.setState(function () {
          return {
            errMessage: "You must to insert name!"
          };
        });
      } else {
        fetch("/users/addUser", {
          method: "POST",
          body: JSON.stringify(userObj),
          credentials: "include"
        }).then(function (response) {
          if (response.ok) {
            _this2.setState(function () {
              return { errMessage: "" };
            });
            _this2.props.loginSuccessHandler();
          } else {
            if (response.status === 403) {
              _this2.setState(function () {
                return {
                  errMessage: "User name already exist, please try another one"
                };
              });
            }
            _this2.props.loginErrorHandler();
          }
        });

        return false;
      }
    }
  }]);

  return LoginModal;
}(_react2.default.Component);

exports.default = LoginModal;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_React$Component) {
  _inherits(UsersList, _React$Component);

  function UsersList(props) {
    _classCallCheck(this, UsersList);

    var _this = _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).call(this, props));

    _this.state = {
      usersList: {}
    };
    _this.getUserList = _this.getUserList.bind(_this);
    _this.getUserListWrapper = _this.getUserListWrapper.bind(_this);

    _this._isMounted = false;
    return _this;
  }

  _createClass(UsersList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;

      if (this._isMounted === true) this.getUserList();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      this._isMounted = false;
      if (this.timeoutId) {
        (function () {
          clearTimeout(_this2.timeoutId);
        })();
      }
    }
  }, {
    key: "getUserListWrapper",
    value: function getUserListWrapper() {
      this.getUserList();
    }
  }, {
    key: "getUserList",
    value: function getUserList() {
      var _this3 = this;

      var interval = 1000;

      if (this.props.fetchToggle) {
        return fetch("/users/allUsers", { method: "GET", credentials: "include" }).then(function (response) {
          if (!response.ok) {
            throw response;
          }

          _this3.timeoutId = setTimeout(_this3.getUserListWrapper, interval);
          return response.json();
        }).then(function (usersList) {
          if (_this3._isMounted) _this3.setState(function () {
            return { usersList: usersList };
          });
        }).catch(function (err) {
          throw err;
        });
      } else {
        this.timeoutId = setTimeout(this.getUserListWrapper, interval);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        "div",
        { key: "usersList-Wrapper" },
        _react2.default.createElement(
          "h2",
          { key: "usersList-title" },
          "users List:"
        ),
        _react2.default.createElement(
          "ul",
          { key: "usersList-ul" },
          Object.keys(this.state.usersList).map(function (id, index) {
            return _react2.default.createElement(
              "li",
              { key: JSON.parse(_this4.state.usersList[id]).name + index },
              JSON.parse(_this4.state.usersList[id]).name
            );
          })
        )
      );
    }
  }]);

  return UsersList;
}(_react2.default.Component);

exports.default = UsersList;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GameObjList = __webpack_require__(32);

var _GameObjList2 = _interopRequireDefault(_GameObjList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamesList = function (_React$Component) {
  _inherits(GamesList, _React$Component);

  function GamesList(props) {
    _classCallCheck(this, GamesList);

    var _this = _possibleConstructorReturn(this, (GamesList.__proto__ || Object.getPrototypeOf(GamesList)).call(this, props));

    _this.state = {
      gamesList: {}
    };
    _this.getGamesList = _this.getGamesList.bind(_this);
    _this.getGamesListWrapper = _this.getGamesListWrapper.bind(_this);
    _this._isMounted = false;
    return _this;
  }

  _createClass(GamesList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      if (this._isMounted === true) this.getGamesList();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
    }
  }, {
    key: "getGamesListWrapper",
    value: function getGamesListWrapper() {
      this.getGamesList();
    }
  }, {
    key: "getGamesList",
    value: function getGamesList() {
      var _this2 = this;

      var interval = 1000;
      if (this.props.fetchToggle) {
        return fetch("/games/allGames", { method: "GET", credentials: "include" }).then(function (response) {
          if (!response.ok) {
            throw response;
          }
          _this2.timeoutId = setTimeout(_this2.getGamesListWrapper, interval);

          return response.json();
        }).then(function (gamesList) {
          if (_this2._isMounted) _this2.setState(function () {
            return { gamesList: JSON.parse(gamesList) };
          });
        }).catch(function (err) {
          throw err;
        });
      } else {
        this.timeoutId = setTimeout(this.getGamesListWrapper, interval);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        "div",
        { key: "gamesList-wrapper", className: "gamesList-wrapper" },
        _react2.default.createElement(
          "h2",
          { key: "gamesList-title" },
          "Games List:"
        ),
        _react2.default.createElement(
          "ul",
          null,
          Object.keys(this.state.gamesList).map(function (id, index) {
            return _react2.default.createElement(_GameObjList2.default, {
              key: "key" + index,
              handleJoinToGame: _this3.props.handleJoinToGame,
              data: _this3.state.gamesList[id],
              name: _this3.props.name
            });
          })
        )
      );
    }
  }]);

  return GamesList;
}(_react2.default.Component);

exports.default = GamesList;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameObjList = function (_React$Component) {
  _inherits(GameObjList, _React$Component);

  function GameObjList(props) {
    _classCallCheck(this, GameObjList);

    var _this = _possibleConstructorReturn(this, (GameObjList.__proto__ || Object.getPrototypeOf(GameObjList)).call(this, props));

    _this.state = {
      data: props.data,
      gameName: props.data.gameName,
      roomId: props.data.id,
      isGameStart: false
    };
    _this.handleRoomClick = _this.handleRoomClick.bind(_this);
    return _this;
  }

  _createClass(GameObjList, [{
    key: "render",
    value: function render() {
      var validRoomStyle = {
        backgroundColor: "green"
      };

      var invalidRoomStyle = {
        backgroundColor: "red"
      };
      var style = void 0;
      if (this.props.data.numberOfSubscribes === this.props.data.numPlayerToStart) style = invalidRoomStyle;else style = validRoomStyle;

      return _react2.default.createElement(
        "p",
        { style: style, onClick: this.handleRoomClick },
        "room name: ",
        this.props.data.gameName,
        " || opened by:",
        " ",
        this.props.data.hostName,
        " || subscribes:",
        " ",
        this.props.data.numberOfSubscribes,
        "/",
        this.props.data.numPlayerToStart
      );
    }
  }, {
    key: "handleRoomClick",
    value: function handleRoomClick(e) {
      e.preventDefault();

      if (this.props.data.numberOfSubscribes < this.props.data.numPlayerToStart) {
        this.addCurrUserToThisRoom();
        this.props.handleJoinToGame(this.state.gameName);
      }
    }
  }, {
    key: "addCurrUserToThisRoom",
    value: function addCurrUserToThisRoom() {
      var _this2 = this;

      fetch("/games/addUser", {
        method: "POST",
        body: JSON.stringify({
          roomId: this.state.roomId,
          gameName: this.state.gameName,
          name: this.props.name
        }),
        credentials: "include"
      }).then(function (response) {
        if (!response.ok) {
          if (response.status === 403) {
            _this2.setState(function () {
              return {
                errMessage: "Unable to add the user, to the room."
              };
            });
          }
        }
      });
    }
  }]);

  return GameObjList;
}(_react2.default.Component);

exports.default = GameObjList;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _os = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameData = function GameData(i_HostName, i_HostId, i_GameName, i_NumPlayerToStart) {
  _classCallCheck(this, GameData);

  this.id = i_HostId;
  this.gameName = i_GameName;
  this.numPlayerToStart = i_NumPlayerToStart;
  this.numberOfSubscribes = 0;
  this.isGameStart = false;
  this.subscribesList = new Array(i_NumPlayerToStart);
  this.subscribesList[0] = i_HostId;
  this.hostName = i_HostName;
};

var NewGameModal = function (_React$Component) {
  _inherits(NewGameModal, _React$Component);

  function NewGameModal(props) {
    _classCallCheck(this, NewGameModal);

    var _this = _possibleConstructorReturn(this, (NewGameModal.__proto__ || Object.getPrototypeOf(NewGameModal)).call(this, props));

    _this.state = {
      errMessage: "",
      hostName: props.currentUser.name
    };

    _this.handleGameRoomCreator = _this.handleGameRoomCreator.bind(_this);
    return _this;
  }

  _createClass(NewGameModal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "new-game-div" },
        _react2.default.createElement(
          "form",
          {
            className: "new-game-wrapper",
            onSubmit: this.handleGameRoomCreator
          },
          _react2.default.createElement(
            "label",
            { className: "newGame-input-label", htmlFor: "userName" },
            "room name:",
            " "
          ),
          _react2.default.createElement("input", { className: "newGame-input", name: "gameName" }),
          _react2.default.createElement(
            "label",
            { className: "newGame-input-label", htmlFor: "userName" },
            "num of players:",
            " "
          ),
          _react2.default.createElement(
            "p",
            null,
            "Amount of members:"
          ),
          _react2.default.createElement(
            "label",
            null,
            " ",
            _react2.default.createElement("input", {
              type: "radio",
              className: "newGame-input",
              name: "numOfPlayers",
              value: "2",
              id: "r1",
              defaultChecked: true
            }),
            "2"
          ),
          _react2.default.createElement(
            "label",
            null,
            " ",
            _react2.default.createElement("input", {
              type: "radio",
              className: "newGame-input",
              name: "numOfPlayers",
              value: "3",
              id: "r2"
            }),
            "3"
          ),
          _react2.default.createElement("input", { className: "btn btn-outline-dark", type: "submit", value: "confirm" })
        ),
        this.renderErrorMessage()
      );
    }
  }, {
    key: "renderErrorMessage",
    value: function renderErrorMessage() {
      if (this.state.errMessage) {
        return _react2.default.createElement(
          "div",
          { className: "login-error-message" },
          this.state.errMessage
        );
      }
      return null;
    }
  }, {
    key: "handleGameRoomCreator",
    value: function handleGameRoomCreator(e) {
      var _this2 = this;

      e.preventDefault();
      var gameName = e.target.elements.gameName.value;
      var numOfPlayers = e.target.elements.numOfPlayers.value;
      var gameObj = new GameData(this.props.currentUser.name, this.props.currentUser.id, gameName, numOfPlayers);
      fetch("/games/addGame", {
        method: "POST",
        body: JSON.stringify(gameObj),
        credentials: "include"
      }).then(function (response) {
        if (!response.ok) {
          if (response.status === 403) {
            _this2.setState(function () {
              return {
                errMessage: " Game name already exist, or you host of other room"
              };
            });
          }
          _this2.props.createNewGameErrorHandler();
        }
      }).then(function () {
        return _this2.props.createNewGameSuccessHandler(gameName);
      });
      return false;
    }
  }]);

  return NewGameModal;
}(_react2.default.Component);

exports.default = NewGameModal;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\User\\Desktop\\development\\Web Development course\\New folder\\domino_multiplayer\\node_modules\\os-browserify\\browser.js'");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Board = __webpack_require__(36);

var _Board2 = _interopRequireDefault(_Board);

var _Cart = __webpack_require__(68);

var _Cart2 = _interopRequireDefault(_Cart);

var _Timer = __webpack_require__(69);

var _Timer2 = _interopRequireDefault(_Timer);

var _Stats = __webpack_require__(70);

var _Stats2 = _interopRequireDefault(_Stats);

__webpack_require__(9);

__webpack_require__(7);

__webpack_require__(8);

var _ChatContainer = __webpack_require__(72);

var _ChatContainer2 = _interopRequireDefault(_ChatContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Manager = __webpack_require__(6);


var getInitialState = function getInitialState() {
  var initialBoard = Manager.setInitialBoard(57);
  var initialValidLocation = Manager.createEmptyValidLocations();
  var initialState = {
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

var Game = function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game(props) {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

    _this.state = getInitialState();

    _this.getGameDataObjToSetState = _this.getGameDataObjToSetState.bind(_this);
    _this.getUpdatedStatsObj = _this.getUpdatedStatsObj.bind(_this);
    _this.getGameData = _this.getGameData.bind(_this);
    _this.getUserData = _this.getUserData.bind(_this);
    _this.fetchUsersRoomData = _this.fetchUsersRoomData.bind(_this);
    _this.handleDrawButton = _this.handleDrawButton.bind(_this);
    _this.fetchIsHost = _this.fetchIsHost.bind(_this);
    _this.handleExitButton = _this.handleExitButton.bind(_this);
    _this.handleRemoveButton = _this.handleRemoveButton.bind(_this);
    _this.handleWinExitToLobby = _this.handleWinExitToLobby.bind(_this);
    _this.handleIsCurrUserInRoom = _this.handleIsCurrUserInRoom.bind(_this);
    _this.fetchCart = _this.fetchCart.bind(_this);
    _this.isTheFirstTurn = _this.isTheFirstTurn.bind(_this);
    _this.fetchPostStats = _this.fetchPostStats.bind(_this);
    _this.isCartEmpty = _this.isCartEmpty.bind(_this);
    _this.handleResetGame = _this.handleResetGame.bind(_this);
    _this.isExistPieceForValidSquares = _this.isExistPieceForValidSquares.bind(_this);
    _this.fetchNextTurn = _this.fetchNextTurn.bind(_this);
    _this.getTurnDuration = _this.getTurnDuration.bind(_this);
    _this.cartEmptyFlag = false;
    _this.currentTime = { minutes: 0, seconds: 0 };
    _this.lastPieceTime = { minutes: 0, seconds: 0 };
    _this.isTimerResetNeeded = false;
    _this._isMounted = false;
    _this.isCurrentUserGotCart = false;
    _this.isUserUpdatedStats = false;
    return _this;
  }

  _createClass(Game, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var drawButton = _react2.default.createElement(
        "button",
        { className: "btn btn-outline-dark", onClick: this.handleDrawButton },
        " ",
        "Draw"
      );
      var removeButton = this.createRemoveButton();
      var exitButton = this.createExitButton();
      var obj = this.createGameSentences();
      var gameStartSentence = obj.gameStartSentence;
      var gameSentence = obj.gameSentence;
      var gameTurnsSentence = obj.gameTurnsSentence;

      return _react2.default.createElement(
        "div",
        { key: "homeContainer", id: "homeContainer" },
        _react2.default.createElement(
          "div",
          { key: "user-info-area-in-game", className: "user-info-area" },
          "Hello ",
          this.props.name,
          exitButton,
          removeButton
        ),
        _react2.default.createElement(
          "div",
          { id: "gameAndDataFlex" },
          _react2.default.createElement(
            "div",
            { id: "roomData" },
            _react2.default.createElement(
              "p",
              { className: "roomText", key: "game-room-name-title-in-game" },
              "game room name:",
              this.props.currentRoomName
            ),
            _react2.default.createElement(
              "p",
              { className: "roomText", key: "game-room-gameUsersList" },
              "users in room:"
            ),
            _react2.default.createElement(
              "ul",
              { key: "gameUsersList" },
              Object.keys(this.state.usersNamesInGame).map(function (id, index) {
                return _react2.default.createElement(
                  "li",
                  { key: _this2.state.usersNamesInGame[id].name + index },
                  _this2.state.usersNamesInGame[id].name
                );
              })
            ),
            _react2.default.createElement(_ChatContainer2.default, {
              isUserConnected: !this.state.isGameDone,
              key: "ChatContainer-lobby"
            })
          ),
          _react2.default.createElement(
            "div",
            { id: "gameFrame" },
            _react2.default.createElement(
              "div",
              { id: "statsFrame" },
              gameStartSentence,
              _react2.default.createElement(_Timer2.default, {
                id: "timer",
                sendCurrentTime: function sendCurrentTime(m, s) {
                  return _this2.saveCurrentTime(m, s);
                },
                isResetNeeded: this.isTimerResetNeeded,
                isGameStarted: this.state.isGameStarted,
                isGameDone: this.state.isGameDone
              }),
              _react2.default.createElement(_Stats2.default, {
                id: "statistics",
                currentScore: this.state.currentScore,
                turn: this.state.turn,
                withdrawals: this.state.withdrawals,
                average: this.state.average
              })
            ),
            _react2.default.createElement(
              "div",
              { id: "boardFrame" },
              _react2.default.createElement(_Board2.default, {
                cells: this.state.boardMap,
                onClick: function onClick(i, j) {
                  return _this2.handleBoardClick(i, j);
                }
              })
            ),
            _react2.default.createElement(
              "div",
              { id: "cartFrame" },
              _react2.default.createElement(_Cart2.default, {
                id: "cartStyle",
                cart: this.state.cartMap,
                onClick: function onClick(i, value) {
                  return _this2.handleCartClick(i, value);
                }
              })
            ),
            drawButton,
            gameTurnsSentence,
            gameSentence
          )
        )
      );
    }
  }, {
    key: "isExistPieceForValidSquares",
    value: function isExistPieceForValidSquares(cartMap) {
      var isExist = false;
      var cards = new Array(7);

      if (this.state.isGameStarted) {
        for (var i = 0; i < cartMap.length; i++) {
          if (cartMap[i]) {
            cards[cartMap[i].side1] = true;
            cards[cartMap[i].side2] = true;
          }
        }
        for (var j = 0; j < 7; j++) {
          var num = this.state.validLocationsArray[j].length;
          if (cards[j] && num > 0) {
            isExist = true;
            break;
          }
        }
      }

      return isExist;
    }
  }, {
    key: "createExitButton",
    value: function createExitButton() {
      var exitButton = null;
      if (!this.state.isAllPlayersInRoom || this.state.isGameDone) {
        exitButton = _react2.default.createElement(
          "button",
          {
            key: "exit",
            className: "logout btn btn-outline-dark",
            onClick: this.handleExitButton
          },
          "exit"
        );
      } else if (!this.state.isGameDone && this.state.isUserDone && this.state.isWin) {
        exitButton = _react2.default.createElement(
          "button",
          {
            key: "exit",
            className: "logout btn btn-outline-dark",
            onClick: this.handleWinExitToLobby
          },
          "exit"
        );
      }
      return exitButton;
    }
  }, {
    key: "createRemoveButton",
    value: function createRemoveButton() {
      var removeButton = null;
      if (this.state.isHost && (this.state.numberOfSubscribes === 1 || this.state.isGameDone)) {
        removeButton = _react2.default.createElement(
          "button",
          {
            key: "exitAndRemove",
            className: "logout btn btn-outline-dark",
            onClick: this.handleRemoveButton
          },
          "remove game"
        );
      }
      return removeButton;
    }
  }, {
    key: "createGameSentences",
    value: function createGameSentences() {
      var gameStartSentence = null;
      var gameSentence = null;
      var gameTurnsSentence = null;

      if (!this.state.isGameDone && this.state.isGameStarted) {
        if (this.state.turn === 0) {
          gameStartSentence = _react2.default.createElement(
            "p",
            null,
            "the game started!!! "
          );
        } else {
          gameStartSentence = null;
        }

        if (!this.state.isMyTurn) {
          gameTurnsSentence = _react2.default.createElement(
            "p",
            null,
            "it's ",
            this.state.currentPlayerName,
            " turn "
          );
        } else {
          gameTurnsSentence = _react2.default.createElement(
            "p",
            null,
            "it's your turn! "
          );
        }
      }

      if (!this.state.isAllPlayersInRoom) {
        gameTurnsSentence = _react2.default.createElement(
          "p",
          null,
          "we waiting for more players "
        );
      }

      if (this.state.isGameStarted) {
        if (this.state.isUserDone && this.state.isWin) {
          gameSentence = _react2.default.createElement(
            "p",
            null,
            "YOU WIN!!!"
          );
        } else if (this.state.isGameDone && this.state.isLost) {
          gameSentence = _react2.default.createElement(
            "p",
            null,
            "YOU LOST:("
          );
        }
      }

      return {
        gameStartSentence: gameStartSentence,
        gameTurnsSentence: gameTurnsSentence,
        gameSentence: gameSentence
      };
    }
  }, {
    key: "isTheFirstTurn",
    value: function isTheFirstTurn() {
      return this.state.boardMap[28][28].valid;
    }
  }, {
    key: "getTurnDuration",
    value: function getTurnDuration() {
      var turnLength = {
        minutes: this.currentTime.minutes - this.lastPieceTime.minutes,
        seconds: this.currentTime.seconds - this.lastPieceTime.seconds
      };

      return turnLength;
    }
  }, {
    key: "saveCurrentTime",
    value: function saveCurrentTime(m, s) {
      this.currentTime = { minutes: m, seconds: s };
    }
  }, {
    key: "handleExitButton",
    value: function handleExitButton() {
      var _this3 = this;

      this.setState(function () {
        return { isGameStarted: false, isGameDone: true };
      }, function () {
        _this3.props.exitToLobbyHandler();
      });
    }
  }, {
    key: "handleWinExitToLobby",
    value: function handleWinExitToLobby() {
      var _this4 = this;

      this.setState(function () {
        return { isGameStarted: false, isGameDone: true };
      }, function () {
        _this4.props.winExitToLobbyHandler();
      });
    }
  }, {
    key: "handleRemoveButton",
    value: function handleRemoveButton() {
      var _this5 = this;

      this.setState(function () {
        return { isGameStarted: false, isGameDone: true };
      }, function () {
        _this5.props.removeAndExitHandler();
      });
    }
  }, {
    key: "handleDrawButton",
    value: function handleDrawButton() {
      var _this6 = this;

      if (this.state.isMyTurn && this.state.isGameStarted) {
        return fetch("/games/getCard", {
          method: "GET",
          credentials: "include"
        }).then(function (response) {
          if (!response.ok) {
            throw response;
          }
          return response.json();
        }).then(function (domino) {
          _this6.setState(function (prevState) {
            var cartMap = [].concat(_toConsumableArray(prevState.cartMap));
            var _isExistPiece = true;
            var newWithdrawals = prevState.withdrawals + 1;
            var newTurn = prevState.turn + 1;

            var isUserDone = false;
            if (JSON.parse(domino).card !== null) {
              cartMap.push(JSON.parse(domino).card);
            } else if (!_this6.isTheFirstTurn() && !_this6.isExistPieceForValidSquares(cartMap) && JSON.parse(domino).card === null) {
              _isExistPiece = false;
            }
            _this6.isMoveExistChanged = false;

            if (prevState.isMoveExist !== _isExistPiece) {
              _this6.isMoveExistChanged = true;
            }

            console.log("isMoveExistChanged: " + _this6.isMoveExistChanged);

            return {
              withdrawals: newWithdrawals,
              cartMap: cartMap,
              isUserDone: isUserDone,
              turn: newTurn
            };
          });
        }).then(function () {
          _this6.fetchPostStats();
        }).then(function () {
          _this6.fetchNextTurn();
        });
      }
    }
  }, {
    key: "fetchNextTurn",
    value: function fetchNextTurn() {
      return fetch("/games/moveToNextTurn", {
        method: "POST",
        credentials: "include"
      }).then(function (response) {
        if (!response.ok) {
          throw response;
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;

      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      if (this.timeoutId2) {
        clearTimeout(this.timeoutId2);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      if (this._isMounted) {
        this.getGameData();
        this.fetchUsersRoomData();
        this.fetchIsHost();
      }
    }
  }, {
    key: "fetchCart",
    value: function fetchCart() {
      var _this7 = this;

      return fetch("/games/getCart", {
        method: "GET",
        credentials: "include"
      }).then(function (response) {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      }).then(function (cart) {
        _this7.setState({ cartMap: JSON.parse(cart).cart });
      });
    }
  }, {
    key: "getUserData",
    value: function getUserData() {
      var _this8 = this;

      var interval = 2000;
      if (!this.state.isGameDone) {
        return fetch("/games/userData", { method: "GET", credentials: "include" }).then(function (response) {
          if (!response.ok) {
            throw response;
          }
          _this8.timeoutId5 = setTimeout(_this8.getUserData, interval);
          return response.json();
        }).then(function (userData) {
          var _isGameStarted = _this8.state.isGameStarted;
          var _isGameDone = _this8.state.isGameDone;
          var isCurrUserInRoom = JSON.parse(userData.roomId).id !== "";
          if (!isCurrUserInRoom) {
            _isGameStarted = false;
            _isGameDone = true;
          }

          _this8.setState(function () {
            return {
              isMyTurn: userData.isMyTurn,
              isGameStarted: _isGameStarted,
              isGameDone: _isGameDone,
              currentPlayerName: userData.currentPlayerName
            };
          });

          if (!isCurrUserInRoom) {
            _this8.props.handleIsCurrUserInRoom();
          }
        }).catch(function (err) {
          throw err;
        });
      }
    }
  }, {
    key: "handleIsCurrUserInRoom",
    value: function handleIsCurrUserInRoom() {
      this.setState(function () {
        return {
          isGameStarted: false,
          isGameDone: true
        };
      });
      this.props.handleIsCurrUserInRoom();
    }
  }, {
    key: "fetchIsHost",
    value: function fetchIsHost() {
      var _this9 = this;

      return fetch("/games/isHost", {
        method: "GET",
        credentials: "include"
      }).then(function (response) {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      }).then(function (isUserHost) {
        _this9.setState(function () {
          return { isHost: JSON.parse(isUserHost) };
        });
      });
    }
  }, {
    key: "getGameData",
    value: function getGameData() {
      var _this10 = this;

      var interval = 2000;
      if (!this.state.isGameDone) {
        return fetch("/games/myRoomData", {
          method: "GET",
          credentials: "include"
        }).then(function (response) {
          if (!response.ok) {
            throw response;
          }
          _this10.timeoutId2 = setTimeout(_this10.getGameData, interval);
          return response.json();
        }).then(function (serverOutput) {

          var _gameData = JSON.parse(serverOutput);
          var isCurrUserInRoom = JSON.parse(_gameData.userData.roomId).id !== "";
          var updatedStatsObj = _this10.getUpdatedStatsObj(_gameData);
          var gameDataObjToSetState = _this10.getGameDataObjToSetState(_gameData);
          var newState = Object.assign(updatedStatsObj, gameDataObjToSetState);

          _this10.setState(function () {
            return newState;
          });
          if (!isCurrUserInRoom) {
            _this10.props.handleIsCurrUserInRoom();
          }
        }).then(function () {
          if (_this10.state.isGameDone) {
            (function () {
              return _this10.fetchAmIWinOrLost();
            })();
          }
        });;
      }
    }
  }, {
    key: "getUpdatedStatsObj",
    value: function getUpdatedStatsObj(_gameData) {
      var numOfPieceInStack = _gameData.numOfPiece;
      var _isGameDone = this.state.isGameDone;
      var _isGameStarted = this.state.isGameStarted;
      var _isMoveExist = true;
      var isCurrUserInRoom = JSON.parse(_gameData.userData.roomId).id !== "";

      if (!this.isExistPieceForValidSquares([].concat(_toConsumableArray(this.state.cartMap))) && numOfPieceInStack === 0 && !this.isTheFirstTurn()) {
        _isMoveExist = false;
      }

      if (this.state.isGameStarted) {
        _isGameDone = _gameData.isGameDone;
      }
      if (!isCurrUserInRoom) {
        _isGameStarted = false;
        _isGameDone = true;
      }

      return {
        isGameStarted: _isGameStarted,
        isGameDone: _isGameDone,
        isMoveExist: _isMoveExist
      };
    }
  }, {
    key: "getGameDataObjToSetState",
    value: function getGameDataObjToSetState(_gameData) {
      return {
        gameData: _gameData,
        boardMap: _gameData.boardMap,
        validLocationsArray: _gameData.validLocationsArray,
        numOfPiece: _gameData.numOfPiece,
        isMyTurn: _gameData.userData.isMyTurn,
        currentPlayerName: _gameData.userData.currentPlayerName
      };
    }
  }, {
    key: "fetchUsersRoomData",
    value: function fetchUsersRoomData() {
      var _this11 = this;

      var interval = 2000;
      if (this.state.isGameDone || !this.state.isGameStarted) {
        return fetch("/games/getUsersRoomData", {
          method: "GET",
          credentials: "include"
        }).then(function (response) {
          if (!response.ok) {
            throw response;
          }
          if (!_this11.state.isGameDone && !_this11.state.isGameStarted) _this11.timeoutId2 = setTimeout(_this11.fetchUsersRoomData, interval);

          return response.json();
        }).then(function (usersRoomData) {
          _this11.setState(function () {
            return {
              isAllPlayersInRoom: usersRoomData.isAllPlayersIn,
              isGameStarted: usersRoomData.isAllPlayersIn,
              numberOfSubscribes: usersRoomData.numberOfSubscribes,
              usersNamesInGame: [].concat(_toConsumableArray(usersRoomData.names)),
              winName: usersRoomData.winName,
              lostName: usersRoomData.lostName
            };
          });
        }).then(function () {
          if (_this11.state.isGameDone && _this11.state.isGameStarted) _this11.props.sendUsersRoomDataToHome(_this11.currentTime, _this11.state.usersNamesInGame, _this11.state.winName, _this11.state.lostName);

          _this11.handleResetGame();
        });
      }
      if (!this.isCurrentUserGotCart && this.state.isAllPlayersInRoom) {
        this.isCurrentUserGotCart = true;
        this.fetchCart();
      }
    }
  }, {
    key: "handleResetGame",
    value: function handleResetGame() {
      if (this.state.isGameDone && this.state.isLost) {
        return fetch("/games/removeAllUsersAndResetGame", {
          method: "POST",
          credentials: "include"
        }).then(function (response) {
          if (!response.ok) {
            throw response;
          }
        });
      }
    }
  }, {
    key: "fetchPostStats",
    value: function fetchPostStats() {
      var objToPost = {
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
      }).then(function (response) {
        if (!response.ok) {
          throw response;
        }
      });
    }
  }, {
    key: "fetchAmIWinOrLost",
    value: function fetchAmIWinOrLost() {
      var _this12 = this;

      return fetch("/games/amIWinOrLost", {
        method: "GET",
        credentials: "include"
      }).then(function (response) {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      }).then(function (AmIWinOrLost) {
        _this12.setState(function () {
          return {
            isUserDone: true,
            isWin: AmIWinOrLost.win,
            isLost: AmIWinOrLost.lost
          };
        });
      }).then(function () {
        _this12.fetchUsersRoomData();
      });
    }
  }, {
    key: "handleCartClick",
    value: function handleCartClick(indexCart, card) {
      var _this13 = this;

      if (this.state.isGameStarted && this.state.isMyTurn) {
        console.log("clicked" + indexCart);
        this.isTimerResetNeeded = false;
        var boardMap = this.getBoardWithSignsCells([].concat(_toConsumableArray(this.state.boardMap)), card);

        var objToPost = {
          isUpdateValidLocation: false,
          boardMap: boardMap,
          card: card
        };

        fetch("/games/updateValidLocations", {
          method: "POST",
          body: JSON.stringify(objToPost),
          credentials: "include"
        }).then(function (response) {
          if (!response.ok) {
            throw response;
          }
        }).then(function () {
          _this13.setState(function (prevState) {
            var boardMap = _this13.getBoardWithSignsCells([].concat(_toConsumableArray(prevState.boardMap)), card);
            var obj = _this13.getUpdatedCart([].concat(_toConsumableArray(prevState.cartMap)), indexCart);
            var cartMap = obj.cartMap;
            var turn = obj.turn;
            // const withdrawals = 0;
            return {
              boardMap: boardMap,
              cartMap: cartMap,
              selectedCard: { value: card, index: indexCart },
              turn: turn //,
              //  withdrawals: withdrawals
            };
          });
        });
      }
    }
  }, {
    key: "getUpdatedCart",
    value: function getUpdatedCart(cartMap, indexCart) {
      for (var i = 0; i < cartMap.length; i++) {
        if (cartMap[i].valid) cartMap[i].valid = undefined;
      }
      cartMap[indexCart].valid = true;
      var numOfTurnsToAdd = 0;
      return {
        cartMap: cartMap,
        turn: this.state.turn + numOfTurnsToAdd
      };
    }
  }, {
    key: "getBoardWithSignsCells",
    value: function getBoardWithSignsCells(board, card) {
      if (this.state.selectedCard !== null) {
        var prevSelectedCard = this.state.selectedCard["value"];
        this.updateValidCellsInBoard(board, prevSelectedCard, false);
      }
      this.updateValidCellsInBoard(board, card, true);
      return board;
    }
  }, {
    key: "toggleCellValid",
    value: function toggleCellValid(board, row, col, booleanVal) {
      board[row][col].valid = booleanVal;
    }
  }, {
    key: "updateValidCellsInBoard",
    value: function updateValidCellsInBoard(board, card, booleanVal) {
      var side1 = card.side1,
          side2 = card.side2;


      for (var col = 0; col < this.state.validLocationsArray[side1].length; col++) {
        this.toggleCellValid(board, this.state.validLocationsArray[side1][col].i, this.state.validLocationsArray[side1][col].j, booleanVal);
      }

      for (var _col = 0; _col < this.state.validLocationsArray[side2].length; _col++) {
        this.toggleCellValid(board, this.state.validLocationsArray[side2][_col].i, this.state.validLocationsArray[side2][_col].j, booleanVal);
      }
    }
  }, {
    key: "toggleCellValid",
    value: function toggleCellValid(board, row, col, booleanVal) {
      board[row][col].valid = booleanVal;
    }
  }, {
    key: "handleBoardClick",
    value: function handleBoardClick(row, col) {
      this.runMove(row, col);
    }
  }, {
    key: "runMove",
    value: function runMove(row, col) {
      var boardMap = this.state.boardMap;


      if (this.state.selectedCard) {
        var _state$selectedCard$v = this.state.selectedCard["value"],
            side1 = _state$selectedCard$v.side1,
            side2 = _state$selectedCard$v.side2;


        var neighborsObj = this.getNeighborsObj(row, col);
        var card = new Manager.Card(false, side1, side2, true);

        var neighborName = Object.keys(neighborsObj).filter(function (row) {
          return neighborsObj[row] !== null;
        });
        var neighborLocation = neighborsObj[neighborName];

        if (neighborLocation) {
          var piece = boardMap[neighborLocation.row][neighborLocation.col];
          card = this.createPiece(neighborName[0], piece, side1, side2);
        }

        this.locatePieceOnBoard(row, col, card);
      }
    }
  }, {
    key: "getNeighborsObj",
    value: function getNeighborsObj(row, col) {
      var neighborsObj = new Manager.NeighborsObj(this.checkNeighborPiece(row - 1, col), this.checkNeighborPiece(row + 1, col), this.checkNeighborPiece(row, col - 1), this.checkNeighborPiece(row, col + 1));
      return neighborsObj;
    }
  }, {
    key: "checkNeighborPiece",
    value: function checkNeighborPiece(row, col) {
      var boardMap = this.state.boardMap;

      var obj = null;
      if (this.state.selectedCard) {
        var _state$selectedCard$v2 = this.state.selectedCard["value"],
            side1 = _state$selectedCard$v2.side1,
            side2 = _state$selectedCard$v2.side2;


        if (boardMap[row][col].side1 === side1 || boardMap[row][col].side2 === side2 || boardMap[row][col].side1 === side2 || boardMap[row][col].side2 === side1) {
          obj = { row: row, col: col };
        }
      }
      return obj;
    }
  }, {
    key: "createPiece",
    value: function createPiece(neighborName, neighborPiece, side1, side2) {
      var position = this.selectPosition(neighborName, neighborPiece);

      var card = new Manager.Card(false, side1, side2, position);

      if (this.checkPiecePosition(neighborName, neighborPiece, side1, side2)) {
        card = new Manager.Card(false, side2, side1, position);
      }

      return card;
    }
  }, {
    key: "selectPosition",
    value: function selectPosition(neighborName, piece) {
      var position = piece.isLaying;
      if (!position && neighborName === "left" || !position && neighborName === "right" || position && neighborName === "up" || position && neighborName === "down") {
        position = !position;
      }
      return position;
    }
  }, {
    key: "checkPiecePosition",
    value: function checkPiecePosition(neighborName, neighborPiece, side1, side2) {
      return side1 === neighborPiece.side1 && (neighborName === "down" || neighborName === "right") || side2 === neighborPiece.side2 && (neighborName === "up" || neighborName === "left");
    }
  }, {
    key: "locatePieceOnBoard",
    value: function locatePieceOnBoard(row, col, card) {
      var _this14 = this;

      if (card.side1 === card.side2) {
        card.isLaying = !card.isLaying;
      }
      this.updateValidLocationInServer(row, col, card);

      var scoreAddition = card.side1 + card.side2;
      this.isTimerResetNeeded = false;
      var average = this.calculateAverageOfTurn();
      this.setState(function (prevState) {
        var newBoardMap = _this14.getUpdatedBoard([].concat(_toConsumableArray(prevState.boardMap)), card, row, col);

        var newScore = _this14.getUpdatedScore(prevState.currentScore, scoreAddition);
        var newTurn = prevState.turn + 1;
        return {
          boardMap: newBoardMap,
          currentScore: newScore,
          turn: newTurn,
          average: average
        };
      });
    }
  }, {
    key: "calculateAverageOfTurn",
    value: function calculateAverageOfTurn() {
      this.lastPieceTime = this.currentTime;
      var seconds = this.lastPieceTime.minutes * 60 + this.lastPieceTime.seconds;
      var averageInSecondsFormat = seconds / (this.state.turn + 1);
      return Manager.secondsToTime(averageInSecondsFormat);
    }
  }, {
    key: "getUpdatedScore",
    value: function getUpdatedScore(score, addition) {
      score += addition;
      return score;
    }
  }, {
    key: "removePieceFromCart",
    value: function removePieceFromCart() {
      var _this15 = this;

      var _isWin = false;
      var index = this.state.selectedCard.index;

      this.setState(function (prevState) {
        var newCartMap = _this15.getCartMapAfterRemoveCard(index, prevState.cartMap);

        var isEmptyCart = _this15.isCartEmpty();
        var isUserDone = isEmptyCart;
        if (isEmptyCart) {
          isUserDone = isEmptyCart;
          _isWin = true;
        }
        return {
          cartMap: newCartMap,
          isUserDone: isUserDone,
          isWin: _isWin
        };
      }, function () {
        if (_this15.state.isUserDone) _this15.fetchPostStats();
      });
    }
  }, {
    key: "getCartMapAfterRemoveCard",
    value: function getCartMapAfterRemoveCard(index, cartMap) {
      cartMap[index] = new Manager.Card(false);
      return cartMap;
    }
  }, {
    key: "isCartEmpty",
    value: function isCartEmpty() {
      var index = null;
      var isEmpty = false;
      var cartMap = this.state.cartMap;

      if (this.state.selectedCard) {
        index = this.state.selectedCard.index;
        isEmpty = true;
        for (var i = 0; i < cartMap.length; i++) {
          if (i !== index && cartMap[i].side1 !== undefined) {
            isEmpty = false;
          }
        }
      }
      return isEmpty;
    }
  }, {
    key: "getCartAfterAddPiece",
    value: function getCartAfterAddPiece(cart, card, indexCart) {
      card.valid = undefined;
      cart[indexCart] = card;
      return cart;
    }
  }, {
    key: "getUpdatedBoard",
    value: function getUpdatedBoard(board, card, row, col) {
      board[row][col] = card;
      this.updateValidCellsInBoard(board, card, false);
      return board;
    }
  }, {
    key: "updateValidLocationInServer",
    value: function updateValidLocationInServer(row, col, card) {
      var _this16 = this;

      var objToPost = this.updateValidLocationsAndBoard(row, col, card);

      fetch("/games/updateValidLocations", {
        method: "POST",
        body: JSON.stringify(objToPost),
        credentials: "include"
      }).then(function (response) {
        if (!response.ok) {
          throw response;
        }
      }).then(function () {
        if (objToPost.isUpdateValidLocation) _this16.removePieceFromCart();
      });
    }
  }, {
    key: "updateValidLocationsAndBoard",
    value: function updateValidLocationsAndBoard(row, col, card) {
      var isLaying = card.isLaying;

      var isJoker = card.side1 === card.side2;
      var side1Array = new Array(0);
      var side2Array = new Array(0);

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

      var newBoard = this.getUpdatedBoard([].concat(_toConsumableArray(this.state.boardMap)), card, row, col);
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
  }, {
    key: "isEmptyAndNotValid",
    value: function isEmptyAndNotValid(row, col) {
      var boardMap = this.state.boardMap;

      return boardMap[row][col].valid !== true && boardMap[row][col].isLaying === undefined;
    }
  }]);

  return Game;
}(_react2.default.Component);

exports.default = Game;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Piece = __webpack_require__(13);

var _Piece2 = _interopRequireDefault(_Piece);

var _BoardStyle = __webpack_require__(66);

var _BoardStyle2 = _interopRequireDefault(_BoardStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BoardRow = function BoardRow(props) {
  var indexRow = props.indexRow,
      row = props.row;

  return row.map(function (dominoPiece, j) {
    var valid = dominoPiece.valid,
        side1 = dominoPiece.side1,
        side2 = dominoPiece.side2,
        isLaying = dominoPiece.isLaying;


    var ret = null;
    if (!valid && side1 != undefined) ret = _react2.default.createElement(
      "td",
      { key: j },
      _react2.default.createElement(_Piece2.default, { side1: side1, side2: side2, isLaying: isLaying })
    );else if (!valid && side1 === undefined) ret = _react2.default.createElement(
      "td",
      { key: j },
      _react2.default.createElement(_Piece.EmptyPiece, null)
    );else ret = _react2.default.createElement(
      "td",
      { key: j, onClick: function onClick() {
          return props.onClick(indexRow, j);
        } },
      _react2.default.createElement(_Piece.ValidPiece, null)
    );
    return ret;
  });
};

var Board = function Board(props) {
  var cells = props.cells;

  return _react2.default.createElement(
    "table",
    { id: "boardGame" },
    _react2.default.createElement(
      "tbody",
      null,
      cells.map(function (row, i) {
        return _react2.default.createElement(
          "tr",
          { key: i },
          _react2.default.createElement(BoardRow, { indexRow: i, row: row, onClick: props.onClick })
        );
      })
    )
  );
};

exports.default = Board;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./p0_0.svg": 38,
	"./p0_1.svg": 39,
	"./p0_2.svg": 40,
	"./p0_3.svg": 41,
	"./p0_4.svg": 42,
	"./p0_5.svg": 43,
	"./p0_6.svg": 44,
	"./p1_1.svg": 45,
	"./p1_2.svg": 46,
	"./p1_3.svg": 47,
	"./p1_4.svg": 48,
	"./p1_5.svg": 49,
	"./p1_6.svg": 50,
	"./p2_2.svg": 51,
	"./p2_3.svg": 52,
	"./p2_4.svg": 53,
	"./p2_5.svg": 54,
	"./p2_6.svg": 55,
	"./p3_3.svg": 56,
	"./p3_4.svg": 57,
	"./p3_5.svg": 58,
	"./p3_6.svg": 59,
	"./p4_4.svg": 60,
	"./p4_5.svg": 61,
	"./p4_6.svg": 62,
	"./p5_5.svg": 63,
	"./p5_6.svg": 64,
	"./p6_6.svg": 65
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 37;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8893a64b21a9f38fd2644f269c219c7f.svg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7f12d32e07e57a5e51f7b7a0874821b8.svg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d6af97f6404ccac7f4e0a19a857eb93a.svg";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e00bf13758f6f7f5940e9068d321049a.svg";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7e5aacd20fc1e9c3349b3fa03becf4e4.svg";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3760405cd8a5f42bb10367a4f6a48d15.svg";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4bc2261c6cc684a9c4c54519709924dd.svg";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fd73b596d077ec741d8fc754c4936794.svg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b95b4913b48f3082b52a571ce2f1ef3f.svg";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3affb41f701c5a029dd58a75b4869f40.svg";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e84150ab09f595c473402842add83fce.svg";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4bd0a81b5e63fd3a61268de47efe07b6.svg";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8f11cbf82f36b4163d3fea2af35ee9ca.svg";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ccee84a64803ab39591bfb1f508c49b2.svg";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fb4e6d611755623582f9ce6e9a85ae6f.svg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bc2bf838f3f74d7751608738fffb86ea.svg";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ebd88045aca28da1e02fc8f9a624e20a.svg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e4ec75042763b3249f68d592b1a0ab25.svg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "06f8a0b7811b37bd5d6fbc898818616d.svg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d1a08cbb755dd667c406da416fd25c90.svg";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dc53e6ef6d63d3f0f1e1a4f39571e343.svg";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "48da54c8de46285d316865bb807ab996.svg";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "534435f15e68d640c6775fb7cb7cb99f.svg";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "feb1fc31957b0de39415d43df89c2553.svg";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "692aa01598595a63127c0b3e5f7b6e65.svg";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3b28853a224d65063c741bfc1cf0bbe4.svg";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "482238412775299b7d1c4c47d4fa72cf.svg";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5d5b7c235da8be728e1ab44e53f91630.svg";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./BoardStyle.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./BoardStyle.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#boardGame {\r\n  width: 20vw;\r\n  height: 20vw;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Piece = __webpack_require__(13);

var _Piece2 = _interopRequireDefault(_Piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cart = function Cart(props) {
  var cart = props.cart;

  return _react2.default.createElement(
    "table",
    { id: "userCart" },
    _react2.default.createElement(
      "tbody",
      null,
      _react2.default.createElement(
        "tr",
        { key: "row0" },
        cart.map(function (dominoPiece, j) {
          var valid = dominoPiece.valid,
              side1 = dominoPiece.side1,
              side2 = dominoPiece.side2;

          var ret = null;
          if (valid === undefined) {
            ret = _react2.default.createElement(
              "td",
              { key: j, onClick: function onClick() {
                  return props.onClick(j, dominoPiece);
                } },
              _react2.default.createElement(_Piece2.default, { side1: side1, side2: side2, isLaying: false })
            );
          } else if (valid) {
            ret = _react2.default.createElement(
              "td",
              { key: j, onClick: function onClick() {
                  return props.onClick(j, dominoPiece);
                } },
              _react2.default.createElement(_Piece2.default, {
                valid: true,
                side1: side1,
                side2: side2,
                isLaying: false
              })
            );
          } else {
            ret = _react2.default.createElement(
              "td",
              { key: j },
              _react2.default.createElement(_Piece.EmptyPiece, null)
            );
          }
          return ret;
        })
      )
    )
  );
};

exports.default = Cart;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Manager = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Manager = __webpack_require__(6);

var Timer = function (_React$Component) {
  _inherits(Timer, _React$Component);

  function Timer(props) {
    _classCallCheck(this, Timer);

    var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

    _this.state = { time: { minutes: 0, seconds: 0 }, seconds: 0 };
    _this.timer = 0;
    _this.startTimer = _this.startTimer.bind(_this);
    _this.resetTimer = _this.resetTimer.bind(_this);
    _this.stopInterval = _this.stopInterval.bind(_this);
    _this.countUp = _this.countUp.bind(_this);
    _this.displaySpecificTime = _this.displaySpecificTime.bind(_this);
    _this._isMounted = false;
    _this.transferDataToHome = props.sendCurrentTime;
    return _this;
  }

  _createClass(Timer, [{
    key: "stopInterval",
    value: function stopInterval() {
      clearInterval(this.timer);
    }
  }, {
    key: "resetTimer",
    value: function resetTimer() {
      this.stopInterval();
      this.timer = 0;
      this.startTimer({ minutes: 0, seconds: 0 });
      this.setState(function () {
        return { time: { minutes: 0, seconds: 0 }, seconds: 0 };
      });
    }
  }, {
    key: "startTimer",
    value: function startTimer(initialTime) {
      this.timer = initialTime.minutes * 60 + initialTime.seconds;
      this.timer = this.countUp();
    }
  }, {
    key: "displaySpecificTime",
    value: function displaySpecificTime(time) {
      this.setState(function (prevState) {
        return {
          time: time,
          seconds: prevState.seconds
        };
      });
    }
  }, {
    key: "countUp",
    value: function countUp() {
      if (this.props.isGameStarted && !this.props.isGameDone) {
        this.setState(function (prevState) {
          return {
            time: Manager.secondsToTime(prevState.seconds),
            seconds: prevState.seconds + 1
          };
        });
      }
      this.timeoutId = setTimeout(this.countUp, 1000);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isResetNeeded !== this.props.isResetNeeded && this.props.isResetNeeded) {
        this.resetTimer();
      } else if (!this.props.isGameStarted) {
        this.stopInterval();
        if (this.props.timeToDisplay !== prevProps.timeToDisplay) {
          this.displaySpecificTime({
            minutes: this.props.timeToDisplay.minutes,
            seconds: this.props.timeToDisplay.seconds
          });
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;

      if (this._isMounted) {
        this.startTimer({ minutes: 0, seconds: 0 });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.transferDataToHome(this.state.time.minutes, this.state.time.seconds);
      return _react2.default.createElement(
        "div",
        null,
        "minutes: ",
        this.state.time.minutes,
        " secondes: ",
        this.state.time.seconds
      );
    }
  }]);

  return Timer;
}(_react2.default.Component);

exports.default = Timer;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stats = function Stats(props) {
  var turn = props.turn,
      currentScore = props.currentScore,
      average = props.average,
      withdrawals = props.withdrawals;


  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "p",
      null,
      "TURN NUMBER: ",
      turn,
      " || SCORE: ",
      currentScore,
      " || WITHDRAWALS:",
      " ",
      withdrawals,
      " || AVERAGE TIME PER TURN: ",
      average.minutes,
      ":",
      average.seconds
    )
  );
};
exports.default = Stats;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#gameAndDataFlex {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.roomText {\n  width: 29vh;\n  height: 3vh;\n}\n#gameFrame {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  height: 81vh;\n}\n\n#boardFrame {\n  width: 59vw;\n  height: 23vw;\n  overflow: scroll;\n}\n#cartFrame {\n  max-width: 50vw;\n  height: 11vh;\n  width: 50vw;\n  overflow: auto;\n}\n#cartStyle {\n  max-width: 10vw;\n  width: 10vw;\n  height: 3vw;\n}\n\n#statistics {\n  max-width: 10vw;\n  width: 10vw;\n  height: 3vw;\n}\n", ""]);

// exports


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ConversionArea = __webpack_require__(73);

var _ConversionArea2 = _interopRequireDefault(_ConversionArea);

var _ChatInput = __webpack_require__(74);

var _ChatInput2 = _interopRequireDefault(_ChatInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatContainer = function (_React$Component) {
  _inherits(ChatContainer, _React$Component);

  function ChatContainer(props) {
    _classCallCheck(this, ChatContainer);

    return _possibleConstructorReturn(this, (ChatContainer.__proto__ || Object.getPrototypeOf(ChatContainer)).call(this, props));
  }

  _createClass(ChatContainer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { key: "chat-container-in-chat-container", className: "chat-container" },
        _react2.default.createElement(_ConversionArea2.default, {
          isUserConnected: this.props.isUserConnected,
          key: "ConversionArea-chat-container"
        }),
        _react2.default.createElement(_ChatInput2.default, { key: "ChatInput-chat-container" })
      );
    }
  }]);

  return ChatContainer;
}(_react2.default.Component);

exports.default = ChatContainer;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConversionArea = function (_React$Component) {
  _inherits(ConversionArea, _React$Component);

  function ConversionArea(props) {
    _classCallCheck(this, ConversionArea);

    var _this = _possibleConstructorReturn(this, (ConversionArea.__proto__ || Object.getPrototypeOf(ConversionArea)).call(this, props));

    _this.state = {
      content: []
    };
    _this._isMounted = false;
    _this.getChatContent = _this.getChatContent.bind(_this);
    _this.getChatContentWrapper = _this.getChatContentWrapper.bind(_this);
    return _this;
  }

  _createClass(ConversionArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      //console.log(this.props.isUserConnected);
      if (this._isMounted === true) this.getChatContent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      this._isMounted = false;
      if (this.timeoutId) {
        (function () {
          clearTimeout(_this2.timeoutId);
        })();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        {
          key: "converssion-area-wrpper-div",
          className: "converssion-area-wrpper"
        },
        this.state.content.map(function (line, value) {
          return _react2.default.createElement(
            "p",
            { key: value },
            line.user,
            ": ",
            line.text
          );
        })
      );
    }
  }, {
    key: "getChatContentWrapper",
    value: function getChatContentWrapper() {
      this.getChatContent();
    }
  }, {
    key: "getChatContent",
    value: function getChatContent() {
      var _this3 = this;

      var interval = 1000; //TODO: change to 200
      if (this.props.isUserConnected) {
        return fetch("/chat", { method: "GET", credentials: "include" }).then(function (response) {
          if (!response.ok) {
            throw response;
          }
          _this3.timeoutId = setTimeout(_this3.getChatContentWrapper, interval);
          return response.json();
        }).then(function (content) {
          if (_this3._isMounted) _this3.setState(function () {
            return { content: content };
          });
        }).catch(function (err) {
          throw err;
        });
      }
    }
  }]);

  return ConversionArea;
}(_react2.default.Component);

exports.default = ConversionArea;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatInput = function (_React$Component) {
  _inherits(ChatInput, _React$Component);

  function ChatInput(args) {
    var _ref;

    _classCallCheck(this, ChatInput);

    var _this = _possibleConstructorReturn(this, (_ref = ChatInput.__proto__ || Object.getPrototypeOf(ChatInput)).call.apply(_ref, [this].concat(_toConsumableArray(args))));

    _this.state = {
      sendInProgress: false
    };

    _this.sendText = _this.sendText.bind(_this);
    return _this;
  }

  _createClass(ChatInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "form",
        { className: "chat-input-wrapper", onSubmit: this.sendText },
        _react2.default.createElement("input", {
          disabled: this.state.sendInProgress,
          placeholder: "enter text here",
          ref: function ref(input) {
            return _this2.inputElement = input;
          }
        }),
        _react2.default.createElement("input", {
          type: "submit",
          className: "btn btn-outline-dark",
          disabled: this.state.sendInProgress,
          value: "Send"
        })
      );
    }
  }, {
    key: "sendText",
    value: function sendText(e) {
      var _this3 = this;

      e.preventDefault();
      this.setState(function () {
        return { sendInProgress: true };
      });
      var text = this.inputElement.value;
      fetch("/chat", {
        method: "POST",
        body: text,
        credentials: "include"
      }).then(function (response) {
        if (!response.ok) {
          throw response;
        }
        _this3.setState(function () {
          return { sendInProgress: false };
        });
        _this3.inputElement.value = "";
      });
      return false;
    }
  }]);

  return ChatInput;
}(_react2.default.Component);

exports.default = ChatInput;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(9);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Manager = __webpack_require__(6);

var GameSummary = function (_React$Component) {
  _inherits(GameSummary, _React$Component);

  function GameSummary(props) {
    _classCallCheck(this, GameSummary);

    var _this = _possibleConstructorReturn(this, (GameSummary.__proto__ || Object.getPrototypeOf(GameSummary)).call(this, props));

    _this.state = {
      usersRoomData: _this.props.usersRoomData
    };
    _this.handleGoToLobbyButtonWrapper = _this.handleGoToLobbyButtonWrapper.bind(_this);
    return _this;
  }

  _createClass(GameSummary, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var exitButton = _react2.default.createElement(
        "button",
        {
          key: "exit",
          className: "logout btn btn-outline-dark",
          onClick: this.handleGoToLobbyButtonWrapper
        },
        "exit"
      );

      return _react2.default.createElement(
        "div",
        null,
        exitButton,
        _react2.default.createElement(
          "h2",
          { key: "gameSummary-title" },
          "Game Summary:"
        ),
        _react2.default.createElement(
          "h2",
          { key: "winner-title" },
          "THE WINNER IS:",
          this.props.winName,
          " "
        ),
        _react2.default.createElement(
          "h2",
          { key: "lost-title" },
          this.props.lostName,
          " lost the game..."
        ),
        _react2.default.createElement(
          "h2",
          { key: "time-title" },
          "time:",
          this.props.currentTime.minutes,
          ":",
          this.props.currentTime.seconds
        ),
        _react2.default.createElement(
          "ul",
          { key: "gameSummary-ul" },
          Object.keys(this.state.usersRoomData).map(function (id, index) {
            return _react2.default.createElement(
              "li",
              { key: _this2.state.usersRoomData[id].name + index },
              "player: ",
              _this2.state.usersRoomData[id].name,
              _react2.default.createElement("br", null),
              "score: ",
              _this2.state.usersRoomData[id].stats.currentScore,
              " || average time: ",
              _this2.state.usersRoomData[id].stats.average.minutes,
              ":",
              _this2.state.usersRoomData[id].stats.average.seconds,
              " || withdrawals: ",
              _this2.state.usersRoomData[id].stats.withdrawals
            );
          })
        )
      );
    }
  }, {
    key: "handleGoToLobbyButtonWrapper",
    value: function handleGoToLobbyButtonWrapper() {
      this.props.handleGoToLobbyButton(this.state.usersRoomData.currentRoomName);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
    }
  }]);

  return GameSummary;
}(_react2.default.Component);

exports.default = GameSummary;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGUwNTAwYmUxZjllNDZmMDE2ZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9zdHlsZTIuY3NzPzViNDIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvR2FtZVN0eWxlLmNzcz9iMjk3Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BpZWNlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3N0eWxlMi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmFzZUNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9naW5Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlcnNMaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lc0xpc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWVPYmpMaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXdHYW1lTW9kYWwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0JvYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzL3BpZWNlcyBeXFwuXFwvLipcXC5zdmckIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AwXzAuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AwXzEuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AwXzIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AwXzMuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AwXzQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AwXzUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AwXzYuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AxXzEuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AxXzIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AxXzMuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AxXzQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AxXzUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AxXzYuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AyXzIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AyXzMuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AyXzQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AyXzUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AyXzYuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AzXzMuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AzXzQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AzXzUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3AzXzYuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3A0XzQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3A0XzUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3A0XzYuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3A1XzUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3A1XzYuc3ZnIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvcGllY2VzL3A2XzYuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9Cb2FyZFN0eWxlLmNzcz8zMWY0Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9Cb2FyZFN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaW1lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RhdHMuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9HYW1lU3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NoYXRDb250YWluZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnZlcnNpb25BcmVhLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DaGF0SW5wdXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWVTdW1tYXJ5LmpzeCJdLCJuYW1lcyI6WyJEb21pbm9TdGFjayIsInBpZWNlc0Ftb3VudCIsImluZGV4ZXNDYXJkc0JveCIsImNyZWF0ZVNodWZmbGVkQXJyYXkiLCJpbmRleGVzQ2FyZHNCb3hJbmRleCIsImNhcmRzQXJyYXkiLCJjcmVhdGVDYXJkc0FycmF5IiwibnVtYmVyT2ZEcmF3bkZyb21TdGFjayIsImdldE51bU9mV2l0aGRyYXdhbHMiLCJiaW5kIiwiZ2V0TnVtT2ZQaWVjZXMiLCJyZXNldCIsInJldCIsImNhcmRJbmRleCIsInBvcCIsImNvbnNvbGUiLCJsb2ciLCJzaWRlMSIsInNpZGUyIiwic2l6ZSIsImEiLCJBcnJheSIsImkiLCJsZW5ndGgiLCJqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYXJyIiwiYXJySW5kZXgiLCJ2YWxpZCIsInVuZGVmaW5lZCIsImNhcnQiLCJnZXRDYXJkIiwiSlNPTiIsInN0cmluZ2lmeSIsIkNhcmQiLCJpX1ZhbGlkIiwiaV9TaWRlMSIsImlfU2lkZTIiLCJpX0lzTGF5aW5nIiwiaXNMYXlpbmciLCJTdGF0c09iaiIsIndpdGhkcmF3YWxzIiwidHVybnMiLCJzY29yZVRvQWRkIiwidHVybkxlbmd0aCIsImF2ZXJhZ2VUdXJuIiwiYXZlcmFnZVR1cm5JblNlY3NUb0FkZCIsIkdhbWVEYXRhIiwiaV9Ib3N0TmFtZSIsImlfSG9zdElkIiwiaV9HYW1lTmFtZSIsImlfTnVtUGxheWVyVG9TdGFydCIsImlkIiwiZ2FtZU5hbWUiLCJudW1QbGF5ZXJUb1N0YXJ0IiwibnVtYmVyT2ZTdWJzY3JpYmVzIiwiaXNHYW1lU3RhcnQiLCJzdWJzY3JpYmVzTGlzdCIsImhvc3ROYW1lIiwiY3JlYXRlRW1wdHlCb2FyZCIsIm1hdHJpeCIsInNldEluaXRpYWxCb2FyZCIsImJvYXJkIiwibWlkIiwic2Vjb25kc1RvVGltZSIsImRpdmlzb3JfZm9yX21pbnV0ZXMiLCJzZWNzIiwibWludXRlcyIsImRpdmlzb3JfZm9yX3NlY29uZHMiLCJzZWNvbmRzIiwiY2VpbCIsIm9iaiIsInJlbW92ZVJvd0NvbEVsZW1lbnRGcm9tQXJyYXkiLCJyb3ciLCJjb2wiLCJ2YWwiLCJpZHgiLCJzcGxpY2UiLCJnZXRDYXJ0QWZ0ZXJSZW1vdmVQaWVjZSIsImluZGV4Q2FydCIsInJlc3VsdCIsImZpbHRlciIsImVsIiwiY3JlYXRlRW1wdHlWYWxpZExvY2F0aW9ucyIsImNyZWF0ZUNvcHlSb3ciLCJpX1JvdyIsImFycmF5IiwiTmVpZ2hib3JzT2JqIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwibW9kdWxlIiwiZXhwb3J0cyIsIlBpZWNlIiwicHJvcHMiLCJjYXJkSW5DYXJ0U2VsZWN0ZWQiLCJnZXREZWdyZWUiLCJkZWciLCJnZXRJbWFnZU5hbWUiLCJtaW4iLCJtYXgiLCJpbWdOYW1lIiwiaW1hZ2VQYXRoIiwicmVxdWlyZSIsImRlZ3JlZSIsInRyYW5zZm9ybSIsIndpZHRoIiwiaGVpZ2h0Iiwic3R5bGVDb3B5IiwidmFsaWRTdHlsZSIsImNvbnRhaW5lclN0eWxlIiwiRW1wdHlQaWVjZSIsIlZhbGlkUGllY2UiLCJ2YWxpZFBpZWNlUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJzY3JvbGxJbnRvQ2VudGVyIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImlubGluZSIsIkNvbXBvbmVudCIsImltYWdlU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJCYXNlQ29udGFpbmVyIiwic3RhdGUiLCJzaG93TG9naW4iLCJzaG93TG9iYnkiLCJzaG93R2FtZSIsInNob3dHYW1lU3VtbWFyeSIsInVzZXJzUm9vbURhdGEiLCJjdXJyZW50VGltZSIsIndpbk5hbWUiLCJsb3N0TmFtZSIsImN1cnJlbnRVc2VyIiwiY3VycmVudFJvb21OYW1lIiwiX2lzTW91bnRlZCIsImhhbmRsZVN1Y2NlZWRlZExvZ2luIiwiaGFuZGxlTG9naW5FcnJvciIsImhhbmRsZVN1Y2NlZWRDcmVhdGVOZXdSb29tIiwiaGFuZGxlQ3JlYXRlUm9vbUVycm9yIiwiZmV0Y2hVc2VySW5mbyIsImxvZ291dEhhbmRsZXIiLCJyZW5kZXJHYW1lIiwicmVtb3ZlQW5kRXhpdFRvTG9iYnlIYW5kbGVyIiwiaGFuZGxlSXNDdXJyVXNlckluUm9vbSIsImhhbmRsZVN1Y2NlZWRKb2luVG9Sb29tIiwiZXhpdFRvTG9iYnlIYW5kbGVyIiwiaGFuZGxlR29Ub0xvYmJ5QnV0dG9uIiwid2luRXhpdFRvTG9iYnlIYW5kbGVyIiwiaGFuZGxlR2FtZURvbmUiLCJyZW5kZXJMb2JieSIsInJlbmRlckdhbWVTdW1tYXJ5Iiwic2V0U3RhdGUiLCJnZXRVc2VyTmFtZSIsImVycm9yIiwibmFtZSIsImhhbmRsZUFkZFJvb21Ub1VzZXIiLCJ1cGRhdGVNeVJvb21JZCIsInRoZW4iLCJwYXJzZSIsInVzZXJJbmZvIiwiY2F0Y2giLCJlcnIiLCJzdGF0dXMiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJjdXJyVGltZSIsIndpbiIsImxvc3QiLCJ1c2Vyc1N0YXRzIiwibmFtZXMiLCJVc2VyRGF0YSIsImlfVXNlck5hbWUiLCJMb2dpbk1vZGFsIiwiZXJyTWVzc2FnZSIsImhhbmRsZUxvZ2luIiwicmVuZGVyRXJyb3JNZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlck5hbWUiLCJ0YXJnZXQiLCJlbGVtZW50cyIsInZhbHVlIiwidXNlck9iaiIsImJvZHkiLCJsb2dpblN1Y2Nlc3NIYW5kbGVyIiwibG9naW5FcnJvckhhbmRsZXIiLCJVc2Vyc0xpc3QiLCJ1c2Vyc0xpc3QiLCJnZXRVc2VyTGlzdCIsImdldFVzZXJMaXN0V3JhcHBlciIsInRpbWVvdXRJZCIsImNsZWFyVGltZW91dCIsImludGVydmFsIiwiZmV0Y2hUb2dnbGUiLCJzZXRUaW1lb3V0IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImluZGV4IiwiR2FtZXNMaXN0IiwiZ2FtZXNMaXN0IiwiZ2V0R2FtZXNMaXN0IiwiZ2V0R2FtZXNMaXN0V3JhcHBlciIsImhhbmRsZUpvaW5Ub0dhbWUiLCJHYW1lT2JqTGlzdCIsImRhdGEiLCJyb29tSWQiLCJoYW5kbGVSb29tQ2xpY2siLCJ2YWxpZFJvb21TdHlsZSIsImludmFsaWRSb29tU3R5bGUiLCJzdHlsZSIsImFkZEN1cnJVc2VyVG9UaGlzUm9vbSIsIk5ld0dhbWVNb2RhbCIsImhhbmRsZUdhbWVSb29tQ3JlYXRvciIsIm51bU9mUGxheWVycyIsImdhbWVPYmoiLCJjcmVhdGVOZXdHYW1lRXJyb3JIYW5kbGVyIiwiY3JlYXRlTmV3R2FtZVN1Y2Nlc3NIYW5kbGVyIiwiTWFuYWdlciIsImdldEluaXRpYWxTdGF0ZSIsImluaXRpYWxCb2FyZCIsImluaXRpYWxWYWxpZExvY2F0aW9uIiwiaW5pdGlhbFN0YXRlIiwiZ2FtZURhdGEiLCJib2FyZE1hcCIsInZhbGlkTG9jYXRpb25zQXJyYXkiLCJjYXJ0TWFwIiwic2VsZWN0ZWRDYXJkIiwiY3VycmVudFNjb3JlIiwidHVybiIsIm51bU9mUGllY2UiLCJhdmVyYWdlIiwidGltZVRvRGlzcGxheSIsImlzQWxsUGxheWVyc0luUm9vbSIsImlzR2FtZVN0YXJ0ZWQiLCJpc1VzZXJEb25lIiwiaXNHYW1lRG9uZSIsImlzTXlUdXJuIiwiaXNIb3N0IiwidXNlcnNOYW1lc0luR2FtZSIsImN1cnJlbnRQbGF5ZXJOYW1lIiwiaXNXaW4iLCJpc0xvc3QiLCJpc01vdmVFeGlzdCIsIkdhbWUiLCJnZXRHYW1lRGF0YU9ialRvU2V0U3RhdGUiLCJnZXRVcGRhdGVkU3RhdHNPYmoiLCJnZXRHYW1lRGF0YSIsImdldFVzZXJEYXRhIiwiZmV0Y2hVc2Vyc1Jvb21EYXRhIiwiaGFuZGxlRHJhd0J1dHRvbiIsImZldGNoSXNIb3N0IiwiaGFuZGxlRXhpdEJ1dHRvbiIsImhhbmRsZVJlbW92ZUJ1dHRvbiIsImhhbmRsZVdpbkV4aXRUb0xvYmJ5IiwiZmV0Y2hDYXJ0IiwiaXNUaGVGaXJzdFR1cm4iLCJmZXRjaFBvc3RTdGF0cyIsImlzQ2FydEVtcHR5IiwiaGFuZGxlUmVzZXRHYW1lIiwiaXNFeGlzdFBpZWNlRm9yVmFsaWRTcXVhcmVzIiwiZmV0Y2hOZXh0VHVybiIsImdldFR1cm5EdXJhdGlvbiIsImNhcnRFbXB0eUZsYWciLCJsYXN0UGllY2VUaW1lIiwiaXNUaW1lclJlc2V0TmVlZGVkIiwiaXNDdXJyZW50VXNlckdvdENhcnQiLCJpc1VzZXJVcGRhdGVkU3RhdHMiLCJkcmF3QnV0dG9uIiwicmVtb3ZlQnV0dG9uIiwiY3JlYXRlUmVtb3ZlQnV0dG9uIiwiZXhpdEJ1dHRvbiIsImNyZWF0ZUV4aXRCdXR0b24iLCJjcmVhdGVHYW1lU2VudGVuY2VzIiwiZ2FtZVN0YXJ0U2VudGVuY2UiLCJnYW1lU2VudGVuY2UiLCJnYW1lVHVybnNTZW50ZW5jZSIsIm0iLCJzIiwic2F2ZUN1cnJlbnRUaW1lIiwiaGFuZGxlQm9hcmRDbGljayIsImhhbmRsZUNhcnRDbGljayIsImlzRXhpc3QiLCJjYXJkcyIsIm51bSIsInJlbW92ZUFuZEV4aXRIYW5kbGVyIiwicHJldlN0YXRlIiwiX2lzRXhpc3RQaWVjZSIsIm5ld1dpdGhkcmF3YWxzIiwibmV3VHVybiIsImRvbWlubyIsImNhcmQiLCJwdXNoIiwiaXNNb3ZlRXhpc3RDaGFuZ2VkIiwidGltZW91dElkMiIsInRpbWVvdXRJZDUiLCJfaXNHYW1lU3RhcnRlZCIsIl9pc0dhbWVEb25lIiwiaXNDdXJyVXNlckluUm9vbSIsInVzZXJEYXRhIiwiaXNVc2VySG9zdCIsIl9nYW1lRGF0YSIsInNlcnZlck91dHB1dCIsInVwZGF0ZWRTdGF0c09iaiIsImdhbWVEYXRhT2JqVG9TZXRTdGF0ZSIsIm5ld1N0YXRlIiwiYXNzaWduIiwiZmV0Y2hBbUlXaW5Pckxvc3QiLCJudW1PZlBpZWNlSW5TdGFjayIsIl9pc01vdmVFeGlzdCIsImlzQWxsUGxheWVyc0luIiwic2VuZFVzZXJzUm9vbURhdGFUb0hvbWUiLCJvYmpUb1Bvc3QiLCJBbUlXaW5Pckxvc3QiLCJnZXRCb2FyZFdpdGhTaWduc0NlbGxzIiwiaXNVcGRhdGVWYWxpZExvY2F0aW9uIiwiZ2V0VXBkYXRlZENhcnQiLCJudW1PZlR1cm5zVG9BZGQiLCJwcmV2U2VsZWN0ZWRDYXJkIiwidXBkYXRlVmFsaWRDZWxsc0luQm9hcmQiLCJib29sZWFuVmFsIiwidG9nZ2xlQ2VsbFZhbGlkIiwicnVuTW92ZSIsIm5laWdoYm9yc09iaiIsImdldE5laWdoYm9yc09iaiIsIm5laWdoYm9yTmFtZSIsIm5laWdoYm9yTG9jYXRpb24iLCJwaWVjZSIsImNyZWF0ZVBpZWNlIiwibG9jYXRlUGllY2VPbkJvYXJkIiwiY2hlY2tOZWlnaGJvclBpZWNlIiwibmVpZ2hib3JQaWVjZSIsInBvc2l0aW9uIiwic2VsZWN0UG9zaXRpb24iLCJjaGVja1BpZWNlUG9zaXRpb24iLCJ1cGRhdGVWYWxpZExvY2F0aW9uSW5TZXJ2ZXIiLCJzY29yZUFkZGl0aW9uIiwiY2FsY3VsYXRlQXZlcmFnZU9mVHVybiIsIm5ld0JvYXJkTWFwIiwiZ2V0VXBkYXRlZEJvYXJkIiwibmV3U2NvcmUiLCJnZXRVcGRhdGVkU2NvcmUiLCJhdmVyYWdlSW5TZWNvbmRzRm9ybWF0Iiwic2NvcmUiLCJhZGRpdGlvbiIsIl9pc1dpbiIsIm5ld0NhcnRNYXAiLCJnZXRDYXJ0TWFwQWZ0ZXJSZW1vdmVDYXJkIiwiaXNFbXB0eUNhcnQiLCJpc0VtcHR5IiwidXBkYXRlVmFsaWRMb2NhdGlvbnNBbmRCb2FyZCIsInJlbW92ZVBpZWNlRnJvbUNhcnQiLCJpc0pva2VyIiwic2lkZTFBcnJheSIsInNpZGUyQXJyYXkiLCJpc0VtcHR5QW5kTm90VmFsaWQiLCJuZXdCb2FyZCIsIkJvYXJkUm93IiwiaW5kZXhSb3ciLCJkb21pbm9QaWVjZSIsIm9uQ2xpY2siLCJCb2FyZCIsImNlbGxzIiwiQ2FydCIsIlRpbWVyIiwidGltZSIsInRpbWVyIiwic3RhcnRUaW1lciIsInJlc2V0VGltZXIiLCJzdG9wSW50ZXJ2YWwiLCJjb3VudFVwIiwiZGlzcGxheVNwZWNpZmljVGltZSIsInRyYW5zZmVyRGF0YVRvSG9tZSIsInNlbmRDdXJyZW50VGltZSIsImNsZWFySW50ZXJ2YWwiLCJpbml0aWFsVGltZSIsInByZXZQcm9wcyIsImlzUmVzZXROZWVkZWQiLCJTdGF0cyIsIkNoYXRDb250YWluZXIiLCJpc1VzZXJDb25uZWN0ZWQiLCJDb252ZXJzaW9uQXJlYSIsImNvbnRlbnQiLCJnZXRDaGF0Q29udGVudCIsImdldENoYXRDb250ZW50V3JhcHBlciIsImxpbmUiLCJ1c2VyIiwidGV4dCIsIkNoYXRJbnB1dCIsImFyZ3MiLCJzZW5kSW5Qcm9ncmVzcyIsInNlbmRUZXh0IiwiaW5wdXRFbGVtZW50IiwiaW5wdXQiLCJHYW1lU3VtbWFyeSIsImhhbmRsZUdvVG9Mb2JieUJ1dHRvbldyYXBwZXIiLCJzdGF0cyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM3RE1BLFc7QUFDSix5QkFBYztBQUFBOztBQUNaLFNBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLEtBQUtDLG1CQUFMLENBQXlCLEtBQUtGLFlBQTlCLENBQXZCO0FBQ0EsU0FBS0csb0JBQUwsR0FBNEIsS0FBS0gsWUFBTCxHQUFvQixDQUFoRDtBQUNBLFNBQUtJLFVBQUwsR0FBa0IsS0FBS0MsZ0JBQUwsRUFBbEI7QUFDQSxTQUFLQyxzQkFBTCxHQUE4QixDQUFDLENBQS9CO0FBQ0EsU0FBS0MsbUJBQUwsR0FBMkIsS0FBS0EsbUJBQUwsQ0FBeUJDLElBQXpCLENBQThCLElBQTlCLENBQTNCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9CRCxJQUFwQixDQUF5QixJQUF6QixDQUF0QjtBQUNBLFNBQUtFLEtBQUwsR0FBYSxLQUFLQSxLQUFMLENBQVdGLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBYjtBQUNEOzs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtGLHNCQUFa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QztBQUFBO0FBTWdCLHFCQUFLOEQsS0FBTCxDQUFXSyxhQUFYLENBQXlCcEYsRUFBekIsRUFBNkJvVyxLQUE3QixDQUFtQy9XO0FBTm5ELGFBRHlDO0FBQUEsV0FBMUM7QUFESDtBQVZGLE9BREY7QUF5QkQ7OzttREFFOEI7QUFDN0IsV0FBS3NELEtBQUwsQ0FBVzJELHFCQUFYLENBQWlDLEtBQUt2QixLQUFMLENBQVdLLGFBQVgsQ0FBeUJLLGVBQTFEO0FBQ0Q7Ozt3Q0FFbUIsQ0FBRTs7OzJDQUVDO0FBQ3JCLFdBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxVQUFJLEtBQUs0RCxTQUFULEVBQW9CO0FBQ2xCQyxxQkFBYSxLQUFLRCxTQUFsQjtBQUNEO0FBQ0Y7Ozs7RUE1RHNDdkYsZ0JBQU1RLFM7O2tCQUExQjJSLFciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGRlMDUwMGJlMWY5ZTQ2ZjAxNmQyIiwiY2xhc3MgRG9taW5vU3RhY2sge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5waWVjZXNBbW91bnQgPSAyODtcclxuICAgIHRoaXMuaW5kZXhlc0NhcmRzQm94ID0gdGhpcy5jcmVhdGVTaHVmZmxlZEFycmF5KHRoaXMucGllY2VzQW1vdW50KTtcclxuICAgIHRoaXMuaW5kZXhlc0NhcmRzQm94SW5kZXggPSB0aGlzLnBpZWNlc0Ftb3VudCAtIDE7XHJcbiAgICB0aGlzLmNhcmRzQXJyYXkgPSB0aGlzLmNyZWF0ZUNhcmRzQXJyYXkoKTtcclxuICAgIHRoaXMubnVtYmVyT2ZEcmF3bkZyb21TdGFjayA9IC03O1xyXG4gICAgdGhpcy5nZXROdW1PZldpdGhkcmF3YWxzID0gdGhpcy5nZXROdW1PZldpdGhkcmF3YWxzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmdldE51bU9mUGllY2VzID0gdGhpcy5nZXROdW1PZlBpZWNlcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5yZXNldCA9IHRoaXMucmVzZXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldE51bU9mV2l0aGRyYXdhbHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5udW1iZXJPZkRyYXduRnJvbVN0YWNrO1xyXG4gIH1cclxuXHJcbiAgZ2V0TnVtT2ZQaWVjZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5waWVjZXNBbW91bnQ7XHJcbiAgfVxyXG5cclxuICBnZXRDYXJkKCkge1xyXG4gICAgbGV0IHJldCA9IG51bGw7XHJcbiAgICBpZiAodGhpcy5waWVjZXNBbW91bnQgPiAwKSB7XHJcbiAgICAgIHRoaXMubnVtYmVyT2ZEcmF3bkZyb21TdGFjaysrO1xyXG4gICAgICB0aGlzLnBpZWNlc0Ftb3VudC0tO1xyXG4gICAgICBsZXQgY2FyZEluZGV4ID0gdGhpcy5pbmRleGVzQ2FyZHNCb3gucG9wKCk7XHJcbiAgICAgIHJldCA9IHRoaXMuY2FyZHNBcnJheVtjYXJkSW5kZXhdO1xyXG4gICAgICB0aGlzLmluZGV4ZXNDYXJkc0JveEluZGV4LS07XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaW4gZ2V0Q2FyZCgpXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNhcmQ6IFwiICsgcmV0LnNpZGUxICsgXCIsIFwiICsgcmV0LnNpZGUyKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVTaHVmZmxlZEFycmF5KHNpemUpIHtcclxuICAgIGxldCBhID0gbmV3IEFycmF5KHNpemUpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgYVtpXSA9IGk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gYS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuICAgICAgW2FbaV0sIGFbal1dID0gW2Fbal0sIGFbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGE7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDYXJkc0FycmF5KCkge1xyXG4gICAgbGV0IGFyciA9IG5ldyBBcnJheSgyOCk7XHJcbiAgICBsZXQgYXJySW5kZXggPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCA3OyBqKyspIHtcclxuICAgICAgICBhcnJbYXJySW5kZXhdID0geyB2YWxpZDogdW5kZWZpbmVkLCBzaWRlMTogaSwgc2lkZTI6IGogfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhcnJbYXJySW5kZXhdKTtcclxuICAgICAgICBhcnJJbmRleCsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5pdGlhbENhcnQoKSB7XHJcbiAgICBsZXQgY2FydCA9IG5ldyBBcnJheSg3KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgIGNhcnRbaV0gPSB0aGlzLmdldENhcmQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7IGNhcnQ6IGNhcnQgfSk7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMucGllY2VzQW1vdW50ID0gMjg7XHJcbiAgICB0aGlzLmluZGV4ZXNDYXJkc0JveCA9IHRoaXMuY3JlYXRlU2h1ZmZsZWRBcnJheSh0aGlzLnBpZWNlc0Ftb3VudCk7XHJcbiAgICB0aGlzLmluZGV4ZXNDYXJkc0JveEluZGV4ID0gdGhpcy5waWVjZXNBbW91bnQgLSAxO1xyXG4gICAgdGhpcy5jYXJkc0FycmF5ID0gdGhpcy5jcmVhdGVDYXJkc0FycmF5KCk7XHJcbiAgICB0aGlzLm51bWJlck9mRHJhd25Gcm9tU3RhY2sgPSAtNztcclxuICB9XHJcbn1cclxuY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoaV9WYWxpZCwgaV9TaWRlMSwgaV9TaWRlMiwgaV9Jc0xheWluZykge1xyXG4gICAgdGhpcy52YWxpZCA9IGlfVmFsaWQ7XHJcbiAgICB0aGlzLnNpZGUxID0gaV9TaWRlMTtcclxuICAgIHRoaXMuc2lkZTIgPSBpX1NpZGUyO1xyXG4gICAgdGhpcy5pc0xheWluZyA9IGlfSXNMYXlpbmc7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBTdGF0c09iaiB7XHJcbiAgY29uc3RydWN0b3Iod2l0aGRyYXdhbHMsIHR1cm5zLCBzY29yZVRvQWRkLCB0dXJuTGVuZ3RoLCBhdmVyYWdlVHVybikge1xyXG4gICAgdGhpcy53aXRoZHJhd2FscyA9IHdpdGhkcmF3YWxzO1xyXG4gICAgdGhpcy50dXJucyA9IHR1cm5zO1xyXG4gICAgdGhpcy5zY29yZVRvQWRkID0gc2NvcmVUb0FkZDtcclxuICAgIHRoaXMudHVybkxlbmd0aCA9IHR1cm5MZW5ndGg7XHJcbiAgICB0aGlzLmF2ZXJhZ2VUdXJuSW5TZWNzVG9BZGQgPSBhdmVyYWdlVHVybjtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEdhbWVEYXRhIHtcclxuICBjb25zdHJ1Y3RvcihpX0hvc3ROYW1lLCBpX0hvc3RJZCwgaV9HYW1lTmFtZSwgaV9OdW1QbGF5ZXJUb1N0YXJ0KSB7XHJcbiAgICB0aGlzLmlkID0gaV9Ib3N0SWQ7XHJcbiAgICB0aGlzLmdhbWVOYW1lID0gaV9HYW1lTmFtZTtcclxuICAgIHRoaXMubnVtUGxheWVyVG9TdGFydCA9IGlfTnVtUGxheWVyVG9TdGFydDtcclxuICAgIHRoaXMubnVtYmVyT2ZTdWJzY3JpYmVzID0gMDtcclxuICAgIHRoaXMuaXNHYW1lU3RhcnQgPSBmYWxzZTtcclxuICAgIHRoaXMuc3Vic2NyaWJlc0xpc3QgPSBuZXcgQXJyYXkoaV9OdW1QbGF5ZXJUb1N0YXJ0KTtcclxuICAgIHRoaXMuc3Vic2NyaWJlc0xpc3RbMF0gPSBpX0hvc3RJZDtcclxuICAgIHRoaXMuaG9zdE5hbWUgPSBpX0hvc3ROYW1lO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlRW1wdHlCb2FyZCA9IHNpemUgPT4ge1xyXG4gIGxldCBtYXRyaXggPSBuZXcgQXJyYXkoc2l6ZSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgIG1hdHJpeFtpXSA9IG5ldyBBcnJheShzaXplKTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XHJcbiAgICAgIG1hdHJpeFtpXVtqXSA9IG5ldyBDYXJkKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG1hdHJpeDtcclxufTtcclxuXHJcbmNvbnN0IHNldEluaXRpYWxCb2FyZCA9IHNpemUgPT4ge1xyXG4gIGxldCBib2FyZCA9IGNyZWF0ZUVtcHR5Qm9hcmQoc2l6ZSk7XHJcbiAgbGV0IG1pZCA9IE1hdGguZmxvb3Ioc2l6ZSAvIDIpO1xyXG4gIGJvYXJkW21pZF1bbWlkXS52YWxpZCA9IHRydWU7XHJcbiAgcmV0dXJuIGJvYXJkO1xyXG59O1xyXG5cclxuY29uc3Qgc2Vjb25kc1RvVGltZSA9IHNlY3MgPT4ge1xyXG4gIGxldCBkaXZpc29yX2Zvcl9taW51dGVzID0gc2VjcyAlICg2MCAqIDYwKTtcclxuICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoZGl2aXNvcl9mb3JfbWludXRlcyAvIDYwKTtcclxuXHJcbiAgbGV0IGRpdmlzb3JfZm9yX3NlY29uZHMgPSBkaXZpc29yX2Zvcl9taW51dGVzICUgNjA7XHJcbiAgbGV0IHNlY29uZHMgPSBNYXRoLmNlaWwoZGl2aXNvcl9mb3Jfc2Vjb25kcyk7XHJcblxyXG4gIGxldCBvYmogPSB7XHJcbiAgICBtaW51dGVzOiBtaW51dGVzLFxyXG4gICAgc2Vjb25kczogc2Vjb25kc1xyXG4gIH07XHJcbiAgcmV0dXJuIG9iajtcclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZVJvd0NvbEVsZW1lbnRGcm9tQXJyYXkgPSAoYXJyLCByb3csIGNvbCkgPT4ge1xyXG4gIGxldCB2YWwgPSBmYWxzZTtcclxuICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBhcnIubGVuZ3RoOyBpZHgrKylcclxuICAgIGlmIChhcnJbaWR4XS5pID09PSByb3cgJiYgYXJyW2lkeF0uaiA9PT0gY29sKSB7XHJcbiAgICAgIHZhbCA9IGFycltpZHhdLmkgPT09IHJvdyAmJiBhcnJbaWR4XS5qID09PSBjb2w7XHJcbiAgICAgIGFyci5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgcmV0dXJuIHZhbDtcclxufTtcclxuXHJcbmNvbnN0IGdldENhcnRBZnRlclJlbW92ZVBpZWNlID0gKGNhcnQsIGluZGV4Q2FydCkgPT4ge1xyXG4gIGNhcnRbaW5kZXhDYXJ0XSA9IG5ldyBDYXJkKGZhbHNlKTtcclxuICBjb25zdCByZXN1bHQgPSBjYXJ0LmZpbHRlcihlbCA9PiBlbC52YWxpZCA9PT0gZmFsc2UpO1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlRW1wdHlWYWxpZExvY2F0aW9ucyA9ICgpID0+IHtcclxuICBsZXQgbWF0cml4ID0gbmV3IEFycmF5KDcpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICBtYXRyaXhbaV0gPSBuZXcgQXJyYXkoMCk7XHJcbiAgfVxyXG4gIHJldHVybiBtYXRyaXg7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVDb3B5Um93ID0gKG1hdHJpeCwgaV9Sb3cpID0+IHtcclxuICBsZXQgc2l6ZSA9IDA7XHJcbiAgaWYgKG1hdHJpeFtpX1Jvd10pIHNpemUgPSBtYXRyaXhbaV9Sb3ddLmxlbmd0aDtcclxuXHJcbiAgY29uc3QgYXJyYXkgPSBuZXcgQXJyYXkoc2l6ZSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgIGFycmF5W2ldID0gbWF0cml4W2lfUm93XVtpXTtcclxuICB9XHJcbiAgcmV0dXJuIGFycmF5O1xyXG59O1xyXG5jbGFzcyBOZWlnaGJvcnNPYmoge1xyXG4gIGNvbnN0cnVjdG9yKHVwLCBkb3duLCBsZWZ0LCByaWdodCkge1xyXG4gICAgdGhpcy51cCA9IHVwO1xyXG4gICAgdGhpcy5kb3duID0gZG93bjtcclxuICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbiAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIENhcmQsXHJcbiAgTmVpZ2hib3JzT2JqLFxyXG4gIFN0YXRzT2JqLFxyXG4gIHNldEluaXRpYWxCb2FyZCxcclxuICBEb21pbm9TdGFjayxcclxuICBHYW1lRGF0YSxcclxuICBzZWNvbmRzVG9UaW1lLFxyXG4gIHJlbW92ZVJvd0NvbEVsZW1lbnRGcm9tQXJyYXksXHJcbiAgY3JlYXRlQ29weVJvdyxcclxuICBjcmVhdGVFbXB0eVZhbGlkTG9jYXRpb25zXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsaXRpZXMvTWFuYWdlci5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlMi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUyLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZTIuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZS9zdHlsZTIuY3NzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYm9vdHN0cmFwLm1pbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2Jvb3RzdHJhcC5taW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYm9vdHN0cmFwLm1pbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9HYW1lU3R5bGUuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL0dhbWVTdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vR2FtZVN0eWxlLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGUvR2FtZVN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQaWVjZSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IHZhbGlkLCBzaWRlMSwgc2lkZTIsIGlzTGF5aW5nIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2FyZEluQ2FydFNlbGVjdGVkID0gdmFsaWQ7XHJcblxyXG4gIGNvbnN0IGdldERlZ3JlZSA9IChpc0xheWluZywgc2lkZTEsIHNpZGUyKSA9PiB7XHJcbiAgICB2YXIgZGVnO1xyXG4gICAgaWYgKCFpc0xheWluZyAmJiBzaWRlMSA8PSBzaWRlMikgZGVnID0gMDtcclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoaXNMYXlpbmcgPT09IHRydWUpIGRlZyA9IDkwO1xyXG4gICAgICBlbHNlIGRlZyA9IDE4MDtcclxuXHJcbiAgICAgIGlmIChzaWRlMSA8IHNpZGUyKSBkZWcgKj0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRlZztcclxuICB9O1xyXG4gIGNvbnN0IGdldEltYWdlTmFtZSA9IChzaWRlMSwgc2lkZTIpID0+IHtcclxuICAgIHJldHVybiBcInBcIiArIE1hdGgubWluKHNpZGUxLCBzaWRlMikgKyBcIl9cIiArIE1hdGgubWF4KHNpZGUxLCBzaWRlMik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW1nTmFtZSA9IGdldEltYWdlTmFtZShzaWRlMSwgc2lkZTIpO1xyXG4gIGNvbnN0IGltYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi9yZXNvdXJjZXMvcGllY2VzL1wiICsgaW1nTmFtZSArIFwiLnN2Z1wiKTtcclxuICBjb25zdCBkZWdyZWUgPSBnZXREZWdyZWUoaXNMYXlpbmcsIHNpZGUxLCBzaWRlMik7XHJcbiAgY29uc3QgdHJhbnNmb3JtID0gXCJyb3RhdGUoXCIgKyBkZWdyZWUgKyBcImRlZylcIjtcclxuICBjb25zdCB3aWR0aCA9IFwiNXZ3XCI7XHJcbiAgY29uc3QgaGVpZ2h0ID0gd2lkdGg7XHJcbiAgbGV0IHN0eWxlQ29weSA9IG51bGw7XHJcbiAgY2FyZEluQ2FydFNlbGVjdGVkID8gKHN0eWxlQ29weSA9IHZhbGlkU3R5bGUpIDogKHN0eWxlQ29weSA9IGNvbnRhaW5lclN0eWxlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3N0eWxlQ29weX0+XHJcbiAgICAgIDxpbWcgc3JjPXtpbWFnZVBhdGh9IHN0eWxlPXt7IGhlaWdodCwgd2lkdGgsIHRyYW5zZm9ybSB9fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBpZWNlO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVtcHR5UGllY2UgPSAoKSA9PiA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0gLz47XHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRQaWVjZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMudmFsaWRQaWVjZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5zY3JvbGxJbnRvQ2VudGVyID0gdGhpcy5zY3JvbGxJbnRvQ2VudGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxJbnRvQ2VudGVyKCkge1xyXG4gICAgaWYgKHRoaXMudmFsaWRQaWVjZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHRoaXMudmFsaWRQaWVjZVJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICBiZWhhdmlvcjogXCJhdXRvXCIsXHJcbiAgICAgICAgYmxvY2s6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgaW5saW5lOiBcImNlbnRlclwiXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImFmdGVycyBzY3JvbGxlZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zY3JvbGxJbnRvQ2VudGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdiByZWY9e3RoaXMudmFsaWRQaWVjZVJlZn0gc3R5bGU9e3ZhbGlkU3R5bGV9IC8+O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc2l6ZSA9IFwiNXZ3XCI7XHJcbmNvbnN0IGltYWdlU3R5bGUgPSB7XHJcbiAgd2lkdGg6IHNpemUsXHJcbiAgaGVpZ2h0OiBzaXplXHJcbn07XHJcblxyXG5jb25zdCBjb250YWluZXJTdHlsZSA9IHtcclxuICB3aWR0aDogc2l6ZSxcclxuICBoZWlnaHQ6IHNpemUsXHJcbiAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCJcclxufTtcclxuXHJcbmNvbnN0IHZhbGlkU3R5bGUgPSB7XHJcbiAgd2lkdGg6IHNpemUsXHJcbiAgaGVpZ2h0OiBzaXplLFxyXG4gIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1BpZWNlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IFwiLi9zdHlsZS9zdHlsZTIuY3NzXCI7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuXHJcblxyXG5pbXBvcnQgQmFzZUNvbnRhaW5lciBmcm9tIFwiLi9jb21wb25lbnRzL2Jhc2VDb250YWluZXIuanN4XCI7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEJhc2VDb250YWluZXIgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuLmhvbWUtYmFzZS1jb250YWluZXIge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uZXctZ2FtZS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMjd2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVzLXJvb21zLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZy10b3A6IDJ2aDtcXHJcXG4gIGhlaWdodDogMjR2aDtcXHJcXG4gIHdpZHRoOiA1MnZoO1xcclxcbn1cXHJcXG4uY2hhdC1jb250YWluZXIgLmNvbnZlcnNzaW9uLWFyZWEtd3JwcGVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBoZWlnaHQ6IDE2dmg7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXQtY29udGFpbmVyIC5jaGF0LWlucHV0LXdyYXBwZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhdC1jb250YWluZXIgLmNoYXQtaW5wdXQtd3JhcHBlciBpbnB1dCB7XFxyXFxuICBsaW5lLWhlaWdodDogMTZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIG1hcmdpbjogMXB4O1xcclxcbiAgaGVpZ2h0OiA0OHB4O1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXQtY29udGFpbmVyIC5jaGF0LWlucHV0LXdyYXBwZXIgLmJ0biB7XFxyXFxuICBmbGV4LWdyb3c6IDA7XFxyXFxuICB3aWR0aDogODhweDtcXHJcXG4gIG1hcmdpbjogMCAycHggMCA1cHg7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9zcmMvc3R5bGUvc3R5bGUyLmNzc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9naW5Nb2RhbCBmcm9tIFwiLi9Mb2dpbk1vZGFsLmpzeFwiO1xyXG5pbXBvcnQgVXNlcnNMaXN0IGZyb20gXCIuL1VzZXJzTGlzdC5qc3hcIjtcclxuaW1wb3J0IEdhbWVzTGlzdCBmcm9tIFwiLi9HYW1lc0xpc3QuanN4XCI7XHJcbmltcG9ydCBOZXdHYW1lTW9kYWwgZnJvbSBcIi4vTmV3R2FtZU1vZGFsLmpzeFwiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lLmpzeFwiO1xyXG5pbXBvcnQgR2FtZXNTdW1tYXJ5IGZyb20gXCIuL0dhbWVTdW1tYXJ5LmpzeFwiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZS9HYW1lU3R5bGUuY3NzXCI7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzaG93TG9naW46IHRydWUsXHJcbiAgICAgIHNob3dMb2JieTogZmFsc2UsXHJcbiAgICAgIHNob3dHYW1lOiBmYWxzZSxcclxuICAgICAgc2hvd0dhbWVTdW1tYXJ5OiB0cnVlLFxyXG4gICAgICB1c2Vyc1Jvb21EYXRhOiBudWxsLFxyXG4gICAgICBjdXJyZW50VGltZTogeyBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH0sXHJcbiAgICAgIHdpbk5hbWU6IG51bGwsXHJcbiAgICAgIGxvc3ROYW1lOiBudWxsLFxyXG4gICAgICBjdXJyZW50VXNlcjoge30sXHJcbiAgICAgIGN1cnJlbnRSb29tTmFtZTogbnVsbFxyXG4gICAgfTtcclxuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5oYW5kbGVTdWNjZWVkZWRMb2dpbiA9IHRoaXMuaGFuZGxlU3VjY2VlZGVkTG9naW4uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlTG9naW5FcnJvciA9IHRoaXMuaGFuZGxlTG9naW5FcnJvci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdWNjZWVkQ3JlYXRlTmV3Um9vbSA9IHRoaXMuaGFuZGxlU3VjY2VlZENyZWF0ZU5ld1Jvb20uYmluZChcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICAgIHRoaXMuaGFuZGxlQ3JlYXRlUm9vbUVycm9yID0gdGhpcy5oYW5kbGVDcmVhdGVSb29tRXJyb3IuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmV0Y2hVc2VySW5mbyA9IHRoaXMuZmV0Y2hVc2VySW5mby5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5sb2dvdXRIYW5kbGVyID0gdGhpcy5sb2dvdXRIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnJlbmRlckdhbWUgPSB0aGlzLnJlbmRlckdhbWUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucmVtb3ZlQW5kRXhpdFRvTG9iYnlIYW5kbGVyID0gdGhpcy5yZW1vdmVBbmRFeGl0VG9Mb2JieUhhbmRsZXIuYmluZChcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICAgIHRoaXMuaGFuZGxlSXNDdXJyVXNlckluUm9vbSA9IHRoaXMuaGFuZGxlSXNDdXJyVXNlckluUm9vbS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdWNjZWVkSm9pblRvUm9vbSA9IHRoaXMuaGFuZGxlU3VjY2VlZEpvaW5Ub1Jvb20uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZXhpdFRvTG9iYnlIYW5kbGVyID0gdGhpcy5leGl0VG9Mb2JieUhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlR29Ub0xvYmJ5QnV0dG9uID0gdGhpcy5oYW5kbGVHb1RvTG9iYnlCdXR0b24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMud2luRXhpdFRvTG9iYnlIYW5kbGVyID0gdGhpcy53aW5FeGl0VG9Mb2JieUhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlR2FtZURvbmUgPSB0aGlzLmhhbmRsZUdhbWVEb25lLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnNob3dMb2dpbikge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMb2dpbk1vZGFsXHJcbiAgICAgICAgICBrZXk9XCJsb2dpbi1tb2RhbC1sb2dpblBhZ2VcIlxyXG4gICAgICAgICAgbG9naW5TdWNjZXNzSGFuZGxlcj17dGhpcy5oYW5kbGVTdWNjZWVkZWRMb2dpbn1cclxuICAgICAgICAgIGxvZ2luRXJyb3JIYW5kbGVyPXt0aGlzLmhhbmRsZUxvZ2luRXJyb3J9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zaG93TG9iYnkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTG9iYnkoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zaG93R2FtZSAmJiAhdGhpcy5zdGF0ZS5zaG93R2FtZVN1bW1hcnkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyR2FtZSgpO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5zaG93R2FtZSAmJiB0aGlzLnN0YXRlLnNob3dHYW1lU3VtbWFyeSlcclxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyR2FtZVN1bW1hcnkoKTtcclxuICAgIGVsc2UgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWNjZWVkZWRMb2dpbigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICgpID0+ICh7IHNob3dMb2JieTogdHJ1ZSwgc2hvd0xvZ2luOiBmYWxzZSB9KSxcclxuICAgICAgdGhpcy5nZXRVc2VyTmFtZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxvZ2luRXJyb3IoKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwibG9naW4gZmFpbGVkXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBzaG93TG9naW46IHRydWUgfSkpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyR2FtZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxHYW1lXHJcbiAgICAgICAgcmVtb3ZlQW5kRXhpdEhhbmRsZXI9e3RoaXMucmVtb3ZlQW5kRXhpdFRvTG9iYnlIYW5kbGVyfVxyXG4gICAgICAgIGV4aXRUb0xvYmJ5SGFuZGxlcj17dGhpcy5leGl0VG9Mb2JieUhhbmRsZXJ9XHJcbiAgICAgICAgd2luRXhpdFRvTG9iYnlIYW5kbGVyPXt0aGlzLndpbkV4aXRUb0xvYmJ5SGFuZGxlcn1cclxuICAgICAgICBuYW1lPXt0aGlzLnN0YXRlLmN1cnJlbnRVc2VyLm5hbWV9XHJcbiAgICAgICAgaGFuZGxlSXNDdXJyVXNlckluUm9vbT17dGhpcy5oYW5kbGVJc0N1cnJVc2VySW5Sb29tfVxyXG4gICAgICAgIGN1cnJlbnRSb29tTmFtZT17dGhpcy5zdGF0ZS5jdXJyZW50Um9vbU5hbWV9XHJcbiAgICAgICAgc2VuZFVzZXJzUm9vbURhdGFUb0hvbWU9e3RoaXMuaGFuZGxlR2FtZURvbmV9XHJcbiAgICAgICAgZmV0Y2hUb2dnbGU9eyF0aGlzLnN0YXRlLnNob3dMb2dpbn1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJMb2JieSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYga2V5PVwiaG9tZS1iYXNlLWNvbnRhaW5lci1sb2JieVwiIGNsYXNzTmFtZT1cImhvbWUtYmFzZS1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGtleT1cInVzZXItaW5mby1hcmVhLWxvYmJ5XCIgY2xhc3NOYW1lPVwidXNlci1pbmZvLWFyZWFcIj5cclxuICAgICAgICAgIEhlbGxvIHt0aGlzLnN0YXRlLmN1cnJlbnRVc2VyLm5hbWV9XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGtleT1cImxvZ291dC1idG4tbG9iYnlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvdXQgYnRuXCJcclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5sb2dvdXRIYW5kbGVyfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8aDEga2V5PVwiRG9taW5vIG11bHRpcGxheWVyLWxvYmJ5XCI+RG9taW5vIG11bHRpcGxheWVyPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9XCJnYW1lcy1yb29tcy1jb250YWluZXItbG9iYnlcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ2FtZXMtcm9vbXMtY29udGFpbmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGtleT1cIm5ldy1nYW1lLWFyZWEtbG9iYnlcIiBjbGFzc05hbWU9XCJuZXctZ2FtZS1hcmVhXCI+XHJcbiAgICAgICAgICAgIDxOZXdHYW1lTW9kYWxcclxuICAgICAgICAgICAgICBrZXk9XCJOZXdHYW1lTW9kYWwtbG9iYnlcIlxyXG4gICAgICAgICAgICAgIGN1cnJlbnRVc2VyPXt0aGlzLnN0YXRlLmN1cnJlbnRVc2VyfVxyXG4gICAgICAgICAgICAgIGNyZWF0ZU5ld0dhbWVTdWNjZXNzSGFuZGxlcj17dGhpcy5oYW5kbGVTdWNjZWVkQ3JlYXRlTmV3Um9vbX1cclxuICAgICAgICAgICAgICBjcmVhdGVOZXdHYW1lRXJyb3JIYW5kbGVyPXt0aGlzLmhhbmRsZUNyZWF0ZVJvb21FcnJvcn1cclxuICAgICAgICAgICAgICBhZGRSb29tVG9Vc2VyPXt0aGlzLmhhbmRsZUFkZFJvb21Ub1VzZXJ9XHJcbiAgICAgICAgICAgICAgdXBkYXRlTXlSb29tSWQ9e3RoaXMudXBkYXRlTXlSb29tSWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGtleT1cImdhbWVzLWxpc3QtYXJlYS1sb2JieVwiIGNsYXNzTmFtZT1cImdhbWVzLWxpc3QtYXJlYVwiPlxyXG4gICAgICAgICAgICA8R2FtZXNMaXN0XHJcbiAgICAgICAgICAgICAga2V5PVwiR2FtZXNMaXN0LWxvYmJ5XCJcclxuICAgICAgICAgICAgICBoYW5kbGVKb2luVG9HYW1lPXt0aGlzLmhhbmRsZVN1Y2NlZWRKb2luVG9Sb29tfVxyXG4gICAgICAgICAgICAgIG5hbWU9e3RoaXMuc3RhdGUuY3VycmVudFVzZXIubmFtZX1cclxuICAgICAgICAgICAgICBmZXRjaFRvZ2dsZT17IXRoaXMuc3RhdGUuc2hvd0xvZ2lufVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBrZXk9XCJ1c2Vycy1saXN0LWFyZWEtbG9iYnlcIiBjbGFzc05hbWU9XCJ1c2Vycy1saXN0LWFyZWFcIj5cclxuICAgICAgICAgICAgPFVzZXJzTGlzdFxyXG4gICAgICAgICAgICAgIGZldGNoVG9nZ2xlPXshdGhpcy5zdGF0ZS5zaG93TG9naW59XHJcbiAgICAgICAgICAgICAga2V5PVwiVXNlcnNMaXN0LWxvYmJ5XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJHYW1lU3VtbWFyeSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxHYW1lc1N1bW1hcnlcclxuICAgICAgICBoYW5kbGVHb1RvTG9iYnlCdXR0b249e3RoaXMuaGFuZGxlR29Ub0xvYmJ5QnV0dG9ufVxyXG4gICAgICAgIHVzZXJzUm9vbURhdGE9e3RoaXMuc3RhdGUudXNlcnNSb29tRGF0YX1cclxuICAgICAgICBjdXJyZW50VGltZT17dGhpcy5zdGF0ZS5jdXJyZW50VGltZX1cclxuICAgICAgICB3aW5OYW1lPXt0aGlzLnN0YXRlLndpbk5hbWV9XHJcbiAgICAgICAgbG9zdE5hbWU9e3RoaXMuc3RhdGUubG9zdE5hbWV9XHJcbiAgICAgICAgY3VycmVudFJvb21OYW1lPXt0aGlzLnN0YXRlLmN1cnJlbnRSb29tTmFtZX1cclxuICAgICAgICBjcmVhdGVOZXdHYW1lU3VjY2Vzc0hhbmRsZXI9e3RoaXMuaGFuZGxlU3VjY2VlZENyZWF0ZU5ld1Jvb219XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlck5hbWUoKSB7XHJcbiAgICB0aGlzLmZldGNoVXNlckluZm8oKVxyXG4gICAgICAudGhlbih1c2VySW5mbyA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xyXG4gICAgICAgICAgY3VycmVudFVzZXI6IEpTT04ucGFyc2UodXNlckluZm8pLFxyXG4gICAgICAgICAgc2hvd0xvYmJ5OiB0cnVlLFxyXG4gICAgICAgICAgc2hvd0xvZ2luOiBmYWxzZVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBzaG93TG9naW46IHRydWUgfSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGZldGNoVXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goXCIvdXNlcnNcIiwgeyBtZXRob2Q6IFwiR0VUXCIsIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiB9KS50aGVuKFxyXG4gICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVBbmRFeGl0VG9Mb2JieUhhbmRsZXIoKSB7XHJcbiAgICBmZXRjaChcIi91c2Vycy9yZW1vdmVHYW1lXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlR29Ub0xvYmJ5QnV0dG9uKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZXhpdFRvTG9iYnlIYW5kbGVyKCkge1xyXG4gICAgZmV0Y2goXCIvdXNlcnMvZXhpdFwiLCB7IG1ldGhvZDogXCJHRVRcIiwgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiIH0pLnRoZW4oXHJcbiAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgYGZhaWxlZCB0byBsb2dvdXQgdXNlciAke3RoaXMuc3RhdGUuY3VycmVudFVzZXIubmFtZX0gYCxcclxuICAgICAgICAgICAgcmVzcG9uc2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFuZGxlR29Ub0xvYmJ5QnV0dG9uKCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVHb1RvTG9iYnlCdXR0b24oY3VycmVudFJvb21OYW1lID0gbnVsbCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xyXG4gICAgICBjdXJyZW50Um9vbU5hbWU6IGN1cnJlbnRSb29tTmFtZSxcclxuICAgICAgc2hvd0dhbWU6IGZhbHNlLFxyXG4gICAgICBzaG93TG9iYnk6IHRydWUsXHJcbiAgICAgIHNob3dMb2dpbjogZmFsc2UsXHJcbiAgICAgIHNob3dHYW1lU3VtbWFyeTogZmFsc2VcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHdpbkV4aXRUb0xvYmJ5SGFuZGxlcigpIHtcclxuICAgIGZldGNoKFwiL3VzZXJzL3dpbkV4aXRcIiwgeyBtZXRob2Q6IFwiR0VUXCIsIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiB9KS50aGVuKFxyXG4gICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGBmYWlsZWQgdG8gbG9nb3V0IHVzZXIgJHt0aGlzLnN0YXRlLmN1cnJlbnRVc2VyLm5hbWV9IGAsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XHJcbiAgICAgICAgICBzaG93R2FtZTogZmFsc2UsXHJcbiAgICAgICAgICBzaG93TG9iYnk6IHRydWUsXHJcbiAgICAgICAgICBzaG93TG9naW46IGZhbHNlLFxyXG4gICAgICAgICAgc2hvd0dhbWVTdW1tYXJ5OiBmYWxzZVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGxvZ291dEhhbmRsZXIoKSB7XHJcbiAgICBmZXRjaChcIi91c2Vycy9sb2dvdXRcIiwgeyBtZXRob2Q6IFwiR0VUXCIsIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiB9KS50aGVuKFxyXG4gICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGBmYWlsZWQgdG8gbG9nb3V0IHVzZXIgJHt0aGlzLnN0YXRlLmN1cnJlbnRVc2VyLm5hbWV9IGAsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XHJcbiAgICAgICAgICBjdXJyZW50VXNlcjogeyBuYW1lOiBcIlwiIH0sXHJcbiAgICAgICAgICBzaG93TG9naW46IHRydWUsXHJcbiAgICAgICAgICBzaG93R2FtZVN1bW1hcnk6IGZhbHNlXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlR2FtZURvbmUoY3VyclRpbWUsIHVzZXJzUm9vbURhdGEsIHdpbiwgbG9zdCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xyXG4gICAgICBjdXJyZW50Um9vbU5hbWU6IHRoaXMuc3RhdGUuY3VycmVudFJvb21OYW1lLFxyXG4gICAgICBzaG93TG9iYnk6IGZhbHNlLFxyXG4gICAgICBzaG93R2FtZTogZmFsc2UsXHJcbiAgICAgIHNob3dHYW1lU3VtbWFyeTogdHJ1ZSxcclxuICAgICAgdXNlcnNSb29tRGF0YTogdXNlcnNSb29tRGF0YSxcclxuICAgICAgdXNlcnNTdGF0czogdXNlcnNSb29tRGF0YS5uYW1lcyxcclxuICAgICAgY3VycmVudFRpbWU6IGN1cnJUaW1lLFxyXG4gICAgICB3aW5OYW1lOiB3aW4sXHJcbiAgICAgIGxvc3ROYW1lOiBsb3N0XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWNjZWVkQ3JlYXRlTmV3Um9vbShjdXJyZW50Um9vbU5hbWUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcclxuICAgICAgY3VycmVudFJvb21OYW1lOiBjdXJyZW50Um9vbU5hbWUsXHJcbiAgICAgIHNob3dMb2JieTogdHJ1ZSxcclxuICAgICAgc2hvd0dhbWVTdW1tYXJ5OiBmYWxzZVxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VjY2VlZEpvaW5Ub1Jvb20oY3VycmVudFJvb21OYW1lKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XHJcbiAgICAgIGN1cnJlbnRSb29tTmFtZTogY3VycmVudFJvb21OYW1lLFxyXG4gICAgICBzaG93TG9iYnk6IGZhbHNlLFxyXG4gICAgICBzaG93R2FtZTogdHJ1ZSxcclxuICAgICAgc2hvd0dhbWVTdW1tYXJ5OiBmYWxzZVxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSXNDdXJyVXNlckluUm9vbSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgc2hvd0dhbWU6IGZhbHNlLCBzaG93TG9iYnk6IHRydWUgfSkpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ3JlYXRlUm9vbUVycm9yKCkge1xyXG4gICAgY29uc29sZS5lcnJvcihcImNyZWF0ZSBuZXcgcm9vbSBmYWlsZWRcIik7XHJcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IHNob3dMb2JieTogdHJ1ZSB9KSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jhc2VDb250YWluZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgVXNlckRhdGEge1xyXG4gIGNvbnN0cnVjdG9yKGlfVXNlck5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IGlfVXNlck5hbWU7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZXJyTWVzc2FnZTogXCJcIlxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUxvZ2luID0gdGhpcy5oYW5kbGVMb2dpbi5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1wYWdlLXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTRcIj5Eb21pbm8gbXVsdGlwbGF5ZXI8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTMganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVMb2dpbn0+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ1c2VybmFtZS1pbnB1dCAgZm9ybS1jb250cm9sXCIgIHBsYWNlaG9sZGVyPVwiVXNlciBOYW1lXCIgbmFtZT1cInVzZXJOYW1lXCIgLz5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzdWJtaXQtYnRuIGJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3RoaXMucmVuZGVyRXJyb3JNZXNzYWdlKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckVycm9yTWVzc2FnZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmVyck1lc3NhZ2UpIHtcclxuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZXJyb3ItbWVzc2FnZVwiPnt0aGlzLnN0YXRlLmVyck1lc3NhZ2V9PC9kaXY+O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMb2dpbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB1c2VyTmFtZSA9IGUudGFyZ2V0LmVsZW1lbnRzLnVzZXJOYW1lLnZhbHVlO1xyXG4gICAgY29uc3QgdXNlck9iaiA9IG5ldyBVc2VyRGF0YSh1c2VyTmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZUxvZ2luOiB1c2VyT2JqXCIgKyBKU09OLnN0cmluZ2lmeSh1c2VyT2JqKSk7XHJcbiAgICBpZiAodXNlck5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xyXG4gICAgICAgIGVyck1lc3NhZ2U6IFwiWW91IG11c3QgdG8gaW5zZXJ0IG5hbWUhXCJcclxuICAgICAgfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmV0Y2goXCIvdXNlcnMvYWRkVXNlclwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyT2JqKSxcclxuICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCJcclxuICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGVyck1lc3NhZ2U6IFwiXCIgfSkpO1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5sb2dpblN1Y2Nlc3NIYW5kbGVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XHJcbiAgICAgICAgICAgICAgZXJyTWVzc2FnZTogXCJVc2VyIG5hbWUgYWxyZWFkeSBleGlzdCwgcGxlYXNlIHRyeSBhbm90aGVyIG9uZVwiXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucHJvcHMubG9naW5FcnJvckhhbmRsZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHVzZXJzTGlzdDoge31cclxuICAgIH07XHJcbiAgICB0aGlzLmdldFVzZXJMaXN0ID0gdGhpcy5nZXRVc2VyTGlzdC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5nZXRVc2VyTGlzdFdyYXBwZXIgPSB0aGlzLmdldFVzZXJMaXN0V3JhcHBlci5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLl9pc01vdW50ZWQgPT09IHRydWUpIHRoaXMuZ2V0VXNlckxpc3QoKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy50aW1lb3V0SWQpIHtcclxuICAgICAgKCgpID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpO1xyXG4gICAgICB9KSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXRVc2VyTGlzdFdyYXBwZXIoKSB7XHJcbiAgICB0aGlzLmdldFVzZXJMaXN0KCk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyTGlzdCgpIHtcclxuICAgIGNvbnN0IGludGVydmFsID0gMTAwMDtcclxuXHJcbiAgICBpZiAodGhpcy5wcm9wcy5mZXRjaFRvZ2dsZSkge1xyXG4gICAgICByZXR1cm4gZmV0Y2goXCIvdXNlcnMvYWxsVXNlcnNcIiwgeyBtZXRob2Q6IFwiR0VUXCIsIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHRoaXMuZ2V0VXNlckxpc3RXcmFwcGVyLCBpbnRlcnZhbCk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4odXNlcnNMaXN0ID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLl9pc01vdW50ZWQpIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgdXNlcnNMaXN0IH0pKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHRoaXMuZ2V0VXNlckxpc3RXcmFwcGVyLCBpbnRlcnZhbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGtleT1cInVzZXJzTGlzdC1XcmFwcGVyXCI+XHJcbiAgICAgICAgPGgyIGtleT1cInVzZXJzTGlzdC10aXRsZVwiPnVzZXJzIExpc3Q6PC9oMj5cclxuICAgICAgICA8dWwga2V5PVwidXNlcnNMaXN0LXVsXCI+XHJcbiAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5zdGF0ZS51c2Vyc0xpc3QpLm1hcCgoaWQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e0pTT04ucGFyc2UodGhpcy5zdGF0ZS51c2Vyc0xpc3RbaWRdKS5uYW1lICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgIHtKU09OLnBhcnNlKHRoaXMuc3RhdGUudXNlcnNMaXN0W2lkXSkubmFtZX1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVXNlcnNMaXN0LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdhbWVPYmpMaXN0IGZyb20gXCIuL0dhbWVPYmpMaXN0LmpzeFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZ2FtZXNMaXN0OiB7fVxyXG4gICAgfTtcclxuICAgIHRoaXMuZ2V0R2FtZXNMaXN0ID0gdGhpcy5nZXRHYW1lc0xpc3QuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZ2V0R2FtZXNMaXN0V3JhcHBlciA9IHRoaXMuZ2V0R2FtZXNMaXN0V3JhcHBlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5faXNNb3VudGVkID09PSB0cnVlKSB0aGlzLmdldEdhbWVzTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLnRpbWVvdXRJZCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0R2FtZXNMaXN0V3JhcHBlcigpIHtcclxuICAgIHRoaXMuZ2V0R2FtZXNMaXN0KCk7XHJcbiAgfVxyXG4gIGdldEdhbWVzTGlzdCgpIHtcclxuICAgIGNvbnN0IGludGVydmFsID0gMTAwMDtcclxuICAgIGlmICh0aGlzLnByb3BzLmZldGNoVG9nZ2xlKSB7XHJcbiAgICAgIHJldHVybiBmZXRjaChcIi9nYW1lcy9hbGxHYW1lc1wiLCB7IG1ldGhvZDogXCJHRVRcIiwgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICB0aHJvdyByZXNwb25zZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dCh0aGlzLmdldEdhbWVzTGlzdFdyYXBwZXIsIGludGVydmFsKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZ2FtZXNMaXN0ID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLl9pc01vdW50ZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgZ2FtZXNMaXN0OiBKU09OLnBhcnNlKGdhbWVzTGlzdCkgfSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQodGhpcy5nZXRHYW1lc0xpc3RXcmFwcGVyLCBpbnRlcnZhbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGtleT17XCJnYW1lc0xpc3Qtd3JhcHBlclwifSBjbGFzc05hbWU9XCJnYW1lc0xpc3Qtd3JhcHBlclwiPlxyXG4gICAgICAgIDxoMiBrZXk9e1wiZ2FtZXNMaXN0LXRpdGxlXCJ9PkdhbWVzIExpc3Q6PC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5zdGF0ZS5nYW1lc0xpc3QpLm1hcCgoaWQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxHYW1lT2JqTGlzdFxyXG4gICAgICAgICAgICAgIGtleT17XCJrZXlcIiArIGluZGV4fVxyXG4gICAgICAgICAgICAgIGhhbmRsZUpvaW5Ub0dhbWU9e3RoaXMucHJvcHMuaGFuZGxlSm9pblRvR2FtZX1cclxuICAgICAgICAgICAgICBkYXRhPXt0aGlzLnN0YXRlLmdhbWVzTGlzdFtpZF19XHJcbiAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9HYW1lc0xpc3QuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU9iakxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkYXRhOiBwcm9wcy5kYXRhLFxyXG4gICAgICBnYW1lTmFtZTogcHJvcHMuZGF0YS5nYW1lTmFtZSxcclxuICAgICAgcm9vbUlkOiBwcm9wcy5kYXRhLmlkLFxyXG4gICAgICBpc0dhbWVTdGFydDogZmFsc2VcclxuICAgIH07XHJcbiAgICB0aGlzLmhhbmRsZVJvb21DbGljayA9IHRoaXMuaGFuZGxlUm9vbUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHZhbGlkUm9vbVN0eWxlID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbnZhbGlkUm9vbVN0eWxlID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCJcclxuICAgIH07XHJcbiAgICBsZXQgc3R5bGU7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhLm51bWJlck9mU3Vic2NyaWJlcyA9PT0gdGhpcy5wcm9wcy5kYXRhLm51bVBsYXllclRvU3RhcnQpXHJcbiAgICAgIHN0eWxlID0gaW52YWxpZFJvb21TdHlsZTtcclxuICAgIGVsc2Ugc3R5bGUgPSB2YWxpZFJvb21TdHlsZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8cCBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlUm9vbUNsaWNrfT5cclxuICAgICAgICByb29tIG5hbWU6IHt0aGlzLnByb3BzLmRhdGEuZ2FtZU5hbWV9IHx8IG9wZW5lZCBieTp7XCIgXCJ9XHJcbiAgICAgICAge3RoaXMucHJvcHMuZGF0YS5ob3N0TmFtZX0gfHwgc3Vic2NyaWJlczp7XCIgXCJ9XHJcbiAgICAgICAge3RoaXMucHJvcHMuZGF0YS5udW1iZXJPZlN1YnNjcmliZXN9L3t0aGlzLnByb3BzLmRhdGEubnVtUGxheWVyVG9TdGFydH1cclxuICAgICAgPC9wPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJvb21DbGljayhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHRoaXMucHJvcHMuZGF0YS5udW1iZXJPZlN1YnNjcmliZXMgPCB0aGlzLnByb3BzLmRhdGEubnVtUGxheWVyVG9TdGFydCkge1xyXG4gICAgICB0aGlzLmFkZEN1cnJVc2VyVG9UaGlzUm9vbSgpO1xyXG4gICAgICB0aGlzLnByb3BzLmhhbmRsZUpvaW5Ub0dhbWUodGhpcy5zdGF0ZS5nYW1lTmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRDdXJyVXNlclRvVGhpc1Jvb20oKSB7XHJcbiAgICBmZXRjaChcIi9nYW1lcy9hZGRVc2VyXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHJvb21JZDogdGhpcy5zdGF0ZS5yb29tSWQsXHJcbiAgICAgICAgZ2FtZU5hbWU6IHRoaXMuc3RhdGUuZ2FtZU5hbWUsXHJcbiAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5uYW1lXHJcbiAgICAgIH0pLFxyXG4gICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCJcclxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XHJcbiAgICAgICAgICAgIGVyck1lc3NhZ2U6IFwiVW5hYmxlIHRvIGFkZCB0aGUgdXNlciwgdG8gdGhlIHJvb20uXCJcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9HYW1lT2JqTGlzdC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7IGhvc3RuYW1lIH0gZnJvbSBcIm9zXCI7XHJcblxyXG5jbGFzcyBHYW1lRGF0YSB7XHJcbiAgY29uc3RydWN0b3IoaV9Ib3N0TmFtZSwgaV9Ib3N0SWQsIGlfR2FtZU5hbWUsIGlfTnVtUGxheWVyVG9TdGFydCkge1xyXG4gICAgdGhpcy5pZCA9IGlfSG9zdElkO1xyXG4gICAgdGhpcy5nYW1lTmFtZSA9IGlfR2FtZU5hbWU7XHJcbiAgICB0aGlzLm51bVBsYXllclRvU3RhcnQgPSBpX051bVBsYXllclRvU3RhcnQ7XHJcbiAgICB0aGlzLm51bWJlck9mU3Vic2NyaWJlcyA9IDA7XHJcbiAgICB0aGlzLmlzR2FtZVN0YXJ0ID0gZmFsc2U7XHJcbiAgICB0aGlzLnN1YnNjcmliZXNMaXN0ID0gbmV3IEFycmF5KGlfTnVtUGxheWVyVG9TdGFydCk7XHJcbiAgICB0aGlzLnN1YnNjcmliZXNMaXN0WzBdID0gaV9Ib3N0SWQ7XHJcbiAgICB0aGlzLmhvc3ROYW1lID0gaV9Ib3N0TmFtZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0dhbWVNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBlcnJNZXNzYWdlOiBcIlwiLFxyXG4gICAgICBob3N0TmFtZTogcHJvcHMuY3VycmVudFVzZXIubmFtZVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUdhbWVSb29tQ3JlYXRvciA9IHRoaXMuaGFuZGxlR2FtZVJvb21DcmVhdG9yLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1nYW1lLWRpdlwiPlxyXG4gICAgICAgIDxmb3JtXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJuZXctZ2FtZS13cmFwcGVyXCJcclxuICAgICAgICAgIG9uU3VibWl0PXt0aGlzLmhhbmRsZUdhbWVSb29tQ3JlYXRvcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibmV3R2FtZS1pbnB1dC1sYWJlbFwiIGh0bWxGb3I9XCJ1c2VyTmFtZVwiPlxyXG4gICAgICAgICAgICByb29tIG5hbWU6e1wiIFwifVxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJuZXdHYW1lLWlucHV0XCIgbmFtZT1cImdhbWVOYW1lXCIgLz5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJuZXdHYW1lLWlucHV0LWxhYmVsXCIgaHRtbEZvcj1cInVzZXJOYW1lXCI+XHJcbiAgICAgICAgICAgIG51bSBvZiBwbGF5ZXJzOntcIiBcIn1cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8cD5BbW91bnQgb2YgbWVtYmVyczo8L3A+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuZXdHYW1lLWlucHV0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibnVtT2ZQbGF5ZXJzXCJcclxuICAgICAgICAgICAgICB2YWx1ZT1cIjJcIlxyXG4gICAgICAgICAgICAgIGlkPVwicjFcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAyXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmV3R2FtZS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm51bU9mUGxheWVyc1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCIzXCJcclxuICAgICAgICAgICAgICBpZD1cInIyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgM1xyXG4gICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJjb25maXJtXCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAge3RoaXMucmVuZGVyRXJyb3JNZXNzYWdlKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckVycm9yTWVzc2FnZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmVyck1lc3NhZ2UpIHtcclxuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZXJyb3ItbWVzc2FnZVwiPnt0aGlzLnN0YXRlLmVyck1lc3NhZ2V9PC9kaXY+O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVHYW1lUm9vbUNyZWF0b3IoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZ2FtZU5hbWUgPSBlLnRhcmdldC5lbGVtZW50cy5nYW1lTmFtZS52YWx1ZTtcclxuICAgIGNvbnN0IG51bU9mUGxheWVycyA9IGUudGFyZ2V0LmVsZW1lbnRzLm51bU9mUGxheWVycy52YWx1ZTtcclxuICAgIGxldCBnYW1lT2JqID0gbmV3IEdhbWVEYXRhKFxyXG4gICAgICB0aGlzLnByb3BzLmN1cnJlbnRVc2VyLm5hbWUsXHJcbiAgICAgIHRoaXMucHJvcHMuY3VycmVudFVzZXIuaWQsXHJcbiAgICAgIGdhbWVOYW1lLFxyXG4gICAgICBudW1PZlBsYXllcnNcclxuICAgICk7XHJcbiAgICBmZXRjaChcIi9nYW1lcy9hZGRHYW1lXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZ2FtZU9iaiksXHJcbiAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIlxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XHJcbiAgICAgICAgICAgICAgZXJyTWVzc2FnZTogXCIgR2FtZSBuYW1lIGFscmVhZHkgZXhpc3QsIG9yIHlvdSBob3N0IG9mIG90aGVyIHJvb21cIlxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnByb3BzLmNyZWF0ZU5ld0dhbWVFcnJvckhhbmRsZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMucHJvcHMuY3JlYXRlTmV3R2FtZVN1Y2Nlc3NIYW5kbGVyKGdhbWVOYW1lKSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL05ld0dhbWVNb2RhbC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCb2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb2FyZC5qc3hcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FydC5qc3hcIjtcclxuaW1wb3J0IFRpbWVyIGZyb20gXCIuLi9jb21wb25lbnRzL1RpbWVyLmpzeFwiO1xyXG5pbXBvcnQgU3RhdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3RhdHMuanN4XCI7XHJcbmNvbnN0IE1hbmFnZXIgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL01hbmFnZXJcIik7XHJcbmltcG9ydCBcIi4uL3N0eWxlL0dhbWVTdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGUvc3R5bGUyLmNzc1wiO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCBDaGF0Q29udGFpbmVyIGZyb20gXCIuL0NoYXRDb250YWluZXIuanN4XCI7XHJcblxyXG5jb25zdCBnZXRJbml0aWFsU3RhdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW5pdGlhbEJvYXJkID0gTWFuYWdlci5zZXRJbml0aWFsQm9hcmQoNTcpO1xyXG4gIGNvbnN0IGluaXRpYWxWYWxpZExvY2F0aW9uID0gTWFuYWdlci5jcmVhdGVFbXB0eVZhbGlkTG9jYXRpb25zKCk7XHJcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZ2FtZURhdGE6IG51bGwsXHJcbiAgICBib2FyZE1hcDogaW5pdGlhbEJvYXJkLFxyXG4gICAgdmFsaWRMb2NhdGlvbnNBcnJheTogaW5pdGlhbFZhbGlkTG9jYXRpb24sXHJcbiAgICBjYXJ0TWFwOiBbXSxcclxuICAgIHNlbGVjdGVkQ2FyZDogbnVsbCxcclxuICAgIGN1cnJlbnRTY29yZTogMCxcclxuICAgIHR1cm46IDAsXHJcbiAgICB3aXRoZHJhd2FsczogMCxcclxuICAgIG51bU9mUGllY2U6IDAsXHJcbiAgICBhdmVyYWdlOiB7IG1pbnV0ZXM6IDAsIHNlY29uZHM6IDAgfSxcclxuICAgIHRpbWVUb0Rpc3BsYXk6IG51bGwsXHJcbiAgICBpc0FsbFBsYXllcnNJblJvb206IGZhbHNlLFxyXG4gICAgaXNHYW1lU3RhcnRlZDogZmFsc2UsXHJcbiAgICBpc1VzZXJEb25lOiBmYWxzZSxcclxuICAgIGlzR2FtZURvbmU6IGZhbHNlLFxyXG4gICAgaXNNeVR1cm46IGZhbHNlLFxyXG4gICAgaXNIb3N0OiBmYWxzZSxcclxuICAgIG51bWJlck9mU3Vic2NyaWJlczogMCxcclxuICAgIHVzZXJzTmFtZXNJbkdhbWU6IFtdLFxyXG4gICAgdXNlcnNSb29tRGF0YTogbnVsbCxcclxuICAgIGN1cnJlbnRQbGF5ZXJOYW1lOiBcIlwiLFxyXG4gICAgaXNXaW46IGZhbHNlLFxyXG4gICAgaXNMb3N0OiBmYWxzZSxcclxuICAgIGlzTW92ZUV4aXN0OiB0cnVlLFxyXG4gICAgd2luTmFtZTogbnVsbCxcclxuICAgIGxvc3ROYW1lOiBudWxsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSBnZXRJbml0aWFsU3RhdGUoKTtcclxuICAgIFxyXG4gICAgdGhpcy5nZXRHYW1lRGF0YU9ialRvU2V0U3RhdGU9dGhpcy5nZXRHYW1lRGF0YU9ialRvU2V0U3RhdGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZ2V0VXBkYXRlZFN0YXRzT2JqPXRoaXMuZ2V0VXBkYXRlZFN0YXRzT2JqLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmdldEdhbWVEYXRhPXRoaXMuZ2V0R2FtZURhdGEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZ2V0VXNlckRhdGE9dGhpcy5nZXRVc2VyRGF0YS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mZXRjaFVzZXJzUm9vbURhdGEgPSB0aGlzLmZldGNoVXNlcnNSb29tRGF0YS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVEcmF3QnV0dG9uID0gdGhpcy5oYW5kbGVEcmF3QnV0dG9uLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZldGNoSXNIb3N0ID0gdGhpcy5mZXRjaElzSG9zdC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVFeGl0QnV0dG9uID0gdGhpcy5oYW5kbGVFeGl0QnV0dG9uLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVJlbW92ZUJ1dHRvbiA9IHRoaXMuaGFuZGxlUmVtb3ZlQnV0dG9uLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVdpbkV4aXRUb0xvYmJ5ID0gdGhpcy5oYW5kbGVXaW5FeGl0VG9Mb2JieS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVJc0N1cnJVc2VySW5Sb29tID0gdGhpcy5oYW5kbGVJc0N1cnJVc2VySW5Sb29tLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZldGNoQ2FydCA9IHRoaXMuZmV0Y2hDYXJ0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmlzVGhlRmlyc3RUdXJuID0gdGhpcy5pc1RoZUZpcnN0VHVybi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mZXRjaFBvc3RTdGF0cyA9IHRoaXMuZmV0Y2hQb3N0U3RhdHMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaXNDYXJ0RW1wdHkgPSB0aGlzLmlzQ2FydEVtcHR5LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVJlc2V0R2FtZSA9IHRoaXMuaGFuZGxlUmVzZXRHYW1lLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmlzRXhpc3RQaWVjZUZvclZhbGlkU3F1YXJlcyA9IHRoaXMuaXNFeGlzdFBpZWNlRm9yVmFsaWRTcXVhcmVzLmJpbmQoXHJcbiAgICAgIHRoaXNcclxuICAgICk7XHJcbiAgICB0aGlzLmZldGNoTmV4dFR1cm4gPSB0aGlzLmZldGNoTmV4dFR1cm4uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZ2V0VHVybkR1cmF0aW9uID0gdGhpcy5nZXRUdXJuRHVyYXRpb24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY2FydEVtcHR5RmxhZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5jdXJyZW50VGltZSA9IHsgbWludXRlczogMCwgc2Vjb25kczogMCB9O1xyXG4gICAgdGhpcy5sYXN0UGllY2VUaW1lID0geyBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH07XHJcbiAgICB0aGlzLmlzVGltZXJSZXNldE5lZWRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzQ3VycmVudFVzZXJHb3RDYXJ0ID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzVXNlclVwZGF0ZWRTdGF0cyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgZHJhd0J1dHRvbiA9IChcclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRHJhd0J1dHRvbn0+XHJcbiAgICAgICAge1wiIFwifVxyXG4gICAgICAgIERyYXdcclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gdGhpcy5jcmVhdGVSZW1vdmVCdXR0b24oKTtcclxuICAgIGNvbnN0IGV4aXRCdXR0b24gPSB0aGlzLmNyZWF0ZUV4aXRCdXR0b24oKTtcclxuICAgIGNvbnN0IG9iaiA9IHRoaXMuY3JlYXRlR2FtZVNlbnRlbmNlcygpO1xyXG4gICAgY29uc3QgZ2FtZVN0YXJ0U2VudGVuY2UgPSBvYmouZ2FtZVN0YXJ0U2VudGVuY2U7XHJcbiAgICBjb25zdCBnYW1lU2VudGVuY2UgPSBvYmouZ2FtZVNlbnRlbmNlO1xyXG4gICAgY29uc3QgZ2FtZVR1cm5zU2VudGVuY2UgPSBvYmouZ2FtZVR1cm5zU2VudGVuY2U7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBrZXk9XCJob21lQ29udGFpbmVyXCIgaWQ9XCJob21lQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBrZXk9XCJ1c2VyLWluZm8tYXJlYS1pbi1nYW1lXCIgY2xhc3NOYW1lPVwidXNlci1pbmZvLWFyZWFcIj5cclxuICAgICAgICAgIEhlbGxvIHt0aGlzLnByb3BzLm5hbWV9XHJcbiAgICAgICAgICB7ZXhpdEJ1dHRvbn1cclxuICAgICAgICAgIHtyZW1vdmVCdXR0b259XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJnYW1lQW5kRGF0YUZsZXhcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJyb29tRGF0YVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyb29tVGV4dFwiIGtleT1cImdhbWUtcm9vbS1uYW1lLXRpdGxlLWluLWdhbWVcIj5cclxuICAgICAgICAgICAgICBnYW1lIHJvb20gbmFtZTp7dGhpcy5wcm9wcy5jdXJyZW50Um9vbU5hbWV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicm9vbVRleHRcIiBrZXk9XCJnYW1lLXJvb20tZ2FtZVVzZXJzTGlzdFwiPlxyXG4gICAgICAgICAgICAgIHVzZXJzIGluIHJvb206XHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDx1bCBrZXk9XCJnYW1lVXNlcnNMaXN0XCI+XHJcbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUudXNlcnNOYW1lc0luR2FtZSkubWFwKChpZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3RoaXMuc3RhdGUudXNlcnNOYW1lc0luR2FtZVtpZF0ubmFtZSArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudXNlcnNOYW1lc0luR2FtZVtpZF0ubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8Q2hhdENvbnRhaW5lclxyXG4gICAgICAgICAgICAgIGlzVXNlckNvbm5lY3RlZD17IXRoaXMuc3RhdGUuaXNHYW1lRG9uZX1cclxuICAgICAgICAgICAgICBrZXk9XCJDaGF0Q29udGFpbmVyLWxvYmJ5XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJnYW1lRnJhbWVcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInN0YXRzRnJhbWVcIj5cclxuICAgICAgICAgICAgICB7Z2FtZVN0YXJ0U2VudGVuY2V9XHJcbiAgICAgICAgICAgICAgPFRpbWVyXHJcbiAgICAgICAgICAgICAgICBpZD1cInRpbWVyXCJcclxuICAgICAgICAgICAgICAgIHNlbmRDdXJyZW50VGltZT17KG0sIHMpID0+IHRoaXMuc2F2ZUN1cnJlbnRUaW1lKG0sIHMpfVxyXG4gICAgICAgICAgICAgICAgaXNSZXNldE5lZWRlZD17dGhpcy5pc1RpbWVyUmVzZXROZWVkZWR9XHJcbiAgICAgICAgICAgICAgICBpc0dhbWVTdGFydGVkPXt0aGlzLnN0YXRlLmlzR2FtZVN0YXJ0ZWR9XHJcbiAgICAgICAgICAgICAgICBpc0dhbWVEb25lPXt0aGlzLnN0YXRlLmlzR2FtZURvbmV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8U3RhdHNcclxuICAgICAgICAgICAgICAgIGlkPVwic3RhdGlzdGljc1wiXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2NvcmU9e3RoaXMuc3RhdGUuY3VycmVudFNjb3JlfVxyXG4gICAgICAgICAgICAgICAgdHVybj17dGhpcy5zdGF0ZS50dXJufVxyXG4gICAgICAgICAgICAgICAgd2l0aGRyYXdhbHM9e3RoaXMuc3RhdGUud2l0aGRyYXdhbHN9XHJcbiAgICAgICAgICAgICAgICBhdmVyYWdlPXt0aGlzLnN0YXRlLmF2ZXJhZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJib2FyZEZyYW1lXCI+XHJcbiAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICBjZWxscz17dGhpcy5zdGF0ZS5ib2FyZE1hcH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhpLCBqKSA9PiB0aGlzLmhhbmRsZUJvYXJkQ2xpY2soaSwgail9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJ0RnJhbWVcIj5cclxuICAgICAgICAgICAgICA8Q2FydFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjYXJ0U3R5bGVcIlxyXG4gICAgICAgICAgICAgICAgY2FydD17dGhpcy5zdGF0ZS5jYXJ0TWFwfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGksIHZhbHVlKSA9PiB0aGlzLmhhbmRsZUNhcnRDbGljayhpLCB2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtkcmF3QnV0dG9ufVxyXG4gICAgICAgICAgICB7Z2FtZVR1cm5zU2VudGVuY2V9XHJcbiAgICAgICAgICAgIHtnYW1lU2VudGVuY2V9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaXNFeGlzdFBpZWNlRm9yVmFsaWRTcXVhcmVzKGNhcnRNYXApIHtcclxuICAgIGxldCBpc0V4aXN0ID0gZmFsc2U7XHJcbiAgICBsZXQgY2FyZHMgPSBuZXcgQXJyYXkoNyk7XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNHYW1lU3RhcnRlZCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnRNYXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoY2FydE1hcFtpXSkge1xyXG4gICAgICAgICAgY2FyZHNbY2FydE1hcFtpXS5zaWRlMV0gPSB0cnVlO1xyXG4gICAgICAgICAgY2FyZHNbY2FydE1hcFtpXS5zaWRlMl0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDc7IGorKykge1xyXG4gICAgICAgIGxldCBudW0gPSB0aGlzLnN0YXRlLnZhbGlkTG9jYXRpb25zQXJyYXlbal0ubGVuZ3RoO1xyXG4gICAgICAgIGlmIChjYXJkc1tqXSAmJiBudW0gPiAwKSB7XHJcbiAgICAgICAgICBpc0V4aXN0ID0gdHJ1ZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc0V4aXN0O1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRXhpdEJ1dHRvbigpIHtcclxuICAgIGxldCBleGl0QnV0dG9uID0gbnVsbDtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5pc0FsbFBsYXllcnNJblJvb20gfHwgdGhpcy5zdGF0ZS5pc0dhbWVEb25lKSB7XHJcbiAgICAgIGV4aXRCdXR0b24gPSAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAga2V5PVwiZXhpdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvdXQgYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIlxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVFeGl0QnV0dG9ufVxyXG4gICAgICAgID5cclxuICAgICAgICAgIGV4aXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICF0aGlzLnN0YXRlLmlzR2FtZURvbmUgJiZcclxuICAgICAgdGhpcy5zdGF0ZS5pc1VzZXJEb25lICYmXHJcbiAgICAgIHRoaXMuc3RhdGUuaXNXaW5cclxuICAgICkge1xyXG4gICAgICBleGl0QnV0dG9uID0gKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGtleT1cImV4aXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibG9nb3V0IGJ0biBidG4tb3V0bGluZS1kYXJrXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlV2luRXhpdFRvTG9iYnl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgZXhpdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV4aXRCdXR0b247XHJcbiAgfVxyXG5cclxuICBjcmVhdGVSZW1vdmVCdXR0b24oKSB7XHJcbiAgICBsZXQgcmVtb3ZlQnV0dG9uID0gbnVsbDtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5zdGF0ZS5pc0hvc3QgJiZcclxuICAgICAgKHRoaXMuc3RhdGUubnVtYmVyT2ZTdWJzY3JpYmVzID09PSAxIHx8IHRoaXMuc3RhdGUuaXNHYW1lRG9uZSlcclxuICAgICkge1xyXG4gICAgICByZW1vdmVCdXR0b24gPSAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAga2V5PVwiZXhpdEFuZFJlbW92ZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvdXQgYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIlxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmVCdXR0b259XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgcmVtb3ZlIGdhbWVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZW1vdmVCdXR0b247XHJcbiAgfVxyXG5cclxuICBjcmVhdGVHYW1lU2VudGVuY2VzKCkge1xyXG4gICAgbGV0IGdhbWVTdGFydFNlbnRlbmNlID0gbnVsbDtcclxuICAgIGxldCBnYW1lU2VudGVuY2UgPSBudWxsO1xyXG4gICAgbGV0IGdhbWVUdXJuc1NlbnRlbmNlID0gbnVsbDtcclxuXHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNHYW1lRG9uZSAmJiB0aGlzLnN0YXRlLmlzR2FtZVN0YXJ0ZWQpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudHVybiA9PT0gMCkge1xyXG4gICAgICAgIGdhbWVTdGFydFNlbnRlbmNlID0gPHA+dGhlIGdhbWUgc3RhcnRlZCEhISA8L3A+O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdhbWVTdGFydFNlbnRlbmNlID0gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzTXlUdXJuKSB7XHJcbiAgICAgICAgZ2FtZVR1cm5zU2VudGVuY2UgPSA8cD5pdCdzIHt0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXJOYW1lfSB0dXJuIDwvcD47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZ2FtZVR1cm5zU2VudGVuY2UgPSA8cD5pdCdzIHlvdXIgdHVybiEgPC9wPjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zdGF0ZS5pc0FsbFBsYXllcnNJblJvb20pIHtcclxuICAgICAgZ2FtZVR1cm5zU2VudGVuY2UgPSA8cD53ZSB3YWl0aW5nIGZvciBtb3JlIHBsYXllcnMgPC9wPjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0dhbWVTdGFydGVkKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmlzVXNlckRvbmUgJiYgdGhpcy5zdGF0ZS5pc1dpbikge1xyXG4gICAgICAgIGdhbWVTZW50ZW5jZSA9IDxwPllPVSBXSU4hISE8L3A+O1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuaXNHYW1lRG9uZSAmJiB0aGlzLnN0YXRlLmlzTG9zdCkge1xyXG4gICAgICAgIGdhbWVTZW50ZW5jZSA9IDxwPllPVSBMT1NUOig8L3A+O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZ2FtZVN0YXJ0U2VudGVuY2U6IGdhbWVTdGFydFNlbnRlbmNlLFxyXG4gICAgICBnYW1lVHVybnNTZW50ZW5jZTogZ2FtZVR1cm5zU2VudGVuY2UsXHJcbiAgICAgIGdhbWVTZW50ZW5jZTogZ2FtZVNlbnRlbmNlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaXNUaGVGaXJzdFR1cm4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5ib2FyZE1hcFsyOF1bMjhdLnZhbGlkO1xyXG4gIH1cclxuXHJcbiAgZ2V0VHVybkR1cmF0aW9uKCkge1xyXG4gICAgY29uc3QgdHVybkxlbmd0aCA9IHtcclxuICAgICAgbWludXRlczogdGhpcy5jdXJyZW50VGltZS5taW51dGVzIC0gdGhpcy5sYXN0UGllY2VUaW1lLm1pbnV0ZXMsXHJcbiAgICAgIHNlY29uZHM6IHRoaXMuY3VycmVudFRpbWUuc2Vjb25kcyAtIHRoaXMubGFzdFBpZWNlVGltZS5zZWNvbmRzXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0dXJuTGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUN1cnJlbnRUaW1lKG0sIHMpIHtcclxuICAgIHRoaXMuY3VycmVudFRpbWUgPSB7IG1pbnV0ZXM6IG0sIHNlY29uZHM6IHMgfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUV4aXRCdXR0b24oKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAoKSA9PiAoeyBpc0dhbWVTdGFydGVkOiBmYWxzZSwgaXNHYW1lRG9uZTogdHJ1ZSB9KSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZXhpdFRvTG9iYnlIYW5kbGVyKCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVXaW5FeGl0VG9Mb2JieSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICgpID0+ICh7IGlzR2FtZVN0YXJ0ZWQ6IGZhbHNlLCBpc0dhbWVEb25lOiB0cnVlIH0pLFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy53aW5FeGl0VG9Mb2JieUhhbmRsZXIoKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlbW92ZUJ1dHRvbigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICgpID0+ICh7IGlzR2FtZVN0YXJ0ZWQ6IGZhbHNlLCBpc0dhbWVEb25lOiB0cnVlIH0pLFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVBbmRFeGl0SGFuZGxlcigpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhd0J1dHRvbigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmlzTXlUdXJuICYmIHRoaXMuc3RhdGUuaXNHYW1lU3RhcnRlZCkge1xyXG4gICAgICByZXR1cm4gZmV0Y2goXCIvZ2FtZXMvZ2V0Q2FyZFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIlxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZG9taW5vID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2FydE1hcCA9IFsuLi5wcmV2U3RhdGUuY2FydE1hcF07XHJcbiAgICAgICAgICAgIGxldCBfaXNFeGlzdFBpZWNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3QgbmV3V2l0aGRyYXdhbHMgPSBwcmV2U3RhdGUud2l0aGRyYXdhbHMgKyAxO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUdXJuID0gcHJldlN0YXRlLnR1cm4gKyAxO1xyXG5cclxuICAgICAgICAgICAgbGV0IGlzVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKEpTT04ucGFyc2UoZG9taW5vKS5jYXJkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgY2FydE1hcC5wdXNoKEpTT04ucGFyc2UoZG9taW5vKS5jYXJkKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAhdGhpcy5pc1RoZUZpcnN0VHVybigpICYmXHJcbiAgICAgICAgICAgICAgKCF0aGlzLmlzRXhpc3RQaWVjZUZvclZhbGlkU3F1YXJlcyhjYXJ0TWFwKSAmJlxyXG4gICAgICAgICAgICAgICAgSlNPTi5wYXJzZShkb21pbm8pLmNhcmQgPT09IG51bGwpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIF9pc0V4aXN0UGllY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzTW92ZUV4aXN0Q2hhbmdlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHByZXZTdGF0ZS5pc01vdmVFeGlzdCAhPT0gX2lzRXhpc3RQaWVjZSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNNb3ZlRXhpc3RDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpc01vdmVFeGlzdENoYW5nZWQ6IFwiICsgdGhpcy5pc01vdmVFeGlzdENoYW5nZWQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB3aXRoZHJhd2FsczogbmV3V2l0aGRyYXdhbHMsXHJcbiAgICAgICAgICAgICAgY2FydE1hcDogY2FydE1hcCxcclxuICAgICAgICAgICAgICBpc1VzZXJEb25lOiBpc1VzZXJEb25lLFxyXG4gICAgICAgICAgICAgIHR1cm46IG5ld1R1cm5cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaFBvc3RTdGF0cygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaE5leHRUdXJuKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmZXRjaE5leHRUdXJuKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKFwiL2dhbWVzL21vdmVUb05leHRUdXJuXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiXHJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IHJlc3BvbnNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKHRoaXMudGltZW91dElkKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50aW1lb3V0SWQyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZDIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuX2lzTW91bnRlZCkge1xyXG4gICAgdGhpcy5nZXRHYW1lRGF0YSgpO1xyXG4gICAgdGhpcy5mZXRjaFVzZXJzUm9vbURhdGEoKTtcclxuICAgIHRoaXMuZmV0Y2hJc0hvc3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZldGNoQ2FydCgpIHtcclxuICAgIHJldHVybiBmZXRjaChcIi9nYW1lcy9nZXRDYXJ0XCIsIHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCJcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyByZXNwb25zZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oY2FydCA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnRNYXA6IEpTT04ucGFyc2UoY2FydCkuY2FydCB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyRGF0YSgpIHtcclxuICAgIGNvbnN0IGludGVydmFsID0gMjAwMDtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5pc0dhbWVEb25lKSB7XHJcbiAgICAgIHJldHVybiBmZXRjaChcIi9nYW1lcy91c2VyRGF0YVwiLCB7IG1ldGhvZDogXCJHRVRcIiwgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICB0aHJvdyByZXNwb25zZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMudGltZW91dElkNSA9IHNldFRpbWVvdXQodGhpcy5nZXRVc2VyRGF0YSwgaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHVzZXJEYXRhID0+IHtcclxuICAgICAgICBsZXQgX2lzR2FtZVN0YXJ0ZWQ9dGhpcy5zdGF0ZS5pc0dhbWVTdGFydGVkO1xyXG4gICAgICAgIGxldCBfaXNHYW1lRG9uZT10aGlzLnN0YXRlLmlzR2FtZURvbmU7XHJcbiAgICAgICAgbGV0IGlzQ3VyclVzZXJJblJvb209IEpTT04ucGFyc2UodXNlckRhdGEucm9vbUlkKS5pZCAhPT0gXCJcIjtcclxuICAgICAgICBpZiAoIWlzQ3VyclVzZXJJblJvb20pIFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBfaXNHYW1lU3RhcnRlZD1mYWxzZTtcclxuICAgICAgICAgICAgX2lzR2FtZURvbmU9dHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XHJcbiAgICAgICAgICAgIGlzTXlUdXJuOiB1c2VyRGF0YS5pc015VHVybixcclxuICAgICAgICAgICAgaXNHYW1lU3RhcnRlZDogX2lzR2FtZVN0YXJ0ZWQsXHJcbiAgICAgICAgICAgIGlzR2FtZURvbmU6IF9pc0dhbWVEb25lLFxyXG4gICAgICAgICAgICBjdXJyZW50UGxheWVyTmFtZTogdXNlckRhdGEuY3VycmVudFBsYXllck5hbWVcclxuICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICBpZighaXNDdXJyVXNlckluUm9vbSlcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVJc0N1cnJVc2VySW5Sb29tKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJc0N1cnJVc2VySW5Sb29tKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xyXG4gICAgICBpc0dhbWVTdGFydGVkOiBmYWxzZSxcclxuICAgICAgaXNHYW1lRG9uZTogdHJ1ZVxyXG4gICAgfSkpO1xyXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVJc0N1cnJVc2VySW5Sb29tKCk7XHJcbiAgfVxyXG5cclxuICBmZXRjaElzSG9zdCgpIHtcclxuICAgIHJldHVybiBmZXRjaChcIi9nYW1lcy9pc0hvc3RcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIlxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihpc1VzZXJIb3N0ID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGlzSG9zdDogSlNPTi5wYXJzZShpc1VzZXJIb3N0KSB9KSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBnZXRHYW1lRGF0YSgpe1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSAyMDAwO1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzR2FtZURvbmUpIHtcclxuICAgICAgcmV0dXJuIGZldGNoKFwiL2dhbWVzL215Um9vbURhdGFcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCJcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy50aW1lb3V0SWQyID0gc2V0VGltZW91dCh0aGlzLmdldEdhbWVEYXRhLCBpbnRlcnZhbCk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pLnRoZW4oc2VydmVyT3V0cHV0ID0+IHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc3QgX2dhbWVEYXRhID0gSlNPTi5wYXJzZShzZXJ2ZXJPdXRwdXQpO1xyXG4gICAgICAgICAgY29uc3QgaXNDdXJyVXNlckluUm9vbT0gSlNPTi5wYXJzZShfZ2FtZURhdGEudXNlckRhdGEucm9vbUlkKS5pZCAhPT0gXCJcIjtcclxuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRTdGF0c09iaiA9IHRoaXMuZ2V0VXBkYXRlZFN0YXRzT2JqKF9nYW1lRGF0YSk7XHJcbiAgICAgICAgICBjb25zdCBnYW1lRGF0YU9ialRvU2V0U3RhdGUgPSB0aGlzLmdldEdhbWVEYXRhT2JqVG9TZXRTdGF0ZShfZ2FtZURhdGEpO1xyXG4gICAgICAgICAgY29uc3QgbmV3U3RhdGU9T2JqZWN0LmFzc2lnbih1cGRhdGVkU3RhdHNPYmosZ2FtZURhdGFPYmpUb1NldFN0YXRlKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+IChuZXdTdGF0ZSkpO1xyXG4gICAgICAgICAgaWYoIWlzQ3VyclVzZXJJblJvb20pXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGFuZGxlSXNDdXJyVXNlckluUm9vbSgpO1xyXG4gICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0dhbWVEb25lKSB7XHJcbiAgICAgICAgICAgICgoKSA9PiB0aGlzLmZldGNoQW1JV2luT3JMb3N0KCkpKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7O1xyXG4gIH1cclxuICB9XHJcblxyXG4gIGdldFVwZGF0ZWRTdGF0c09iaihfZ2FtZURhdGEpIFxyXG4gIHtcclxuICAgY29uc3QgbnVtT2ZQaWVjZUluU3RhY2sgPSBfZ2FtZURhdGEubnVtT2ZQaWVjZTtcclxuICAgbGV0IF9pc0dhbWVEb25lPXRoaXMuc3RhdGUuaXNHYW1lRG9uZTtcclxuICAgbGV0IF9pc0dhbWVTdGFydGVkPXRoaXMuc3RhdGUuaXNHYW1lU3RhcnRlZDtcclxuICAgbGV0IF9pc01vdmVFeGlzdCA9IHRydWU7XHJcbiAgIGNvbnN0IGlzQ3VyclVzZXJJblJvb209IEpTT04ucGFyc2UoX2dhbWVEYXRhLnVzZXJEYXRhLnJvb21JZCkuaWQgIT09IFwiXCI7XHJcbiBcclxuICAgaWYgKFxyXG4gICAgICF0aGlzLmlzRXhpc3RQaWVjZUZvclZhbGlkU3F1YXJlcyhbLi4udGhpcy5zdGF0ZS5jYXJ0TWFwXSkgJiZcclxuICAgICBudW1PZlBpZWNlSW5TdGFjayA9PT0gMCAmJlxyXG4gICAgICF0aGlzLmlzVGhlRmlyc3RUdXJuKClcclxuICAgKSB7XHJcbiAgICAgX2lzTW92ZUV4aXN0ID0gZmFsc2U7XHJcbiAgIH1cclxuIFxyXG4gICBpZiAodGhpcy5zdGF0ZS5pc0dhbWVTdGFydGVkKSBcclxuICAge1xyXG4gICAgIF9pc0dhbWVEb25lPV9nYW1lRGF0YS5pc0dhbWVEb25lO1xyXG4gICB9XHJcbiAgIGlmICghaXNDdXJyVXNlckluUm9vbSkgXHJcbiAgICAge1xyXG4gICAgICAgX2lzR2FtZVN0YXJ0ZWQ9ZmFsc2U7XHJcbiAgICAgICBfaXNHYW1lRG9uZT10cnVlO1xyXG4gICAgIH1cclxuIFxyXG4gICAgIHJldHVybiB7XHJcbiAgICAgICBpc0dhbWVTdGFydGVkOiBfaXNHYW1lU3RhcnRlZCxcclxuICAgICAgIGlzR2FtZURvbmU6IF9pc0dhbWVEb25lLFxyXG4gICAgICAgaXNNb3ZlRXhpc3Q6IF9pc01vdmVFeGlzdCxcclxuICAgICB9O1xyXG4gIH1cclxuIFxyXG4gIGdldEdhbWVEYXRhT2JqVG9TZXRTdGF0ZShfZ2FtZURhdGEpXHJcbiAge1xyXG4gICAgIHJldHVybntcclxuICAgICAgIGdhbWVEYXRhOl9nYW1lRGF0YSxcclxuICAgICAgIGJvYXJkTWFwOiBfZ2FtZURhdGEuYm9hcmRNYXAsXHJcbiAgICAgICB2YWxpZExvY2F0aW9uc0FycmF5OiBfZ2FtZURhdGEudmFsaWRMb2NhdGlvbnNBcnJheSxcclxuICAgICAgIG51bU9mUGllY2U6IF9nYW1lRGF0YS5udW1PZlBpZWNlLFxyXG4gICAgICAgaXNNeVR1cm46IF9nYW1lRGF0YS51c2VyRGF0YS5pc015VHVybixcclxuICAgICAgIGN1cnJlbnRQbGF5ZXJOYW1lOiBfZ2FtZURhdGEudXNlckRhdGEuY3VycmVudFBsYXllck5hbWVcclxuICAgICB9O1xyXG4gICB9XHJcblxyXG4gIGZldGNoVXNlcnNSb29tRGF0YSgpIHtcclxuICAgIGNvbnN0IGludGVydmFsID0gMjAwMDtcclxuICAgIGlmICh0aGlzLnN0YXRlLmlzR2FtZURvbmUgfHwgIXRoaXMuc3RhdGUuaXNHYW1lU3RhcnRlZCkge1xyXG4gICAgICByZXR1cm4gZmV0Y2goXCIvZ2FtZXMvZ2V0VXNlcnNSb29tRGF0YVwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIlxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNHYW1lRG9uZSAmJiAhdGhpcy5zdGF0ZS5pc0dhbWVTdGFydGVkKVxyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZDIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgIHRoaXMuZmV0Y2hVc2Vyc1Jvb21EYXRhLFxyXG4gICAgICAgICAgICAgIGludGVydmFsXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHVzZXJzUm9vbURhdGEgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xyXG4gICAgICAgICAgICBpc0FsbFBsYXllcnNJblJvb206IHVzZXJzUm9vbURhdGEuaXNBbGxQbGF5ZXJzSW4sXHJcbiAgICAgICAgICAgIGlzR2FtZVN0YXJ0ZWQ6IHVzZXJzUm9vbURhdGEuaXNBbGxQbGF5ZXJzSW4sXHJcbiAgICAgICAgICAgIG51bWJlck9mU3Vic2NyaWJlczogdXNlcnNSb29tRGF0YS5udW1iZXJPZlN1YnNjcmliZXMsXHJcbiAgICAgICAgICAgIHVzZXJzTmFtZXNJbkdhbWU6IFsuLi51c2Vyc1Jvb21EYXRhLm5hbWVzXSxcclxuICAgICAgICAgICAgd2luTmFtZTogdXNlcnNSb29tRGF0YS53aW5OYW1lLFxyXG4gICAgICAgICAgICBsb3N0TmFtZTogdXNlcnNSb29tRGF0YS5sb3N0TmFtZSxcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzR2FtZURvbmUgJiYgdGhpcy5zdGF0ZS5pc0dhbWVTdGFydGVkKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmRVc2Vyc1Jvb21EYXRhVG9Ib21lKFxyXG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUsXHJcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2Vyc05hbWVzSW5HYW1lLFxyXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUud2luTmFtZSxcclxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxvc3ROYW1lXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgdGhpcy5oYW5kbGVSZXNldEdhbWUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5pc0N1cnJlbnRVc2VyR290Q2FydCAmJiB0aGlzLnN0YXRlLmlzQWxsUGxheWVyc0luUm9vbSkge1xyXG4gICAgICB0aGlzLmlzQ3VycmVudFVzZXJHb3RDYXJ0ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5mZXRjaENhcnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVJlc2V0R2FtZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmlzR2FtZURvbmUgJiYgdGhpcy5zdGF0ZS5pc0xvc3QpIHtcclxuICAgICAgcmV0dXJuIGZldGNoKFwiL2dhbWVzL3JlbW92ZUFsbFVzZXJzQW5kUmVzZXRHYW1lXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIlxyXG4gICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyByZXNwb25zZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmV0Y2hQb3N0U3RhdHMoKSB7XHJcbiAgICBjb25zdCBvYmpUb1Bvc3QgPSB7XHJcbiAgICAgIHR1cm46IHRoaXMuc3RhdGUudHVybixcclxuICAgICAgY3VycmVudFNjb3JlOiB0aGlzLnN0YXRlLmN1cnJlbnRTY29yZSxcclxuICAgICAgYXZlcmFnZTogdGhpcy5zdGF0ZS5hdmVyYWdlLFxyXG4gICAgICB3aXRoZHJhd2FsczogdGhpcy5zdGF0ZS53aXRoZHJhd2FscyxcclxuICAgICAgaXNDYXJ0RW1wdHk6IHRoaXMuaXNDYXJ0RW1wdHkoKSxcclxuICAgICAgaXNNb3ZlRXhpc3Q6IHRoaXMuc3RhdGUuaXNNb3ZlRXhpc3RcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGZldGNoKFwiL2dhbWVzL3Bvc3RTdGF0c1wiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9ialRvUG9zdCksXHJcbiAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIlxyXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyByZXNwb25zZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmZXRjaEFtSVdpbk9yTG9zdCgpIHtcclxuICAgIHJldHVybiBmZXRjaChcIi9nYW1lcy9hbUlXaW5Pckxvc3RcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIlxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihBbUlXaW5Pckxvc3QgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcclxuICAgICAgICAgIGlzVXNlckRvbmU6IHRydWUsXHJcbiAgICAgICAgICBpc1dpbjogQW1JV2luT3JMb3N0LndpbixcclxuICAgICAgICAgIGlzTG9zdDogQW1JV2luT3JMb3N0Lmxvc3RcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmZldGNoVXNlcnNSb29tRGF0YSgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNhcnRDbGljayhpbmRleENhcnQsIGNhcmQpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmlzR2FtZVN0YXJ0ZWQgJiYgdGhpcy5zdGF0ZS5pc015VHVybikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIiArIGluZGV4Q2FydCk7XHJcbiAgICAgIHRoaXMuaXNUaW1lclJlc2V0TmVlZGVkID0gZmFsc2U7XHJcbiAgICAgIGNvbnN0IGJvYXJkTWFwID0gdGhpcy5nZXRCb2FyZFdpdGhTaWduc0NlbGxzKFxyXG4gICAgICAgIFsuLi50aGlzLnN0YXRlLmJvYXJkTWFwXSxcclxuICAgICAgICBjYXJkXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBvYmpUb1Bvc3QgPSB7XHJcbiAgICAgICAgaXNVcGRhdGVWYWxpZExvY2F0aW9uOiBmYWxzZSxcclxuICAgICAgICBib2FyZE1hcDogYm9hcmRNYXAsXHJcbiAgICAgICAgY2FyZDogY2FyZFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgZmV0Y2goXCIvZ2FtZXMvdXBkYXRlVmFsaWRMb2NhdGlvbnNcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqVG9Qb3N0KSxcclxuICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCJcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBib2FyZE1hcCA9IHRoaXMuZ2V0Qm9hcmRXaXRoU2lnbnNDZWxscyhcclxuICAgICAgICAgICAgICBbLi4ucHJldlN0YXRlLmJvYXJkTWFwXSxcclxuICAgICAgICAgICAgICBjYXJkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHRoaXMuZ2V0VXBkYXRlZENhcnQoWy4uLnByZXZTdGF0ZS5jYXJ0TWFwXSwgaW5kZXhDYXJ0KTtcclxuICAgICAgICAgICAgY29uc3QgY2FydE1hcCA9IG9iai5jYXJ0TWFwO1xyXG4gICAgICAgICAgICBjb25zdCB0dXJuID0gb2JqLnR1cm47XHJcbiAgICAgICAgICAgLy8gY29uc3Qgd2l0aGRyYXdhbHMgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGJvYXJkTWFwOiBib2FyZE1hcCxcclxuICAgICAgICAgICAgICBjYXJ0TWFwOiBjYXJ0TWFwLFxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkQ2FyZDogeyB2YWx1ZTogY2FyZCwgaW5kZXg6IGluZGV4Q2FydCB9LFxyXG4gICAgICAgICAgICAgIHR1cm46IHR1cm4vLyxcclxuICAgICAgICAgICAgLy8gIHdpdGhkcmF3YWxzOiB3aXRoZHJhd2Fsc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRVcGRhdGVkQ2FydChjYXJ0TWFwLCBpbmRleENhcnQpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydE1hcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoY2FydE1hcFtpXS52YWxpZCkgY2FydE1hcFtpXS52YWxpZCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNhcnRNYXBbaW5kZXhDYXJ0XS52YWxpZCA9IHRydWU7XHJcbiAgICBsZXQgbnVtT2ZUdXJuc1RvQWRkID0gMDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNhcnRNYXA6IGNhcnRNYXAsXHJcbiAgICAgIHR1cm46IHRoaXMuc3RhdGUudHVybiArIG51bU9mVHVybnNUb0FkZFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldEJvYXJkV2l0aFNpZ25zQ2VsbHMoYm9hcmQsIGNhcmQpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkQ2FyZCAhPT0gbnVsbCkge1xyXG4gICAgICBsZXQgcHJldlNlbGVjdGVkQ2FyZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRDYXJkW1widmFsdWVcIl07XHJcbiAgICAgIHRoaXMudXBkYXRlVmFsaWRDZWxsc0luQm9hcmQoYm9hcmQsIHByZXZTZWxlY3RlZENhcmQsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlVmFsaWRDZWxsc0luQm9hcmQoYm9hcmQsIGNhcmQsIHRydWUpO1xyXG4gICAgcmV0dXJuIGJvYXJkO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ2VsbFZhbGlkKGJvYXJkLCByb3csIGNvbCwgYm9vbGVhblZhbCkge1xyXG4gICAgYm9hcmRbcm93XVtjb2xdLnZhbGlkID0gYm9vbGVhblZhbDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVZhbGlkQ2VsbHNJbkJvYXJkKGJvYXJkLCBjYXJkLCBib29sZWFuVmFsKSB7XHJcbiAgICBjb25zdCB7IHNpZGUxLCBzaWRlMiB9ID0gY2FyZDtcclxuXHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgY29sID0gMDtcclxuICAgICAgY29sIDwgdGhpcy5zdGF0ZS52YWxpZExvY2F0aW9uc0FycmF5W3NpZGUxXS5sZW5ndGg7XHJcbiAgICAgIGNvbCsrXHJcbiAgICApIHtcclxuICAgICAgdGhpcy50b2dnbGVDZWxsVmFsaWQoXHJcbiAgICAgICAgYm9hcmQsXHJcbiAgICAgICAgdGhpcy5zdGF0ZS52YWxpZExvY2F0aW9uc0FycmF5W3NpZGUxXVtjb2xdLmksXHJcbiAgICAgICAgdGhpcy5zdGF0ZS52YWxpZExvY2F0aW9uc0FycmF5W3NpZGUxXVtjb2xdLmosXHJcbiAgICAgICAgYm9vbGVhblZhbFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBjb2wgPSAwO1xyXG4gICAgICBjb2wgPCB0aGlzLnN0YXRlLnZhbGlkTG9jYXRpb25zQXJyYXlbc2lkZTJdLmxlbmd0aDtcclxuICAgICAgY29sKytcclxuICAgICkge1xyXG4gICAgICB0aGlzLnRvZ2dsZUNlbGxWYWxpZChcclxuICAgICAgICBib2FyZCxcclxuICAgICAgICB0aGlzLnN0YXRlLnZhbGlkTG9jYXRpb25zQXJyYXlbc2lkZTJdW2NvbF0uaSxcclxuICAgICAgICB0aGlzLnN0YXRlLnZhbGlkTG9jYXRpb25zQXJyYXlbc2lkZTJdW2NvbF0uaixcclxuICAgICAgICBib29sZWFuVmFsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVDZWxsVmFsaWQoYm9hcmQsIHJvdywgY29sLCBib29sZWFuVmFsKSB7XHJcbiAgICBib2FyZFtyb3ddW2NvbF0udmFsaWQgPSBib29sZWFuVmFsO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQm9hcmRDbGljayhyb3csIGNvbCkge1xyXG4gICAgdGhpcy5ydW5Nb3ZlKHJvdywgY29sKTtcclxuICB9XHJcblxyXG4gIHJ1bk1vdmUocm93LCBjb2wpIHtcclxuICAgIGNvbnN0IHsgYm9hcmRNYXAgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRDYXJkKSB7XHJcbiAgICAgIGNvbnN0IHsgc2lkZTEsIHNpZGUyIH0gPSB0aGlzLnN0YXRlLnNlbGVjdGVkQ2FyZFtcInZhbHVlXCJdO1xyXG5cclxuICAgICAgbGV0IG5laWdoYm9yc09iaiA9IHRoaXMuZ2V0TmVpZ2hib3JzT2JqKHJvdywgY29sKTtcclxuICAgICAgbGV0IGNhcmQgPSBuZXcgTWFuYWdlci5DYXJkKGZhbHNlLCBzaWRlMSwgc2lkZTIsIHRydWUpO1xyXG5cclxuICAgICAgY29uc3QgbmVpZ2hib3JOYW1lID0gT2JqZWN0LmtleXMobmVpZ2hib3JzT2JqKS5maWx0ZXIoZnVuY3Rpb24ocm93KSB7XHJcbiAgICAgICAgcmV0dXJuIG5laWdoYm9yc09ialtyb3ddICE9PSBudWxsO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgbmVpZ2hib3JMb2NhdGlvbiA9IG5laWdoYm9yc09ialtuZWlnaGJvck5hbWVdO1xyXG5cclxuICAgICAgaWYgKG5laWdoYm9yTG9jYXRpb24pIHtcclxuICAgICAgICBsZXQgcGllY2UgPSBib2FyZE1hcFtuZWlnaGJvckxvY2F0aW9uLnJvd11bbmVpZ2hib3JMb2NhdGlvbi5jb2xdO1xyXG4gICAgICAgIGNhcmQgPSB0aGlzLmNyZWF0ZVBpZWNlKG5laWdoYm9yTmFtZVswXSwgcGllY2UsIHNpZGUxLCBzaWRlMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubG9jYXRlUGllY2VPbkJvYXJkKHJvdywgY29sLCBjYXJkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldE5laWdoYm9yc09iaihyb3csIGNvbCkge1xyXG4gICAgbGV0IG5laWdoYm9yc09iaiA9IG5ldyBNYW5hZ2VyLk5laWdoYm9yc09iaihcclxuICAgICAgdGhpcy5jaGVja05laWdoYm9yUGllY2Uocm93IC0gMSwgY29sKSxcclxuICAgICAgdGhpcy5jaGVja05laWdoYm9yUGllY2Uocm93ICsgMSwgY29sKSxcclxuICAgICAgdGhpcy5jaGVja05laWdoYm9yUGllY2Uocm93LCBjb2wgLSAxKSxcclxuICAgICAgdGhpcy5jaGVja05laWdoYm9yUGllY2Uocm93LCBjb2wgKyAxKVxyXG4gICAgKTtcclxuICAgIHJldHVybiBuZWlnaGJvcnNPYmo7XHJcbiAgfVxyXG5cclxuICBjaGVja05laWdoYm9yUGllY2Uocm93LCBjb2wpIHtcclxuICAgIGNvbnN0IHsgYm9hcmRNYXAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgb2JqID0gbnVsbDtcclxuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkQ2FyZCkge1xyXG4gICAgICBjb25zdCB7IHNpZGUxLCBzaWRlMiB9ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZENhcmRbXCJ2YWx1ZVwiXTtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBib2FyZE1hcFtyb3ddW2NvbF0uc2lkZTEgPT09IHNpZGUxIHx8XHJcbiAgICAgICAgYm9hcmRNYXBbcm93XVtjb2xdLnNpZGUyID09PSBzaWRlMiB8fFxyXG4gICAgICAgIGJvYXJkTWFwW3Jvd11bY29sXS5zaWRlMSA9PT0gc2lkZTIgfHxcclxuICAgICAgICBib2FyZE1hcFtyb3ddW2NvbF0uc2lkZTIgPT09IHNpZGUxXHJcbiAgICAgICkge1xyXG4gICAgICAgIG9iaiA9IHsgcm93OiByb3csIGNvbDogY29sIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQaWVjZShuZWlnaGJvck5hbWUsIG5laWdoYm9yUGllY2UsIHNpZGUxLCBzaWRlMikge1xyXG4gICAgbGV0IHBvc2l0aW9uID0gdGhpcy5zZWxlY3RQb3NpdGlvbihuZWlnaGJvck5hbWUsIG5laWdoYm9yUGllY2UpO1xyXG5cclxuICAgIGxldCBjYXJkID0gbmV3IE1hbmFnZXIuQ2FyZChmYWxzZSwgc2lkZTEsIHNpZGUyLCBwb3NpdGlvbik7XHJcblxyXG4gICAgaWYgKHRoaXMuY2hlY2tQaWVjZVBvc2l0aW9uKG5laWdoYm9yTmFtZSwgbmVpZ2hib3JQaWVjZSwgc2lkZTEsIHNpZGUyKSkge1xyXG4gICAgICBjYXJkID0gbmV3IE1hbmFnZXIuQ2FyZChmYWxzZSwgc2lkZTIsIHNpZGUxLCBwb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhcmQ7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RQb3NpdGlvbihuZWlnaGJvck5hbWUsIHBpZWNlKSB7XHJcbiAgICBsZXQgcG9zaXRpb24gPSBwaWVjZS5pc0xheWluZztcclxuICAgIGlmIChcclxuICAgICAgKCFwb3NpdGlvbiAmJiBuZWlnaGJvck5hbWUgPT09IFwibGVmdFwiKSB8fFxyXG4gICAgICAoIXBvc2l0aW9uICYmIG5laWdoYm9yTmFtZSA9PT0gXCJyaWdodFwiKSB8fFxyXG4gICAgICAocG9zaXRpb24gJiYgbmVpZ2hib3JOYW1lID09PSBcInVwXCIpIHx8XHJcbiAgICAgIChwb3NpdGlvbiAmJiBuZWlnaGJvck5hbWUgPT09IFwiZG93blwiKVxyXG4gICAgKSB7XHJcbiAgICAgIHBvc2l0aW9uID0gIXBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tQaWVjZVBvc2l0aW9uKG5laWdoYm9yTmFtZSwgbmVpZ2hib3JQaWVjZSwgc2lkZTEsIHNpZGUyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAoc2lkZTEgPT09IG5laWdoYm9yUGllY2Uuc2lkZTEgJiZcclxuICAgICAgICAobmVpZ2hib3JOYW1lID09PSBcImRvd25cIiB8fCBuZWlnaGJvck5hbWUgPT09IFwicmlnaHRcIikpIHx8XHJcbiAgICAgIChzaWRlMiA9PT0gbmVpZ2hib3JQaWVjZS5zaWRlMiAmJlxyXG4gICAgICAgIChuZWlnaGJvck5hbWUgPT09IFwidXBcIiB8fCBuZWlnaGJvck5hbWUgPT09IFwibGVmdFwiKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBsb2NhdGVQaWVjZU9uQm9hcmQocm93LCBjb2wsIGNhcmQpIHtcclxuICAgIGlmIChjYXJkLnNpZGUxID09PSBjYXJkLnNpZGUyKSB7XHJcbiAgICAgIGNhcmQuaXNMYXlpbmcgPSAhY2FyZC5pc0xheWluZztcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlVmFsaWRMb2NhdGlvbkluU2VydmVyKHJvdywgY29sLCBjYXJkKTtcclxuXHJcbiAgICBsZXQgc2NvcmVBZGRpdGlvbiA9IGNhcmQuc2lkZTEgKyBjYXJkLnNpZGUyO1xyXG4gICAgdGhpcy5pc1RpbWVyUmVzZXROZWVkZWQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGF2ZXJhZ2UgPSB0aGlzLmNhbGN1bGF0ZUF2ZXJhZ2VPZlR1cm4oKTtcclxuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgY29uc3QgbmV3Qm9hcmRNYXAgPSB0aGlzLmdldFVwZGF0ZWRCb2FyZChcclxuICAgICAgICBbLi4ucHJldlN0YXRlLmJvYXJkTWFwXSxcclxuICAgICAgICBjYXJkLFxyXG4gICAgICAgIHJvdyxcclxuICAgICAgICBjb2xcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld1Njb3JlID0gdGhpcy5nZXRVcGRhdGVkU2NvcmUoXHJcbiAgICAgICAgcHJldlN0YXRlLmN1cnJlbnRTY29yZSxcclxuICAgICAgICBzY29yZUFkZGl0aW9uXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG5ld1R1cm4gPSBwcmV2U3RhdGUudHVybiArIDE7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYm9hcmRNYXA6IG5ld0JvYXJkTWFwLFxyXG4gICAgICAgIGN1cnJlbnRTY29yZTogbmV3U2NvcmUsXHJcbiAgICAgICAgdHVybjogbmV3VHVybixcclxuICAgICAgICBhdmVyYWdlOiBhdmVyYWdlXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZUF2ZXJhZ2VPZlR1cm4oKSB7XHJcbiAgICB0aGlzLmxhc3RQaWVjZVRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xyXG4gICAgbGV0IHNlY29uZHMgPSB0aGlzLmxhc3RQaWVjZVRpbWUubWludXRlcyAqIDYwICsgdGhpcy5sYXN0UGllY2VUaW1lLnNlY29uZHM7XHJcbiAgICBsZXQgYXZlcmFnZUluU2Vjb25kc0Zvcm1hdCA9IHNlY29uZHMgLyAodGhpcy5zdGF0ZS50dXJuICsgMSk7XHJcbiAgICByZXR1cm4gTWFuYWdlci5zZWNvbmRzVG9UaW1lKGF2ZXJhZ2VJblNlY29uZHNGb3JtYXQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXBkYXRlZFNjb3JlKHNjb3JlLCBhZGRpdGlvbikge1xyXG4gICAgc2NvcmUgKz0gYWRkaXRpb247XHJcbiAgICByZXR1cm4gc2NvcmU7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQaWVjZUZyb21DYXJ0KCkge1xyXG4gICAgbGV0IF9pc1dpbiA9IGZhbHNlO1xyXG4gICAgY29uc3QgeyBpbmRleCB9ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZENhcmQ7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICBwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0NhcnRNYXAgPSB0aGlzLmdldENhcnRNYXBBZnRlclJlbW92ZUNhcmQoXHJcbiAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgIHByZXZTdGF0ZS5jYXJ0TWFwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IGlzRW1wdHlDYXJ0ID0gdGhpcy5pc0NhcnRFbXB0eSgpO1xyXG4gICAgICAgIGxldCBpc1VzZXJEb25lID0gaXNFbXB0eUNhcnQ7XHJcbiAgICAgICAgaWYgKGlzRW1wdHlDYXJ0KSB7XHJcbiAgICAgICAgICBpc1VzZXJEb25lID0gaXNFbXB0eUNhcnQ7XHJcbiAgICAgICAgICBfaXNXaW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgY2FydE1hcDogbmV3Q2FydE1hcCxcclxuICAgICAgICAgIGlzVXNlckRvbmU6IGlzVXNlckRvbmUsXHJcbiAgICAgICAgICBpc1dpbjogX2lzV2luXHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzVXNlckRvbmUpIHRoaXMuZmV0Y2hQb3N0U3RhdHMoKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldENhcnRNYXBBZnRlclJlbW92ZUNhcmQoaW5kZXgsIGNhcnRNYXApIHtcclxuICAgIGNhcnRNYXBbaW5kZXhdID0gbmV3IE1hbmFnZXIuQ2FyZChmYWxzZSk7XHJcbiAgICByZXR1cm4gY2FydE1hcDtcclxuICB9XHJcblxyXG4gIGlzQ2FydEVtcHR5KCkge1xyXG4gICAgbGV0IGluZGV4ID0gbnVsbDtcclxuICAgIGxldCBpc0VtcHR5ID0gZmFsc2U7XHJcbiAgICBjb25zdCB7IGNhcnRNYXAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZENhcmQpIHtcclxuICAgICAgaW5kZXggPSB0aGlzLnN0YXRlLnNlbGVjdGVkQ2FyZC5pbmRleDtcclxuICAgICAgaXNFbXB0eSA9IHRydWU7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydE1hcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpICE9PSBpbmRleCAmJiBjYXJ0TWFwW2ldLnNpZGUxICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGlzRW1wdHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBpc0VtcHR5O1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2FydEFmdGVyQWRkUGllY2UoY2FydCwgY2FyZCwgaW5kZXhDYXJ0KSB7XHJcbiAgICBjYXJkLnZhbGlkID0gdW5kZWZpbmVkO1xyXG4gICAgY2FydFtpbmRleENhcnRdID0gY2FyZDtcclxuICAgIHJldHVybiBjYXJ0O1xyXG4gIH1cclxuXHJcbiAgZ2V0VXBkYXRlZEJvYXJkKGJvYXJkLCBjYXJkLCByb3csIGNvbCkge1xyXG4gICAgYm9hcmRbcm93XVtjb2xdID0gY2FyZDtcclxuICAgIHRoaXMudXBkYXRlVmFsaWRDZWxsc0luQm9hcmQoYm9hcmQsIGNhcmQsIGZhbHNlKTtcclxuICAgIHJldHVybiBib2FyZDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVZhbGlkTG9jYXRpb25JblNlcnZlcihyb3csIGNvbCwgY2FyZCkge1xyXG4gICAgY29uc3Qgb2JqVG9Qb3N0ID0gdGhpcy51cGRhdGVWYWxpZExvY2F0aW9uc0FuZEJvYXJkKHJvdywgY29sLCBjYXJkKTtcclxuXHJcbiAgICBmZXRjaChcIi9nYW1lcy91cGRhdGVWYWxpZExvY2F0aW9uc1wiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9ialRvUG9zdCksXHJcbiAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIlxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGlmIChvYmpUb1Bvc3QuaXNVcGRhdGVWYWxpZExvY2F0aW9uKSB0aGlzLnJlbW92ZVBpZWNlRnJvbUNhcnQoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVWYWxpZExvY2F0aW9uc0FuZEJvYXJkKHJvdywgY29sLCBjYXJkKSB7XHJcbiAgICBjb25zdCB7IGlzTGF5aW5nIH0gPSBjYXJkO1xyXG4gICAgY29uc3QgaXNKb2tlciA9IGNhcmQuc2lkZTEgPT09IGNhcmQuc2lkZTI7XHJcbiAgICBsZXQgc2lkZTFBcnJheSA9IG5ldyBBcnJheSgwKTtcclxuICAgIGxldCBzaWRlMkFycmF5ID0gbmV3IEFycmF5KDApO1xyXG5cclxuICAgIGlmIChpc0pva2VyIHx8IGlzTGF5aW5nKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzRW1wdHlBbmROb3RWYWxpZChyb3csIGNvbCAtIDEpKSB7XHJcbiAgICAgICAgc2lkZTFBcnJheS5wdXNoKHtcclxuICAgICAgICAgIGk6IHJvdyxcclxuICAgICAgICAgIGo6IGNvbCAtIDFcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pc0VtcHR5QW5kTm90VmFsaWQocm93LCBjb2wgKyAxKSkge1xyXG4gICAgICAgIHNpZGUyQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICBpOiByb3csXHJcbiAgICAgICAgICBqOiBjb2wgKyAxXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpc0pva2VyIHx8IGlzTGF5aW5nID09PSBmYWxzZSkge1xyXG4gICAgICBpZiAodGhpcy5pc0VtcHR5QW5kTm90VmFsaWQocm93IC0gMSwgY29sKSkge1xyXG4gICAgICAgIHNpZGUxQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICBpOiByb3cgLSAxLFxyXG4gICAgICAgICAgajogY29sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaXNFbXB0eUFuZE5vdFZhbGlkKHJvdyArIDEsIGNvbCkpIHtcclxuICAgICAgICBzaWRlMkFycmF5LnB1c2goe1xyXG4gICAgICAgICAgaTogcm93ICsgMSxcclxuICAgICAgICAgIGo6IGNvbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3Qm9hcmQgPSB0aGlzLmdldFVwZGF0ZWRCb2FyZChcclxuICAgICAgWy4uLnRoaXMuc3RhdGUuYm9hcmRNYXBdLFxyXG4gICAgICBjYXJkLFxyXG4gICAgICByb3csXHJcbiAgICAgIGNvbFxyXG4gICAgKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlzVXBkYXRlVmFsaWRMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgYm9hcmRNYXA6IG5ld0JvYXJkLFxyXG4gICAgICBjYXJkOiBjYXJkLFxyXG4gICAgICByb3c6IHJvdyxcclxuICAgICAgY29sOiBjb2wsXHJcbiAgICAgIHNpZGUxQXJyYXk6IHNpZGUxQXJyYXksXHJcbiAgICAgIHNpZGUyQXJyYXk6IHNpZGUyQXJyYXlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpc0VtcHR5QW5kTm90VmFsaWQocm93LCBjb2wpIHtcclxuICAgIGNvbnN0IHsgYm9hcmRNYXAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBib2FyZE1hcFtyb3ddW2NvbF0udmFsaWQgIT09IHRydWUgJiZcclxuICAgICAgYm9hcmRNYXBbcm93XVtjb2xdLmlzTGF5aW5nID09PSB1bmRlZmluZWRcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbWUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGllY2UsIHsgRW1wdHlQaWVjZSB9IGZyb20gXCIuL1BpZWNlLmpzeFwiO1xyXG5pbXBvcnQgeyBWYWxpZFBpZWNlIH0gZnJvbSBcIi4vUGllY2UuanN4XCI7XHJcbmltcG9ydCBCb2FyZFN0eWxlIGZyb20gXCIuLi9zdHlsZS9Cb2FyZFN0eWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQm9hcmRSb3cgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBpbmRleFJvdywgcm93IH0gPSBwcm9wcztcclxuICByZXR1cm4gcm93Lm1hcCgoZG9taW5vUGllY2UsIGopID0+IHtcclxuICAgIGNvbnN0IHsgdmFsaWQsIHNpZGUxLCBzaWRlMiwgaXNMYXlpbmcgfSA9IGRvbWlub1BpZWNlO1xyXG5cclxuICAgIGxldCByZXQgPSBudWxsO1xyXG4gICAgaWYgKCF2YWxpZCAmJiBzaWRlMSAhPSB1bmRlZmluZWQpXHJcbiAgICAgIHJldCA9IChcclxuICAgICAgICA8dGQga2V5PXtqfT5cclxuICAgICAgICAgIDxQaWVjZSBzaWRlMT17c2lkZTF9IHNpZGUyPXtzaWRlMn0gaXNMYXlpbmc9e2lzTGF5aW5nfSAvPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICk7XHJcbiAgICBlbHNlIGlmICghdmFsaWQgJiYgc2lkZTEgPT09IHVuZGVmaW5lZClcclxuICAgICAgcmV0ID0gKFxyXG4gICAgICAgIDx0ZCBrZXk9e2p9PlxyXG4gICAgICAgICAgPEVtcHR5UGllY2UgLz5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICApO1xyXG4gICAgZWxzZVxyXG4gICAgICByZXQgPSAoXHJcbiAgICAgICAgPHRkIGtleT17an0gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljayhpbmRleFJvdywgail9PlxyXG4gICAgICAgICAgPFZhbGlkUGllY2UgLz5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICApO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IEJvYXJkID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgY2VsbHMgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8dGFibGUgaWQ9XCJib2FyZEdhbWVcIj5cclxuICAgICAgPHRib2R5PlxyXG4gICAgICAgIHtjZWxscy5tYXAoKHJvdywgaSkgPT4gKFxyXG4gICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgIDxCb2FyZFJvdyBpbmRleFJvdz17aX0gcm93PXtyb3d9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IC8+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0JvYXJkLmpzeCIsInZhciBtYXAgPSB7XG5cdFwiLi9wMF8wLnN2Z1wiOiAzOCxcblx0XCIuL3AwXzEuc3ZnXCI6IDM5LFxuXHRcIi4vcDBfMi5zdmdcIjogNDAsXG5cdFwiLi9wMF8zLnN2Z1wiOiA0MSxcblx0XCIuL3AwXzQuc3ZnXCI6IDQyLFxuXHRcIi4vcDBfNS5zdmdcIjogNDMsXG5cdFwiLi9wMF82LnN2Z1wiOiA0NCxcblx0XCIuL3AxXzEuc3ZnXCI6IDQ1LFxuXHRcIi4vcDFfMi5zdmdcIjogNDYsXG5cdFwiLi9wMV8zLnN2Z1wiOiA0Nyxcblx0XCIuL3AxXzQuc3ZnXCI6IDQ4LFxuXHRcIi4vcDFfNS5zdmdcIjogNDksXG5cdFwiLi9wMV82LnN2Z1wiOiA1MCxcblx0XCIuL3AyXzIuc3ZnXCI6IDUxLFxuXHRcIi4vcDJfMy5zdmdcIjogNTIsXG5cdFwiLi9wMl80LnN2Z1wiOiA1Myxcblx0XCIuL3AyXzUuc3ZnXCI6IDU0LFxuXHRcIi4vcDJfNi5zdmdcIjogNTUsXG5cdFwiLi9wM18zLnN2Z1wiOiA1Nixcblx0XCIuL3AzXzQuc3ZnXCI6IDU3LFxuXHRcIi4vcDNfNS5zdmdcIjogNTgsXG5cdFwiLi9wM182LnN2Z1wiOiA1OSxcblx0XCIuL3A0XzQuc3ZnXCI6IDYwLFxuXHRcIi4vcDRfNS5zdmdcIjogNjEsXG5cdFwiLi9wNF82LnN2Z1wiOiA2Mixcblx0XCIuL3A1XzUuc3ZnXCI6IDYzLFxuXHRcIi4vcDVfNi5zdmdcIjogNjQsXG5cdFwiLi9wNl82LnN2Z1wiOiA2NVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDM3O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Jlc291cmNlcy9waWVjZXMgXlxcLlxcLy4qXFwuc3ZnJFxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODg5M2E2NGIyMWE5ZjM4ZmQyNjQ0ZjI2OWMyMTljN2Yuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wMF8wLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2YxMmQzMmUwN2U1N2E1ZTUxZjdiN2EwODc0ODIxYjguc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wMF8xLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDZhZjk3ZjY0MDRjY2FjN2Y0ZTBhMTlhODU3ZWI5M2Euc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wMF8yLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTAwYmYxMzc1OGY2ZjdmNTk0MGU5MDY4ZDMyMTA0OWEuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wMF8zLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2U1YWFjZDIwZmMxZTljMzM0OWIzZmEwM2JlY2Y0ZTQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wMF80LnN2Z1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzc2MDQwNWNkOGE1ZjQyYmIxMDM2N2E0ZjZhNDhkMTUuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wMF81LnN2Z1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGJjMjI2MWM2Y2M2ODRhOWM0YzU0NTE5NzA5OTI0ZGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wMF82LnN2Z1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmQ3M2I1OTZkMDc3ZWM3NDFkOGZjNzU0YzQ5MzY3OTQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wMV8xLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjk1YjQ5MTNiNDhmMzA4MmI1MmE1NzFjZTJmMWVmM2Yuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wMV8yLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2FmZmI0MWY3MDFjNWEwMjlkZDU4YTc1YjQ4NjlmNDAuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wMV8zLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTg0MTUwYWIwOWY1OTVjNDczNDAyODQyYWRkODNmY2Uuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wMV80LnN2Z1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGJkMGE4MWI1ZTYzZmQzYTYxMjY4ZGU0N2VmZTA3YjYuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wMV81LnN2Z1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGYxMWNiZjgyZjM2YjQxNjNkM2ZlYTJhZjM1ZWU5Y2Euc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wMV82LnN2Z1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2NlZTg0YTY0ODAzYWIzOTU5MWJmYjFmNTA4YzQ5YjIuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wMl8yLnN2Z1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmI0ZTZkNjExNzU1NjIzNTgyZjljZTZlOWE4NWFlNmYuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wMl8zLnN2Z1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmMyYmY4MzhmM2Y3NGQ3NzUxNjA4NzM4ZmZmYjg2ZWEuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wMl80LnN2Z1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWJkODgwNDVhY2EyOGRhMWUwMmZjOGY5YTYyNGUyMGEuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wMl81LnN2Z1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTRlYzc1MDQyNzYzYjMyNDlmNjhkNTkyYjFhMGFiMjUuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wMl82LnN2Z1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDZmOGEwYjc4MTFiMzdiZDVkNmZiYzg5ODgxODYxNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wM18zLnN2Z1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDFhMDhjYmI3NTVkZDY2N2M0MDZkYTQxNmZkMjVjOTAuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wM180LnN2Z1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGM1M2U2ZWY2ZDYzZDNmMGYxZTFhNGYzOTU3MWUzNDMuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wM181LnN2Z1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDhkYTU0YzhkZTQ2Mjg1ZDMxNjg2NWJiODA3YWI5OTYuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wM182LnN2Z1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTM0NDM1ZjE1ZTY4ZDY0MGM2Nzc1ZmI3Y2I3Y2I5OWYuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wNF80LnN2Z1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmViMWZjMzE5NTdiMGRlMzk0MTVkNDNkZjg5YzI1NTMuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wNF81LnN2Z1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjkyYWEwMTU5ODU5NWE2MzEyN2MwYjNlNWY3YjZlNjUuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wNF82LnN2Z1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2IyODg1M2EyMjRkNjUwNjNjNzQxYmZjMWNmMGJiZTQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wNV81LnN2Z1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDgyMjM4NDEyNzc1Mjk5YjdkMWM0YzQ3ZDRmYTcyY2Yuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wNV82LnN2Z1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWQ1YjdjMjM1ZGE4YmU3MjhlMWFiNDRlNTNmOTE2MzAuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVzb3VyY2VzL3BpZWNlcy9wNl82LnN2Z1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vQm9hcmRTdHlsZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vQm9hcmRTdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vQm9hcmRTdHlsZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlL0JvYXJkU3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNib2FyZEdhbWUge1xcclxcbiAgd2lkdGg6IDIwdnc7XFxyXFxuICBoZWlnaHQ6IDIwdnc7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9zcmMvc3R5bGUvQm9hcmRTdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQaWVjZSwgeyBFbXB0eVBpZWNlIH0gZnJvbSBcIi4vUGllY2UuanN4XCI7XG5cbmNvbnN0IENhcnQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgY2FydCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHRhYmxlIGlkPVwidXNlckNhcnRcIj5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAgPHRyIGtleT17XCJyb3cwXCJ9PlxuICAgICAgICAgIHtjYXJ0Lm1hcCgoZG9taW5vUGllY2UsIGopID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsaWQsIHNpZGUxLCBzaWRlMiB9ID0gZG9taW5vUGllY2U7XG4gICAgICAgICAgICBsZXQgcmV0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh2YWxpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldCA9IChcbiAgICAgICAgICAgICAgICA8dGQga2V5PXtqfSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrKGosIGRvbWlub1BpZWNlKX0+XG4gICAgICAgICAgICAgICAgICA8UGllY2Ugc2lkZTE9e3NpZGUxfSBzaWRlMj17c2lkZTJ9IGlzTGF5aW5nPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgICByZXQgPSAoXG4gICAgICAgICAgICAgICAgPHRkIGtleT17an0gb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljayhqLCBkb21pbm9QaWVjZSl9PlxuICAgICAgICAgICAgICAgICAgPFBpZWNlXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBzaWRlMT17c2lkZTF9XG4gICAgICAgICAgICAgICAgICAgIHNpZGUyPXtzaWRlMn1cbiAgICAgICAgICAgICAgICAgICAgaXNMYXlpbmc9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0ID0gKFxuICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2p9PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5UGllY2UgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9DYXJ0LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgTWFuYWdlciA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvTWFuYWdlclwiKTtcclxuaW1wb3J0IHsgc2Vjb25kc1RvVGltZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvTWFuYWdlclwiO1xyXG5jbGFzcyBUaW1lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IHRpbWU6IHsgbWludXRlczogMCwgc2Vjb25kczogMCB9LCBzZWNvbmRzOiAwIH07XHJcbiAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgIHRoaXMuc3RhcnRUaW1lciA9IHRoaXMuc3RhcnRUaW1lci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5yZXNldFRpbWVyID0gdGhpcy5yZXNldFRpbWVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN0b3BJbnRlcnZhbCA9IHRoaXMuc3RvcEludGVydmFsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNvdW50VXAgPSB0aGlzLmNvdW50VXAuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZGlzcGxheVNwZWNpZmljVGltZSA9IHRoaXMuZGlzcGxheVNwZWNpZmljVGltZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnRyYW5zZmVyRGF0YVRvSG9tZSA9IHByb3BzLnNlbmRDdXJyZW50VGltZTtcclxuICB9XHJcblxyXG4gIHN0b3BJbnRlcnZhbCgpIHtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgfVxyXG5cclxuICByZXNldFRpbWVyKCkge1xyXG4gICAgdGhpcy5zdG9wSW50ZXJ2YWwoKTtcclxuICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgdGhpcy5zdGFydFRpbWVyKHsgbWludXRlczogMCwgc2Vjb25kczogMCB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgdGltZTogeyBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH0sIHNlY29uZHM6IDAgfSkpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRUaW1lcihpbml0aWFsVGltZSkge1xyXG4gICAgdGhpcy50aW1lciA9IGluaXRpYWxUaW1lLm1pbnV0ZXMgKiA2MCArIGluaXRpYWxUaW1lLnNlY29uZHM7XHJcbiAgICB0aGlzLnRpbWVyID0gdGhpcy5jb3VudFVwKCk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5U3BlY2lmaWNUaW1lKHRpbWUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aW1lOiB0aW1lLFxyXG4gICAgICAgIHNlY29uZHM6IHByZXZTdGF0ZS5zZWNvbmRzXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvdW50VXAoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5pc0dhbWVTdGFydGVkICYmICF0aGlzLnByb3BzLmlzR2FtZURvbmUpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0aW1lOiBNYW5hZ2VyLnNlY29uZHNUb1RpbWUocHJldlN0YXRlLnNlY29uZHMpLFxyXG4gICAgICAgICAgc2Vjb25kczogcHJldlN0YXRlLnNlY29uZHMgKyAxXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQodGhpcy5jb3VudFVwLCAxMDAwKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgIGlmIChcclxuICAgICAgcHJldlByb3BzLmlzUmVzZXROZWVkZWQgIT09IHRoaXMucHJvcHMuaXNSZXNldE5lZWRlZCAmJlxyXG4gICAgICB0aGlzLnByb3BzLmlzUmVzZXROZWVkZWRcclxuICAgICkge1xyXG4gICAgICB0aGlzLnJlc2V0VGltZXIoKTtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvcHMuaXNHYW1lU3RhcnRlZCkge1xyXG4gICAgICB0aGlzLnN0b3BJbnRlcnZhbCgpO1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy50aW1lVG9EaXNwbGF5ICE9PSBwcmV2UHJvcHMudGltZVRvRGlzcGxheSkge1xyXG4gICAgICAgIHRoaXMuZGlzcGxheVNwZWNpZmljVGltZSh7XHJcbiAgICAgICAgICBtaW51dGVzOiB0aGlzLnByb3BzLnRpbWVUb0Rpc3BsYXkubWludXRlcyxcclxuICAgICAgICAgIHNlY29uZHM6IHRoaXMucHJvcHMudGltZVRvRGlzcGxheS5zZWNvbmRzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLl9pc01vdW50ZWQpIHtcclxuICAgICAgdGhpcy5zdGFydFRpbWVyKHsgbWludXRlczogMCwgc2Vjb25kczogMCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy50aW1lb3V0SWQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMudHJhbnNmZXJEYXRhVG9Ib21lKHRoaXMuc3RhdGUudGltZS5taW51dGVzLCB0aGlzLnN0YXRlLnRpbWUuc2Vjb25kcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIG1pbnV0ZXM6IHt0aGlzLnN0YXRlLnRpbWUubWludXRlc30gc2Vjb25kZXM6IHt0aGlzLnN0YXRlLnRpbWUuc2Vjb25kc31cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUaW1lcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVGltZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTdGF0cyA9IHByb3BzID0+IHtcbiAgY29uc3QgeyB0dXJuLCBjdXJyZW50U2NvcmUsIGF2ZXJhZ2UsIHdpdGhkcmF3YWxzIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5cbiAgICAgICAgVFVSTiBOVU1CRVI6IHt0dXJufSB8fCBTQ09SRToge2N1cnJlbnRTY29yZX0gfHwgV0lUSERSQVdBTFM6e1wiIFwifVxuICAgICAgICB7d2l0aGRyYXdhbHN9IHx8IEFWRVJBR0UgVElNRSBQRVIgVFVSTjoge2F2ZXJhZ2UubWludXRlc306XG4gICAgICAgIHthdmVyYWdlLnNlY29uZHN9XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU3RhdHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TdGF0cy5qc3giLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNnYW1lQW5kRGF0YUZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5yb29tVGV4dCB7XFxuICB3aWR0aDogMjl2aDtcXG4gIGhlaWdodDogM3ZoO1xcbn1cXG4jZ2FtZUZyYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiA4MXZoO1xcbn1cXG5cXG4jYm9hcmRGcmFtZSB7XFxuICB3aWR0aDogNTl2dztcXG4gIGhlaWdodDogMjN2dztcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcbiNjYXJ0RnJhbWUge1xcbiAgbWF4LXdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiAxMXZoO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuI2NhcnRTdHlsZSB7XFxuICBtYXgtd2lkdGg6IDEwdnc7XFxuICB3aWR0aDogMTB2dztcXG4gIGhlaWdodDogM3Z3O1xcbn1cXG5cXG4jc3RhdGlzdGljcyB7XFxuICBtYXgtd2lkdGg6IDEwdnc7XFxuICB3aWR0aDogMTB2dztcXG4gIGhlaWdodDogM3Z3O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlL0dhbWVTdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnZlcnNpb25BcmVhIGZyb20gXCIuL0NvbnZlcnNpb25BcmVhLmpzeFwiO1xyXG5pbXBvcnQgQ2hhdElucHV0IGZyb20gXCIuL0NoYXRJbnB1dC5qc3hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGtleT1cImNoYXQtY29udGFpbmVyLWluLWNoYXQtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwiY2hhdC1jb250YWluZXJcIj5cclxuICAgICAgICA8Q29udmVyc2lvbkFyZWFcclxuICAgICAgICAgIGlzVXNlckNvbm5lY3RlZD17dGhpcy5wcm9wcy5pc1VzZXJDb25uZWN0ZWR9XHJcbiAgICAgICAgICBrZXk9XCJDb252ZXJzaW9uQXJlYS1jaGF0LWNvbnRhaW5lclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q2hhdElucHV0IGtleT1cIkNoYXRJbnB1dC1jaGF0LWNvbnRhaW5lclwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQ2hhdENvbnRhaW5lci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb252ZXJzaW9uQXJlYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjb250ZW50OiBbXVxyXG4gICAgfTtcclxuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5nZXRDaGF0Q29udGVudCA9IHRoaXMuZ2V0Q2hhdENvbnRlbnQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZ2V0Q2hhdENvbnRlbnRXcmFwcGVyID0gdGhpcy5nZXRDaGF0Q29udGVudFdyYXBwZXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcclxuICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5pc1VzZXJDb25uZWN0ZWQpO1xyXG4gICAgaWYgKHRoaXMuX2lzTW91bnRlZCA9PT0gdHJ1ZSkgdGhpcy5nZXRDaGF0Q29udGVudCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLnRpbWVvdXRJZCkge1xyXG4gICAgICAoKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XHJcbiAgICAgIH0pKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAga2V5PVwiY29udmVyc3Npb24tYXJlYS13cnBwZXItZGl2XCJcclxuICAgICAgICBjbGFzc05hbWU9XCJjb252ZXJzc2lvbi1hcmVhLXdycHBlclwiXHJcbiAgICAgID5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5jb250ZW50Lm1hcCgobGluZSwgdmFsdWUpID0+IChcclxuICAgICAgICAgIDxwIGtleT17dmFsdWV9PlxyXG4gICAgICAgICAgICB7bGluZS51c2VyfToge2xpbmUudGV4dH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2hhdENvbnRlbnRXcmFwcGVyKCkge1xyXG4gICAgdGhpcy5nZXRDaGF0Q29udGVudCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2hhdENvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IDEwMDA7IC8vVE9ETzogY2hhbmdlIHRvIDIwMFxyXG4gICAgaWYgKHRoaXMucHJvcHMuaXNVc2VyQ29ubmVjdGVkKSB7XHJcbiAgICAgIHJldHVybiBmZXRjaChcIi9jaGF0XCIsIHsgbWV0aG9kOiBcIkdFVFwiLCBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHRoaXMuZ2V0Q2hhdENvbnRlbnRXcmFwcGVyLCBpbnRlcnZhbCk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oY29udGVudCA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5faXNNb3VudGVkKSB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGNvbnRlbnQ6IGNvbnRlbnQgfSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0NvbnZlcnNpb25BcmVhLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoYXJncykge1xyXG4gICAgc3VwZXIoLi4uYXJncyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2VuZEluUHJvZ3Jlc3M6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2VuZFRleHQgPSB0aGlzLnNlbmRUZXh0LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjaGF0LWlucHV0LXdyYXBwZXJcIiBvblN1Ym1pdD17dGhpcy5zZW5kVGV4dH0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5zZW5kSW5Qcm9ncmVzc31cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgdGV4dCBoZXJlXCJcclxuICAgICAgICAgIHJlZj17aW5wdXQgPT4gKHRoaXMuaW5wdXRFbGVtZW50ID0gaW5wdXQpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCJcclxuICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnNlbmRJblByb2dyZXNzfVxyXG4gICAgICAgICAgdmFsdWU9XCJTZW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2VuZFRleHQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBzZW5kSW5Qcm9ncmVzczogdHJ1ZSB9KSk7XHJcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5pbnB1dEVsZW1lbnQudmFsdWU7XHJcbiAgICBmZXRjaChcIi9jaGF0XCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogdGV4dCxcclxuICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiXHJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IHJlc3BvbnNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgc2VuZEluUHJvZ3Jlc3M6IGZhbHNlIH0pKTtcclxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0NoYXRJbnB1dC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IE1hbmFnZXIgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL01hbmFnZXJcIik7XHJcbmltcG9ydCBcIi4uL3N0eWxlL0dhbWVTdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGUvc3R5bGUyLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN1bW1hcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB1c2Vyc1Jvb21EYXRhOiB0aGlzLnByb3BzLnVzZXJzUm9vbURhdGFcclxuICAgIH07XHJcbiAgICB0aGlzLmhhbmRsZUdvVG9Mb2JieUJ1dHRvbldyYXBwZXIgPSB0aGlzLmhhbmRsZUdvVG9Mb2JieUJ1dHRvbldyYXBwZXIuYmluZChcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGV4aXRCdXR0b24gPSAoXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBrZXk9XCJleGl0XCJcclxuICAgICAgICBjbGFzc05hbWU9XCJsb2dvdXQgYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIlxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlR29Ub0xvYmJ5QnV0dG9uV3JhcHBlcn1cclxuICAgICAgPlxyXG4gICAgICAgIGV4aXRcclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2V4aXRCdXR0b259XHJcbiAgICAgICAgPGgyIGtleT1cImdhbWVTdW1tYXJ5LXRpdGxlXCI+R2FtZSBTdW1tYXJ5OjwvaDI+XHJcblxyXG4gICAgICAgIDxoMiBrZXk9XCJ3aW5uZXItdGl0bGVcIj5USEUgV0lOTkVSIElTOnt0aGlzLnByb3BzLndpbk5hbWV9IDwvaDI+XHJcbiAgICAgICAgPGgyIGtleT1cImxvc3QtdGl0bGVcIj57dGhpcy5wcm9wcy5sb3N0TmFtZX0gbG9zdCB0aGUgZ2FtZS4uLjwvaDI+XHJcbiAgICAgICAgPGgyIGtleT1cInRpbWUtdGl0bGVcIj5cclxuICAgICAgICAgIHRpbWU6e3RoaXMucHJvcHMuY3VycmVudFRpbWUubWludXRlc306e3RoaXMucHJvcHMuY3VycmVudFRpbWUuc2Vjb25kc31cclxuICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICA8dWwga2V5PVwiZ2FtZVN1bW1hcnktdWxcIj5cclxuICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnVzZXJzUm9vbURhdGEpLm1hcCgoaWQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e3RoaXMuc3RhdGUudXNlcnNSb29tRGF0YVtpZF0ubmFtZSArIGluZGV4fT5cclxuICAgICAgICAgICAgICBwbGF5ZXI6IHt0aGlzLnN0YXRlLnVzZXJzUm9vbURhdGFbaWRdLm5hbWV9XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgc2NvcmU6IHt0aGlzLnN0YXRlLnVzZXJzUm9vbURhdGFbaWRdLnN0YXRzLmN1cnJlbnRTY29yZX0gfHxcclxuICAgICAgICAgICAgICBhdmVyYWdlIHRpbWU6IHt0aGlzLnN0YXRlLnVzZXJzUm9vbURhdGFbaWRdLnN0YXRzLmF2ZXJhZ2UubWludXRlc31cclxuICAgICAgICAgICAgICA6e3RoaXMuc3RhdGUudXNlcnNSb29tRGF0YVtpZF0uc3RhdHMuYXZlcmFnZS5zZWNvbmRzfSB8fFxyXG4gICAgICAgICAgICAgIHdpdGhkcmF3YWxzOiB7dGhpcy5zdGF0ZS51c2Vyc1Jvb21EYXRhW2lkXS5zdGF0cy53aXRoZHJhd2Fsc31cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUdvVG9Mb2JieUJ1dHRvbldyYXBwZXIoKSB7XHJcbiAgICB0aGlzLnByb3BzLmhhbmRsZUdvVG9Mb2JieUJ1dHRvbih0aGlzLnN0YXRlLnVzZXJzUm9vbURhdGEuY3VycmVudFJvb21OYW1lKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge31cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLnRpbWVvdXRJZCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9HYW1lU3VtbWFyeS5qc3giXSwic291cmNlUm9vdCI6IiJ9