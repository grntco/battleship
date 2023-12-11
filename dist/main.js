"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["main"],{

/***/ "./src/app/game.js":
/*!*************************!*\
  !*** ./src/app/game.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/app/player.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);
    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__.Player('Player');
    this.computer = new _player__WEBPACK_IMPORTED_MODULE_0__.Player('Computer');
  }
  _createClass(Game, [{
    key: "start",
    value: function start() {
      var computerGameboard = this.computer.gameboard;
      computerGameboard.shipLengths.forEach(function (length) {
        computerGameboard.placeShip(computerGameboard.getRandomShipCoordinates(length));
      });
    }
  }, {
    key: "playRound",
    value: function playRound(_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];
      if (!this.computer.gameboard.alreadyPlayed([x, y])) {
        this._playerMove([x, y]);
        this._computerMove();
        if (this.hasEnded()) {
          console.log(this.getGameResult());
        }
      }
    }
  }, {
    key: "hasEnded",
    value: function hasEnded() {
      return this.player.gameboard.allShipsSunk() || this.computer.gameboard.allShipsSunk();
    }
  }, {
    key: "getGameResult",
    value: function getGameResult() {
      return this._getWinnerName() === 'Computer' ? 'Better luck next time. Your enemy wins this game.' : 'Great work captain: you won the game!';
    }
  }, {
    key: "_getWinnerName",
    value: function _getWinnerName() {
      return this.player.gameboard.allShipsSunk() ? this.computer.name : this.player.name;
    }
  }, {
    key: "_playerMove",
    value: function _playerMove(_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        x = _ref4[0],
        y = _ref4[1];
      this.player.attack([x, y], this.computer.gameboard);
    }
  }, {
    key: "_computerMove",
    value: function _computerMove() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.player.gameboard.getRandomCoordinates(),
        _ref6 = _slicedToArray(_ref5, 2),
        x = _ref6[0],
        y = _ref6[1];
      this.computer.attack([x, y], this.player.gameboard);
    }
  }]);
  return Game;
}();

/***/ }),

/***/ "./src/app/gameboard.js":
/*!******************************!*\
  !*** ./src/app/gameboard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/app/ship.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Gameboard = /*#__PURE__*/function () {
  function Gameboard() {
    _classCallCheck(this, Gameboard);
    this.graph = this._createGraph();
    this.ships = [];
    this.shipLengths = [5, 4, 3, 3, 2, 2];
    this.missedShots = [];
    this.hitShots = [];
  }
  _createClass(Gameboard, [{
    key: "placeShip",
    value: function placeShip(coordinates) {
      var _this = this;
      if (this._arePlaceable(coordinates)) {
        var newShip = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(coordinates.length);
        coordinates.forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            x = _ref2[0],
            y = _ref2[1];
          var node = _this.graph[x][y];
          node.hasShip = true;
          newShip.coordinates.push([x, y]);
        });
        this.ships.push(newShip);
      }
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        x = _ref4[0],
        y = _ref4[1];
      var node = this.graph[x][y];
      if (node.hasShip) {
        var targetShip = this._getShipFromCoordinates([x, y]);
        targetShip.hit();
        this.hitShots.push([x, y]);
      } else {
        this.missedShots.push([x, y]);
      }
    }
  }, {
    key: "allShipsSunk",
    value: function allShipsSunk() {
      return this.ships.every(function (ship) {
        return ship.isSunk();
      });
    }
  }, {
    key: "alreadyPlayed",
    value: function alreadyPlayed(_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
        x = _ref6[0],
        y = _ref6[1];
      return this._areCoordinatesInArray([x, y], this.missedShots) || this._areCoordinatesInArray([x, y], this.hitShots);
    }
  }, {
    key: "getRandomCoordinates",
    value: function getRandomCoordinates() {
      var x = Math.floor(Math.random() * 10);
      var y = Math.floor(Math.random() * 10);
      if (this.alreadyPlayed([x, y])) {
        return this.getRandomCoordinates();
      } else {
        return [x, y];
      }
    }
  }, {
    key: "getRandomShipCoordinates",
    value: function getRandomShipCoordinates(length) {
      var directions = [[1, 0], [0, -1]];
      var allCoordinates = this.getRestOfCoordinates(this.getRandomCoordinates(), length, directions[Math.floor(Math.random() * 2)]);
      if (!this._arePlaceable(allCoordinates)) {
        return this.getRandomShipCoordinates(length);
      } else {
        return allCoordinates;
      }
      ;
    }
  }, {
    key: "getRestOfCoordinates",
    value: function getRestOfCoordinates(start, shipLength, direction) {
      var allCoordinates = [start];
      while (allCoordinates.length < shipLength) {
        var temp = allCoordinates[allCoordinates.length - 1];
        var newItem = [temp[0] + direction[0], temp[1] + direction[1]];
        allCoordinates.push(newItem);
      }
      return allCoordinates;
    }
  }, {
    key: "getAdjacentCoordinates",
    value: function getAdjacentCoordinates(coordinates) {
      var _this2 = this;
      var start = coordinates[0];
      var end = coordinates[coordinates.length - 1];
      var adjacentCoordinates = [];
      var offsets = [[[-1, 0], [1, 0]], [[0, 1], [0, -1]]];
      var offsetEnds = [];
      var offsetSides = [];
      if (start[1] === end[1]) {
        offsetEnds = offsets[0];
        offsetSides = offsets[1];
      } else {
        offsetEnds = offsets[1];
        offsetSides = offsets[0];
      }
      var before = [start[0] + offsetEnds[0][0], start[1] + offsetEnds[0][1]];
      var after = [end[0] + offsetEnds[1][0], end[1] + offsetEnds[1][1]];
      adjacentCoordinates.push(before, after);
      coordinates.forEach(function (_ref7) {
        var _adjacentCoordinates;
        var _ref8 = _slicedToArray(_ref7, 2),
          x = _ref8[0],
          y = _ref8[1];
        var sides = [[x + offsetSides[0][0], y + offsetSides[0][1]], [x + offsetSides[1][0], y + offsetSides[1][1]]];
        (_adjacentCoordinates = adjacentCoordinates).push.apply(_adjacentCoordinates, sides);
      });
      adjacentCoordinates = adjacentCoordinates.filter(function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
          x = _ref10[0],
          y = _ref10[1];
        return _this2._isInBounds([x, y]);
      });
      return adjacentCoordinates;
    }
  }, {
    key: "_createGraph",
    value: function _createGraph() {
      var graph = [];
      for (var i = 0; i < 10; i++) {
        var row = [];
        for (var j = 0; j < 10; j++) {
          var node = {
            hasShip: false
          };
          row.push(node);
        }
        graph.push(row);
      }
      return graph;
    }
  }, {
    key: "_areCoordinatesInArray",
    value: function _areCoordinatesInArray(_ref11, array) {
      var _ref12 = _slicedToArray(_ref11, 2),
        x = _ref12[0],
        y = _ref12[1];
      return array.some(function (_ref13) {
        var _ref14 = _slicedToArray(_ref13, 2),
          a = _ref14[0],
          b = _ref14[1];
        return [a, b].every(function (value, index) {
          return value === [x, y][index];
        });
      });
    }
  }, {
    key: "_arePlaceable",
    value: function _arePlaceable(coordinates) {
      var _this3 = this;
      if (coordinates.length === 0) return false;
      return coordinates.every(function (_ref15) {
        var _ref16 = _slicedToArray(_ref15, 2),
          x = _ref16[0],
          y = _ref16[1];
        return _this3._isInBounds([x, y]) && !_this3.graph[x][y].hasShip;
      }) && this.getAdjacentCoordinates(coordinates).every(function (_ref17) {
        var _ref18 = _slicedToArray(_ref17, 2),
          x = _ref18[0],
          y = _ref18[1];
        return !_this3.graph[x][y].hasShip;
      });
    }
  }, {
    key: "_isInBounds",
    value: function _isInBounds(_ref19) {
      var _ref20 = _slicedToArray(_ref19, 2),
        x = _ref20[0],
        y = _ref20[1];
      return x >= 0 && x < 10 && y >= 0 && y < 10;
    }
  }, {
    key: "_getShipFromCoordinates",
    value: function _getShipFromCoordinates(_ref21) {
      var _this4 = this;
      var _ref22 = _slicedToArray(_ref21, 2),
        x = _ref22[0],
        y = _ref22[1];
      return this.ships.find(function (ship) {
        return _this4._areCoordinatesInArray([x, y], ship.coordinates);
      });
    }
  }]);
  return Gameboard;
}();

/***/ }),

/***/ "./src/app/player.js":
/*!***************************!*\
  !*** ./src/app/player.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/app/gameboard.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Player = /*#__PURE__*/function () {
  function Player(name) {
    _classCallCheck(this, Player);
    this.name = name;
    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
  }
  _createClass(Player, [{
    key: "attack",
    value: function attack(_ref, gameboard) {
      var _ref2 = _slicedToArray(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];
      gameboard.receiveAttack([x, y]);
    }
  }]);
  return Player;
}();

/***/ }),

/***/ "./src/app/ship.js":
/*!*************************!*\
  !*** ./src/app/ship.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Ship = /*#__PURE__*/function () {
  function Ship(length) {
    _classCallCheck(this, Ship);
    this.length = length;
    this.hitCount = 0;
    this.coordinates = [];
  }
  _createClass(Ship, [{
    key: "hit",
    value: function hit() {
      this.hitCount++;
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      return this.hitCount >= this.length;
    }
  }]);
  return Ship;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _ui_components_mainContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/components/mainContainer */ "./src/ui/components/mainContainer.js");
/* harmony import */ var _ui_DOMController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/DOMController */ "./src/ui/DOMController.js");



document.body.appendChild((0,_ui_components_mainContainer__WEBPACK_IMPORTED_MODULE_1__.createMainContainer)());
_ui_DOMController__WEBPACK_IMPORTED_MODULE_2__.DOMController.initGameSetup();

/***/ }),

/***/ "./src/ui/DOMController.js":
/*!*********************************!*\
  !*** ./src/ui/DOMController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMController: () => (/* binding */ DOMController)
