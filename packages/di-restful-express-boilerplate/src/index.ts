/* eslint-disable import/first */
import 'reflect-metadata';
import dotenv from 'dotenv-safe';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` }); // Must on top to read specific .env file

import container from '@configs/container';
import ExpressServer from '@presentations/restful/server';

const server = container.resolve(ExpressServer);
server.start();
