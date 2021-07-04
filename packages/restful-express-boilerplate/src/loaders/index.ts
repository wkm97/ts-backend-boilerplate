import express from 'express';

import expressLoader from '@loaders/express';
import Logger from '@loaders/logger';

export default async (expressApp: express.Application): Promise<void> => {
  await expressLoader(expressApp);
  Logger.info('Express Loaded.');
};
