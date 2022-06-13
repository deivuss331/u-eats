import type { BingLocations, BingConfidence } from 'types';

export default (
  data: BingLocations,
  matchingConfidences: BingConfidence[] | undefined = ['High', 'Medium'],
): BingLocations => ({
  ...data,
  resourceSets:
    data.resourceSets.map(({ resources, ...restProps }) => ({
      ...restProps,
      resources: resources.filter(({ confidence }) => matchingConfidences.includes(confidence)),
    })) || [],
});
