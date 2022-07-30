import { useTranslation } from 'react-i18next';
import { useRestaurantOpenStatus } from 'hooks';
import type { ApiRestaurantDataResponse } from 'types';
import { StyledWrapper, StyledStatusIcon } from './RestaurantOpenStatus.styles';

type Props = ApiRestaurantDataResponse['opens'];

function RestaurantOpenStatus(opensInfo: Props): JSX.Element {
  const { t } = useTranslation();
  const isOpen = useRestaurantOpenStatus(opensInfo);

  return (
    <StyledWrapper $isOpen={isOpen} title={t('Open status')} role="status">
      <StyledStatusIcon $isOpen={isOpen} />
      <span>{t(isOpen ? 'Open' : 'Closed')}</span>
    </StyledWrapper>
  );
}

export default RestaurantOpenStatus;
