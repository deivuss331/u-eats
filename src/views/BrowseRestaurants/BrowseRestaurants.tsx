import { useEffect } from 'react';
import { usePageableSearchParams } from 'hooks';
import { useGetRestaurantsByParsedBingLocation } from 'hooks/api';
import { RestaurantsList } from 'modules';
import { Container, MainContent } from 'ui/layout';
import { StyledPagination, StyledContentGrid, StyledRestaurantsFilters } from './BrowseRestaurants.styles';

// import { appPaths } from 'routes';

function BrowseRestaurants(): JSX.Element {
  const { page, setPage } = usePageableSearchParams();
  const { data } = useGetRestaurantsByParsedBingLocation();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Container>
      <MainContent>
        <StyledContentGrid>
          <StyledRestaurantsFilters />
          <div>
            {data ? <RestaurantsList restaurants={data.content} /> : null}
            {data ? (
              <StyledPagination
                count={data.totalPages}
                page={page}
                onChange={(_, newPage) => setPage(newPage)}
              />
            ) : null}
          </div>
        </StyledContentGrid>
      </MainContent>
    </Container>
  );
}

export default BrowseRestaurants;
