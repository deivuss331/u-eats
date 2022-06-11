import queryString from 'query-string';
import { appPaths } from 'routes';
import type { FilteredParsedBingLocation } from 'types';
import { useAppDispatch } from 'hooks';
import { actions } from 'store/slices/deliveryAddress.slice';
import { TextBase } from 'ui/typography';
import { StyledLink, StyledTextSm } from './DeliveryCitiesListItem.styles';
import { getHeadline } from './utils';

interface DeliveryCitiesListItemProps {
  location: FilteredParsedBingLocation;
  linkAria?: Record<string, string>;
}

function DeliveryCitiesListItem({ location, linkAria = {} }: DeliveryCitiesListItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const { locality, countryRegion } = location;

  return (
    <li>
      <StyledLink
        role="option"
        onClick={() => dispatch(actions.setFormPayload(location))}
        to={{
          pathname: appPaths.browseRestaurants(),
          search: queryString.stringify({ locality, countryRegion }),
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
