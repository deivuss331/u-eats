import { useTranslation } from 'react-i18next';
import type { RestaurantData } from 'types';
import { StyledWrapper, StyledMapIcon } from './RestaurantAddressInfo.styles';

type Props = RestaurantData['address'];

function RestaurantAddressInfo({ locality, addressLine, countryRegion }: Props): JSX.Element {
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
