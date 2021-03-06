import { useQuery } from 'react-query';
import config from 'config';
import { locationsApiClient } from 'services';
import type { ApiBingLocationsResponse } from 'types';
import { useQueryClientAbort } from 'hooks';

interface Props {
  query: string;
  enabled?: boolean;
}

interface ReturnProps {
  data?: ApiBingLocationsResponse;
  isLoading: boolean;
  isError: boolean;
}

const useGetLocationsByQuery = ({ query, enabled = true }: Props): ReturnProps => {
  const reqUrl: string = config.api.urls.getLocationsByQuery(query);
  const {
    data: { data } = {},
    isLoading,
    isError,
    isPreviousData,
  } = useQuery(reqUrl, ({ signal }) => locationsApiClient.get<ApiBingLocationsResponse>(reqUrl, { signal }), {
    enabled: enabled && Boolean(query),
    keepPreviousData: true,
  });

  useQueryClientAbort(reqUrl);

  return {
    data: isPreviousData ? undefined : data,
    isLoading: isLoading || isPreviousData,
    isError,
  };
};

export default useGetLocationsByQuery;
