import { Router } from 'express';
import { injectable } from 'tsyringe';

import UsersController from '@presentations/restful/routers/users.controller';

@injectable()
class ExpressRouters {
  private router: Router;

  constructor(protected readonly usersController: UsersController) {
    this.router = Router();
    this.usersController = usersController;
  }

  public getRouters(): Router {
    this.usersController.loadRouter(this.router);
    return this.router;
  }
}

export default ExpressRouters;

// export default (): Router => {
//   const router = Router();
//   users(router);
//   return router;
// };
