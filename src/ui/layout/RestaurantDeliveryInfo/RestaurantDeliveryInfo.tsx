import { useTranslation } from 'react-i18next';
import type { ApiRestaurantBriefDataResponse } from 'types';
import { getHumanFriendlyPrice } from 'utils/apiPriceUtils';
import { StyledWrapper, StyledDeliveryDiningIcon } from './RestaurantDeliveryInfo.styles';

type RestaurantDeliveryInfoProps = ApiRestaurantBriefDataResponse['delivery'];

function RestaurantDeliveryInfo({ fee, durationInMinutes }: RestaurantDeliveryInfoProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <StyledWrapper title={t('Delivery')}>
      <StyledDeliveryDiningIcon />
      <span>{getHumanFriendlyPrice(fee)}</span>
      <span>
        &nbsp;•&nbsp;{durationInMinutes.min} - {durationInMinutes.max} {t('min')}
      </span>
    </StyledWrapper>
  );
}

export default RestaurantDeliveryInfo;
