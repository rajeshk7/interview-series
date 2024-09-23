"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeluxeRoom = /** @class */ (function () {
    function DeluxeRoom() {
    }
    DeluxeRoom.prototype.accept = function (visitor) {
        visitor.visit(this);
    };
    return DeluxeRoom;
}());
exports.default = DeluxeRoom;
