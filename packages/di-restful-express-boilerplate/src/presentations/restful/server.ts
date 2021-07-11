import express from 'express';
import { singleton } from 'tsyringe';

import ExpressLoaders from '@presentations/restful/loaders';

@singleton()
class ExpressServer {
  private app: express.Application;

  constructor(protected readonly loader: ExpressLoaders) {
    this.app = express();
  }

  start(): void {
    const port = process.env.PORT || 3000;
    this.loader.loads(this.app);
    this.app.listen(port, () => {
      console.log(`Application is running at port ${port}`);
    });
  }
}

export default ExpressServer;
