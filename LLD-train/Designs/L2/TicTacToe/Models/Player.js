"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player(name, piece) {
        this.name = name;
        this.piece = piece;
    }
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.getPiece = function () {
        return this.piece;
    };
    Player.prototype.setName = function (name) {
        this.name = name;
    };
    Player.prototype.setPiece = function (piece) {
        this.piece = piece;
    };
    return Player;
}());
exports.default = Player;
