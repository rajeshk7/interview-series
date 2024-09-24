import LogType from './LogType'
import LogProcessor from './LogProcessor'
import Color from '../../../ConsoleColors'

class InfoLogProcessor extends LogProcessor {
    log(logType: LogType, message: string)  {
        if(logType == LogType.INFO) {
            const timeStamp = new Date().toLocaleTimeString()
            console.log(Color.fgBrightGreen + timeStamp + " Info: " + message + Color.reset)
        }
        else    {
            super.log(logType, message)
        }
    }
}

export default InfoLogProcessor