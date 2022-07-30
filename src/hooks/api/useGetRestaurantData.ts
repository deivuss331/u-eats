import { useQuery } from 'react-query';
import config from 'config';
import { apiClient } from 'services';
import type { ApiRestaurantDataResponse } from 'types';

interface Props {
  id: string;
  enabled?: boolean;
}

interface ReturnProps {
  data?: ApiRestaurantDataResponse;
  isLoading: boolean;
  isError: boolean;
}

const useGetRestaurantData = ({ id, enabled = true }: Props): ReturnProps => {
  const reqUrl: string = config.api.urls.getRestaurantData(id);

  const {
    data: { data } = {},
    isLoading,
    isError,
    isPreviousData,
  } = useQuery([reqUrl, id], () => apiClient.get<ApiRestaurantDataResponse>(reqUrl), {
    enabled: Boolean(id) && enabled,
    keepPreviousData: true,
  });

  return {
    data: isPreviousData ? undefined : data,
    isLoading: isLoading || isPreviousData,
    isError,
  };
};

export default useGetRestaurantData;
