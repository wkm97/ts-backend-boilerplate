/* eslint-disable import/order */
/* eslint-disable import/first */
import dotenv from 'dotenv-safe';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` }); // Must on top to read specific .env file

import express from 'express';
import * as http from 'http';
import * as expressWinston from 'express-winston';

import * as swaggerUi from 'swagger-ui-express';
import { expressLoggerOptions } from '@configs/logger';
import * as swaggerDoc from '@src/swagger.json';
import Logger from '@src/logger';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc)); // add swagger documentation

app.use(express.json()); // parse body as json

app.use(expressWinston.logger(expressLoggerOptions));

app.get('/', (req, res) => {
  Logger.info('WINSTON LOGGER');
  Logger.error('WINSTON ERROR');
  res.status(200).send(`Server running at http://localhost:${port}`);
});

app.get('/error', (req, res, next) => {
  throw new Error('throwed Error');
});

app.use(expressWinston.errorLogger(expressLoggerOptions));
server.listen(port, () => {
  console.log(`Application is running`);
});
