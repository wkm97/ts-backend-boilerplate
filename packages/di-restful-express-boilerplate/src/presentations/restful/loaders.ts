import express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as expressWinston from 'express-winston';
import { injectable } from 'tsyringe';

import { expressLoggerConfig } from '@configs/logger';
import ExpressRouters from '@presentations/restful/routers';
import * as swaggerDoc from '@presentations/restful/swagger.json';

@injectable()
class ExpressLoaders {
  constructor(protected readonly routers: ExpressRouters) {
    this.routers = routers;
  }

  public loads(app: express.Application): void {
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
    app.use('/api', this.routers.getRouters());

    app.use(expressWinston.errorLogger(expressLoggerConfig));
  }
}

export default ExpressLoaders;

// export default (app: express.Application): void => {
//   app.get('/status', (req, res) => {
//     res.status(200).end();
//   });
//   app.head('/status', (req, res) => {
//     res.status(200).end();
//   });

//   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc)); // add swagger documentation

//   app.use(expressWinston.logger(expressLoggerConfig));
//   app.use(express.json());

//   // add routers
//   app.use('/api', routers());

//   app.use(expressWinston.errorLogger(expressLoggerConfig));
// };
