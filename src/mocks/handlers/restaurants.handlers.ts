import { rest } from 'msw';
import queryString from 'query-string';
import config from 'config';
import { FlyweightMap } from 'utils';
import { getResponseDelay, getPageableResponse, filterRestaurants } from 'mocks/utils';
import * as db from 'mocks/db';
import type { ParsedBingLocation, RestaurantBriefData, RestaurantsFiltersFormPayload } from 'types';
import type { MockedRestHandlerType } from '../types';

/**
 * Flyweight pattern will prevent re-creating restaurants mocks if already exists for given location
 */
const restaurantsMap = new FlyweightMap<string, RestaurantBriefData[]>(db.getRestaurantsBriefData);

const handlers: MockedRestHandlerType[] = [
  rest.get(config.api.urls.getRestaurantsByParsedBingLocation(), (req, res, ctx) => {
    const { page, size, sortBy, priceRange, addressLine, countryRegion, locality, postalCode } =
      Object.fromEntries(req.url.searchParams);
    const location: ParsedBingLocation = {
      addressLine,
      countryRegion,
      locality,
      postalCode,
    };

    if (!locality || !countryRegion) {
      return res(ctx.status(404), ctx.delay(getResponseDelay()));
    }

    const restaurants = restaurantsMap.create(queryString.stringify(location));
    const filteredRestaurants = filterRestaurants(restaurants, {
      sortBy,
      priceRange,
    } as RestaurantsFiltersFormPayload);

    return res(
      ctx.status(200),
      ctx.delay(getResponseDelay()),
      ctx.json(getPageableResponse({ page: +page, size: +size, content: filteredRestaurants })),
    );
  }),
];

export default handlers;
