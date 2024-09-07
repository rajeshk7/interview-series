import { LogType } from "./LogProcessor";
import DebugLogProcessor from "./DebugLogProcessor";
import ErrorLogProcessor from "./ErrorLogProcessor";
import InfoLogProcessor from "./InfoLogProcessor";

const logProcessor = new InfoLogProcessor(new ErrorLogProcessor(new DebugLogProcessor(null as any)));
try {
    logProcessor.log(LogType.DEBUG, "This is a debug message");
    logProcessor.log(LogType.INFO, "This is an info message");
    logProcessor.log(LogType.ERROR, "This is an error message");
}
catch(e) {
    console.error(e);
}