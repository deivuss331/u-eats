import type { AppConfig } from 'types';
import { getBaseUrlEndPoint } from 'utils';

const BASE_API_URL: string = `${window.location.origin}/api`;

const getBaseApiUrlEndPoint = getBaseUrlEndPoint(BASE_API_URL);

const config: AppConfig = {
  api: {
    useMocks: true,
    urls: {
      getApiAppConfig: () => getBaseApiUrlEndPoint('/config'),
      getLocationsByQuery: (q) => `http://dev.virtualearth.net/REST/v1/Locations/${q}`,
      getRestaurantsByParsedBingLocation: () => getBaseApiUrlEndPoint('/restaurants'),
      getRestaurantData: (id) => getBaseApiUrlEndPoint(`/restaurants/${id}`),
      postNewOrder: () => getBaseApiUrlEndPoint('/orders'),
    },
  },
  reactQuery: {
    defaultOptions: {
      queries: {
        retry: 1,
        staleTime: Infinity,
        cacheTime: Infinity,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchInterval: false,
        refetchIntervalInBackground: false,
        suspense: false,
      },
      mutations: {
        retry: 1,
      },
    },
  },
} as const;

export default config;
