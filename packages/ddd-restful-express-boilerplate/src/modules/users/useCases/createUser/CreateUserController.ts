import express from 'express';

import { BaseController } from '@src/shared/infra/http/api/BaseController';
import { CreateUser } from '@modules/users/useCases/createUser/CreateUser';
import { CreateUserDTO } from '@modules/users/useCases/createUser/CreateUserDTO';

export class CreateUserController extends BaseController {
  private useCase: CreateUser;

  constructor(useCase: CreateUser) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(req: express.Request, res: express.Response): Promise<express.Response> {
    try {
      const dto: CreateUserDTO = {
        username: 'karming',
        email: 'hello@gmail.com',
        password: '12345',
      };
      const result = await this.useCase.execute(dto);
      return result.fold({
        onFailure: err => {
          switch (err.constructor) {
            default:
              return this.fail(res, err.exceptionOrNull().message);
          }
        },
        onSuccess: ok => {
          return this.ok(res, { username: ok.getOrNull() });
        },
      });
    } catch (e) {
      return this.fail(res, e);
    }
  }
}
