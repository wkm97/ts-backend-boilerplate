import express from 'express';

import v1Router from '@shared/infra/http/api/v1';

const app = express();

app.use('/api/v1', v1Router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[App]: Environment on ${process.env.NODE_ENV}`);
  console.log(`[App]: Listening on port ${port}`);
});
