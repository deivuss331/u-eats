import { useEffect } from 'react';
import { useGetApiAppConfig } from 'hooks/api';
import { actions } from 'store/slices/global.slice';
import useAppDispatch from './useAppDispatch';

const usePrepareApp = (): boolean => {
  const dispatch = useAppDispatch();
  const { data: { currency } = {}, isLoading, isError, isFetched } = useGetApiAppConfig();

  const isReady: boolean = isFetched && !isLoading;

  useEffect(() => {
    dispatch(
      actions.setGlobalState({
        currency,
        isReady,
        isError,
      }),
    );
  }, [currency, isReady, isError]);

  return isReady;
};

export default usePrepareApp;
