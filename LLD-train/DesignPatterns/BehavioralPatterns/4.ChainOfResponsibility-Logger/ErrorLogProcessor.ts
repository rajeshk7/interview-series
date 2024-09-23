import {LogProcessor, LogType} from "./LogProcessor";

class ErrorLogProcessor extends LogProcessor {
    log(logType: LogType, message: string)  {
        if(logType == LogType.ERROR)
            console.log("Error: " + message);
        else
            super.log(logType, message);
    }
}

export default ErrorLogProcessor;