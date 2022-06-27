import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import type { StripeCardElement } from '@stripe/stripe-js';
import type { CustomerDetailsWithDeliveryAddress } from 'types';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'hooks';
import { usePostNewOrder } from 'hooks/api';
import { ENVIRONMENTS } from 'config/constants';

const useHandleOrderSubmit = () => {
  const { t } = useTranslation();
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
      console.log('success');
    } catch (err) {
      console.log('error');
      if (process.env.NODE_ENV !== ENVIRONMENTS.PRODUCTION) {
        console.log(err);
      }
    }
  };
};

export default useHandleOrderSubmit;
