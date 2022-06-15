import faker from 'mocks/faker-client';
import type { RestaurantBriefData } from 'types';

const CENTS_IN_DOLLAR: number = 100;

const MIN_DELIVERY_FEE_IN_CENTS: number = 5 * CENTS_IN_DOLLAR;
const MAX_DELIVERY_FEE_IN_CENTS: number = 10 * CENTS_IN_DOLLAR;

const MIN_DELIVERY_DURATION_IN_MINUTES: number = 5;
const MAX_DELIVERY_DURATION_IN_MINUTES: number = 30;

export const getRestaurantBriefData = (): RestaurantBriefData => ({
  id: faker.datatype.uuid(),
  name: faker.company.companyName(),
  coverImg: faker.image.image(),
  reviews: {
    avg: faker.datatype.float({ max: 1 }),
  },
  delivery: {
    fee: {
      amountInCents:
        faker.datatype.number(MAX_DELIVERY_FEE_IN_CENTS - MIN_DELIVERY_FEE_IN_CENTS) +
        MIN_DELIVERY_FEE_IN_CENTS,
    },
    durationInMinutes: {
      min: faker.datatype.number(10) + MIN_DELIVERY_DURATION_IN_MINUTES,
      max: MAX_DELIVERY_DURATION_IN_MINUTES - faker.datatype.number(10),
    },
  },
});

const MAX_RESTAURANTS_QTY: number = 100;

export const getRestaurantsBriefData = (): RestaurantBriefData[] =>
  new Array(faker.datatype.number(MAX_RESTAURANTS_QTY)).fill(null).map(getRestaurantBriefData);
