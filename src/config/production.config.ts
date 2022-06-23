import type { AppConfig } from 'types';

const BASE_API_URL: string = '/api';

const getBaseApiUrlEndPoint = (endPoint: string) => `${BASE_API_URL}/${endPoint}`;

const config: AppConfig = {
  api: {
    useMocks: true,
    urls: {
      getApiAppConfig: () => getBaseApiUrlEndPoint('app-config'),
      getLocationsByQuery: (q) => `https://dev.virtualearth.net/REST/v1/Locations/${q}`,
      getRestaurantsByParsedBingLocation: () => getBaseApiUrlEndPoint('restaurants'),
      getRestaurantData: (id) => getBaseApiUrlEndPoint(`restaurant/${id}`),
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
