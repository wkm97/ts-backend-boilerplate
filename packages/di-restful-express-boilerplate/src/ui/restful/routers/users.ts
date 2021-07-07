import { Router } from 'express';

const route = Router();

export default (api: Router): void => {
  api.use('/users', route);

  route.get('/me', (req, res) => {
    return res.json({ user: 'hello world' });
  });
};
