import { sample } from 'lodash-es';
import type { BingLocations, BingConfidence } from 'types';
import filterBingLocationsByConfidence from '../filterBingLocationsByConfidence';

const RESOURCES_QTY: number = 10;

describe('filterBingLocationsByConfidence', () => {
  it('Returns matching locations by target confidence(s)', () => {
    const testLocations = bingLocationsFactory(RESOURCES_QTY);
    const matchingConfidence: BingConfidence = 'High';

    const filterFnResult = filterBingLocationsByConfidence(testLocations, [matchingConfidence]);

    filterFnResult.resourceSets.forEach(({ resources }) => {
      expect(
        resources.map(({ confidence }) => confidence).every((conf) => conf === matchingConfidence),
      ).toBeTruthy();
    });
  });
});

function bingLocationsFactory(resourcesQty: number): BingLocations {
  return {
    resourceSets: [
      {
        estimatedTotal: 0,
        resources: new Array(resourcesQty).fill(null).map(() => ({
          name: 'name',
          point: {
            type: 'type',
            coordinates: [0, 0],
          },
          address: {},
          confidence: sample(['High', 'Medium', 'Low'])!,
        })),
      },
    ],
  };
}
