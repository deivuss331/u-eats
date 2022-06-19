import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import queryString from 'query-string';
import { usePageableSearchParams } from 'hooks';
import { useGetRestaurantsByParsedBingLocation } from 'hooks/api';
import type { BrowseRestaurantsSearchParams } from 'types';
import { RestaurantsList } from 'modules';
import { Container, MainContent } from 'ui/layout';
import { StyledPagination } from './BrowseRestaurants.styles';

// import { appPaths } from 'routes';

function BrowseRestaurants(): JSX.Element {
  const { search } = useLocation();
  // const navigate = useNavigate();

  const { locality, countryRegion, postalCode, addressLine }: BrowseRestaurantsSearchParams =
    queryString.parse(search);
  const { page, setPage } = usePageableSearchParams();
  const { data } = useGetRestaurantsByParsedBingLocation({
    page,
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
      <MainContent>
        {data ? <RestaurantsList restaurants={data.content} /> : null}
        {data ? (
          <StyledPagination count={data.totalPages} page={page} onChange={(_, newPage) => setPage(newPage)} />
        ) : null}
      </MainContent>
    </Container>
  );
}

export default BrowseRestaurants;
