import Skeleton from 'react-loading-skeleton';
import { StyledLink } from './DeliveryCitiesListItem.styles';

function DeliveryCitiesListItemSkeleton(): JSX.Element {
  return (
    <li>
      <StyledLink as="span">
        <Skeleton width="50%" />
        <Skeleton width="30%" />
      </StyledLink>
    </li>
  );
}

export default DeliveryCitiesListItemSkeleton;
