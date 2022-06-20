import { orderBy, intersection } from 'lodash-es';
import type { RestaurantBriefData, RestaurantsFiltersFormPayload } from 'types';

export default (
  restaurants: RestaurantBriefData[],
  filters: RestaurantsFiltersFormPayload,
): RestaurantBriefData[] =>
  intersection(...[sortResults, filterByPriceRange].map((sortFn) => sortFn(restaurants, filters)));

function filterByPriceRange(
  restaurants: RestaurantBriefData[],
  { priceRange }: RestaurantsFiltersFormPayload,
): RestaurantBriefData[] {
  return priceRange ? restaurants.filter((restaurant) => restaurant.priceRange === priceRange) : restaurants;
}

function sortResults(
  restaurants: RestaurantBriefData[],
  { sortBy }: RestaurantsFiltersFormPayload,
): RestaurantBriefData[] {
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
