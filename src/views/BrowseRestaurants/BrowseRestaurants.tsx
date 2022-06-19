import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { usePageableSearchParams } from 'hooks';
import { useGetRestaurantsByParsedBingLocation } from 'hooks/api';
import type { BrowseRestaurantsSearchParams } from 'types';
import { RestaurantsList } from 'modules';
import { Container, MainContent } from 'ui/layout';

// import { appPaths } from 'routes';

function BrowseRestaurants(): JSX.Element {
  const { search } = useLocation();
  // const navigate = useNavigate();

  const { locality, countryRegion, postalCode, addressLine }: BrowseRestaurantsSearchParams =
    queryString.parse(search);
  const { page } = usePageableSearchParams();
  const { data } = useGetRestaurantsByParsedBingLocation({
    page,
    location: {
      locality,
      countryRegion,
      postalCode,
      addressLine,
    },
  });

  return (
    <Container>
      <MainContent>{data ? <RestaurantsList restaurants={data?.content} /> : null}</MainContent>
    </Container>
  );
}

export default BrowseRestaurants;
