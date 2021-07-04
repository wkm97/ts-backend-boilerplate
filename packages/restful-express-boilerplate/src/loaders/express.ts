import express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as expressWinston from 'express-winston';

import { expressLoggerConfig } from '@configs/logger';
import * as swaggerDoc from '@api/swagger.json';
import api from '@src/api';

export default (app: express.Application): void => {
  // Health Check endpoints
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc)); // add swagger documentation

  app.use(expressWinston.logger(expressLoggerConfig));
  app.use(express.json());

  // add routers
  app.use('/api', api());

  app.use(expressWinston.errorLogger(expressLoggerConfig));
};
