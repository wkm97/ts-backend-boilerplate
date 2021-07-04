/* eslint-disable import/order */
/* eslint-disable import/first */
import dotenv from 'dotenv-safe';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` }); // Must on top to read specific .env file

import express from 'express';

import appLoaders from '@src/loaders';

const app: express.Application = express();
const port = process.env.PORT || 3000;

appLoaders(app);

app.listen(port, () => {
  console.log(`Application is running at port ${port}`);
});
