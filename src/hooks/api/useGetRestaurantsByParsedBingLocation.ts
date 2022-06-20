import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import config from 'config';
import { apiClient } from 'services';
import type { RestaurantBriefData, PageableResponse } from 'types';

const PAGE_SIZE: number = 24;

interface Props {
  enabled?: boolean;
}

interface ReturnProps {
  data?: PageableResponse<RestaurantBriefData>;
  isLoading: boolean;
  isError: boolean;
}

const useGetRestaurantsByParsedBingLocation = ({ enabled = true }: Props | undefined = {}): ReturnProps => {
  const [searchParams] = useSearchParams();

  const searchParamsObject = Object.fromEntries(searchParams);
  const reqUrl: string = config.api.urls.getRestaurantsByParsedBingLocation();
  const queryParams: string = queryString.stringify(searchParamsObject);

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
          ...searchParamsObject,
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
