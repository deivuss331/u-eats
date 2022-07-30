import type { ApiFilteredParsedBingLocation } from 'types';

export const getHeadline = ({ locality, addressLine }: ApiFilteredParsedBingLocation): string =>
  `${addressLine ? `${addressLine}, ` : ''}${locality}`;
