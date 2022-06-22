export const APP_HOMEPAGE: string = '/u-eats' as const;

export const ENVIRONMENTS = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
  TEST: 'test',
  QA: 'qa',
} as const;

export enum AppLang {
  EN = 'en',
}

export const DEFAULT_LANG: AppLang = AppLang.EN as const;

// WeekDays values have to match date-fns days
// https://date-fns.org/v2.28.0/docs/getDay
export enum WeekDays {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

export enum RestaurantDishTypes {
  PIZZA,
  BURGER,
  SOUP,
  THAI,
  VEGETARIAN,
}