/* harmony export */ });
/* harmony import */ var _app_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/game */ "./src/app/game.js");
/* harmony import */ var _components_gamePlayContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/gamePlayContainer */ "./src/ui/components/gamePlayContainer.js");
/* harmony import */ var _components_gameOverContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/gameOverContainer */ "./src/ui/components/gameOverContainer.js");
/* harmony import */ var _components_gameSetupContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/gameSetupContainer */ "./src/ui/components/gameSetupContainer.js");
/* harmony import */ var _events_listeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/listeners */ "./src/ui/events/listeners.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var DOMController = {
  initGameSetup: function initGameSetup() {
    this.game = new _app_game__WEBPACK_IMPORTED_MODULE_0__.Game();
    this._updatePageContent((0,_components_gameSetupContainer__WEBPACK_IMPORTED_MODULE_3__.createGameSetupContainer)());
    this.displayNextShipContainerOrInitGamePlay();
    _events_listeners__WEBPACK_IMPORTED_MODULE_4__.eventListeners.initGameSetupEvents();
  },
  initGamePlay: function initGamePlay() {
    this.game.start();
    this._updatePageContent((0,_components_gamePlayContainer__WEBPACK_IMPORTED_MODULE_1__.createGamePlayContainer)());
    this._updateBoards();
    this._displayGridTitles();
    _events_listeners__WEBPACK_IMPORTED_MODULE_4__.eventListeners.initGamePlayEvents();
  },
  initGameOver: function initGameOver() {
    this._updatePageContent((0,_components_gameOverContainer__WEBPACK_IMPORTED_MODULE_2__.createGameOverContainer)(this.game.getGameResult()));
    _events_listeners__WEBPACK_IMPORTED_MODULE_4__.eventListeners.initGameOverEvents();
  },
  displayGamePlayRound: function displayGamePlayRound(gridItem) {
    var _this$_getCoordinates = this._getCoordinatesOfGridItem(gridItem),
      _this$_getCoordinates2 = _slicedToArray(_this$_getCoordinates, 2),
      x = _this$_getCoordinates2[0],
      y = _this$_getCoordinates2[1];
    this.game.playRound([x, y]);
    this._updateBoards();
    if (this.game.hasEnded()) this.initGameOver();
  },
  displayManualPlacedShipOnBoard: function displayManualPlacedShipOnBoard(gridItem) {
    var _this$_getCoordinates3 = this._getCoordinatesOfGridItem(gridItem),
      _this$_getCoordinates4 = _slicedToArray(_this$_getCoordinates3, 2),
      x = _this$_getCoordinates4[0],
      y = _this$_getCoordinates4[1];
    var shipContainer = document.querySelector('.game-setup__ship-container');
    var playerGameboard = this.game.player.gameboard;
    var shipLength = 0;
    var allCoordinates = [];
    var direction = [];
    if (shipContainer.offsetWidth !== 32) {
      // horizontal placement
      shipLength = shipContainer.offsetWidth / 32;
      direction = [1, 0];
    } else {
      // vertical placement    
      shipLength = shipContainer.offsetHeight / 32;
      direction = [0, -1];
    }
    allCoordinates = playerGameboard.getRestOfCoordinates([x, y], shipLength, direction);
    playerGameboard.placeShip(allCoordinates);
    this._updateBoards();
  },
  displayRandomPlacedShipOnBoard: function displayRandomPlacedShipOnBoard() {
    var playerGameboard = this.game.player.gameboard;
    playerGameboard.placeShip(playerGameboard.getRandomShipCoordinates(this._moveToNextShipLength()));
    this._updateBoards();
  },
  displayNextShipContainerOrInitGamePlay: function displayNextShipContainerOrInitGamePlay() {
    var shipLength = this._moveToNextShipLength();
    if (shipLength === 0) {
      this.initGamePlay();
    } else {
      this._displayShipSetupContainer(shipLength);
    }
  },
  _displayShipSetupContainer: function _displayShipSetupContainer(shipLength) {
    var shipContainer = document.querySelector('.game-setup__ship-container');
    shipContainer.style.width = shipLength * 32 + 'px';
    shipContainer.style.height = '32px';
  },
  _moveToNextShipLength: function _moveToNextShipLength() {
    var shipLengths = this.game.player.gameboard.shipLengths;
    var alreadyPlacedShips = this.game.player.gameboard.ships;
    if (alreadyPlacedShips.length < shipLengths.length) {
      return shipLengths[alreadyPlacedShips.length];
    } else {
      return 0;
    }
  },
  _updatePageContent: function _updatePageContent(newContentFunc) {
    var contentSection = document.querySelector('.content-section');
    contentSection.innerHTML = '';
    contentSection.appendChild(newContentFunc);
  },
  _updateBoards: function _updateBoards() {
    var _this = this;
    var grids = document.querySelectorAll('.grid');
    var gameboards = grids.length > 1 ? [this.game.player.gameboard, this.game.computer.gameboard] : [this.game.player.gameboard];
    gameboards[0].ships.forEach(function (ship) {
      ship.coordinates.forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          x = _ref2[0],
          y = _ref2[1];
        var gridItem = _this._getGridItemFromCoordinates([x, y], grids[0]);
        gridItem.classList.add('grid-item__ship');
      });
    });
    var _loop = function _loop(i) {
      gameboards[i].hitShots.forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          x = _ref4[0],
          y = _ref4[1];
        var gridItem = _this._getGridItemFromCoordinates([x, y], grids[i]);
        if (!gridItem.classList.contains('grid-item__hit')) {
          gridItem.classList.add('grid-item__hit');
        }
      });
      gameboards[i].missedShots.forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          x = _ref6[0],
          y = _ref6[1];
        var gridItem = _this._getGridItemFromCoordinates([x, y], grids[i]);
        if (!gridItem.classList.contains('grid-item__miss')) {
          gridItem.classList.add('grid-item__miss');
        }
      });
    };
    for (var i = 0; i < grids.length; i++) {
      _loop(i);
    }
  },
  _displayGridTitles: function _displayGridTitles() {
    var titles = document.querySelectorAll('.grid-container__title');
    titles[0].textContent = 'You';
    titles[1].textContent = 'Enemy';
  },
  _getCoordinatesOfGridItem: function _getCoordinatesOfGridItem(gridItem) {
    var allGridItems = _toConsumableArray(gridItem.parentElement.children);
    var gridItemIndex = allGridItems.indexOf(gridItem);
    var numberOfSquaresBefore = allGridItems.slice(0, gridItemIndex).length;
    var iterations = 0;
    while (numberOfSquaresBefore >= 10) {
      numberOfSquaresBefore -= 10;
      iterations++;
    }
    var x = numberOfSquaresBefore;
    var y = 9 - iterations;
    return [x, y];
  },
  _getGridItemFromCoordinates: function _getGridItemFromCoordinates(_ref7, grid) {
    var _ref8 = _slicedToArray(_ref7, 2),
      x = _ref8[0],
      y = _ref8[1];
    var allGridItems = _toConsumableArray(grid.querySelectorAll('.grid-item'));
    var numberOfSquaresBefore = x + (9 - y) * 10;
    var targetGridItem = allGridItems.find(function (gridItem) {
      return allGridItems.indexOf(gridItem) === numberOfSquaresBefore;
    });
    return targetGridItem;
  }
};


/***/ }),

/***/ "./src/ui/components/contentSection.js":
/*!*********************************************!*\
  !*** ./src/ui/components/contentSection.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContentSection: () => (/* binding */ createContentSection)
/* harmony export */ });
var createContentSection = function createContentSection() {
  var contentSection = document.createElement('section');
  contentSection.className = 'content-section';
  return contentSection;
};

/***/ }),

/***/ "./src/ui/components/footer.js":
/*!*************************************!*\
  !*** ./src/ui/components/footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFooter: () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _assets_images_github_mark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/github-mark.svg */ "./src/ui/assets/images/github-mark.svg");

var createFooter = function createFooter() {
  var footer = document.createElement('footer');
  footer.className = 'footer';
  var ghLink = footer.appendChild(document.createElement('a'));
  ghLink.className = 'footer__gh-link';
  ghLink.href = 'https://github.com/grntco';
  ghLink.target = '_blank';
  var description = ghLink.appendChild(document.createElement('p'));
  description.textContent = 'Made by grntco';
  var icon = ghLink.appendChild(document.createElement('img'));
  icon.className = 'footer__gh-link__gh-icon';
  icon.src = _assets_images_github_mark_svg__WEBPACK_IMPORTED_MODULE_0__;
  return footer;
};

/***/ }),

/***/ "./src/ui/components/gameOverContainer.js":
/*!************************************************!*\
  !*** ./src/ui/components/gameOverContainer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGameOverContainer: () => (/* binding */ createGameOverContainer)
/* harmony export */ });
var createGameOverContainer = function createGameOverContainer(gameResult) {
  var gameOverContainer = document.createElement('div');
  gameOverContainer.className = 'game-over-container';
  var gameResultText = gameOverContainer.appendChild(document.createElement('h2'));
  gameResultText.className = 'game-over__game-result-text';
  gameResultText.textContent = gameResult;
  var playAgainBtn = gameOverContainer.appendChild(document.createElement('button'));
  playAgainBtn.id = 'play-again-btn';
  playAgainBtn.textContent = 'Play Again';
  return gameOverContainer;
};

/***/ }),

/***/ "./src/ui/components/gamePlayContainer.js":
/*!************************************************!*\
  !*** ./src/ui/components/gamePlayContainer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGamePlayContainer: () => (/* binding */ createGamePlayContainer)
/* harmony export */ });
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./src/ui/components/grid.js");

var createGamePlayContainer = function createGamePlayContainer() {
  var gamePlayContainer = document.createElement('div');
  gamePlayContainer.className = 'game-play-container';
  var createGridContainer = function createGridContainer() {
    var gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';
    var gridTitle = document.createElement('h3');
    gridTitle.className = 'grid-container__title';
    var createAxis = function createAxis(type) {
      var axis = document.createElement('div');
      axis.className = "grid-container__".concat(type, "-axis-container");
      var array = [];
      if (type === 'x') {
        array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
      } else {
        array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
      }
      array.forEach(function (item) {
        var axisItem = axis.appendChild(document.createElement('div'));
        axisItem.className = 'grid-container__axis-item';
        axisItem.textContent = item;
      });
      return axis;
    };
    gridContainer.appendChild(createAxis('x'));
    gridContainer.appendChild(createAxis('y'));
    gridContainer.appendChild((0,_grid__WEBPACK_IMPORTED_MODULE_0__.createGrid)());
    gridContainer.appendChild(gridTitle);
    return gridContainer;
  };
  gamePlayContainer.appendChild(createGridContainer());
  gamePlayContainer.appendChild(createGridContainer());
  return gamePlayContainer;
};

/***/ }),

/***/ "./src/ui/components/gameSetupContainer.js":
/*!*************************************************!*\
  !*** ./src/ui/components/gameSetupContainer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGameSetupContainer: () => (/* binding */ createGameSetupContainer)
/* harmony export */ });
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./src/ui/components/grid.js");

var createGameSetupContainer = function createGameSetupContainer() {
  var gameSetupContainer = document.createElement('div');
  gameSetupContainer.className = 'game-setup-container';
  var createWelcomeContainer = function createWelcomeContainer() {
    var welcomeContainer = document.createElement('div');
    welcomeContainer.className = 'game-setup__welcome-container';
    var heading = welcomeContainer.appendChild(document.createElement('h2'));
    heading.textContent = 'Welcome, player!';
    var placeShipsText = welcomeContainer.appendChild(document.createElement('p'));
    placeShipsText.className = 'game-setup__place-ships-text';
    placeShipsText.textContent = 'Place your ships on the board';
    var btnContainer = welcomeContainer.appendChild(document.createElement('div'));
    btnContainer.className = 'game-setup__btn-container';
    var rotateBtn = btnContainer.appendChild(document.createElement('button'));
    rotateBtn.id = 'rotate-btn';
    rotateBtn.textContent = 'Rotate';
    var randomBtn = btnContainer.appendChild(document.createElement('button'));
    randomBtn.id = 'random-btn';
    randomBtn.textContent = 'Random';
    return welcomeContainer;
  };
  gameSetupContainer.appendChild(createWelcomeContainer());
  var shipContainer = gameSetupContainer.appendChild(document.createElement('div'));
  shipContainer.className = 'game-setup__ship-container';
  gameSetupContainer.appendChild((0,_grid__WEBPACK_IMPORTED_MODULE_0__.createGrid)());
  return gameSetupContainer;
};

/***/ }),

/***/ "./src/ui/components/grid.js":
/*!***********************************!*\
  !*** ./src/ui/components/grid.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGrid: () => (/* binding */ createGrid)
/* harmony export */ });
function createGrid() {
  var grid = document.createElement('div');
  grid.className = 'grid';
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      var gridItem = grid.appendChild(document.createElement('div'));
      gridItem.className = 'grid-item';
    }
  }
  return grid;
}

/***/ }),

/***/ "./src/ui/components/mainContainer.js":
/*!********************************************!*\
  !*** ./src/ui/components/mainContainer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMainContainer: () => (/* binding */ createMainContainer)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/ui/components/nav.js");
/* harmony import */ var _contentSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentSection */ "./src/ui/components/contentSection.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/ui/components/footer.js");



var createMainContainer = function createMainContainer() {
  var mainContainer = document.createElement('div');
  mainContainer.className = 'main-container';
  mainContainer.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_0__.createNav)());
  mainContainer.appendChild((0,_contentSection__WEBPACK_IMPORTED_MODULE_1__.createContentSection)());
  mainContainer.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__.createFooter)());
  return mainContainer;
};

/***/ }),

/***/ "./src/ui/components/nav.js":
/*!**********************************!*\
  !*** ./src/ui/components/nav.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNav: () => (/* binding */ createNav)
/* harmony export */ });
var createNav = function createNav() {
  var nav = document.createElement('nav');
  nav.className = 'nav';
  var gameTitle = nav.appendChild(document.createElement('h1'));
  gameTitle.className = 'nav__game-title';
  gameTitle.textContent = 'Battleship';
  return nav;
};

/***/ }),

/***/ "./src/ui/events/handlers.js":
/*!***********************************!*\
  !*** ./src/ui/events/handlers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventHandlers: () => (/* binding */ eventHandlers)
/* harmony export */ });
/* harmony import */ var _DOMController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOMController */ "./src/ui/DOMController.js");

var eventHandlers = {
  moveMouseToDragShip: function moveMouseToDragShip(e) {
    var ship = document.querySelector('.game-setup__ship-container');
    ship.style.left = e.pageX - 16 + 'px';
    ship.style.top = e.pageY - 16 + 'px';
  },
  clickToRotateShip: function clickToRotateShip() {
    var shipContainer = document.querySelector('.game-setup__ship-container');
    if (shipContainer.offsetWidth > 32) {
      shipContainer.style.height = shipContainer.offsetWidth + 'px';
      shipContainer.style.width = '32px';
    } else {
      shipContainer.style.width = shipContainer.offsetHeight + 'px';
      shipContainer.style.height = '32px';
    }
  },
  clickToPlaceShip: function clickToPlaceShip(e) {
    _DOMController__WEBPACK_IMPORTED_MODULE_0__.DOMController.displayManualPlacedShipOnBoard(e.target);
    _DOMController__WEBPACK_IMPORTED_MODULE_0__.DOMController.displayNextShipContainerOrInitGamePlay();
  },
  clickToPlaceRandomShip: function clickToPlaceRandomShip() {
    _DOMController__WEBPACK_IMPORTED_MODULE_0__.DOMController.displayRandomPlacedShipOnBoard();
    _DOMController__WEBPACK_IMPORTED_MODULE_0__.DOMController.displayNextShipContainerOrInitGamePlay();
  },
  clickToAttackEnemy: function clickToAttackEnemy(e) {
    _DOMController__WEBPACK_IMPORTED_MODULE_0__.DOMController.displayGamePlayRound(e.target);
  },
  clickToPlayAgain: function clickToPlayAgain() {
    _DOMController__WEBPACK_IMPORTED_MODULE_0__.DOMController.initGameSetup();
  }
};

/***/ }),

/***/ "./src/ui/events/listeners.js":
/*!************************************!*\
  !*** ./src/ui/events/listeners.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventListeners: () => (/* binding */ eventListeners)
