import { Router } from 'express';

import users from '@api/routers/users';

export default (): Router => {
  const api = Router();
  users(api);
  return api;
};
