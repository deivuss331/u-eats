import { useMutation } from 'react-query';
import config from 'config';
import { apiClient } from 'services';
import type { NewOrder } from 'types';

const usePostNewOrder = () => {
  const { mutate, mutateAsync, isLoading, isError } = useMutation((payload: NewOrder) =>
    apiClient.post<NewOrder>(config.api.urls.postNewOrder(), payload),
  );

  return {
    mutate,
    mutateAsync,
    isLoading,
    isError,
  };
};

export default usePostNewOrder;
