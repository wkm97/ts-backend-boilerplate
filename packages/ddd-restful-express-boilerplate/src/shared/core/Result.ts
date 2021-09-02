import { Result } from 'monuts';

export function runCatching<R>(block: () => R): Result<R, Error> {
  try {
    return Result.success(block());
  } catch (err) {
    return Result.failure(err);
  }
}

// export type Result<T, E> = Success<T> | Failure<E>;
