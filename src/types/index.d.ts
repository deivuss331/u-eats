import type { DefaultOptions } from 'react-query';

export interface AppConfig {
  api: {
    urls: {
      getLocationsByQuery: (q: string) => string;
    };
  };
  reactQuery: {
    defaultOptions: DefaultOptions;
  };
}

export interface AppRoute {
  path: string;
  component: React.LazyExoticComponent | JSX.Element;
}

export interface AppPaths {
  root: () => string;
  browseRestaurants: () => string;
}

export interface ComponentCommonProps {
  className?: string;
}

export interface BrowseRestaurantsSearchParams extends ParsedBingLocation {
  query?: string;
}

/**
 * Api types
 */

export type BingConfidence = 'High' | 'Medium' | 'Low';

export interface BingLocations {
  resourceSets: {
    estimatedTotal: number;
    resources: {
      name: string;
      point: {
        type: string;
        coordinates: [number, number];
      };
      address: {
        adminDistrict?: string;
        adminDistrict2?: string;
        countryRegion?: string;
        formattedAddress?: string;
        locality?: string;
      };
      confidence: BingConfidence;
    }[];
  }[];
}

export interface ParsedBingLocation {
  countryRegion?: string;
  locality?: string;
}
