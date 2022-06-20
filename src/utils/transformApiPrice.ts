import Decimal from 'decimal.js-light';
import type { ApiPrice } from 'types';

const CENTS_IN_DOLLAR: number = 100;

export default ({ currency, amountInCents }: ApiPrice): string =>
  `${new Decimal(amountInCents).dividedBy(CENTS_IN_DOLLAR).toString()} ${currency}`;
