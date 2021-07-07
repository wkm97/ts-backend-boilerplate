/* eslint-disable import/order */
/* eslint-disable import/first */
import 'reflect-metadata';
import dotenv from 'dotenv-safe';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` }); // Must on top to read specific .env file

import ExpressServer from '@ui/restful/server';

const server = new ExpressServer();
server.start();
