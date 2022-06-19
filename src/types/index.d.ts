import type { DefaultOptions } from 'react-query';

export interface AppConfig {
  api: {
    useMocks: boolean;
    urls: {
      getLocationsByQuery: (q: string) => string;
      getRestaurantsByParsedBingLocation: () => string;
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

export type DeliveryAddressFormPayload = ParsedBingLocation;

/**
 * Api types
 */

export interface Pageable {
  page: number;
  size: number;
}

export interface PageableResponse<T> {
  totalPages: number;
  pageable: Pageable;
  content: T[];
}

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
        addressLine?: string;
        adminDistrict?: string;
        adminDistrict2?: string;
        countryRegion?: string;
        formattedAddress?: string;
        locality?: string;
        postalCode?: string;
      };
      confidence: BingConfidence;
    }[];
  }[];
}

export interface ParsedBingLocation {
  addressLine?: string;
  countryRegion?: string;
  locality?: string;
  postalCode?: string;
}

export type FilteredParsedBingLocation = RequiredExceptFor<ParsedBingLocation, 'addressLine' | 'postalCode'>;

export interface ApiPrice {
  amountInCents: number;
  currency: string;
}

export interface RestaurantBriefData {
  id: string;
  name: string;
  coverImg: string;
  reviews: {
    avg: number;
  };
  delivery: {
    fee: ApiPrice;
    durationInMinutes: {
      min: number;
      max: number;
    };
  };
}

/**
 * Utils
 */

export type RequiredExceptFor<T, TOptional extends keyof T> = Required<T> & Pick<T, TOptional>;
