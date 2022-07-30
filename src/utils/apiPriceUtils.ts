import type { ApiPrice } from 'types';
import store from 'store';
import i18n from 'i18n';

export const getHumanFriendlyPrice = (price: ApiPrice): string =>
  i18n.t('{{price, currency}}', {
    price,
    formatParams: { price: { currency: store.getState().app.currency } },
  });
