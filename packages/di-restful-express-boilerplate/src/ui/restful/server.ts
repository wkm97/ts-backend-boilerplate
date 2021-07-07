import express from 'express';
import { singleton } from 'tsyringe';

import loaders from '@ui/restful/loaders';

@singleton()
class ExpressServer {
  private app: express.Application;

  constructor() {
    this.app = express();
  }

  start(): void {
    const port = process.env.PORT || 3000;
    loaders(this.app);
    this.app.listen(port, () => {
      console.log(`Application is running at port ${port}`);
    });
  }
}

export default ExpressServer;
