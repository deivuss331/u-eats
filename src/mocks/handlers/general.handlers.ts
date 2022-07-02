import { rest } from 'msw';
import config from 'config';
import { getResponseDelay } from 'mocks/utils';
import * as db from 'mocks/db';
import type { MockedRestHandlerType } from '../types';

const handlers: MockedRestHandlerType[] = [
  rest.get(config.api.urls.getApiAppConfig(), (req, res, ctx) =>
    res(ctx.status(200), ctx.delay(getResponseDelay()), ctx.json(db.getApiAppConfig())),
  ),
];

export default handlers;
