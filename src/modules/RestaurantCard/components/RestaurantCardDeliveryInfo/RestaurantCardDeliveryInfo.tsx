import { useTranslation } from 'react-i18next';
import type { RestaurantBriefData } from 'types';
import { transformApiPrice } from 'utils';
import {
  StyledWrapper,
  StyledDeliveryDiningIcon,
  StyledDurationTime,
} from './RestaurantCardDeliveryInfo.styles';

type Props = RestaurantBriefData['delivery'];

function RestaurantCardDeliveryInfo({ fee, durationInMinutes }: Props): JSX.Element {
  const { t } = useTranslation();

  return (
    <StyledWrapper title={t('Delivery')}>
      <StyledDeliveryDiningIcon />
      <span>{transformApiPrice(fee)}</span>
      <StyledDurationTime>
        &nbsp;•&nbsp;{durationInMinutes.min} - {durationInMinutes.max} {t('min')}
      </StyledDurationTime>
    </StyledWrapper>
  );
}

export default RestaurantCardDeliveryInfo;
