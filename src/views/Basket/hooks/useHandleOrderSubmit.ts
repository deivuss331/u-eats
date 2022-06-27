import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import type { StripeCardElement } from '@stripe/stripe-js';
import type { CustomerDetailsWithDeliveryAddress } from 'types';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from 'hooks';
import { usePostNewOrder } from 'hooks/api';
import { ENVIRONMENTS } from 'config/constants';
import { actions } from 'store/slices/basket.slice';

const useHandleOrderSubmit = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const {
    basket: { order },
  } = useAppSelector((state) => state);
  const { mutateAsync } = usePostNewOrder();

  return async (customer: CustomerDetailsWithDeliveryAddress) => {
    if (!elements || !stripe) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement) as StripeCardElement,
    });

    if (error || !paymentMethod) {
      toast.error(t('Your credit card details seems to be invalid'));
      return;
    }

    try {
      await mutateAsync({ paymentMethod, order, customer });
      toast.success(t('Thank you! Your order has been placed!'));
    } catch (err) {
      toast.error(t('Something went wrong... Please try again later'));
      if (process.env.NODE_ENV !== ENVIRONMENTS.PRODUCTION) {
        console.log(err);
      }
    } finally {
      dispatch(actions.clearBasket());
    }
  };
};

export default useHandleOrderSubmit;
