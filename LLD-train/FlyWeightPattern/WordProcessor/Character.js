"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character = /** @class */ (function () {
    function Character(character, fontSize, fontName) {
        this.Character = character;
        this.FontSize = fontSize;
        this.FontName = fontName;
    }
    Character.prototype.display = function (row, col) {
        console.log("Character: ".concat(this.Character, ", FontSize: ").concat(this.FontSize, ", FontName: ").concat(this.FontName, ", Row: ").concat(row, ", Col: ").concat(col) + '\n');
    };
    return Character;
}());
exports.default = Character;
