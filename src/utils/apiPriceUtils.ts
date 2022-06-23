import type { ApiPrice } from 'types';
import store from 'store';
import { PRICE_SEPARATOR } from 'config/constants';

export const getHumanFriendlyPrice = (price: ApiPrice): string =>
  `${price.toFixed(2).replace('.', PRICE_SEPARATOR)} ${store.getState().global.currency || ''}`;
