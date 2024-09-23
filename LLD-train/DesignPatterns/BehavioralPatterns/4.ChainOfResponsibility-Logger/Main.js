"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogProcessor_1 = require("./LogProcessor");
var DebugLogProcessor_1 = require("./DebugLogProcessor");
var ErrorLogProcessor_1 = require("./ErrorLogProcessor");
var InfoLogProcessor_1 = require("./InfoLogProcessor");
var logProcessor = new InfoLogProcessor_1.default(new ErrorLogProcessor_1.default(new DebugLogProcessor_1.default(null)));
try {
    logProcessor.log(LogProcessor_1.LogType.DEBUG, "This is a debug message");
    logProcessor.log(LogProcessor_1.LogType.INFO, "This is an info message");
    logProcessor.log(LogProcessor_1.LogType.ERROR, "This is an error message");
}
catch (e) {
    console.error(e);
}
