"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeluxeRoom_1 = require("./Rooms/DeluxeRoom");
var DoubleRoom_1 = require("./Rooms/DoubleRoom");
var SingleRoom_1 = require("./Rooms/SingleRoom");
var RoomPricingVisitor = /** @class */ (function () {
    function RoomPricingVisitor() {
    }
    RoomPricingVisitor.prototype.visit = function (room) {
        if (room instanceof SingleRoom_1.default) {
            console.log("Single room price is 100");
            room.roomPrice = 100;
        }
        else if (room instanceof DeluxeRoom_1.default) {
            console.log("Deluxe room price is 200");
            room.roomPrice = 200;
        }
        else if (room instanceof DoubleRoom_1.default) {
            console.log("Double room price is 300");
            room.roomPrice = 300;
        }
    };
    return RoomPricingVisitor;
}());
exports.default = RoomPricingVisitor;
