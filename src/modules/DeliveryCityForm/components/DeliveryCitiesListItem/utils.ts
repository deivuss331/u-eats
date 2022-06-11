import type { FilteredParsedBingLocation } from 'types';

export const getHeadline = ({ locality, addressLine }: FilteredParsedBingLocation): string =>
  `${addressLine ? `${addressLine}, ` : ''}${locality}`;
