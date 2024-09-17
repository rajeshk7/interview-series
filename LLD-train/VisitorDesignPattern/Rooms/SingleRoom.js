"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SingleRoom = /** @class */ (function () {
    function SingleRoom() {
    }
    SingleRoom.prototype.accept = function (visitor) {
        visitor.visit(this);
    };
    return SingleRoom;
}());
exports.default = SingleRoom;
