import queryString from 'query-string';
import { appPaths } from 'routes';
import type { ParsedBingLocation } from 'types';
import { TextBase } from 'ui/typography';
import { StyledLink, StyledTextSm } from './DeliveryCitiesListItem.styles';

interface DeliveryCitiesListItemProps {
  location: Required<ParsedBingLocation>;
  linkAria?: Record<string, string>;
}

function DeliveryCitiesListItem({ location, linkAria = {} }: DeliveryCitiesListItemProps): JSX.Element {
  const { locality, countryRegion } = location;

  return (
    <li>
      <StyledLink
        role="option"
        to={{
          pathname: appPaths.browseRestaurants(),
          search: queryString.stringify(location),
        }}
        {...linkAria}
      >
        <TextBase as="span">{locality}</TextBase>
        <StyledTextSm as="span">{countryRegion}</StyledTextSm>
      </StyledLink>
    </li>
  );
}

export default DeliveryCitiesListItem;
