import LogType from './LogType'
import LogProcessor from './LogProcessor'
import Color from '../../../ConsoleColors'

class DebugLogProcessor extends LogProcessor {

    log(logType: LogType, message: string)  {
        if(logType !== LogType.DEBUG) {
            super.log(logType, message)
        }
        else  {
            const timeStamp = new Date().toLocaleTimeString()
            console.log(Color.fgBrightCyan + timeStamp + " Debug: " + message + Color.reset)
        }
    }
}

export default DebugLogProcessor
