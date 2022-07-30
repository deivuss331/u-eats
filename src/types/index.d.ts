import type { DefaultOptions } from 'react-query';
import { RestaurantDishTypes, WeekDays } from 'config/constants';

export interface AppConfig {
  api: {
    useMocks: boolean;
    urls: {
      getApiAppConfig: () => string;
      getLocationsByQuery: (q: string) => string;
      getRestaurantsByParsedBingLocation: () => string;
      getRestaurantData: (id: string) => string;
      postNewOrder: () => string;
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
  basket: () => string;
}

export interface ComponentCommonProps {
  className?: string;
  id?: string;
}

export type DeliveryAddressFormPayload = Required<NonNullable<ApiParsedBingLocation>>;

export interface CustomerDetailsFormPayload {
  firstName: string;
  lastName: string;
  email: string;
}

export interface CustomerDetailsWithDeliveryAddress extends CustomerDetailsFormPayload {
  deliveryAddress: DeliveryAddressFormPayload;
}

export type RestaurantPriceRange = 'cheap' | 'medium' | 'expensive';

export interface RestaurantsFiltersFormPayload {
  sortBy?: 'reviewsAsc' | 'reviewsDesc' | 'fastestDelivery' | 'slowestDelivery';
  priceRange?: RestaurantPriceRange;
}

export interface RestaurantDishInBasket extends ApiRestaurantDishResponse {
  quantity: number;
}

/**
 * Api types
 */

export type ApiPageRequest = ApiPageResponse;

export interface ApiPageResponse {
  page: number;
  size: number;
}

export interface ApiPageableResponse<T> {
  totalPages: number;
  pageable: ApiPageResponse;
  content: T[];
}

export interface ApiAppConfig {
  currency: string;
}

export type ApiBingConfidence = 'High' | 'Medium' | 'Low';

export interface ApiBingLocationsResponse {
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
      confidence: ApiBingConfidence;
    }[];
  }[];
}

export interface ApiParsedBingLocation {
  addressLine?: string;
  countryRegion?: string;
  locality?: string;
  postalCode?: string;
}

export type ApiFilteredParsedBingLocation = RequiredExceptFor<
  ApiParsedBingLocation,
  'addressLine' | 'postalCode'
>;

export type ApiPrice = number;

export interface ApiHours {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export interface ApiRestaurantBriefDataResponse {
  id: ApiRestaurantDataResponse['id'];
  name: ApiRestaurantDataResponse['name'];
  coverImg: ApiRestaurantDataResponse['coverImg'];
  priceRange: ApiRestaurantDataResponse['priceRange'];
  slug: ApiRestaurantDataResponse['slug'];
  address: {
    countryRegion: ApiRestaurantDataResponse['address']['countryRegion'];
    locality: ApiRestaurantDataResponse['address']['locality'];
  };
  reviews: {
    avg: ApiRestaurantDataResponse['reviews']['avg'];
  };
  delivery: {
    fee: ApiRestaurantDataResponse['delivery']['fee'];
    durationInMinutes: ApiRestaurantDataResponse['delivery']['durationInMinutes'];
  };
}

export interface ApiRestaurantDataResponse {
  id: string;
  name: string;
  coverImg: string;
  priceRange: RestaurantPriceRange;
  slug: string;
  address: Required<NonNullable<ApiParsedBingLocation>>;
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
  menu: ApiRestaurantDishResponse[];
}

export interface ApiRestaurantDishResponse {
  id: string;
  name: string;
  type: RestaurantDishTypes;
  pricePerItem: ApiPrice;
}

export interface ApiNewOrderRequest {
  order: RestaurantDishInBasket[];
  customer: CustomerDetailsWithDeliveryAddress;
}

/**
 * Utils
 */

export type RequiredExceptFor<T, TOptional extends keyof T> = Required<T> & Pick<T, TOptional>;
