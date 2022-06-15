import { useQuery } from 'react-query';
import queryString from 'query-string';
import config from 'config';
import { apiClient } from 'services';
import type { ParsedBingLocation, RestaurantBriefData } from 'types';

interface Props {
  location: ParsedBingLocation;
  enabled?: boolean;
}

interface ReturnProps {
  data?: RestaurantBriefData[];
  isLoading: boolean;
  isError: boolean;
}

const useGetRestaurantsByParsedBingLocation = ({ location, enabled = true }: Props): ReturnProps => {
  const reqUrl: string = config.api.urls.getRestaurantsByParsedBingLocation();
  const queryParams: string = queryString.stringify(location);

  const {
    data: { data } = {},
    isLoading,
    isError,
    isPreviousData,
  } = useQuery(
    [reqUrl, queryParams],
    () =>
      apiClient.get<RestaurantBriefData[]>(reqUrl, {
        params: location,
      }),
    {
      enabled,
      keepPreviousData: true,
    },
  );

  return {
    data: isPreviousData ? undefined : data,
    isLoading: isLoading || isPreviousData,
    isError,
  };
};

export default useGetRestaurantsByParsedBingLocation;
