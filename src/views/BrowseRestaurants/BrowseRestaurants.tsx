import { usePageableSearchParams } from 'hooks';
import type { PageableResponse, RestaurantBriefData } from 'types';
import { RestaurantsList, RestaurantsFilters } from 'modules';
import { Container, MainContent } from 'ui/layout';
import { StyledPagination, StyledContentGrid, StyledFiltersWrapper } from './BrowseRestaurants.styles';

type BrowseRestaurantsProps = PageableResponse<RestaurantBriefData>;

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
