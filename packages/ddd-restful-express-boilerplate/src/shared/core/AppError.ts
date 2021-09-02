import { Failure } from '@shared/core/Result';

export class UnexpectedError extends Failure<Error> {
  public constructor(err: Error) {
    super(err);
  }
}
