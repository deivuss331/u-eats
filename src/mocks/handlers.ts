import type { MockedRestHandlerType } from './types';

const handlers: MockedRestHandlerType[] = [...require('./handlers/restaurants.handlers').default];

export default handlers;
