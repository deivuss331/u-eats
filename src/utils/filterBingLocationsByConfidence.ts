import type { ApiBingLocationsResponse, ApiBingConfidence } from 'types';

export default (
  data: ApiBingLocationsResponse,
  matchingConfidences: ApiBingConfidence[] | undefined = ['High', 'Medium'],
): ApiBingLocationsResponse => ({
  ...data,
  resourceSets:
    data.resourceSets.map(({ resources, ...restProps }) => ({
      ...restProps,
      resources: resources.filter(({ confidence }) => matchingConfidences.includes(confidence)),
    })) || [],
});
