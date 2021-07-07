import { container } from 'tsyringe';

import ExpressServer from '@ui/restful/server';

container.register('server', { useClass: ExpressServer });

export default container;
