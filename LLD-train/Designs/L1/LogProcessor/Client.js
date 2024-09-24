"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogType_1 = require("./LogType");
var LogProcessor_1 = require("./LogProcessor");
var DebugLogProcessor_1 = require("./DebugLogProcessor");
var ErrorLogProcessor_1 = require("./ErrorLogProcessor");
var InfoLogProcessor_1 = require("./InfoLogProcessor");
var processor = new LogProcessor_1.default(new InfoLogProcessor_1.default(new DebugLogProcessor_1.default(new ErrorLogProcessor_1.default(null))));
try {
    processor.log(LogType_1.default.DEBUG, "This is a debug message");
    processor.log(LogType_1.default.INFO, "This is an info message");
    processor.log(LogType_1.default.ERROR, "This is an error message");
}
catch (e) {
    console.error(e);
}
