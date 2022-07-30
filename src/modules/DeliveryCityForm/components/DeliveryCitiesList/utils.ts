import { uniqBy } from 'lodash-es';
import type { ApiBingLocationsResponse, ApiParsedBingLocation, ApiFilteredParsedBingLocation } from 'types';

const FILTERED_LOCATIONS_REQUIRED_FIELD_KEYS: (keyof ApiParsedBingLocation)[] = ['locality', 'countryRegion'];

export const parseBingLocations = (bingLocations: ApiBingLocationsResponse): ApiParsedBingLocation[] =>
  bingLocations.resourceSets[0].resources.map(
    ({ address: { addressLine, countryRegion, locality, postalCode } }) => ({
      addressLine,
      countryRegion,
      locality,
      postalCode,
    }),
  );

export const filterParsedBingLocations = (
  parsedBingLocations: ApiParsedBingLocation[],
): ApiFilteredParsedBingLocation[] =>
  uniqBy(
    parsedBingLocations.filter((fields) =>
      Object.keys(fields)
        .filter((key) => FILTERED_LOCATIONS_REQUIRED_FIELD_KEYS.includes(key as keyof ApiParsedBingLocation))
        .every((key) => Boolean(fields[key as keyof ApiParsedBingLocation])),
    ) as Required<ApiParsedBingLocation>[],
    'locality',
  );
