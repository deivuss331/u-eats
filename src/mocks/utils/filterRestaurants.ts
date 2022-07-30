import { orderBy, intersection } from 'lodash-es';
import type { ApiRestaurantBriefDataResponse, RestaurantsFiltersFormPayload } from 'types';

export default (
  restaurants: ApiRestaurantBriefDataResponse[],
  filters: RestaurantsFiltersFormPayload,
): ApiRestaurantBriefDataResponse[] =>
  intersection(...[sortResults, filterByPriceRange].map((sortFn) => sortFn(restaurants, filters)));

function filterByPriceRange(
  restaurants: ApiRestaurantBriefDataResponse[],
  { priceRange }: RestaurantsFiltersFormPayload,
): ApiRestaurantBriefDataResponse[] {
  return priceRange ? restaurants.filter((restaurant) => restaurant.priceRange === priceRange) : restaurants;
}

function sortResults(
  restaurants: ApiRestaurantBriefDataResponse[],
  { sortBy }: RestaurantsFiltersFormPayload,
): ApiRestaurantBriefDataResponse[] {
  switch (sortBy) {
    case 'reviewsAsc': {
      return orderBy(restaurants, 'reviews.avg', 'asc');
    }

    case 'reviewsDesc': {
      return orderBy(restaurants, 'reviews.avg', 'desc');
    }

    case 'fastestDelivery': {
      return orderBy(restaurants, 'delivery.durationInMinutes.min', 'asc');
    }

    case 'slowestDelivery': {
      return orderBy(restaurants, 'delivery.durationInMinutes.min', 'desc');
    }

    default: {
      return restaurants;
    }
  }
}
