import LogType from './LogType'
import LogProcessor from './LogProcessor'
import DebugLogProcessor from './DebugLogProcessor'
import ErrorLogProcessor from './ErrorLogProcessor'
import InfoLogProcessor from './InfoLogProcessor'

const processor = new LogProcessor(new InfoLogProcessor(new DebugLogProcessor(new ErrorLogProcessor(null as any))));

try {
    processor.log(LogType.DEBUG, "This is a debug message");
    processor.log(LogType.INFO, "This is an info message");
    processor.log(LogType.ERROR, "This is an error message");
}
catch(e) {
    console.error(e);
}
