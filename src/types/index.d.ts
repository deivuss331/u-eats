import type { DefaultOptions } from 'react-query';
import { RestaurantMenuPositionTypes, WeekDays } from 'config/constants';

export interface AppConfig {
  api: {
    useMocks: boolean;
    urls: {
      getLocationsByQuery: (q: string) => string;
      getRestaurantsByParsedBingLocation: () => string;
      getRestaurantData: (id: string) => string;
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
  restaurantReader: (slug: string) => string;
}

export interface ComponentCommonProps {
  className?: string;
  id?: string;
}

export type DeliveryAddressFormPayload = ParsedBingLocation;

export type RestaurantPriceRange = 'cheap' | 'medium' | 'expensive';

export interface RestaurantsFiltersFormPayload {
  sortBy?: 'reviewsAsc' | 'reviewsDesc' | 'fastestDelivery' | 'slowestDelivery';
  priceRange?: RestaurantPriceRange;
}

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

export interface ApiHours {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export interface RestaurantBriefData {
  id: RestaurantData['id'];
  name: RestaurantData['name'];
  coverImg: RestaurantData['coverImg'];
  priceRange: RestaurantData['priceRange'];
  slug: RestaurantData['slug'];
  address: {
    countryRegion: RestaurantData['address']['countryRegion'];
    locality: RestaurantData['address']['locality'];
  };
  reviews: {
    avg: RestaurantData['reviews']['avg'];
  };
  delivery: {
    fee: RestaurantData['delivery']['fee'];
    durationInMinutes: RestaurantData['delivery']['durationInMinutes'];
  };
}

export interface RestaurantData {
  id: string;
  name: string;
  coverImg: string;
  priceRange: RestaurantPriceRange;
  slug: string;
  address: Required<NonNullable<ParsedBingLocation>>;
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
  opens: {
    days: Record<WeekDays, boolean>;
    hours: {
      from: ApiHours;
      to: ApiHours;
    };
  };
  menu: RestaurantDish[];
}

export interface RestaurantDish {
  id: string;
  name: string;
  type: RestaurantMenuPositionTypes;
  price: ApiPrice;
}

/**
 * Utils
 */

export type RequiredExceptFor<T, TOptional extends keyof T> = Required<T> & Pick<T, TOptional>;
