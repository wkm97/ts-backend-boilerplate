import { Router } from 'express';
import { injectable } from 'tsyringe';

import UsersService from '@modules/user/users.service';

@injectable()
export default class UsersController {
  private routers;

  constructor(protected readonly usersService: UsersService) {
    this.routers = Router();
    this.usersService = usersService;
  }

  public loadRouter(upstreamRouter: Router): void {
    upstreamRouter.use('/users', this.routers);

    this.routers.get('/me', (req, res) => {
      this.usersService.testUser();
      return res.json({ user: 'hello world' });
    });
  }
}
