"use strict";
var LogType;
(function (LogType) {
    LogType[LogType["DEBUG"] = 0] = "DEBUG";
    LogType[LogType["ERROR"] = 1] = "ERROR";
    LogType[LogType["INFO"] = 2] = "INFO";
})(LogType || (LogType = {}));
class Logger {
    constructor(logger) {
        this.nextLogger = null;
        this.nextLogger = logger;
    }
    log(logType, message) {
        if (this.nextLogger)
            this.nextLogger.log(logType, message);
        else
            console.log("No valid log processor found ");
    }
}
class DebugLogger extends Logger {
    log(logType, message) {
        if (logType == LogType.DEBUG) {
            console.log("DEBUG LOG : " + message);
            return;
        }
        super.log(logType, message);
    }
}
class InfoLogger extends Logger {
    log(logType, message) {
        if (logType == LogType.INFO) {
            console.log("INFO LOG : " + message);
            return;
        }
        super.log(logType, message);
    }
}
class ErrorLogger extends Logger {
    log(logType, message) {
        if (logType == LogType.ERROR) {
            console.log("ERROR LOG : " + message);
            return;
        }
        super.log(logType, message);
    }
}
const logProcessor = new Logger(new DebugLogger(new ErrorLogger(new InfoLogger(null))));
logProcessor.log(LogType.DEBUG, "DEBUG logs");
logProcessor.log(LogType.INFO, "INFO logs");
logProcessor.log(LogType.ERROR, "ERROR logs");
