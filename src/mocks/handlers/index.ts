import type { MockedRestHandlerType } from '../types';

const handlers: MockedRestHandlerType[] = [
  ...require('./general.handlers').default,
  ...require('./restaurants.handlers').default,
];

export default handlers;
