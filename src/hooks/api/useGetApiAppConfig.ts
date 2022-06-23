import { useQuery } from 'react-query';
import config from 'config';
import { apiClient } from 'services';
import type { ApiAppConfig } from 'types';

interface Props {
  enabled?: boolean;
}

interface ReturnProps {
  data?: ApiAppConfig;
  isLoading: boolean;
  isError: boolean;
  isFetched: boolean;
}

const useGetApiAppConfig = ({ enabled = true }: Props | undefined = {}): ReturnProps => {
  const reqUrl: string = config.api.urls.getApiAppConfig();

  const {
    data: { data } = {},
    isLoading,
    isError,
    isPreviousData,
    isFetched,
  } = useQuery(reqUrl, () => apiClient.get<ApiAppConfig>(reqUrl), {
    enabled,
    keepPreviousData: true,
  });

  return {
    data: isPreviousData ? undefined : data,
    isLoading: isLoading || isPreviousData,
    isError,
    isFetched,
  };
};

export default useGetApiAppConfig;
