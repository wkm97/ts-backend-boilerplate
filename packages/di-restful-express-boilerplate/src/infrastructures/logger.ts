import winston from 'winston';
import { singleton } from 'tsyringe';

import { loggerConfig } from '@configs/logger';
import { Logger } from '@ports/logger.port';

// const LoggerInstance = winston.createLogger(loggerConfig);

@singleton()
class CustomLogger implements Logger {
  private logger;

  constructor() {
    this.logger = winston.createLogger(loggerConfig);
  }

  info(message: string): void {
    this.logger.info(message);
  }

  error(message: string): void {
    this.logger.error(message);
  }

  warn(message: string): void {
    this.logger.warn(message);
  }

  debug(message: string): void {
    this.logger.debug(message);
  }
}

export { Logger, CustomLogger };
