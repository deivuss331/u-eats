import type { AppConfig } from 'types';

const config: AppConfig = {
  api: {
    urls: {
      getLocationsByQuery: (q) => `http://dev.virtualearth.net/REST/v1/Locations/${q}`,
    },
  },
  reactQuery: {
    defaultOptions: {
      queries: {
        retry: 2,
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
