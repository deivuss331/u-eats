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
