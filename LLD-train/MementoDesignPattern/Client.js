"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurationCareTaker_1 = require("./ConfigurationCareTaker");
var ConfigurationOriginator_1 = require("./ConfigurationOriginator");
var careTaker = new ConfigurationCareTaker_1.default();
var originatorObject = new ConfigurationOriginator_1.default(5, 5);
var snapshot1 = originatorObject.createMemento();
careTaker.addMemento(snapshot1);
originatorObject.setHeight(10);
originatorObject.setWidth(10);
var snapshot2 = originatorObject.createMemento();
careTaker.addMemento(snapshot2);
originatorObject.setHeight(15);
originatorObject.setWidth(15);
var snapshot3 = originatorObject.createMemento();
careTaker.addMemento(snapshot3);
originatorObject.setHeight(115);
originatorObject.setWidth(115);
console.log("Current Height: ", originatorObject.height);
console.log("Current Width: ", originatorObject.width);
originatorObject.restore(careTaker.undo());
console.log("Height after undo: ", originatorObject.height);
console.log("Width after undo: ", originatorObject.width);
