"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Board_1 = require("./Models/Board");
var PlayingPieceO_1 = require("./Models/PlayingPieceO");
var PlayingPieceX_1 = require("./Models/PlayingPieceX");
var Player_1 = require("./Models/Player");
var readline = require("readline");
var TicTacToeGame = /** @class */ (function () {
    function TicTacToeGame(gameBoard, playingQueue) {
        var _this = this;
        this.initializeGame = function () {
            _this.playingQueue = new Array();
            var crossPiece = new PlayingPieceX_1.default();
            var player1 = new Player_1.default("Player 1", crossPiece);
            var circlePiece = new PlayingPieceO_1.default();
            var player2 = new Player_1.default("Player 2", circlePiece);
            _this.playingQueue.push(player1);
            _this.playingQueue.push(player2);
            _this.gameBoard = new Board_1.default(3);
        };
        this.getUserInput = function (query) {
            var rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            return new Promise(function (resolve) { return rl.question(query, function (ans) {
                rl.close();
                resolve(ans);
            }); });
        };
        this.playGame = function () { return __awaiter(_this, void 0, void 0, function () {
            var noWinner, currentPlayer, move, _a, row, col, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        noWinner = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        _b.label = 2;
                    case 2:
                        if (!noWinner) return [3 /*break*/, 4];
                        currentPlayer = this.playingQueue.shift();
                        this.gameBoard.printBoard();
                        if (!this.gameBoard.isThereAFreeCell()) {
                            console.log("No winner");
                            return [3 /*break*/, 4];
                        }
                        console.log(currentPlayer.name + " plays");
                        return [4 /*yield*/, this.getUserInput("Enter your move (row,col): ")];
                    case 3:
                        move = _b.sent();
                        _a = move.split(',').map(Number), row = _a[0], col = _a[1];
                        console.log("You entered row: ".concat(row, " and col: ").concat(col));
                        if (!this.gameBoard.addPiece(row, col, currentPlayer.piece)) {
                            console.log("Invalid move");
                            this.playingQueue.unshift(currentPlayer);
                            return [3 /*break*/, 2];
                        }
                        this.playingQueue.push(currentPlayer);
                        if (this.isThereAWinner(row, col, currentPlayer.piece)) {
                            console.log(currentPlayer.name + " wins");
                            noWinner = false;
                            this.gameBoard.printBoard();
                            return [2 /*return*/, currentPlayer.name];
                        }
                        return [3 /*break*/, 2];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_1 = _b.sent();
                        console.log(e_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.isThereAWinner = function (row, col, piece) {
            var rowMatch = true, colMatch = true, diagMatch = true, antiDiagMatch = true;
            for (var i = 0; i < _this.gameBoard.size; i++)
                if (_this.gameBoard.board[row][i] != piece) {
                    rowMatch = false;
                    break;
                }
            for (var i = 0; i < _this.gameBoard.size; i++)
                if (_this.gameBoard.board[i][col] != piece) {
                    colMatch = false;
                    break;
                }
            if (row == col) {
                for (var i = 0; i < _this.gameBoard.size; i++) {
                    if (_this.gameBoard.board[i][i] != piece) {
                        diagMatch = false;
                        break;
                    }
                }
            }
            else
                diagMatch = false;
            if (row + col == _this.gameBoard.size - 1) {
                for (var i = 0; i < _this.gameBoard.size; i++) {
                    if (_this.gameBoard.board[i][_this.gameBoard.size - i - 1] != piece) {
                        antiDiagMatch = false;
                        break;
                    }
                }
            }
            else
                antiDiagMatch = false;
            return rowMatch || colMatch || diagMatch || antiDiagMatch;
        };
        this.gameBoard = gameBoard;
        this.playingQueue = playingQueue;
    }
    return TicTacToeGame;
}());
exports.default = TicTacToeGame;
