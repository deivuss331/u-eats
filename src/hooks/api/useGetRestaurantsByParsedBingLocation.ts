import { useQuery } from 'react-query';
import queryString from 'query-string';
import config from 'config';
import { apiClient } from 'services';
import type { ParsedBingLocation, RestaurantBriefData, PageableResponse } from 'types';

const PAGE_SIZE: number = 24;

interface Props {
  page: number;
  location: ParsedBingLocation;
  enabled?: boolean;
}

interface ReturnProps {
  data?: PageableResponse<RestaurantBriefData>;
  isLoading: boolean;
  isError: boolean;
}

const useGetRestaurantsByParsedBingLocation = ({ page, location, enabled = true }: Props): ReturnProps => {
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
      apiClient.get<PageableResponse<RestaurantBriefData>>(reqUrl, {
        params: {
          ...location,
          page,
          size: PAGE_SIZE,
        },
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
