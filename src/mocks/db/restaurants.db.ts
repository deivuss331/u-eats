import { sample } from 'lodash-es';
import faker from 'mocks/faker-client';
import type { RestaurantBriefData } from 'types';
import { getRestaurantCoverImageUrl, createSlug } from 'mocks/utils';
import { CURRENCY } from 'mocks/constants';

const CENTS_IN_DOLLAR: number = 100;

const MIN_DELIVERY_FEE_IN_CENTS: number = 5 * CENTS_IN_DOLLAR;
const MAX_DELIVERY_FEE_IN_CENTS: number = 10 * CENTS_IN_DOLLAR;

const MIN_DELIVERY_DURATION_IN_MINUTES: number = 5;
const MAX_DELIVERY_DURATION_IN_MINUTES: number = 30;

const MIN_AVG_REVIEWS_SCORE: number = 2;
const MAX_AVG_REVIEWS_SCORE: number = 5;

export const getRestaurantBriefData = (): RestaurantBriefData => {
  const name = faker.company.companyName();

  return {
    id: faker.datatype.uuid(),
    name,
    coverImg: getRestaurantCoverImageUrl(),
    priceRange: sample(['cheap', 'medium', 'expensive'])!,
    slug: createSlug(name),
    reviews: {
      avg:
        Math.round(
          faker.datatype.float({ max: MAX_AVG_REVIEWS_SCORE - MIN_AVG_REVIEWS_SCORE }) +
            MIN_AVG_REVIEWS_SCORE / 0.5,
        ) * 0.5,
    },
    delivery: {
      fee: {
        currency: CURRENCY,
        amountInCents:
          faker.datatype.number(MAX_DELIVERY_FEE_IN_CENTS - MIN_DELIVERY_FEE_IN_CENTS) +
          MIN_DELIVERY_FEE_IN_CENTS,
      },
      durationInMinutes: {
        min: faker.datatype.number(10) + MIN_DELIVERY_DURATION_IN_MINUTES,
        max: MAX_DELIVERY_DURATION_IN_MINUTES - faker.datatype.number(10),
      },
    },
  };
};

const MAX_RESTAURANTS_QTY: number = 100;

export const getRestaurantsBriefData = (): RestaurantBriefData[] =>
  new Array(faker.datatype.number(MAX_RESTAURANTS_QTY)).fill(null).map(getRestaurantBriefData);