/* harmony export */ });
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers */ "./src/ui/events/handlers.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var eventListeners = {
  initGameSetupEvents: function initGameSetupEvents() {
    var gameSetupContainer = document.querySelector('.game-setup-container');
    gameSetupContainer.addEventListener('mousemove', _handlers__WEBPACK_IMPORTED_MODULE_0__.eventHandlers.moveMouseToDragShip);
    var rotateBtn = document.getElementById('rotate-btn');
    rotateBtn.addEventListener('click', _handlers__WEBPACK_IMPORTED_MODULE_0__.eventHandlers.clickToRotateShip);
    var randomBtn = document.getElementById('random-btn');
    randomBtn.addEventListener('click', _handlers__WEBPACK_IMPORTED_MODULE_0__.eventHandlers.clickToPlaceRandomShip);
    var playerGridItems = _toConsumableArray(document.querySelectorAll('.grid-item'));
    playerGridItems.forEach(function (gridItem) {
      gridItem.addEventListener('click', _handlers__WEBPACK_IMPORTED_MODULE_0__.eventHandlers.clickToPlaceShip);
    });
  },
  initGamePlayEvents: function initGamePlayEvents() {
    var enemyGridItems = _toConsumableArray(document.querySelectorAll('.grid')[1].children);
    enemyGridItems.forEach(function (gridItem) {
      gridItem.addEventListener('click', _handlers__WEBPACK_IMPORTED_MODULE_0__.eventHandlers.clickToAttackEnemy);
    });
  },
  initGameOverEvents: function initGameOverEvents() {
    var playAgainBtn = document.getElementById('play-again-btn');
    playAgainBtn.addEventListener('click', _handlers__WEBPACK_IMPORTED_MODULE_0__.eventHandlers.clickToPlayAgain);
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./ui/assets/fonts/JetBrainsMono-Regular.woff2 */ "./src/ui/assets/fonts/JetBrainsMono-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./ui/assets/fonts/JetBrainsMono-Regular.woff */ "./src/ui/assets/fonts/JetBrainsMono-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./ui/assets/fonts/JetBrainsMono-ExtraBold.woff2 */ "./src/ui/assets/fonts/JetBrainsMono-ExtraBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./ui/assets/fonts/JetBrainsMono-ExtraBold.woff */ "./src/ui/assets/fonts/JetBrainsMono-ExtraBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  box-sizing: border-box;
}

/* Colors from Chris Yeh: https://chrisyeh96.github.io/2020/03/28/terminal-colors.html */
:root {
  --black: rgb(0, 0, 0);
  --red: rgb(204, 0, 0);
  --green:rgb(78, 154, 6);
  --yellow:	rgb(196, 160, 0);
  --blue: rgb(114, 159, 207);
  --white:rgb(211, 215, 207);
  --bright-black: rgb(85, 87, 83);
  --bright-red:	rgb(239, 41, 41);
  --bright-green: rgb(138, 226, 52);
  --bright-yellow: rgb(252, 233, 79);
  --bright-blue: rgb(50, 175, 255);
  --bright-white: rgb(255, 255, 255);
}

/* Font from Fontshare: JetBrains Mono */
@font-face {
  font-family: 'JetBrains Mono';
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),
       url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
}
@font-face {
  font-family: 'JetBrains Mono';
  font-weight: 900;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2'),
       url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff');
}

/* Styles */

::selection {
  background-color: var(--green);
  color: var(--bright-black);
}

body {
  background-color: var(--black);
  color: var(--bright-green);
  font-family: 'JetBrains Mono';
  font-weight: 400;
}

button {
  outline: none;
  border: none;
  font-family: 'JetBrains Mono';
  font-size: 1.2rem;
  padding: 4px 8px;
  background-color: var(--bright-green);
  color: var(--black);
}

button:hover {
  cursor: pointer;
  background-color: var(--green);
}

h2 {
  font-size: clamp(1.3rem, 3vw, 2.4rem);
  font-weight: 400;
}

.main-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Nav */

.nav {
  padding: 8px;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid var(--bright-green);
}

.nav__game-title {
  text-transform: uppercase;
  font-size: clamp(2.4rem, 8vw, 5rem);
  font-weight: 900;
  letter-spacing: 0.5rem;
}

/* Pages Content */

.content-section {
  height: 100%;
  display: flex;
}

.game-setup-container, 
.game-play-container, 
.game-over-container {
  width: 100%;
  padding: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
}

/* Game Setup Page */

.game-setup-container:hover {
  cursor: pointer;
}

.game-setup__btn-container {
  margin-top: 16px;
  display: flex;
  gap: 8px;
}

.game-setup__place-ships-text::after {
  content: "";
  margin-left: 2px;
  padding: 0px 4px;
  background-color: var(--bright-green);
  animation: blink 1.25s steps(1) infinite;
}

.game-setup__ship-container {
  position: absolute;
  height: 32px;
  width: 32px;
  border: 2px solid var(--bright-green);
  background-color: var(--green);
  opacity: 0.8;
  pointer-events: none;
}

/* Game Play Page */

.grid-container {
  display: grid;
  grid-template-columns: 1fr, 322px;
  grid-template-rows: 32px 322px 1fr;
}

.grid-container__x-axis-container {
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: repeat(10, 32px);
}

.grid-container__y-axis-container {
  display: grid;
  grid-template-rows: repeat(10, 32px);
}

.grid-container__axis-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  font-size: 0.8rem;
}

.grid-container__title {
  grid-row: 3 / 4;
  grid-column: 2 / 3;
  justify-self: center;
  margin-top: 8px;
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
}

.grid {
  width: 322px;
  height: 322px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  border: 1px solid var(--bright-green);
}

.grid-item {
  border: 1px solid var(--bright-green);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
}

.grid-container + .grid-container .grid .grid-item:hover {
  background-color: var(--bright-black);
  cursor: crosshair;
}

.grid-item__ship {
  background-color: var(--green);
}

.grid-item__hit::after {
  content: "";
  padding: 4px;
  border-radius: 50%;
  background-color: var(--red);
  animation: pulse 750ms infinite alternate;
}

.grid-item__miss::after {
  content: "";
  padding: 4px;
  border-radius: 50%;
  background-color: var(--white);
}

/* Game Over Page */

.game-over-container {
  flex-direction: column;
}

.game-over__game-result-text {
  text-align: center;
}

/* Footer */

.footer {
  border-top: 2px solid var(--bright-green);
  padding: 8px;
  display: flex;
  justify-content: center;
}

.footer__gh-link {
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: var(--bright-green);
}

.footer__gh-link__gh-icon {
  height: 1.3rem;
}

/* Animations */

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@keyframes pulse {
  from {
    background-color: var(--red);
    -webkit-box-shadow: 0px 0px 20px 2px var(--red);
    -moz-box-shadow: 0px 0px 20px 2px var(--red);
    box-shadow: 0px 0px 20px 2px var(--red);
  }
  to {
    background-color: var(--bright-red);
    -webkit-box-shadow: 0px 0px 20px 5px var(--red);
    -moz-box-shadow: 0px 0px 20px 5px var(--red);
    box-shadow: 0px 0px 20px 5px var(--red);
    transform: scale(1.2);
  }
}

/* Mobile */

@media (max-width: 910px) {
  .game-setup-container, 
  .game-play-container {
    padding: 0;
    flex-direction: column;
    gap: 1rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\n/* Colors from Chris Yeh: https://chrisyeh96.github.io/2020/03/28/terminal-colors.html */\n:root {\n  --black: rgb(0, 0, 0);\n  --red: rgb(204, 0, 0);\n  --green:rgb(78, 154, 6);\n  --yellow:\trgb(196, 160, 0);\n  --blue: rgb(114, 159, 207);\n  --white:rgb(211, 215, 207);\n  --bright-black: rgb(85, 87, 83);\n  --bright-red:\trgb(239, 41, 41);\n  --bright-green: rgb(138, 226, 52);\n  --bright-yellow: rgb(252, 233, 79);\n  --bright-blue: rgb(50, 175, 255);\n  --bright-white: rgb(255, 255, 255);\n}\n\n/* Font from Fontshare: JetBrains Mono */\n@font-face {\n  font-family: 'JetBrains Mono';\n  font-weight: 400;\n  src: url('./ui/assets/fonts/JetBrainsMono-Regular.woff2') format('woff2'),\n       url('./ui/assets/fonts/JetBrainsMono-Regular.woff') format('woff');\n}\n@font-face {\n  font-family: 'JetBrains Mono';\n  font-weight: 900;\n  src: url('./ui/assets/fonts/JetBrainsMono-ExtraBold.woff2') format('woff2'),\n       url('./ui/assets/fonts/JetBrainsMono-ExtraBold.woff') format('woff');\n}\n\n/* Styles */\n\n::selection {\n  background-color: var(--green);\n  color: var(--bright-black);\n}\n\nbody {\n  background-color: var(--black);\n  color: var(--bright-green);\n  font-family: 'JetBrains Mono';\n  font-weight: 400;\n}\n\nbutton {\n  outline: none;\n  border: none;\n  font-family: 'JetBrains Mono';\n  font-size: 1.2rem;\n  padding: 4px 8px;\n  background-color: var(--bright-green);\n  color: var(--black);\n}\n\nbutton:hover {\n  cursor: pointer;\n  background-color: var(--green);\n}\n\nh2 {\n  font-size: clamp(1.3rem, 3vw, 2.4rem);\n  font-weight: 400;\n}\n\n.main-container {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n/* Nav */\n\n.nav {\n  padding: 8px;\n  display: flex;\n  justify-content: center;\n  border-bottom: 2px solid var(--bright-green);\n}\n\n.nav__game-title {\n  text-transform: uppercase;\n  font-size: clamp(2.4rem, 8vw, 5rem);\n  font-weight: 900;\n  letter-spacing: 0.5rem;\n}\n\n/* Pages Content */\n\n.content-section {\n  height: 100%;\n  display: flex;\n}\n\n.game-setup-container, \n.game-play-container, \n.game-over-container {\n  width: 100%;\n  padding: 96px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4rem;\n}\n\n/* Game Setup Page */\n\n.game-setup-container:hover {\n  cursor: pointer;\n}\n\n.game-setup__btn-container {\n  margin-top: 16px;\n  display: flex;\n  gap: 8px;\n}\n\n.game-setup__place-ships-text::after {\n  content: \"\";\n  margin-left: 2px;\n  padding: 0px 4px;\n  background-color: var(--bright-green);\n  animation: blink 1.25s steps(1) infinite;\n}\n\n.game-setup__ship-container {\n  position: absolute;\n  height: 32px;\n  width: 32px;\n  border: 2px solid var(--bright-green);\n  background-color: var(--green);\n  opacity: 0.8;\n  pointer-events: none;\n}\n\n/* Game Play Page */\n\n.grid-container {\n  display: grid;\n  grid-template-columns: 1fr, 322px;\n  grid-template-rows: 32px 322px 1fr;\n}\n\n.grid-container__x-axis-container {\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: repeat(10, 32px);\n}\n\n.grid-container__y-axis-container {\n  display: grid;\n  grid-template-rows: repeat(10, 32px);\n}\n\n.grid-container__axis-item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n  font-size: 0.8rem;\n}\n\n.grid-container__title {\n  grid-row: 3 / 4;\n  grid-column: 2 / 3;\n  justify-self: center;\n  margin-top: 8px;\n  font-size: 1rem;\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 0.15rem;\n}\n\n.grid {\n  width: 322px;\n  height: 322px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  border: 1px solid var(--bright-green);\n}\n\n.grid-item {\n  border: 1px solid var(--bright-green);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 32px;\n}\n\n.grid-container + .grid-container .grid .grid-item:hover {\n  background-color: var(--bright-black);\n  cursor: crosshair;\n}\n\n.grid-item__ship {\n  background-color: var(--green);\n}\n\n.grid-item__hit::after {\n  content: \"\";\n  padding: 4px;\n  border-radius: 50%;\n  background-color: var(--red);\n  animation: pulse 750ms infinite alternate;\n}\n\n.grid-item__miss::after {\n  content: \"\";\n  padding: 4px;\n  border-radius: 50%;\n  background-color: var(--white);\n}\n\n/* Game Over Page */\n\n.game-over-container {\n  flex-direction: column;\n}\n\n.game-over__game-result-text {\n  text-align: center;\n}\n\n/* Footer */\n\n.footer {\n  border-top: 2px solid var(--bright-green);\n  padding: 8px;\n  display: flex;\n  justify-content: center;\n}\n\n.footer__gh-link {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  text-decoration: none;\n  color: var(--bright-green);\n}\n\n.footer__gh-link__gh-icon {\n  height: 1.3rem;\n}\n\n/* Animations */\n\n@keyframes blink {\n  50% {\n    opacity: 0;\n  }\n}\n\n@keyframes pulse {\n  from {\n    background-color: var(--red);\n    -webkit-box-shadow: 0px 0px 20px 2px var(--red);\n    -moz-box-shadow: 0px 0px 20px 2px var(--red);\n    box-shadow: 0px 0px 20px 2px var(--red);\n  }\n  to {\n    background-color: var(--bright-red);\n    -webkit-box-shadow: 0px 0px 20px 5px var(--red);\n    -moz-box-shadow: 0px 0px 20px 5px var(--red);\n    box-shadow: 0px 0px 20px 5px var(--red);\n    transform: scale(1.2);\n  }\n}\n\n/* Mobile */\n\n@media (max-width: 910px) {\n  .game-setup-container, \n  .game-play-container {\n    padding: 0;\n    flex-direction: column;\n    gap: 1rem;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/ui/assets/fonts/JetBrainsMono-ExtraBold.woff":
/*!**********************************************************!*\
  !*** ./src/ui/assets/fonts/JetBrainsMono-ExtraBold.woff ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c427f8336d2b89f09017.woff";

/***/ }),

/***/ "./src/ui/assets/fonts/JetBrainsMono-ExtraBold.woff2":
/*!***********************************************************!*\
  !*** ./src/ui/assets/fonts/JetBrainsMono-ExtraBold.woff2 ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e464ad5e60e75e0eea3f.woff2";

/***/ }),

