import { container } from 'tsyringe';

import { CustomLogger, Logger } from '@infrastructures/logger';

container.register<Logger>('Logger', { useClass: CustomLogger });

export default container;
