"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogProcessor = /** @class */ (function () {
    function LogProcessor(nextProcessor) {
        this.nextProcessor = null;
        this.nextProcessor = nextProcessor;
    }
    LogProcessor.prototype.log = function (logType, message) {
        if (this.nextProcessor) {
            this.nextProcessor.log(logType, message);
        }
        else {
            console.log("\u001B[93m" /* Color.fgBrightYellow */ + "No processor found for log type: " + logType + "\u001B[0m" /* Color.reset */);
        }
    };
    return LogProcessor;
}());
exports.default = LogProcessor;
