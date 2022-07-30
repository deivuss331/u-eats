import { useForm, FormProvider } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import type { CustomerDetailsWithDeliveryAddress } from 'types';
import { useAppSelector, useBasketHelper } from 'hooks';
import { DeliveryLocationFormFields, CustomerDetailsFormFields, RestaurantDishesTable } from 'components';
import { Container, MainContent } from 'ui/layout';
import { H1, H4 } from 'ui/typography';
import { Button, FormCol } from 'ui/form';
import { StyledForm, StyledBottomBar } from './Basket.styles';
import { useHandleOrderSubmit, useRedirectIfBasketIsEmpty } from './hooks';

function Basket(): JSX.Element | null {
  const handleOrderSubmit = useHandleOrderSubmit();
  const { t } = useTranslation();
  const { totalValue } = useBasketHelper();
  const {
    customerDetails,
    basket: { order },
  } = useAppSelector((state) => state);
  const { handleSubmit, formState, ...formMethods } = useForm<CustomerDetailsWithDeliveryAddress>({
    mode: 'onChange',
    defaultValues: customerDetails,
  });

  useRedirectIfBasketIsEmpty();

  if (!order.length) {
    return null;
  }

  return (
    <Container>
      <MainContent>
        <FormProvider handleSubmit={handleSubmit} formState={formState} {...formMethods}>
          <StyledForm onSubmit={handleSubmit(handleOrderSubmit)}>
            <H1>{t('Your order')}</H1>

            <RestaurantDishesTable dishes={order} />

            <FormCol>
              <H4 as="h2">{t('Delivery details')}</H4>

              <CustomerDetailsFormFields
                names={{
                  firstName: 'firstName',
                  lastName: 'lastName',
                  email: 'email',
                }}
              />
            </FormCol>
            <FormCol>
              <DeliveryLocationFormFields
                names={{
                  addressLine: 'deliveryAddress.addressLine',
                  locality: 'deliveryAddress.locality',
                  postalCode: 'deliveryAddress.postalCode',
                  countryRegion: 'deliveryAddress.countryRegion',
                }}
              />
            </FormCol>

            <StyledBottomBar>
              <span>{t('To pay: {{amount}}', { amount: totalValue.humanFriendly })}</span>
              <Button type="submit" loading={formState.isSubmitting}>
                {t('Place order')}
              </Button>
            </StyledBottomBar>
          </StyledForm>
        </FormProvider>
      </MainContent>
    </Container>
  );
}

export default Basket;
