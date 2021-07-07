import express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as expressWinston from 'express-winston';

import { expressLoggerConfig } from '@configs/logger';
import * as swaggerDoc from '@ui/restful/swagger.json';
import routers from '@ui/restful/routers';

export default (app: express.Application): void => {
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
  app.use('/api', routers());

  app.use(expressWinston.errorLogger(expressLoggerConfig));
};
