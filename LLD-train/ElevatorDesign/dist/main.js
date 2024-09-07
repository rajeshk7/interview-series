"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Building_1 = __importDefault(require("./Models/Building"));
var Floor_1 = __importDefault(require("./Models/Floor"));
var floorList = [];
for (var i = 0; i < 5; i++) {
    floorList.push(new Floor_1.default(i));
}
var building = new Building_1.default(floorList);
