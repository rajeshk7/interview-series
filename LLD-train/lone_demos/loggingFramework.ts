enum LogType {
    DEBUG,
    ERROR,
    INFO
}

class Logger {
    nextLogger: Logger | null = null

    constructor(logger: Logger) {
        this.nextLogger = logger
    }

    log(logType: LogType, message: string)  {
        if(this.nextLogger)
            this.nextLogger.log(logType, message)
        else
            console.log("No valid log processor found ")
    }
}

class DebugLogger extends Logger {
    log(logType: LogType, message: string)  {
        if(logType == LogType.DEBUG)    {
            console.log("DEBUG LOG : " + message)
            return
        }
        super.log(logType, message)
    }
}


class InfoLogger extends Logger {
    log(logType: LogType, message: string)  {
        if(logType == LogType.INFO)    {
            console.log("INFO LOG : " + message)
            return
        }
        super.log(logType, message)
    }
}


class ErrorLogger extends Logger {
    log(logType: LogType, message: string)  {
        if(logType == LogType.ERROR)    {
            console.log("ERROR LOG : " + message)
            return
        }
        super.log(logType, message)
    }
}

const logProcessor = new Logger(new DebugLogger(new ErrorLogger(new InfoLogger(null as any))))

logProcessor.log(LogType.DEBUG, "DEBUG logs")
logProcessor.log(LogType.INFO, "INFO logs")
logProcessor.log(LogType.ERROR, "ERROR logs")