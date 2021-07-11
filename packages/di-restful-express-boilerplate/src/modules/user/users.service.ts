import { inject, injectable } from 'tsyringe';

import { Logger } from '@ports/logger.port';

@injectable()
export default class UsersService {
  constructor(@inject('Logger') protected readonly logger: Logger) {
    this.logger = logger;
  }

  public testUser(): string {
    this.logger.error('Information Logged');
    return 'Hello';
  }
}
