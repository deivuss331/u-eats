import { useTranslation } from 'react-i18next';
import type { ApiRestaurantDataResponse } from 'types';
import { StyledWrapper, StyledMapIcon } from './RestaurantAddressInfo.styles';

type RestaurantAddressInfoProps = ApiRestaurantDataResponse['address'];

function RestaurantAddressInfo({
  locality,
  addressLine,
  countryRegion,
}: RestaurantAddressInfoProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <StyledWrapper title={t('Address')}>
      <StyledMapIcon />
      <span>
        {addressLine}, {locality}, {countryRegion}
      </span>
    </StyledWrapper>
  );
}

export default RestaurantAddressInfo;
