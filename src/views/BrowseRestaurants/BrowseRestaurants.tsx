import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
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
  const { data } = useGetRestaurantsByParsedBingLocation({
    location: {
      locality,
      countryRegion,
      postalCode,
      addressLine,
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Container>
      <MainContent>{data ? <RestaurantsList restaurants={data} /> : null}</MainContent>
    </Container>
  );
}

export default BrowseRestaurants;
