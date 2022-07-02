import { useTranslation } from 'react-i18next';
import type { RestaurantBriefData } from 'types';
import { getHumanFriendlyPrice } from 'utils/apiPriceUtils';
import { StyledWrapper, StyledDeliveryDiningIcon } from './RestaurantDeliveryInfo.styles';

type Props = RestaurantBriefData['delivery'];

function RestaurantDeliveryInfo({ fee, durationInMinutes }: Props): JSX.Element {
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
