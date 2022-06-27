import { CardElement } from '@stripe/react-stripe-js';
import { useForm, FormProvider } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import type { CustomerDetailsWithDeliveryAddress } from 'types';
import { DeliveryLocationFormFields, CustomerDetailsFormFields } from 'modules';
import { Container, MainContent } from 'ui/layout';
import { Button } from 'ui/form';
import { useHandleOrderSubmit, useRedirectIfBasketIsEmpty } from './hooks';

function Basket(): JSX.Element {
  const { t } = useTranslation();
  const { handleSubmit, formState, ...formMethods } = useForm<CustomerDetailsWithDeliveryAddress>();
  const handleOrderSubmit = useHandleOrderSubmit();

  useRedirectIfBasketIsEmpty();

  return (
    <Container>
      <MainContent>
        <FormProvider handleSubmit={handleSubmit} formState={formState} {...formMethods}>
          <form onSubmit={handleSubmit(handleOrderSubmit)}>
            <CustomerDetailsFormFields
              names={{
                firstName: 'firstName',
                lastName: 'lastName',
                email: 'email',
              }}
            />
            <DeliveryLocationFormFields
              names={{
                addressLine: 'deliveryAddress.addressLine',
                locality: 'deliveryAddress.locality',
                postalCode: 'deliveryAddress.postalCode',
                countryRegion: 'deliveryAddress.countryRegion',
              }}
            />
            <CardElement />
            <Button type="submit" loading={formState.isSubmitting}>
              {t('Order and pay')}
            </Button>
          </form>
        </FormProvider>
      </MainContent>
    </Container>
  );
}

export default Basket;
