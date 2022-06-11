import { uniqBy } from 'lodash-es';
import type { BingLocations, ParsedBingLocation, FilteredParsedBingLocation } from 'types';

const FILTERED_LOCATIONS_REQUIRED_FIELD_KEYS: (keyof ParsedBingLocation)[] = ['locality', 'countryRegion'];

export const parseBingLocations = (bingLocations: BingLocations): ParsedBingLocation[] =>
  bingLocations.resourceSets[0].resources.map(
    ({ address: { addressLine, countryRegion, locality, postalCode } }) => ({
      addressLine,
      countryRegion,
      locality,
      postalCode,
    }),
  );

export const filterParsedBingLocations = (
  parsedBingLocations: ParsedBingLocation[],
): FilteredParsedBingLocation[] =>
  uniqBy(
    parsedBingLocations.filter((fields) =>
      Object.keys(fields)
        .filter((key) => FILTERED_LOCATIONS_REQUIRED_FIELD_KEYS.includes(key as keyof ParsedBingLocation))
        .every((key) => Boolean(fields[key as keyof ParsedBingLocation])),
    ) as Required<ParsedBingLocation>[],
    'locality',
  );
