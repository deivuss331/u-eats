import { rest } from 'msw';
import config from 'config';
import { FlyweightMap } from 'utils';
import { getResponseDelay } from 'mocks/utils';
import * as db from 'mocks/db';
import type { ParsedBingLocation, RestaurantBriefData } from 'types';
import type { MockedRestHandlerType } from '../types';

/**
 * Flyweight pattern will prevent re-creating restaurants mocks if already exists for given location
 */
const restaurantsMap = new FlyweightMap<ParsedBingLocation, RestaurantBriefData[]>(
  db.getRestaurantsBriefData,
);

const handlers: MockedRestHandlerType[] = [
  rest.get(config.api.urls.getRestaurantsByParsedBingLocation(), (req, res, ctx) => {
    const { addressLine, countryRegion, locality, postalCode } = Object.fromEntries(req.url.searchParams);
    const location: ParsedBingLocation = {
      addressLine,
      countryRegion,
      locality,
      postalCode,
    };

    if (!locality || !countryRegion) {
      return res(ctx.status(404), ctx.delay(getResponseDelay()));
    }

    return res(ctx.status(200), ctx.delay(getResponseDelay()), ctx.json(restaurantsMap.create(location)));
  }),
];

export default handlers;
