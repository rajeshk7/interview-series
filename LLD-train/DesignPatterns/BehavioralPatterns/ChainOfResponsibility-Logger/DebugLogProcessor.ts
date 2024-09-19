import {LogProcessor, LogType} from "./LogProcessor";

class DebugLogProcessor extends LogProcessor {
    log(logType: LogType, message: string)  {
        if(logType == LogType.DEBUG)
            console.log("Debug: " + message);
        else
            super.log(logType, message);
    }
}

export default DebugLogProcessor;