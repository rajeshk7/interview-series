import Color from "../../../ConsoleColors"
import LogType from "./LogType"

class LogProcessor  {
  nextProcessor: LogProcessor | null = null

  constructor(nextProcessor: LogProcessor | null) {
    this.nextProcessor = nextProcessor
  }

  log(logType: LogType, message: string) {
    if (this.nextProcessor) {
      this.nextProcessor.log(logType, message)
    }
    else {
      console.log(Color.fgBrightYellow + "No processor found for log type: " + logType + Color.reset)
    }
  }
}

export default LogProcessor
