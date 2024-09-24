"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WeighingMachineForKids_1 = require("../Adaptee/WeighingMachineForKids");
var WeighingMachineAdapterImpl_1 = require("../Adapter/WeighingMachineAdapterImpl");
var weighingMachineAdapter = new WeighingMachineAdapterImpl_1.default(new WeighingMachineForKids_1.default());
console.log("".concat("\u001B[94m" /* Color.fgBrightBlue */) + weighingMachineAdapter.getWeightInKg());
