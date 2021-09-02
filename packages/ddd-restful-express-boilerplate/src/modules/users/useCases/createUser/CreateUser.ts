import { Result, Success, Failure } from 'monuts';

// import { runCatching } from '@shared/core/Result';
import { UseCase } from '@shared/core/UseCase';
import { CreateUserDTO } from '@modules/users/useCases/createUser/CreateUserDTO';

type Response = Result<Success<string>, Failure<Error>>;

export class CreateUser implements UseCase<CreateUserDTO, Response> {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  // eslint-disable-next-line consistent-return
  async execute(request: CreateUserDTO): Promise<Response> {
    console.log(this.name, request.email);
    try {
      const result = Result.success('hello');
      if (result.isSuccess) {
        return Result.success(result);
      }
    } catch (err) {
      return Result.failure(err);
    }
  }
}
