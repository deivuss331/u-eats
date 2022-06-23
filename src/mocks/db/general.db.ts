import type { ApiAppConfig } from 'types';
import { CURRENCY } from 'mocks/constants';

export const getApiAppConfig = (): ApiAppConfig => ({
  currency: CURRENCY,
});
