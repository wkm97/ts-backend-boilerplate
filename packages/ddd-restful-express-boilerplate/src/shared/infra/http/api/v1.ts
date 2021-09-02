import express from 'express';

import Logger from '@shared/infra/logger';

const v1Router = express.Router();

v1Router.get('/', (req, res) => {
  Logger.info('Hello world');
  return res.json({ message: "Yo! we're up" });
});

export default v1Router;
