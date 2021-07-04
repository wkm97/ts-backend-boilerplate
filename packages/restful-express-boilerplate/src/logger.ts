import winston from 'winston';

import { loggerOptions } from '@configs/logger';

const Logger = winston.createLogger(loggerOptions);

export default Logger;
