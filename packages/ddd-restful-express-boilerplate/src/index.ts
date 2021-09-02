/* eslint-disable import/first */
import dotenv from 'dotenv-safe';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` }); // Must on top to read specific .env file

import '@shared/infra/http/app';
