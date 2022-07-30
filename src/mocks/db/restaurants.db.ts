import { sample } from 'lodash-es';
import queryString from 'query-string';
import Decimal from 'decimal.js-light';
import faker from 'mocks/faker-client';
import { getRestaurantCoverImageUrl, createSlug } from 'mocks/utils';
import { RestaurantDishTypes, WeekDays } from 'config/constants';
import type {
  ApiRestaurantBriefDataResponse,
  ApiRestaurantDataResponse,
  ApiRestaurantDishResponse,
  ApiPrice,
} from 'types';

const CENTS_IN_DOLLAR: number = 100;

export const getApiPrice = (minInCents: number, maxInCents: number): ApiPrice =>
  new Decimal(faker.datatype.number(maxInCents - minInCents) + minInCents)
    .dividedBy(CENTS_IN_DOLLAR)
    .toNumber();

const MIN_RESTAURANT_DISH_PRICE_IN_CENTS: number = 10 * CENTS_IN_DOLLAR;
const MAX_RESTAURANT_DISH_PRICE_IN_CENTS: number = 50 * CENTS_IN_DOLLAR;

export const getRestaurantDish = (): ApiRestaurantDishResponse => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  type: sample([
    RestaurantDishTypes.BURGER,
    RestaurantDishTypes.SOUP,
    RestaurantDishTypes.PIZZA,
    RestaurantDishTypes.THAI,
    RestaurantDishTypes.VEGETARIAN,
  ])!,
  pricePerItem: getApiPrice(MIN_RESTAURANT_DISH_PRICE_IN_CENTS, MAX_RESTAURANT_DISH_PRICE_IN_CENTS),
});

const MIN_DELIVERY_FEE_IN_CENTS: number = 5 * CENTS_IN_DOLLAR;
const MAX_DELIVERY_FEE_IN_CENTS: number = 10 * CENTS_IN_DOLLAR;

const MIN_DELIVERY_DURATION_IN_MINUTES: number = 5;
const MAX_DELIVERY_DURATION_IN_MINUTES: number = 30;

const MIN_AVG_REVIEWS_SCORE: number = 2;
const MAX_AVG_REVIEWS_SCORE: number = 5;

export const getRestaurantBriefData = (queryParams?: string): ApiRestaurantBriefDataResponse => {
  const { countryRegion, locality } = queryString.parse(queryParams || '');
  const name = faker.company.companyName();

  return {
    id: faker.datatype.uuid(),
    name,
    coverImg: getRestaurantCoverImageUrl(),
    priceRange: sample(['cheap', 'medium', 'expensive'])!,
    slug: createSlug(name),
    address: {
      countryRegion: countryRegion ? (countryRegion as string) : faker.address.country(),
      locality: locality ? (locality as string) : faker.address.cityName(),
    },
    reviews: {
      avg:
        Math.round(
          faker.datatype.float({ max: MAX_AVG_REVIEWS_SCORE - MIN_AVG_REVIEWS_SCORE }) +
            MIN_AVG_REVIEWS_SCORE / 0.5,
        ) * 0.5,
    },
    delivery: {
      fee: getApiPrice(MIN_DELIVERY_FEE_IN_CENTS, MAX_DELIVERY_FEE_IN_CENTS),
      durationInMinutes: {
        min: faker.datatype.number(10) + MIN_DELIVERY_DURATION_IN_MINUTES,
        max: MAX_DELIVERY_DURATION_IN_MINUTES - faker.datatype.number(10),
      },
    },
  };
};

const MAX_RESTAURANTS_QTY: number = 100;

export const getRestaurantsBriefData = (queryParams: string): ApiRestaurantBriefDataResponse[] =>
  new Array(faker.datatype.number(MAX_RESTAURANTS_QTY))
    .fill(null)
    .map(() => getRestaurantBriefData(queryParams));

const MIN_MENU_POSITIONS_PER_RESTAURANT: number = 10;
const MAX_MENU_POSITIONS_PER_RESTAURANT: number = 50;

export const getRestaurantDataByBriefData = ({
  address,
  ...briefData
}: ApiRestaurantBriefDataResponse): ApiRestaurantDataResponse => ({
  ...briefData,
  address: {
    ...address,
    addressLine: faker.address.streetAddress(),
    postalCode: faker.address.zipCode(),
  },
  opens: {
    days: {
      [WeekDays.SUNDAY]: faker.datatype.boolean(),
      [WeekDays.MONDAY]: true,
      [WeekDays.TUESDAY]: true,
      [WeekDays.WEDNESDAY]: true,
      [WeekDays.THURSDAY]: true,
      [WeekDays.FRIDAY]: true,
      [WeekDays.SATURDAY]: faker.datatype.boolean(),
    },
    hours: {
      from: {
        hours: faker.datatype.number(4) + 8,
        minutes: faker.datatype.boolean() ? 0 : 30,
        seconds: 0,
        milliseconds: 0,
      },
      to: {
        hours: faker.datatype.number(6) + 16,
        minutes: faker.datatype.boolean() ? 0 : 30,
        seconds: 0,
        milliseconds: 0,
      },
    },
  },
  menu: new Array(
    faker.datatype.number(MAX_MENU_POSITIONS_PER_RESTAURANT - MIN_MENU_POSITIONS_PER_RESTAURANT) +
      MIN_MENU_POSITIONS_PER_RESTAURANT,
  )
    .fill(null)
    .map(getRestaurantDish),
});
