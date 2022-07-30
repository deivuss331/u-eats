import { usePageableSearchParams } from 'hooks';
import type { ApiPageableResponse, ApiRestaurantBriefDataResponse } from 'types';
import { RestaurantsList, RestaurantsFilters } from 'components';
import { Container, MainContent } from 'ui/layout';
import { StyledPagination, StyledContentGrid, StyledFiltersWrapper } from './BrowseRestaurants.styles';

type BrowseRestaurantsProps = ApiPageableResponse<ApiRestaurantBriefDataResponse>;

function BrowseRestaurants({ content, totalPages }: BrowseRestaurantsProps): JSX.Element {
  const { page, setPage } = usePageableSearchParams();

  return (
    <Container>
      <MainContent>
        <StyledContentGrid>
          <StyledFiltersWrapper>
            <RestaurantsFilters />
          </StyledFiltersWrapper>

          <div>
            <RestaurantsList restaurants={content} />
            <StyledPagination count={totalPages} page={page} onChange={(_, newPage) => setPage(newPage)} />
          </div>
        </StyledContentGrid>
      </MainContent>
    </Container>
  );
}

export default BrowseRestaurants;
