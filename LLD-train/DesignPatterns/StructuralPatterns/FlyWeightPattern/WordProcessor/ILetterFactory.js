"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character_1 = require("./Character");
var ILetterFactory = /** @class */ (function () {
    function ILetterFactory() {
    }
    ILetterFactory.createLetter = function (character) {
        if (this.letterStore.has(character)) {
            console.log("\u001B[92m" /* Color.fgBrightGreen */ + "Character ".concat(character, " already exists in the store.") + "\u001B[0m" /* Color.reset */);
            return this.letterStore.get(character);
        }
        console.log("\u001B[91m" /* Color.fgBrightRed */ + "Creating character ".concat(character) + "\u001B[0m" /* Color.reset */);
        var letter = new Character_1.default(character, 12, "Arial");
        this.letterStore.set(character, letter);
        return letter;
    };
    ILetterFactory.letterStore = new Map();
    return ILetterFactory;
}());
exports.default = ILetterFactory;