/***/ "./src/ui/assets/fonts/JetBrainsMono-Regular.woff":
/*!********************************************************!*\
  !*** ./src/ui/assets/fonts/JetBrainsMono-Regular.woff ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45f869803329b88edde0.woff";

/***/ }),

/***/ "./src/ui/assets/fonts/JetBrainsMono-Regular.woff2":
/*!*********************************************************!*\
  !*** ./src/ui/assets/fonts/JetBrainsMono-Regular.woff2 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a540aa1791f2cd988fd.woff2";

/***/ }),

/***/ "./src/ui/assets/images/github-mark.svg":
/*!**********************************************!*\
  !*** ./src/ui/assets/images/github-mark.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3f34dcad8067f38f969.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNoRCxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sT0FBTyxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxNQUFNLE9BQU8sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxhQUFhLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLFVBQVUsWUFBWSxXQUFXLEtBQUssNEJBQTRCLGNBQWMsMkJBQTJCLEdBQUcsc0dBQXNHLDBCQUEwQiwwQkFBMEIsNEJBQTRCLGdDQUFnQywrQkFBK0IsK0JBQStCLG9DQUFvQyxvQ0FBb0Msc0NBQXNDLHVDQUF1QyxxQ0FBcUMsdUNBQXVDLEdBQUcsMkRBQTJELGtDQUFrQyxxQkFBcUIsMEpBQTBKLEdBQUcsY0FBYyxrQ0FBa0MscUJBQXFCLDhKQUE4SixHQUFHLGlDQUFpQyxtQ0FBbUMsK0JBQStCLEdBQUcsVUFBVSxtQ0FBbUMsK0JBQStCLGtDQUFrQyxxQkFBcUIsR0FBRyxZQUFZLGtCQUFrQixpQkFBaUIsa0NBQWtDLHNCQUFzQixxQkFBcUIsMENBQTBDLHdCQUF3QixHQUFHLGtCQUFrQixvQkFBb0IsbUNBQW1DLEdBQUcsUUFBUSwwQ0FBMEMscUJBQXFCLEdBQUcscUJBQXFCLGtCQUFrQixrQkFBa0IsMkJBQTJCLEdBQUcsdUJBQXVCLGlCQUFpQixrQkFBa0IsNEJBQTRCLGlEQUFpRCxHQUFHLHNCQUFzQiw4QkFBOEIsd0NBQXdDLHFCQUFxQiwyQkFBMkIsR0FBRyw2Q0FBNkMsaUJBQWlCLGtCQUFrQixHQUFHLDJFQUEyRSxnQkFBZ0Isa0JBQWtCLGtCQUFrQix3QkFBd0IsNEJBQTRCLGNBQWMsR0FBRywwREFBMEQsb0JBQW9CLEdBQUcsZ0NBQWdDLHFCQUFxQixrQkFBa0IsYUFBYSxHQUFHLDBDQUEwQyxrQkFBa0IscUJBQXFCLHFCQUFxQiwwQ0FBMEMsNkNBQTZDLEdBQUcsaUNBQWlDLHVCQUF1QixpQkFBaUIsZ0JBQWdCLDBDQUEwQyxtQ0FBbUMsaUJBQWlCLHlCQUF5QixHQUFHLDZDQUE2QyxrQkFBa0Isc0NBQXNDLHVDQUF1QyxHQUFHLHVDQUF1Qyx1QkFBdUIsa0JBQWtCLDRDQUE0QyxHQUFHLHVDQUF1QyxrQkFBa0IseUNBQXlDLEdBQUcsZ0NBQWdDLGtCQUFrQix3QkFBd0IsNEJBQTRCLGlCQUFpQixzQkFBc0IsR0FBRyw0QkFBNEIsb0JBQW9CLHVCQUF1Qix5QkFBeUIsb0JBQW9CLG9CQUFvQixxQkFBcUIsOEJBQThCLDRCQUE0QixHQUFHLFdBQVcsaUJBQWlCLGtCQUFrQixrQkFBa0IsMkNBQTJDLDBDQUEwQyxHQUFHLGdCQUFnQiwwQ0FBMEMsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsaUJBQWlCLEdBQUcsOERBQThELDBDQUEwQyxzQkFBc0IsR0FBRyxzQkFBc0IsbUNBQW1DLEdBQUcsNEJBQTRCLGtCQUFrQixpQkFBaUIsdUJBQXVCLGlDQUFpQyw4Q0FBOEMsR0FBRyw2QkFBNkIsa0JBQWtCLGlCQUFpQix1QkFBdUIsbUNBQW1DLEdBQUcsa0RBQWtELDJCQUEyQixHQUFHLGtDQUFrQyx1QkFBdUIsR0FBRyw2QkFBNkIsOENBQThDLGlCQUFpQixrQkFBa0IsNEJBQTRCLEdBQUcsc0JBQXNCLGtCQUFrQix3QkFBd0IsYUFBYSwwQkFBMEIsK0JBQStCLEdBQUcsK0JBQStCLG1CQUFtQixHQUFHLDBDQUEwQyxTQUFTLGlCQUFpQixLQUFLLEdBQUcsc0JBQXNCLFVBQVUsbUNBQW1DLHNEQUFzRCxtREFBbUQsOENBQThDLEtBQUssUUFBUSwwQ0FBMEMsc0RBQXNELG1EQUFtRCw4Q0FBOEMsNEJBQTRCLEtBQUssR0FBRywrQ0FBK0MscURBQXFELGlCQUFpQiw2QkFBNkIsZ0JBQWdCLEtBQUssR0FBRyxtQkFBbUI7QUFDN3ZQO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDelMxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9jb21wb25lbnRzL2NvbnRlbnRTZWN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9jb21wb25lbnRzL2dhbWVPdmVyQ29udGFpbmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvY29tcG9uZW50cy9nYW1lUGxheUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL2NvbXBvbmVudHMvZ2FtZVNldHVwQ29udGFpbmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvY29tcG9uZW50cy9ncmlkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvY29tcG9uZW50cy9tYWluQ29udGFpbmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvY29tcG9uZW50cy9uYXYuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9ldmVudHMvaGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9ldmVudHMvbGlzdGVuZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoJ1BsYXllcicpO1xuICAgICAgICB0aGlzLmNvbXB1dGVyID0gbmV3IFBsYXllcignQ29tcHV0ZXInKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSB0aGlzLmNvbXB1dGVyLmdhbWVib2FyZDtcbiAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQuc2hpcExlbmd0aHMuZm9yRWFjaChsZW5ndGggPT4ge1xuICAgICAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwKGNvbXB1dGVyR2FtZWJvYXJkLmdldFJhbmRvbVNoaXBDb29yZGluYXRlcyhsZW5ndGgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGxheVJvdW5kKFt4LCB5XSkge1xuICAgICAgICBpZiAoIXRoaXMuY29tcHV0ZXIuZ2FtZWJvYXJkLmFscmVhZHlQbGF5ZWQoW3gsIHldKSkgeyAgXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJNb3ZlKFt4LCB5XSk7XG4gICAgICAgICAgICB0aGlzLl9jb21wdXRlck1vdmUoKTsgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNFbmRlZCgpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5nZXRHYW1lUmVzdWx0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzRW5kZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkgfHwgdGhpcy5jb21wdXRlci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCk7XG4gICAgfVxuXG4gICAgZ2V0R2FtZVJlc3VsdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldFdpbm5lck5hbWUoKSA9PT0gJ0NvbXB1dGVyJyA/XG4gICAgICAgICdCZXR0ZXIgbHVjayBuZXh0IHRpbWUuIFlvdXIgZW5lbXkgd2lucyB0aGlzIGdhbWUuJyA6XG4gICAgICAgICdHcmVhdCB3b3JrIGNhcHRhaW46IHlvdSB3b24gdGhlIGdhbWUhJztcbiAgICB9XG5cbiAgICBfZ2V0V2lubmVyTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSA/IHRoaXMuY29tcHV0ZXIubmFtZSA6IHRoaXMucGxheWVyLm5hbWU7XG4gICAgfVxuXG4gICAgX3BsYXllck1vdmUoW3gsIHldKSB7XG4gICAgICAgIHRoaXMucGxheWVyLmF0dGFjayhbeCwgeV0sIHRoaXMuY29tcHV0ZXIuZ2FtZWJvYXJkKTtcbiAgICB9XG5cbiAgICBfY29tcHV0ZXJNb3ZlKFt4LCB5XSA9IHRoaXMucGxheWVyLmdhbWVib2FyZC5nZXRSYW5kb21Db29yZGluYXRlcygpKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZXIuYXR0YWNrKFt4LCB5XSwgdGhpcy5wbGF5ZXIuZ2FtZWJvYXJkKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ3JhcGggPSB0aGlzLl9jcmVhdGVHcmFwaCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgICAgIHRoaXMuc2hpcExlbmd0aHMgPSBbNSwgNCwgMywgMywgMiwgMl07XG4gICAgICAgIHRoaXMubWlzc2VkU2hvdHMgPSBbXTtcbiAgICAgICAgdGhpcy5oaXRTaG90cyA9IFtdO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcChjb29yZGluYXRlcykge1xuICAgICAgICBpZiAodGhpcy5fYXJlUGxhY2VhYmxlKGNvb3JkaW5hdGVzKSkge1xuICAgICAgICAgICAgY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKGNvb3JkaW5hdGVzLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKFt4LCB5XSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdyYXBoW3hdW3ldO1xuICAgICAgICAgICAgICAgIG5vZGUuaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgbmV3U2hpcC5jb29yZGluYXRlcy5wdXNoKFt4LCB5XSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICB9ICBcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKFt4LCB5XSkge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5ncmFwaFt4XVt5XTtcblxuICAgICAgICBpZiAobm9kZS5oYXNTaGlwKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRTaGlwID0gdGhpcy5fZ2V0U2hpcEZyb21Db29yZGluYXRlcyhbeCwgeV0pO1xuICAgICAgICAgICAgdGFyZ2V0U2hpcC5oaXQoKTtcbiAgICAgICAgICAgIHRoaXMuaGl0U2hvdHMucHVzaChbeCwgeV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5taXNzZWRTaG90cy5wdXNoKFt4LCB5XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc1N1bmsoKSk7ICAgICAgIFxuICAgIH1cblxuICAgIGFscmVhZHlQbGF5ZWQoW3gsIHldKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcmVDb29yZGluYXRlc0luQXJyYXkoW3gsIHldLCB0aGlzLm1pc3NlZFNob3RzKSB8fCB0aGlzLl9hcmVDb29yZGluYXRlc0luQXJyYXkoW3gsIHldLCB0aGlzLmhpdFNob3RzKTtcbiAgICB9XG5cbiAgICBnZXRSYW5kb21Db29yZGluYXRlcygpIHtcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBpZiAodGhpcy5hbHJlYWR5UGxheWVkKFt4LCB5XSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmRvbUNvb3JkaW5hdGVzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tU2hpcENvb3JkaW5hdGVzKGxlbmd0aCkge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb25zID0gW1sxLCAwXSwgWzAsIC0xXV07XG4gICAgICAgIGNvbnN0IGFsbENvb3JkaW5hdGVzID0gdGhpcy5nZXRSZXN0T2ZDb29yZGluYXRlcyh0aGlzLmdldFJhbmRvbUNvb3JkaW5hdGVzKCksIGxlbmd0aCwgZGlyZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV0pO1xuXG4gICAgICAgIGlmICghdGhpcy5fYXJlUGxhY2VhYmxlKGFsbENvb3JkaW5hdGVzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZG9tU2hpcENvb3JkaW5hdGVzKGxlbmd0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYWxsQ29vcmRpbmF0ZXM7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0UmVzdE9mQ29vcmRpbmF0ZXMoc3RhcnQsIHNoaXBMZW5ndGgsIGRpcmVjdGlvbikge1xuICAgICAgICBsZXQgYWxsQ29vcmRpbmF0ZXMgPSBbc3RhcnRdO1xuXG4gICAgICAgIHdoaWxlIChhbGxDb29yZGluYXRlcy5sZW5ndGggPCBzaGlwTGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gYWxsQ29vcmRpbmF0ZXNbYWxsQ29vcmRpbmF0ZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBjb25zdCBuZXdJdGVtID0gW3RlbXBbMF0gKyBkaXJlY3Rpb25bMF0sIHRlbXBbMV0gKyBkaXJlY3Rpb25bMV1dO1xuICAgICAgICAgICAgYWxsQ29vcmRpbmF0ZXMucHVzaChuZXdJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhbGxDb29yZGluYXRlcztcbiAgICB9XG5cbiAgICBnZXRBZGphY2VudENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gY29vcmRpbmF0ZXNbMF07XG4gICAgICAgIGNvbnN0IGVuZCA9IGNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICBcbiAgICAgICAgbGV0IGFkamFjZW50Q29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgbGV0IG9mZnNldHMgPSBbW1stMSwgMF0sIFsxLCAwXV0sIFtbMCwgMV0sIFswLCAtMV1dXTtcbiAgICAgICAgbGV0IG9mZnNldEVuZHMgPSBbXTtcbiAgICAgICAgbGV0IG9mZnNldFNpZGVzID0gW107XG5cbiAgICAgICAgaWYgKHN0YXJ0WzFdID09PSBlbmRbMV0pIHtcbiAgICAgICAgICAgIG9mZnNldEVuZHMgPSBvZmZzZXRzWzBdO1xuICAgICAgICAgICAgb2Zmc2V0U2lkZXMgPSBvZmZzZXRzWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2Zmc2V0RW5kcyA9IG9mZnNldHNbMV07XG4gICAgICAgICAgICBvZmZzZXRTaWRlcyA9IG9mZnNldHNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBiZWZvcmUgPSBbc3RhcnRbMF0gKyBvZmZzZXRFbmRzWzBdWzBdLCBzdGFydFsxXSArIG9mZnNldEVuZHNbMF1bMV1dO1xuICAgICAgICBjb25zdCBhZnRlciA9IFtlbmRbMF0gKyBvZmZzZXRFbmRzWzFdWzBdLCBlbmRbMV0gKyBvZmZzZXRFbmRzWzFdWzFdXTtcbiAgICAgICAgYWRqYWNlbnRDb29yZGluYXRlcy5wdXNoKGJlZm9yZSwgYWZ0ZXIpO1xuXG4gICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKFt4LCB5XSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2lkZXMgPSBbW3ggKyBvZmZzZXRTaWRlc1swXVswXSwgeSArIG9mZnNldFNpZGVzWzBdWzFdXSwgW3ggKyBvZmZzZXRTaWRlc1sxXVswXSwgeSArIG9mZnNldFNpZGVzWzFdWzFdXV07XG4gICAgICAgICAgICBhZGphY2VudENvb3JkaW5hdGVzLnB1c2goLi4uc2lkZXMpO1xuICAgICAgICB9KTsgIFxuICAgICAgICBcbiAgICAgICAgYWRqYWNlbnRDb29yZGluYXRlcyA9IGFkamFjZW50Q29vcmRpbmF0ZXMuZmlsdGVyKChbeCwgeV0pID0+IHRoaXMuX2lzSW5Cb3VuZHMoW3gsIHldKSk7XG4gICAgICAgIHJldHVybiBhZGphY2VudENvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIF9jcmVhdGVHcmFwaCgpIHtcbiAgICAgICAgY29uc3QgZ3JhcGggPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB7IGhhc1NoaXA6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgcm93LnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncmFwaC5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdyYXBoO1xuICAgIH1cblxuICAgIF9hcmVDb29yZGluYXRlc0luQXJyYXkoW3gsIHldLCBhcnJheSkge1xuICAgICAgICByZXR1cm4gYXJyYXkuc29tZSgoW2EsIGJdKSA9PiBbYSwgYl0uZXZlcnkoKHZhbHVlLCBpbmRleCkgPT4gXG4gICAgICAgICAgICB2YWx1ZSA9PT0gW3gsIHldW2luZGV4XVxuICAgICAgICApKTtcbiAgICB9XG5cbiAgICBfYXJlUGxhY2VhYmxlKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGlmIChjb29yZGluYXRlcy5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcblxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXMuZXZlcnkoKFt4LCB5XSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzSW5Cb3VuZHMoW3gsIHldKSAmJiAhdGhpcy5ncmFwaFt4XVt5XS5oYXNTaGlwO1xuICAgICAgICB9KSAmJiB0aGlzLmdldEFkamFjZW50Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpLmV2ZXJ5KChbeCwgeV0pID0+ICF0aGlzLmdyYXBoW3hdW3ldLmhhc1NoaXApO1xuICAgIH1cblxuICAgIF9pc0luQm91bmRzKFt4LCB5XSkge1xuICAgICAgICByZXR1cm4gKHggPj0gMCAmJiB4IDwgMTApICYmICh5ID49IDAgJiYgeSA8IDEwKTsgXG4gICAgfVxuXG4gICAgX2dldFNoaXBGcm9tQ29vcmRpbmF0ZXMoW3gsIHldKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBzLmZpbmQoc2hpcCA9PiBcbiAgICAgICAgICAgIHRoaXMuX2FyZUNvb3JkaW5hdGVzSW5BcnJheShbeCwgeV0sIHNoaXAuY29vcmRpbmF0ZXMpXG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIH1cblxuICAgIGF0dGFjayhbeCwgeV0sIGdhbWVib2FyZCkge1xuICAgICAgICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbeCwgeV0pO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmhpdENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IFtdO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRDb3VudCsrO1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0Q291bnQgPj0gdGhpcy5sZW5ndGg7XG4gICAgfVxufSIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlTWFpbkNvbnRhaW5lciB9IGZyb20gXCIuL3VpL2NvbXBvbmVudHMvbWFpbkNvbnRhaW5lclwiO1xuaW1wb3J0IHsgRE9NQ29udHJvbGxlciB9IGZyb20gXCIuL3VpL0RPTUNvbnRyb2xsZXJcIjtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVNYWluQ29udGFpbmVyKCkpO1xuRE9NQ29udHJvbGxlci5pbml0R2FtZVNldHVwKCk7XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL2FwcC9nYW1lXCI7XG5pbXBvcnQgeyBjcmVhdGVHYW1lUGxheUNvbnRhaW5lciB9IGZyb20gXCIuL2NvbXBvbmVudHMvZ2FtZVBsYXlDb250YWluZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUdhbWVPdmVyQ29udGFpbmVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9nYW1lT3ZlckNvbnRhaW5lclwiO1xuaW1wb3J0IHsgY3JlYXRlR2FtZVNldHVwQ29udGFpbmVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9nYW1lU2V0dXBDb250YWluZXJcIjtcbmltcG9ydCB7IGV2ZW50TGlzdGVuZXJzIH0gZnJvbSBcIi4vZXZlbnRzL2xpc3RlbmVyc1wiO1xuXG5jb25zdCBET01Db250cm9sbGVyID0ge1xuICAgIGluaXRHYW1lU2V0dXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpO1xuICAgICAgICB0aGlzLl91cGRhdGVQYWdlQ29udGVudChjcmVhdGVHYW1lU2V0dXBDb250YWluZXIoKSk7XG4gICAgICAgIHRoaXMuZGlzcGxheU5leHRTaGlwQ29udGFpbmVyT3JJbml0R2FtZVBsYXkoKTtcbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMuaW5pdEdhbWVTZXR1cEV2ZW50cygpO1xuICAgIH0sXG5cbiAgICBpbml0R2FtZVBsYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmdhbWUuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlUGFnZUNvbnRlbnQoY3JlYXRlR2FtZVBsYXlDb250YWluZXIoKSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUJvYXJkcygpO1xuICAgICAgICB0aGlzLl9kaXNwbGF5R3JpZFRpdGxlcygpO1xuICAgICAgICBldmVudExpc3RlbmVycy5pbml0R2FtZVBsYXlFdmVudHMoKTtcbiAgICB9LFxuXG4gICAgaW5pdEdhbWVPdmVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUGFnZUNvbnRlbnQoY3JlYXRlR2FtZU92ZXJDb250YWluZXIodGhpcy5nYW1lLmdldEdhbWVSZXN1bHQoKSkpO1xuICAgICAgICBldmVudExpc3RlbmVycy5pbml0R2FtZU92ZXJFdmVudHMoKTtcbiAgICB9LFxuXG4gICAgZGlzcGxheUdhbWVQbGF5Um91bmQ6IGZ1bmN0aW9uKGdyaWRJdGVtKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMuX2dldENvb3JkaW5hdGVzT2ZHcmlkSXRlbShncmlkSXRlbSk7XG4gICAgICAgIHRoaXMuZ2FtZS5wbGF5Um91bmQoW3gsIHldKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQm9hcmRzKCk7XG4gICAgICAgIGlmICh0aGlzLmdhbWUuaGFzRW5kZWQoKSkgdGhpcy5pbml0R2FtZU92ZXIoKTtcbiAgICB9LFxuXG4gICAgZGlzcGxheU1hbnVhbFBsYWNlZFNoaXBPbkJvYXJkOiBmdW5jdGlvbihncmlkSXRlbSkge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLl9nZXRDb29yZGluYXRlc09mR3JpZEl0ZW0oZ3JpZEl0ZW0pO1xuICAgICAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtc2V0dXBfX3NoaXAtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IHRoaXMuZ2FtZS5wbGF5ZXIuZ2FtZWJvYXJkO1xuXG4gICAgICAgIGxldCBzaGlwTGVuZ3RoID0gMDtcbiAgICAgICAgbGV0IGFsbENvb3JkaW5hdGVzID0gW107XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBbXTtcblxuICAgICAgICBpZiAoc2hpcENvbnRhaW5lci5vZmZzZXRXaWR0aCAhPT0gMzIpIHsgLy8gaG9yaXpvbnRhbCBwbGFjZW1lbnRcbiAgICAgICAgICAgIHNoaXBMZW5ndGggPSBzaGlwQ29udGFpbmVyLm9mZnNldFdpZHRoIC8gMzI7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBbMSwgMF07ICAgIFxuICAgICAgICB9IGVsc2UgeyAvLyB2ZXJ0aWNhbCBwbGFjZW1lbnQgICAgXG4gICAgICAgICAgICBzaGlwTGVuZ3RoID0gc2hpcENvbnRhaW5lci5vZmZzZXRIZWlnaHQgLyAzMjtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IFswLCAtMV07XG4gICAgICAgIH1cblxuICAgICAgICBhbGxDb29yZGluYXRlcyA9IHBsYXllckdhbWVib2FyZC5nZXRSZXN0T2ZDb29yZGluYXRlcyhbeCwgeV0sIHNoaXBMZW5ndGgsIGRpcmVjdGlvbik7XG4gICAgICAgIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXAoYWxsQ29vcmRpbmF0ZXMpO1xuICAgICAgICB0aGlzLl91cGRhdGVCb2FyZHMoKTtcbiAgICB9LFxuXG4gICAgZGlzcGxheVJhbmRvbVBsYWNlZFNoaXBPbkJvYXJkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gdGhpcy5nYW1lLnBsYXllci5nYW1lYm9hcmQ7XG4gICAgICAgIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXAocGxheWVyR2FtZWJvYXJkLmdldFJhbmRvbVNoaXBDb29yZGluYXRlcyh0aGlzLl9tb3ZlVG9OZXh0U2hpcExlbmd0aCgpKSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUJvYXJkcygpO1xuICAgIH0sXG5cbiAgICBkaXNwbGF5TmV4dFNoaXBDb250YWluZXJPckluaXRHYW1lUGxheTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSB0aGlzLl9tb3ZlVG9OZXh0U2hpcExlbmd0aCgpO1xuICAgICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0R2FtZVBsYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2Rpc3BsYXlTaGlwU2V0dXBDb250YWluZXIoc2hpcExlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2Rpc3BsYXlTaGlwU2V0dXBDb250YWluZXI6IGZ1bmN0aW9uKHNoaXBMZW5ndGgpIHsgICBcbiAgICAgICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXNldHVwX19zaGlwLWNvbnRhaW5lcicpO1xuICAgICAgICBzaGlwQ29udGFpbmVyLnN0eWxlLndpZHRoID0gc2hpcExlbmd0aCAqIDMyICsgJ3B4JztcbiAgICAgICAgc2hpcENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMzJweCc7XG4gICAgfSxcbiAgICBcbiAgICBfbW92ZVRvTmV4dFNoaXBMZW5ndGg6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBzaGlwTGVuZ3RocyA9IHRoaXMuZ2FtZS5wbGF5ZXIuZ2FtZWJvYXJkLnNoaXBMZW5ndGhzO1xuICAgICAgICBjb25zdCBhbHJlYWR5UGxhY2VkU2hpcHMgPSB0aGlzLmdhbWUucGxheWVyLmdhbWVib2FyZC5zaGlwcztcbiAgICAgICAgaWYgKGFscmVhZHlQbGFjZWRTaGlwcy5sZW5ndGggPCBzaGlwTGVuZ3Rocy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwTGVuZ3Roc1thbHJlYWR5UGxhY2VkU2hpcHMubGVuZ3RoXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF91cGRhdGVQYWdlQ29udGVudDogZnVuY3Rpb24obmV3Q29udGVudEZ1bmMpIHtcbiAgICAgICAgY29uc3QgY29udGVudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1zZWN0aW9uJyk7XG4gICAgICAgIGNvbnRlbnRTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb250ZW50U2VjdGlvbi5hcHBlbmRDaGlsZChuZXdDb250ZW50RnVuYyk7ICBcbiAgICB9LFxuXG4gICAgX3VwZGF0ZUJvYXJkczogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGdyaWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQnKTtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkcyA9IGdyaWRzLmxlbmd0aCA+IDEgPyBbdGhpcy5nYW1lLnBsYXllci5nYW1lYm9hcmQsIHRoaXMuZ2FtZS5jb21wdXRlci5nYW1lYm9hcmRdIDogW3RoaXMuZ2FtZS5wbGF5ZXIuZ2FtZWJvYXJkXTtcblxuICAgICAgICBnYW1lYm9hcmRzWzBdLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKFt4LCB5XSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRJdGVtID0gdGhpcy5fZ2V0R3JpZEl0ZW1Gcm9tQ29vcmRpbmF0ZXMoW3gsIHldLCBncmlkc1swXSk7XG4gICAgICAgICAgICAgICAgZ3JpZEl0ZW0uY2xhc3NMaXN0LmFkZCgnZ3JpZC1pdGVtX19zaGlwJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZ2FtZWJvYXJkc1tpXS5oaXRTaG90cy5mb3JFYWNoKChbeCwgeV0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkSXRlbSA9IHRoaXMuX2dldEdyaWRJdGVtRnJvbUNvb3JkaW5hdGVzKFt4LCB5XSwgZ3JpZHNbaV0pO1xuICAgICAgICAgICAgICAgIGlmICghZ3JpZEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdncmlkLWl0ZW1fX2hpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWRJdGVtLmNsYXNzTGlzdC5hZGQoJ2dyaWQtaXRlbV9faGl0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdhbWVib2FyZHNbaV0ubWlzc2VkU2hvdHMuZm9yRWFjaCgoW3gsIHldKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZEl0ZW0gPSB0aGlzLl9nZXRHcmlkSXRlbUZyb21Db29yZGluYXRlcyhbeCwgeV0sIGdyaWRzW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAoIWdyaWRJdGVtLmNsYXNzTGlzdC5jb250YWlucygnZ3JpZC1pdGVtX19taXNzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEl0ZW0uY2xhc3NMaXN0LmFkZCgnZ3JpZC1pdGVtX19taXNzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2Rpc3BsYXlHcmlkVGl0bGVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtY29udGFpbmVyX190aXRsZScpO1xuICAgICAgICB0aXRsZXNbMF0udGV4dENvbnRlbnQgPSAnWW91JztcbiAgICAgICAgdGl0bGVzWzFdLnRleHRDb250ZW50ID0gJ0VuZW15JztcbiAgICB9LFxuXG4gICAgX2dldENvb3JkaW5hdGVzT2ZHcmlkSXRlbShncmlkSXRlbSkge1xuICAgICAgICBjb25zdCBhbGxHcmlkSXRlbXMgPSBbLi4uZ3JpZEl0ZW0ucGFyZW50RWxlbWVudC5jaGlsZHJlbl07IFxuICAgICAgICBjb25zdCBncmlkSXRlbUluZGV4ID0gYWxsR3JpZEl0ZW1zLmluZGV4T2YoZ3JpZEl0ZW0pO1xuICAgIFxuICAgICAgICBsZXQgbnVtYmVyT2ZTcXVhcmVzQmVmb3JlID0gYWxsR3JpZEl0ZW1zLnNsaWNlKDAsIGdyaWRJdGVtSW5kZXgpLmxlbmd0aDtcbiAgICAgICAgbGV0IGl0ZXJhdGlvbnMgPSAwO1xuICAgIFxuICAgICAgICB3aGlsZSAobnVtYmVyT2ZTcXVhcmVzQmVmb3JlID49IDEwKSB7XG4gICAgICAgICAgICBudW1iZXJPZlNxdWFyZXNCZWZvcmUgLT0gMTA7XG4gICAgICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgeCA9IG51bWJlck9mU3F1YXJlc0JlZm9yZTtcbiAgICAgICAgY29uc3QgeSA9IDkgLSBpdGVyYXRpb25zO1xuICAgIFxuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH0sXG5cbiAgICBfZ2V0R3JpZEl0ZW1Gcm9tQ29vcmRpbmF0ZXMoW3gsIHldLCBncmlkKSB7XG4gICAgICAgIGNvbnN0IGFsbEdyaWRJdGVtcyA9IFsuLi5ncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLWl0ZW0nKV07XG4gICAgICAgIGNvbnN0IG51bWJlck9mU3F1YXJlc0JlZm9yZSA9IHggKyAoKDkgLSB5KSAqIDEwKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRhcmdldEdyaWRJdGVtID0gYWxsR3JpZEl0ZW1zLmZpbmQoZ3JpZEl0ZW0gPT4gYWxsR3JpZEl0ZW1zLmluZGV4T2YoZ3JpZEl0ZW0pID09PSBudW1iZXJPZlNxdWFyZXNCZWZvcmUpO1xuICAgIFxuICAgICAgICByZXR1cm4gdGFyZ2V0R3JpZEl0ZW07XG4gICAgfVxufTtcblxuZXhwb3J0IHsgRE9NQ29udHJvbGxlciB9O1xuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbnRlbnRTZWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGVudFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29udGVudFNlY3Rpb24uY2xhc3NOYW1lID0gJ2NvbnRlbnQtc2VjdGlvbic7XG4gICAgcmV0dXJuIGNvbnRlbnRTZWN0aW9uO1xufTsiLCJpbXBvcnQgZ2hJY29uIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2dpdGh1Yi1tYXJrLnN2Z1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRm9vdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLmNsYXNzTmFtZSA9ICdmb290ZXInO1xuXG4gICAgY29uc3QgZ2hMaW5rID0gZm9vdGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSk7XG4gICAgZ2hMaW5rLmNsYXNzTmFtZSA9ICdmb290ZXJfX2doLWxpbmsnO1xuICAgIGdoTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9ncm50Y28nO1xuICAgIGdoTGluay50YXJnZXQgPSAnX2JsYW5rJztcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZ2hMaW5rLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnTWFkZSBieSBncm50Y28nO1xuXG4gICAgY29uc3QgaWNvbiA9IGdoTGluay5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSk7XG4gICAgaWNvbi5jbGFzc05hbWUgPSAnZm9vdGVyX19naC1saW5rX19naC1pY29uJztcbiAgICBpY29uLnNyYyA9IGdoSWNvbjtcblxuICAgIHJldHVybiBmb290ZXI7XG59OyIsImV4cG9ydCBjb25zdCBjcmVhdGVHYW1lT3ZlckNvbnRhaW5lciA9IGZ1bmN0aW9uKGdhbWVSZXN1bHQpIHtcbiAgICBjb25zdCBnYW1lT3ZlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWVPdmVyQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdnYW1lLW92ZXItY29udGFpbmVyJztcblxuICAgIGNvbnN0IGdhbWVSZXN1bHRUZXh0ID0gZ2FtZU92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKSk7XG4gICAgZ2FtZVJlc3VsdFRleHQuY2xhc3NOYW1lID0gJ2dhbWUtb3Zlcl9fZ2FtZS1yZXN1bHQtdGV4dCc7XG4gICAgZ2FtZVJlc3VsdFRleHQudGV4dENvbnRlbnQgPSBnYW1lUmVzdWx0O1xuXG4gICAgY29uc3QgcGxheUFnYWluQnRuID0gZ2FtZU92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpO1xuICAgIHBsYXlBZ2FpbkJ0bi5pZCA9ICdwbGF5LWFnYWluLWJ0bic7XG4gICAgcGxheUFnYWluQnRuLnRleHRDb250ZW50ID0gJ1BsYXkgQWdhaW4nO1xuXG4gICAgcmV0dXJuIGdhbWVPdmVyQ29udGFpbmVyO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVHcmlkIH0gZnJvbSBcIi4vZ3JpZFwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlR2FtZVBsYXlDb250YWluZXIgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBnYW1lUGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWVQbGF5Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdnYW1lLXBsYXktY29udGFpbmVyJztcblxuICAgIGNvbnN0IGNyZWF0ZUdyaWRDb250YWluZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmlkQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdncmlkLWNvbnRhaW5lcic7XG5cbiAgICAgICAgY29uc3QgZ3JpZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgZ3JpZFRpdGxlLmNsYXNzTmFtZSA9ICdncmlkLWNvbnRhaW5lcl9fdGl0bGUnO1xuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGNyZWF0ZUF4aXMgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgICAgICAgICBjb25zdCBheGlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBheGlzLmNsYXNzTmFtZSA9IGBncmlkLWNvbnRhaW5lcl9fJHt0eXBlfS1heGlzLWNvbnRhaW5lcmA7XG5cbiAgICAgICAgICAgIGxldCBhcnJheSA9IFtdO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgIGFycmF5ID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFycmF5ID0gWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCddO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aXNJdGVtID0gYXhpcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgICAgICAgICAgYXhpc0l0ZW0uY2xhc3NOYW1lID0gJ2dyaWQtY29udGFpbmVyX19heGlzLWl0ZW0nO1xuICAgICAgICAgICAgICAgIGF4aXNJdGVtLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gYXhpcztcbiAgICAgICAgfTtcblxuICAgICAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUF4aXMoJ3gnKSk7XG4gICAgICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQXhpcygneScpKTtcbiAgICAgICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVHcmlkKCkpO1xuICAgICAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRUaXRsZSk7XG5cbiAgICAgICAgcmV0dXJuIGdyaWRDb250YWluZXI7XG4gICAgfTtcblxuICAgIGdhbWVQbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUdyaWRDb250YWluZXIoKSk7XG4gICAgZ2FtZVBsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlR3JpZENvbnRhaW5lcigpKTtcblxuICAgIHJldHVybiBnYW1lUGxheUNvbnRhaW5lcjtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVHcmlkIH0gZnJvbSBcIi4vZ3JpZFwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlR2FtZVNldHVwQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZ2FtZVNldHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZVNldHVwQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdnYW1lLXNldHVwLWNvbnRhaW5lcic7XG5cbiAgICBjb25zdCBjcmVhdGVXZWxjb21lQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHdlbGNvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd2VsY29tZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnZ2FtZS1zZXR1cF9fd2VsY29tZS1jb250YWluZXInO1xuXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSB3ZWxjb21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJykpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1dlbGNvbWUsIHBsYXllciEnO1xuXG4gICAgICAgIGNvbnN0IHBsYWNlU2hpcHNUZXh0ID0gd2VsY29tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgICAgICBwbGFjZVNoaXBzVGV4dC5jbGFzc05hbWUgPSAnZ2FtZS1zZXR1cF9fcGxhY2Utc2hpcHMtdGV4dCc7XG4gICAgICAgIHBsYWNlU2hpcHNUZXh0LnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgc2hpcHMgb24gdGhlIGJvYXJkJztcblxuICAgICAgICBjb25zdCBidG5Db250YWluZXIgPSB3ZWxjb21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgYnRuQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdnYW1lLXNldHVwX19idG4tY29udGFpbmVyJztcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByb3RhdGVCdG4gPSBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpO1xuICAgICAgICAgICAgcm90YXRlQnRuLmlkID0gJ3JvdGF0ZS1idG4nO1xuICAgICAgICAgICAgcm90YXRlQnRuLnRleHRDb250ZW50ID0gJ1JvdGF0ZSc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUJ0biA9IGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSk7XG4gICAgICAgICAgICByYW5kb21CdG4uaWQgPSAncmFuZG9tLWJ0bic7XG4gICAgICAgICAgICByYW5kb21CdG4udGV4dENvbnRlbnQgPSAnUmFuZG9tJztcblxuICAgICAgICByZXR1cm4gd2VsY29tZUNvbnRhaW5lcjtcbiAgICB9O1xuXG4gICAgZ2FtZVNldHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVdlbGNvbWVDb250YWluZXIoKSk7XG5cbiAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gZ2FtZVNldHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICBzaGlwQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdnYW1lLXNldHVwX19zaGlwLWNvbnRhaW5lcic7XG5cbiAgICBnYW1lU2V0dXBDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlR3JpZCgpKTtcbiAgICBcbiAgICByZXR1cm4gZ2FtZVNldHVwQ29udGFpbmVyO1xufTsiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlR3JpZCgpIHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc05hbWUgPSAnZ3JpZCc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBncmlkSXRlbSA9IGdyaWQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICAgICAgZ3JpZEl0ZW0uY2xhc3NOYW1lID0gJ2dyaWQtaXRlbSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZ3JpZDtcbn0iLCJpbXBvcnQgeyBjcmVhdGVOYXYgfSBmcm9tIFwiLi9uYXZcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRlbnRTZWN0aW9uIH0gZnJvbSBcIi4vY29udGVudFNlY3Rpb25cIjtcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gXCIuL2Zvb3RlclwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTWFpbkNvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdtYWluLWNvbnRhaW5lcic7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRlbnRTZWN0aW9uKCkpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG59OyIsImV4cG9ydCBjb25zdCBjcmVhdGVOYXYgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXYuY2xhc3NOYW1lID0gJ25hdic7XG5cbiAgICBjb25zdCBnYW1lVGl0bGUgPSBuYXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKSk7XG4gICAgZ2FtZVRpdGxlLmNsYXNzTmFtZSA9ICduYXZfX2dhbWUtdGl0bGUnO1xuICAgIGdhbWVUaXRsZS50ZXh0Q29udGVudCA9ICdCYXR0bGVzaGlwJztcblxuICAgIHJldHVybiBuYXY7XG59OyIsImltcG9ydCB7IERPTUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vRE9NQ29udHJvbGxlclwiO1xuXG5leHBvcnQgY29uc3QgZXZlbnRIYW5kbGVycyA9IHtcbiAgICBtb3ZlTW91c2VUb0RyYWdTaGlwOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zZXR1cF9fc2hpcC1jb250YWluZXInKTtcbiAgICAgICAgc2hpcC5zdHlsZS5sZWZ0ID0gZS5wYWdlWCAtIDE2ICsgJ3B4JztcbiAgICAgICAgc2hpcC5zdHlsZS50b3AgPSBlLnBhZ2VZIC0gMTYgKyAncHgnO1xuICAgIH0sXG4gICAgXG4gICAgY2xpY2tUb1JvdGF0ZVNoaXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtc2V0dXBfX3NoaXAtY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChzaGlwQ29udGFpbmVyLm9mZnNldFdpZHRoID4gMzIpIHtcbiAgICAgICAgICAgIHNoaXBDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gc2hpcENvbnRhaW5lci5vZmZzZXRXaWR0aCArICdweCc7XG4gICAgICAgICAgICBzaGlwQ29udGFpbmVyLnN0eWxlLndpZHRoID0gJzMycHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcENvbnRhaW5lci5zdHlsZS53aWR0aCA9IHNoaXBDb250YWluZXIub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIHNoaXBDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzMycHgnO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNsaWNrVG9QbGFjZVNoaXA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgRE9NQ29udHJvbGxlci5kaXNwbGF5TWFudWFsUGxhY2VkU2hpcE9uQm9hcmQoZS50YXJnZXQpO1xuICAgICAgICBET01Db250cm9sbGVyLmRpc3BsYXlOZXh0U2hpcENvbnRhaW5lck9ySW5pdEdhbWVQbGF5KCk7XG4gICAgfSxcblxuICAgIGNsaWNrVG9QbGFjZVJhbmRvbVNoaXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICBET01Db250cm9sbGVyLmRpc3BsYXlSYW5kb21QbGFjZWRTaGlwT25Cb2FyZCgpO1xuICAgICAgICBET01Db250cm9sbGVyLmRpc3BsYXlOZXh0U2hpcENvbnRhaW5lck9ySW5pdEdhbWVQbGF5KCk7XG4gICAgfSxcbiBcbiAgICBjbGlja1RvQXR0YWNrRW5lbXk6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgRE9NQ29udHJvbGxlci5kaXNwbGF5R2FtZVBsYXlSb3VuZChlLnRhcmdldCk7XG4gICAgfSxcblxuICAgIGNsaWNrVG9QbGF5QWdhaW46IGZ1bmN0aW9uKCkge1xuICAgICAgICBET01Db250cm9sbGVyLmluaXRHYW1lU2V0dXAoKTtcbiAgICB9XG59O1xuXG4iLCJpbXBvcnQgeyBldmVudEhhbmRsZXJzIH0gZnJvbSBcIi4vaGFuZGxlcnNcIjtcblxuZXhwb3J0IGNvbnN0IGV2ZW50TGlzdGVuZXJzID0ge1xuICAgIGluaXRHYW1lU2V0dXBFdmVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBnYW1lU2V0dXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zZXR1cC1jb250YWluZXInKTtcbiAgICAgICAgZ2FtZVNldHVwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGV2ZW50SGFuZGxlcnMubW92ZU1vdXNlVG9EcmFnU2hpcCk7XG5cbiAgICAgICAgY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0ZS1idG4nKTtcbiAgICAgICAgcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRIYW5kbGVycy5jbGlja1RvUm90YXRlU2hpcCk7XG5cbiAgICAgICAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbS1idG4nKTtcbiAgICAgICAgcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRIYW5kbGVycy5jbGlja1RvUGxhY2VSYW5kb21TaGlwKTtcblxuICAgICAgICBjb25zdCBwbGF5ZXJHcmlkSXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtaXRlbScpXTtcbiAgICAgICAgcGxheWVyR3JpZEl0ZW1zLmZvckVhY2goZ3JpZEl0ZW0gPT4ge1xuICAgICAgICAgICAgZ3JpZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudEhhbmRsZXJzLmNsaWNrVG9QbGFjZVNoaXApO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5pdEdhbWVQbGF5RXZlbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZW5lbXlHcmlkSXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQnKVsxXS5jaGlsZHJlbl07XG4gICAgICAgIGVuZW15R3JpZEl0ZW1zLmZvckVhY2goZ3JpZEl0ZW0gPT4ge1xuICAgICAgICAgICAgZ3JpZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudEhhbmRsZXJzLmNsaWNrVG9BdHRhY2tFbmVteSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBpbml0R2FtZU92ZXJFdmVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBwbGF5QWdhaW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1hZ2Fpbi1idG4nKTtcbiAgICAgICAgcGxheUFnYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRIYW5kbGVycy5jbGlja1RvUGxheUFnYWluKTtcbiAgICB9LFxufTtcblxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vdWkvYXNzZXRzL2ZvbnRzL0pldEJyYWluc01vbm8tUmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vdWkvYXNzZXRzL2ZvbnRzL0pldEJyYWluc01vbm8tUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi91aS9hc3NldHMvZm9udHMvSmV0QnJhaW5zTW9uby1FeHRyYUJvbGQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL3VpL2Fzc2V0cy9mb250cy9KZXRCcmFpbnNNb25vLUV4dHJhQm9sZC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBDb2xvcnMgZnJvbSBDaHJpcyBZZWg6IGh0dHBzOi8vY2hyaXN5ZWg5Ni5naXRodWIuaW8vMjAyMC8wMy8yOC90ZXJtaW5hbC1jb2xvcnMuaHRtbCAqL1xuOnJvb3Qge1xuICAtLWJsYWNrOiByZ2IoMCwgMCwgMCk7XG4gIC0tcmVkOiByZ2IoMjA0LCAwLCAwKTtcbiAgLS1ncmVlbjpyZ2IoNzgsIDE1NCwgNik7XG4gIC0teWVsbG93Olx0cmdiKDE5NiwgMTYwLCAwKTtcbiAgLS1ibHVlOiByZ2IoMTE0LCAxNTksIDIwNyk7XG4gIC0td2hpdGU6cmdiKDIxMSwgMjE1LCAyMDcpO1xuICAtLWJyaWdodC1ibGFjazogcmdiKDg1LCA4NywgODMpO1xuICAtLWJyaWdodC1yZWQ6XHRyZ2IoMjM5LCA0MSwgNDEpO1xuICAtLWJyaWdodC1ncmVlbjogcmdiKDEzOCwgMjI2LCA1Mik7XG4gIC0tYnJpZ2h0LXllbGxvdzogcmdiKDI1MiwgMjMzLCA3OSk7XG4gIC0tYnJpZ2h0LWJsdWU6IHJnYig1MCwgMTc1LCAyNTUpO1xuICAtLWJyaWdodC13aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4vKiBGb250IGZyb20gRm9udHNoYXJlOiBKZXRCcmFpbnMgTW9ubyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnd29mZicpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nO1xuICBmb250LXdlaWdodDogOTAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdCgnd29mZicpO1xufVxuXG4vKiBTdHlsZXMgKi9cblxuOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XG4gIGNvbG9yOiB2YXIoLS1icmlnaHQtYmxhY2spO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICBjb2xvcjogdmFyKC0tYnJpZ2h0LWdyZWVuKTtcbiAgZm9udC1mYW1pbHk6ICdKZXRCcmFpbnMgTW9ubyc7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6ICdKZXRCcmFpbnMgTW9ubyc7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmlnaHQtZ3JlZW4pO1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IGNsYW1wKDEuM3JlbSwgM3Z3LCAyLjRyZW0pO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiBOYXYgKi9cblxuLm5hdiB7XG4gIHBhZGRpbmc6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1icmlnaHQtZ3JlZW4pO1xufVxuXG4ubmF2X19nYW1lLXRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiBjbGFtcCgyLjRyZW0sIDh2dywgNXJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XG59XG5cbi8qIFBhZ2VzIENvbnRlbnQgKi9cblxuLmNvbnRlbnQtc2VjdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmdhbWUtc2V0dXAtY29udGFpbmVyLCBcbi5nYW1lLXBsYXktY29udGFpbmVyLCBcbi5nYW1lLW92ZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDk2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDRyZW07XG59XG5cbi8qIEdhbWUgU2V0dXAgUGFnZSAqL1xuXG4uZ2FtZS1zZXR1cC1jb250YWluZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5nYW1lLXNldHVwX19idG4tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG59XG5cbi5nYW1lLXNldHVwX19wbGFjZS1zaGlwcy10ZXh0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIHBhZGRpbmc6IDBweCA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyaWdodC1ncmVlbik7XG4gIGFuaW1hdGlvbjogYmxpbmsgMS4yNXMgc3RlcHMoMSkgaW5maW5pdGU7XG59XG5cbi5nYW1lLXNldHVwX19zaGlwLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYnJpZ2h0LWdyZWVuKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xuICBvcGFjaXR5OiAwLjg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vKiBHYW1lIFBsYXkgUGFnZSAqL1xuXG4uZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciwgMzIycHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzJweCAzMjJweCAxZnI7XG59XG5cbi5ncmlkLWNvbnRhaW5lcl9feC1heGlzLWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMycHgpO1xufVxuXG4uZ3JpZC1jb250YWluZXJfX3ktYXhpcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzJweCk7XG59XG5cbi5ncmlkLWNvbnRhaW5lcl9fYXhpcy1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5ncmlkLWNvbnRhaW5lcl9fdGl0bGUge1xuICBncmlkLXJvdzogMyAvIDQ7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNXJlbTtcbn1cblxuLmdyaWQge1xuICB3aWR0aDogMzIycHg7XG4gIGhlaWdodDogMzIycHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icmlnaHQtZ3JlZW4pO1xufVxuXG4uZ3JpZC1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnJpZ2h0LWdyZWVuKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMzJweDtcbn1cblxuLmdyaWQtY29udGFpbmVyICsgLmdyaWQtY29udGFpbmVyIC5ncmlkIC5ncmlkLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmlnaHQtYmxhY2spO1xuICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblxuLmdyaWQtaXRlbV9fc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcbn1cblxuLmdyaWQtaXRlbV9faGl0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xuICBhbmltYXRpb246IHB1bHNlIDc1MG1zIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLmdyaWQtaXRlbV9fbWlzczo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4vKiBHYW1lIE92ZXIgUGFnZSAqL1xuXG4uZ2FtZS1vdmVyLWNvbnRhaW5lciB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5nYW1lLW92ZXJfX2dhbWUtcmVzdWx0LXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIEZvb3RlciAqL1xuXG4uZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWJyaWdodC1ncmVlbik7XG4gIHBhZGRpbmc6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb290ZXJfX2doLWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tYnJpZ2h0LWdyZWVuKTtcbn1cblxuLmZvb3Rlcl9fZ2gtbGlua19fZ2gtaWNvbiB7XG4gIGhlaWdodDogMS4zcmVtO1xufVxuXG4vKiBBbmltYXRpb25zICovXG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMnB4IHZhcigtLXJlZCk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMnB4IHZhcigtLXJlZCk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDJweCB2YXIoLS1yZWQpO1xuICB9XG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmlnaHQtcmVkKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjBweCA1cHggdmFyKC0tcmVkKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMjBweCA1cHggdmFyKC0tcmVkKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNXB4IHZhcigtLXJlZCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG59XG5cbi8qIE1vYmlsZSAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogOTEwcHgpIHtcbiAgLmdhbWUtc2V0dXAtY29udGFpbmVyLCBcbiAgLmdhbWUtcGxheS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQSx3RkFBd0Y7QUFDeEY7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLGlDQUFpQztFQUNqQyxrQ0FBa0M7RUFDbEMsZ0NBQWdDO0VBQ2hDLGtDQUFrQztBQUNwQzs7QUFFQSx3Q0FBd0M7QUFDeEM7RUFDRSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCOzZEQUN1RTtBQUN6RTtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQjs2REFDeUU7QUFDM0U7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLDhCQUE4QjtFQUM5QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHFDQUFxQztFQUNyQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBLFFBQVE7O0FBRVI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUEsa0JBQWtCOztBQUVsQjtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7OztFQUdFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixxQ0FBcUM7RUFDckMsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gscUNBQXFDO0VBQ3JDLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQzs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSx5Q0FBeUM7RUFDekMsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixxQkFBcUI7RUFDckIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxlQUFlOztBQUVmO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLCtDQUErQztJQUMvQyw0Q0FBNEM7SUFDNUMsdUNBQXVDO0VBQ3pDO0VBQ0E7SUFDRSxtQ0FBbUM7SUFDbkMsK0NBQStDO0lBQy9DLDRDQUE0QztJQUM1Qyx1Q0FBdUM7SUFDdkMscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUEsV0FBVzs7QUFFWDtFQUNFOztJQUVFLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsU0FBUztFQUNYO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBDb2xvcnMgZnJvbSBDaHJpcyBZZWg6IGh0dHBzOi8vY2hyaXN5ZWg5Ni5naXRodWIuaW8vMjAyMC8wMy8yOC90ZXJtaW5hbC1jb2xvcnMuaHRtbCAqL1xcbjpyb290IHtcXG4gIC0tYmxhY2s6IHJnYigwLCAwLCAwKTtcXG4gIC0tcmVkOiByZ2IoMjA0LCAwLCAwKTtcXG4gIC0tZ3JlZW46cmdiKDc4LCAxNTQsIDYpO1xcbiAgLS15ZWxsb3c6XFx0cmdiKDE5NiwgMTYwLCAwKTtcXG4gIC0tYmx1ZTogcmdiKDExNCwgMTU5LCAyMDcpO1xcbiAgLS13aGl0ZTpyZ2IoMjExLCAyMTUsIDIwNyk7XFxuICAtLWJyaWdodC1ibGFjazogcmdiKDg1LCA4NywgODMpO1xcbiAgLS1icmlnaHQtcmVkOlxcdHJnYigyMzksIDQxLCA0MSk7XFxuICAtLWJyaWdodC1ncmVlbjogcmdiKDEzOCwgMjI2LCA1Mik7XFxuICAtLWJyaWdodC15ZWxsb3c6IHJnYigyNTIsIDIzMywgNzkpO1xcbiAgLS1icmlnaHQtYmx1ZTogcmdiKDUwLCAxNzUsIDI1NSk7XFxuICAtLWJyaWdodC13aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4vKiBGb250IGZyb20gRm9udHNoYXJlOiBKZXRCcmFpbnMgTW9ubyAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdKZXRCcmFpbnMgTW9ubyc7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoJy4vdWkvYXNzZXRzL2ZvbnRzL0pldEJyYWluc01vbm8tUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgdXJsKCcuL3VpL2Fzc2V0cy9mb250cy9KZXRCcmFpbnNNb25vLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHNyYzogdXJsKCcuL3VpL2Fzc2V0cy9mb250cy9KZXRCcmFpbnNNb25vLUV4dHJhQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgdXJsKCcuL3VpL2Fzc2V0cy9mb250cy9KZXRCcmFpbnNNb25vLUV4dHJhQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxufVxcblxcbi8qIFN0eWxlcyAqL1xcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gIGNvbG9yOiB2YXIoLS1icmlnaHQtYmxhY2spO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGNvbG9yOiB2YXIoLS1icmlnaHQtZ3JlZW4pO1xcbiAgZm9udC1mYW1pbHk6ICdKZXRCcmFpbnMgTW9ubyc7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJpZ2h0LWdyZWVuKTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4zcmVtLCAzdncsIDIuNHJlbSk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiBOYXYgKi9cXG5cXG4ubmF2IHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1icmlnaHQtZ3JlZW4pO1xcbn1cXG5cXG4ubmF2X19nYW1lLXRpdGxlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IGNsYW1wKDIuNHJlbSwgOHZ3LCA1cmVtKTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xcbn1cXG5cXG4vKiBQYWdlcyBDb250ZW50ICovXFxuXFxuLmNvbnRlbnQtc2VjdGlvbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ2FtZS1zZXR1cC1jb250YWluZXIsIFxcbi5nYW1lLXBsYXktY29udGFpbmVyLCBcXG4uZ2FtZS1vdmVyLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDk2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA0cmVtO1xcbn1cXG5cXG4vKiBHYW1lIFNldHVwIFBhZ2UgKi9cXG5cXG4uZ2FtZS1zZXR1cC1jb250YWluZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ2FtZS1zZXR1cF9fYnRuLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uZ2FtZS1zZXR1cF9fcGxhY2Utc2hpcHMtdGV4dDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgcGFkZGluZzogMHB4IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyaWdodC1ncmVlbik7XFxuICBhbmltYXRpb246IGJsaW5rIDEuMjVzIHN0ZXBzKDEpIGluZmluaXRlO1xcbn1cXG5cXG4uZ2FtZS1zZXR1cF9fc2hpcC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1icmlnaHQtZ3JlZW4pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi8qIEdhbWUgUGxheSBQYWdlICovXFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciwgMzIycHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMycHggMzIycHggMWZyO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXJfX3gtYXhpcy1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMnB4KTtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyX195LWF4aXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzJweCk7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lcl9fYXhpcy1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyX190aXRsZSB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVyZW07XFxufVxcblxcbi5ncmlkIHtcXG4gIHdpZHRoOiAzMjJweDtcXG4gIGhlaWdodDogMzIycHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icmlnaHQtZ3JlZW4pO1xcbn1cXG5cXG4uZ3JpZC1pdGVtIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJyaWdodC1ncmVlbik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIgKyAuZ3JpZC1jb250YWluZXIgLmdyaWQgLmdyaWQtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmlnaHQtYmxhY2spO1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5ncmlkLWl0ZW1fX3NoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4uZ3JpZC1pdGVtX19oaXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gIGFuaW1hdGlvbjogcHVsc2UgNzUwbXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG5cXG4uZ3JpZC1pdGVtX19taXNzOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLyogR2FtZSBPdmVyIFBhZ2UgKi9cXG5cXG4uZ2FtZS1vdmVyLWNvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZ2FtZS1vdmVyX19nYW1lLXJlc3VsdC10ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuXFxuLmZvb3RlciB7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tYnJpZ2h0LWdyZWVuKTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3Rlcl9fZ2gtbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWJyaWdodC1ncmVlbik7XFxufVxcblxcbi5mb290ZXJfX2doLWxpbmtfX2doLWljb24ge1xcbiAgaGVpZ2h0OiAxLjNyZW07XFxufVxcblxcbi8qIEFuaW1hdGlvbnMgKi9cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgZnJvbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDJweCB2YXIoLS1yZWQpO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMjBweCAycHggdmFyKC0tcmVkKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDJweCB2YXIoLS1yZWQpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmlnaHQtcmVkKTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNXB4IHZhcigtLXJlZCk7XFxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDVweCB2YXIoLS1yZWQpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggNXB4IHZhcigtLXJlZCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIH1cXG59XFxuXFxuLyogTW9iaWxlICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkxMHB4KSB7XFxuICAuZ2FtZS1zZXR1cC1jb250YWluZXIsIFxcbiAgLmdhbWUtcGxheS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiUGxheWVyIiwiR2FtZSIsIl9jbGFzc0NhbGxDaGVjayIsInBsYXllciIsImNvbXB1dGVyIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJzdGFydCIsImNvbXB1dGVyR2FtZWJvYXJkIiwiZ2FtZWJvYXJkIiwic2hpcExlbmd0aHMiLCJmb3JFYWNoIiwibGVuZ3RoIiwicGxhY2VTaGlwIiwiZ2V0UmFuZG9tU2hpcENvb3JkaW5hdGVzIiwicGxheVJvdW5kIiwiX3JlZiIsIl9yZWYyIiwiX3NsaWNlZFRvQXJyYXkiLCJ4IiwieSIsImFscmVhZHlQbGF5ZWQiLCJfcGxheWVyTW92ZSIsIl9jb21wdXRlck1vdmUiLCJoYXNFbmRlZCIsImNvbnNvbGUiLCJsb2ciLCJnZXRHYW1lUmVzdWx0IiwiYWxsU2hpcHNTdW5rIiwiX2dldFdpbm5lck5hbWUiLCJuYW1lIiwiX3JlZjMiLCJfcmVmNCIsImF0dGFjayIsIl9yZWY1IiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiZ2V0UmFuZG9tQ29vcmRpbmF0ZXMiLCJfcmVmNiIsIlNoaXAiLCJHYW1lYm9hcmQiLCJncmFwaCIsIl9jcmVhdGVHcmFwaCIsInNoaXBzIiwibWlzc2VkU2hvdHMiLCJoaXRTaG90cyIsImNvb3JkaW5hdGVzIiwiX3RoaXMiLCJfYXJlUGxhY2VhYmxlIiwibmV3U2hpcCIsIm5vZGUiLCJoYXNTaGlwIiwicHVzaCIsInJlY2VpdmVBdHRhY2siLCJ0YXJnZXRTaGlwIiwiX2dldFNoaXBGcm9tQ29vcmRpbmF0ZXMiLCJoaXQiLCJldmVyeSIsInNoaXAiLCJpc1N1bmsiLCJfYXJlQ29vcmRpbmF0ZXNJbkFycmF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZGlyZWN0aW9ucyIsImFsbENvb3JkaW5hdGVzIiwiZ2V0UmVzdE9mQ29vcmRpbmF0ZXMiLCJzaGlwTGVuZ3RoIiwiZGlyZWN0aW9uIiwidGVtcCIsIm5ld0l0ZW0iLCJnZXRBZGphY2VudENvb3JkaW5hdGVzIiwiX3RoaXMyIiwiZW5kIiwiYWRqYWNlbnRDb29yZGluYXRlcyIsIm9mZnNldHMiLCJvZmZzZXRFbmRzIiwib2Zmc2V0U2lkZXMiLCJiZWZvcmUiLCJhZnRlciIsIl9yZWY3IiwiX2FkamFjZW50Q29vcmRpbmF0ZXMiLCJfcmVmOCIsInNpZGVzIiwiYXBwbHkiLCJmaWx0ZXIiLCJfcmVmOSIsIl9yZWYxMCIsIl9pc0luQm91bmRzIiwiaSIsInJvdyIsImoiLCJfcmVmMTEiLCJhcnJheSIsIl9yZWYxMiIsInNvbWUiLCJfcmVmMTMiLCJfcmVmMTQiLCJhIiwiYiIsImluZGV4IiwiX3RoaXMzIiwiX3JlZjE1IiwiX3JlZjE2IiwiX3JlZjE3IiwiX3JlZjE4IiwiX3JlZjE5IiwiX3JlZjIwIiwiX3JlZjIxIiwiX3RoaXM0IiwiX3JlZjIyIiwiZmluZCIsImhpdENvdW50IiwiY3JlYXRlTWFpbkNvbnRhaW5lciIsIkRPTUNvbnRyb2xsZXIiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImluaXRHYW1lU2V0dXAiLCJjcmVhdGVHYW1lUGxheUNvbnRhaW5lciIsImNyZWF0ZUdhbWVPdmVyQ29udGFpbmVyIiwiY3JlYXRlR2FtZVNldHVwQ29udGFpbmVyIiwiZXZlbnRMaXN0ZW5lcnMiLCJnYW1lIiwiX3VwZGF0ZVBhZ2VDb250ZW50IiwiZGlzcGxheU5leHRTaGlwQ29udGFpbmVyT3JJbml0R2FtZVBsYXkiLCJpbml0R2FtZVNldHVwRXZlbnRzIiwiaW5pdEdhbWVQbGF5IiwiX3VwZGF0ZUJvYXJkcyIsIl9kaXNwbGF5R3JpZFRpdGxlcyIsImluaXRHYW1lUGxheUV2ZW50cyIsImluaXRHYW1lT3ZlciIsImluaXRHYW1lT3ZlckV2ZW50cyIsImRpc3BsYXlHYW1lUGxheVJvdW5kIiwiZ3JpZEl0ZW0iLCJfdGhpcyRfZ2V0Q29vcmRpbmF0ZXMiLCJfZ2V0Q29vcmRpbmF0ZXNPZkdyaWRJdGVtIiwiX3RoaXMkX2dldENvb3JkaW5hdGVzMiIsImRpc3BsYXlNYW51YWxQbGFjZWRTaGlwT25Cb2FyZCIsIl90aGlzJF9nZXRDb29yZGluYXRlczMiLCJfdGhpcyRfZ2V0Q29vcmRpbmF0ZXM0Iiwic2hpcENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5ZXJHYW1lYm9hcmQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImRpc3BsYXlSYW5kb21QbGFjZWRTaGlwT25Cb2FyZCIsIl9tb3ZlVG9OZXh0U2hpcExlbmd0aCIsIl9kaXNwbGF5U2hpcFNldHVwQ29udGFpbmVyIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImFscmVhZHlQbGFjZWRTaGlwcyIsIm5ld0NvbnRlbnRGdW5jIiwiY29udGVudFNlY3Rpb24iLCJpbm5lckhUTUwiLCJncmlkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnYW1lYm9hcmRzIiwiX2dldEdyaWRJdGVtRnJvbUNvb3JkaW5hdGVzIiwiY2xhc3NMaXN0IiwiYWRkIiwiX2xvb3AiLCJjb250YWlucyIsInRpdGxlcyIsInRleHRDb250ZW50IiwiYWxsR3JpZEl0ZW1zIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicGFyZW50RWxlbWVudCIsImNoaWxkcmVuIiwiZ3JpZEl0ZW1JbmRleCIsImluZGV4T2YiLCJudW1iZXJPZlNxdWFyZXNCZWZvcmUiLCJzbGljZSIsIml0ZXJhdGlvbnMiLCJncmlkIiwidGFyZ2V0R3JpZEl0ZW0iLCJjcmVhdGVDb250ZW50U2VjdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJnaEljb24iLCJjcmVhdGVGb290ZXIiLCJmb290ZXIiLCJnaExpbmsiLCJocmVmIiwidGFyZ2V0IiwiZGVzY3JpcHRpb24iLCJpY29uIiwic3JjIiwiZ2FtZVJlc3VsdCIsImdhbWVPdmVyQ29udGFpbmVyIiwiZ2FtZVJlc3VsdFRleHQiLCJwbGF5QWdhaW5CdG4iLCJpZCIsImNyZWF0ZUdyaWQiLCJnYW1lUGxheUNvbnRhaW5lciIsImNyZWF0ZUdyaWRDb250YWluZXIiLCJncmlkQ29udGFpbmVyIiwiZ3JpZFRpdGxlIiwiY3JlYXRlQXhpcyIsInR5cGUiLCJheGlzIiwiY29uY2F0IiwiaXRlbSIsImF4aXNJdGVtIiwiZ2FtZVNldHVwQ29udGFpbmVyIiwiY3JlYXRlV2VsY29tZUNvbnRhaW5lciIsIndlbGNvbWVDb250YWluZXIiLCJoZWFkaW5nIiwicGxhY2VTaGlwc1RleHQiLCJidG5Db250YWluZXIiLCJyb3RhdGVCdG4iLCJyYW5kb21CdG4iLCJjcmVhdGVOYXYiLCJtYWluQ29udGFpbmVyIiwibmF2IiwiZ2FtZVRpdGxlIiwiZXZlbnRIYW5kbGVycyIsIm1vdmVNb3VzZVRvRHJhZ1NoaXAiLCJlIiwibGVmdCIsInBhZ2VYIiwidG9wIiwicGFnZVkiLCJjbGlja1RvUm90YXRlU2hpcCIsImNsaWNrVG9QbGFjZVNoaXAiLCJjbGlja1RvUGxhY2VSYW5kb21TaGlwIiwiY2xpY2tUb0F0dGFja0VuZW15IiwiY2xpY2tUb1BsYXlBZ2FpbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRFbGVtZW50QnlJZCIsInBsYXllckdyaWRJdGVtcyIsImVuZW15R3JpZEl0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==