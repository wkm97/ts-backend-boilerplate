import { Router } from 'express';

import users from '@ui/restful/routers/users';

export default (): Router => {
  const router = Router();
  users(router);
  return router;
};
