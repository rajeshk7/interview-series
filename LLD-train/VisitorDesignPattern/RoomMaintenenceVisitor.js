"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeluxeRoom_1 = require("./Rooms/DeluxeRoom");
var DoubleRoom_1 = require("./Rooms/DoubleRoom");
var SingleRoom_1 = require("./Rooms/SingleRoom");
var RoomMaintenenceVisitor = /** @class */ (function () {
    function RoomMaintenenceVisitor() {
    }
    RoomMaintenenceVisitor.prototype.visit = function (room) {
        if (room instanceof SingleRoom_1.default) {
            console.log("Single room is maintained");
        }
        else if (room instanceof DeluxeRoom_1.default) {
            console.log("Deluxe room is maintained");
        }
        else if (room instanceof DoubleRoom_1.default) {
            console.log("Double room is maintained");
        }
    };
    return RoomMaintenenceVisitor;
}());
exports.default = RoomMaintenenceVisitor;
