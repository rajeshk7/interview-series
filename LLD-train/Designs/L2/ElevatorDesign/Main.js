"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Building_1 = require("./Models/Building");
var Floor_1 = require("./Models/Floor");
var floorList = [];
for (var i = 0; i < 5; i++) {
    floorList.push(new Floor_1.default(i));
}
var building = new Building_1.default(floorList);
console.log("Going UP");
floorList[0].pressButton(3, 0 /* Direction.UP */);
floorList[1].pressButton(4, 0 /* Direction.UP */);
