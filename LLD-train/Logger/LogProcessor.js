"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogProcessor = exports.LogType = void 0;
var LogType;
(function (LogType) {
    LogType[LogType["ERROR"] = 0] = "ERROR";
    LogType[LogType["INFO"] = 1] = "INFO";
    LogType[LogType["DEBUG"] = 2] = "DEBUG";
})(LogType || (exports.LogType = LogType = {}));
var LogProcessor = /** @class */ (function () {
    function LogProcessor(logProcessor) {
        this.nextLogProcessor = logProcessor;
    }
    LogProcessor.prototype.log = function (logType, message) {
        if (!isValidLogType(logType)) {
            throw new Error("Unknown log type: ".concat(logType));
        }
        if (this.nextLogProcessor) {
            this.nextLogProcessor.log(logType, message);
        }
        else {
            console.warn("No next LogProcessor to handle log: [".concat(LogType[logType], "] ").concat(message));
        }
    };
    return LogProcessor;
}());
exports.LogProcessor = LogProcessor;
function isValidLogType(logType) {
    return logType === LogType.ERROR || logType === LogType.INFO || logType === LogType.DEBUG;
}
