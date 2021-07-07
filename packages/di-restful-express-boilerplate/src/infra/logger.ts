import winston from 'winston';

import { loggerConfig } from '@configs/logger';

const LoggerInstance = winston.createLogger(loggerConfig);

export default LoggerInstance;
