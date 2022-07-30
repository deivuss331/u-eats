import queryString from 'query-string';
import { appPaths } from 'routes';
import type { ApiFilteredParsedBingLocation } from 'types';
import { useAppDispatch } from 'hooks';
import { actions } from 'store/slices/customerDetails.slice';
import { TextBase } from 'ui/typography';
import { StyledLink, StyledTextSm } from './DeliveryCitiesListItem.styles';
import { getHeadline } from './utils';

interface DeliveryCitiesListItemProps {
  location: ApiFilteredParsedBingLocation;
  linkAria?: Record<string, string>;
}

function DeliveryCitiesListItem({ location, linkAria = {} }: DeliveryCitiesListItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const { countryRegion } = location;

  return (
    <li>
      <StyledLink
        role="option"
        onClick={() => dispatch(actions.setDeliveryAddress(location))}
        to={{
          pathname: appPaths.browseRestaurants(),
          search: queryString.stringify(location),
        }}
        {...linkAria}
      >
        <TextBase as="span">{getHeadline(location)}</TextBase>
        <StyledTextSm as="span">{countryRegion}</StyledTextSm>
      </StyledLink>
    </li>
  );
}

export default DeliveryCitiesListItem;
