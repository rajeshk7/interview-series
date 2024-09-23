export enum LogType {
  ERROR,
  INFO,
  DEBUG,
}

export class LogProcessor {
  nextLogProcessor?: LogProcessor;

  constructor(logProcessor?: LogProcessor) {
    this.nextLogProcessor = logProcessor;
  }

  log(logType: LogType, message: string): void {
    if (!isValidLogType(logType)) {
      throw new Error(`Unknown log type: ${logType}`);
    }

    if (this.nextLogProcessor) {
      this.nextLogProcessor.log(logType, message);
    } else {
      console.warn(`No next LogProcessor to handle log: [${LogType[logType]}] ${message}`);
    }
  }
}

function isValidLogType(logType: any): logType is LogType {
  return logType === LogType.ERROR || logType === LogType.INFO || logType === LogType.DEBUG;
}