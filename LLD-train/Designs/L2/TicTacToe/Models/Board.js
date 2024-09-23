"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board = /** @class */ (function () {
    function Board(size) {
        var _this = this;
        this.addPiece = function (row, col, piece) {
            if (_this.board[row][col] != null)
                return false;
            _this.board[row][col] = piece;
            return true;
        };
        this.isThereAFreeCell = function () {
            for (var i = 0; i < _this.size; i++) {
                for (var j = 0; j < _this.size; j++) {
                    if (_this.board[i][j] == null)
                        return true;
                }
            }
            return false;
        };
        this.printBoard = function () {
            for (var i = 0; i < _this.size; i++) {
                var row = "";
                for (var j = 0; j < _this.size; j++) {
                    if (_this.board[i][j] == null)
                        row += " ";
                    else
                        row += _this.board[i][j].PieceTypeVar;
                    if (j != _this.size - 1)
                        row += "|";
                }
                console.log(row);
                if (i != _this.size - 1)
                    console.log(new Array(_this.size * 2).join("-"));
            }
        };
        this.size = size;
        this.board = new Array(size);
        for (var i = 0; i < size; i++) {
            this.board[i] = new Array(size);
        }
    }
    return Board;
}());
exports.default = Board;
