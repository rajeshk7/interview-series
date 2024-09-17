"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoubleRoom = /** @class */ (function () {
    function DoubleRoom() {
    }
    DoubleRoom.prototype.accept = function (visitor) {
        visitor.visit(this);
    };
    return DoubleRoom;
}());
exports.default = DoubleRoom;
