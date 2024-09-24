import {LogProcessor, LogType} from "./LogProcessor";

class InfoLogProcessor extends LogProcessor {
  log(logType: LogType, message: string)  {
    if(logType == LogType.INFO)
        console.log("Info: " + message);
    else
        super.log(logType, message);
  }
}

export default InfoLogProcessor;
