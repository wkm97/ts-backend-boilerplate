import winston from 'winston';
import * as expressWinston from 'express-winston';

const transports = [new winston.transports.Console()];

const loggerConfig: winston.LoggerOptions = {
  transports,
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
};

const expressLoggerConfig: expressWinston.LoggerOptions = {
  transports,
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
};

console.log('in config', process.env.LOG_LEVEL);
if (process.env.LOG_LEVEL !== 'debug') {
  expressLoggerConfig.meta = false;
}

export { loggerConfig, expressLoggerConfig };
