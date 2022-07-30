import { useMutation } from 'react-query';
import config from 'config';
import { apiClient } from 'services';
import type { ApiNewOrderRequest } from 'types';

const usePostNewOrder = () => {
  const { mutate, mutateAsync, isLoading, isError } = useMutation((payload: ApiNewOrderRequest) =>
    apiClient.post<ApiNewOrderRequest>(config.api.urls.postNewOrder(), payload),
  );

  return {
    mutate,
    mutateAsync,
    isLoading,
    isError,
  };
};

export default usePostNewOrder;
