import { uniqBy } from 'lodash-es';
import type { BingLocations, ParsedBingLocation } from 'types';

export const parseBingLocations = (bingLocations: BingLocations): ParsedBingLocation[] =>
  bingLocations.resourceSets[0].resources.map(({ address: { countryRegion, locality } }) => ({
    countryRegion,
    locality,
  }));

export const filterParsedBingLocations = (
  parsedBingLocations: ParsedBingLocation[],
): Required<ParsedBingLocation>[] =>
  uniqBy(
    parsedBingLocations.filter((fields) =>
      Object.values(fields).every(Boolean),
    ) as Required<ParsedBingLocation>[],
    'locality',
  );
