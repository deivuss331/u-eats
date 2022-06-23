import type { ApiPrice } from 'types';
import store from 'store';

export const getHumanFriendlyPrice = (price: ApiPrice): string =>
  `${price} ${store.getState().global.currency || ''}`;
