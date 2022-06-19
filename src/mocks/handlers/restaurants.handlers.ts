import { rest } from 'msw';
import queryString from 'query-string';
import config from 'config';
import { FlyweightMap } from 'utils';
import { getResponseDelay, getPageableResponse } from 'mocks/utils';
import * as db from 'mocks/db';
import type { ParsedBingLocation, RestaurantBriefData } from 'types';
import type { MockedRestHandlerType } from '../types';

/**
 * Flyweight pattern will prevent re-creating restaurants mocks if already exists for given location
 */
const restaurantsMap = new FlyweightMap<string, RestaurantBriefData[]>(db.getRestaurantsBriefData);

const handlers: MockedRestHandlerType[] = [
  rest.get(config.api.urls.getRestaurantsByParsedBingLocation(), (req, res, ctx) => {
    const { page, size, addressLine, countryRegion, locality, postalCode } = Object.fromEntries(
      req.url.searchParams,
    );
    const location: ParsedBingLocation = {
      addressLine,
      countryRegion,
      locality,
      postalCode,
    };

    if (!locality || !countryRegion) {
      return res(ctx.status(404), ctx.delay(getResponseDelay()));
    }

    const content = restaurantsMap.create(queryString.stringify(location));

    return res(
      ctx.status(200),
      ctx.delay(getResponseDelay()),
      ctx.json(getPageableResponse({ page: +page, size: +size, content })),
    );
  }),
];

export default handlers;
