"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */ (function () {
    function Message(message) {
        this.message = message;
    }
    Message.prototype.getContent = function () {
        return this.message;
    };
    return Message;
}());
exports.default = Message;
