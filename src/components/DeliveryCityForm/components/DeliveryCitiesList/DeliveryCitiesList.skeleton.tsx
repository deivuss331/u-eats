import { useTranslation } from 'react-i18next';
import type { ComponentCommonProps } from 'types';
import { Skeleton } from '../DeliveryCitiesListItem';
import { StyledWrapper, StyledHeadline } from './DeliveryCitiesList.styles';

function DeliveryCitiesListSkeleton({ className }: ComponentCommonProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <StyledWrapper className={className}>
      <StyledHeadline>{t('Suggested locations')}</StyledHeadline>
      <ul>
        <Skeleton />
      </ul>
    </StyledWrapper>
  );
}

export default DeliveryCitiesListSkeleton;
