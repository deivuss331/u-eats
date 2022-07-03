import type { CustomerDetailsWithDeliveryAddress } from 'types';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from 'hooks';
import { usePostNewOrder } from 'hooks/api';
import { ENVIRONMENTS } from 'config/constants';
import { actions } from 'store/slices/basket.slice';

const useHandleOrderSubmit = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { mutateAsync } = usePostNewOrder();
  const {
    basket: { order },
  } = useAppSelector((state) => state);

  return async (customer: CustomerDetailsWithDeliveryAddress) => {
    try {
      await mutateAsync({ order, customer });
      toast.success(t('Thank you! Your order has been placed!'));
    } catch (err) {
      toast.error(t('Something went wrong... Please try again later'));
      if (process.env.NODE_ENV !== ENVIRONMENTS.PRODUCTION) {
        console.error(err);
      }
    } finally {
      dispatch(actions.clearBasket());
    }
  };
};

export default useHandleOrderSubmit;
