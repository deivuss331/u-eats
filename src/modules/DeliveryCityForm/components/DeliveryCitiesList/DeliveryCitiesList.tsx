import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import type { BingLocations, ComponentCommonProps } from 'types';
import DeliveryCitiesListItem from '../DeliveryCitiesListItem';
import DeliveryCitiesListSkeleton from './DeliveryCitiesList.skeleton';
import { StyledWrapper, StyledHeadline } from './DeliveryCitiesList.styles';
import { parseBingLocations, filterParsedBingLocations } from './utils';

interface DeliveryCitiesListProps extends ComponentCommonProps {
  data?: BingLocations;
  isLoading: boolean;
}

function DeliveryCitiesList({ data, isLoading, className }: DeliveryCitiesListProps): JSX.Element | null {
  const { t } = useTranslation();
  const headlineId = useId();

  const parsedLocations = data ? filterParsedBingLocations(parseBingLocations(data)) : null;

  if (isLoading) {
    return <DeliveryCitiesListSkeleton className={className} />;
  }

  return parsedLocations?.length ? (
    <StyledWrapper className={className}>
      <StyledHeadline as="p" id={headlineId}>
        {t('Suggested locations')}
      </StyledHeadline>
      <ul role="listbox">
        {parsedLocations.map((location) => (
          <DeliveryCitiesListItem
            key={location.locality}
            location={location}
            linkAria={{
              'aria-labelledby': headlineId,
            }}
          />
        ))}
      </ul>
    </StyledWrapper>
  ) : null;
}

export default DeliveryCitiesList;
