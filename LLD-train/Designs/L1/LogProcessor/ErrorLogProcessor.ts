import LogType from './LogType'
import LogProcessor from './LogProcessor'
import Color from '../../../ConsoleColors'

class ErrorLogProcessor extends LogProcessor {
    log(logType: LogType, message: string)  {
        if(logType == LogType.ERROR) {
            const timeStamp = new Date().toLocaleTimeString()
            console.log(Color.fgBrightRed + timeStamp + " Error: " + message + Color.reset)
        }
        else    {
            super.log(logType, message)
        }
    }
}

export default ErrorLogProcessor