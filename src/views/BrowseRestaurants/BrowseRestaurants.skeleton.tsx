import { Container, MainContent } from 'ui/layout';
import { RestaurantsFiltersSkeleton } from 'modules/RestaurantsFilters';
import { RestaurantsListSkeleton } from 'modules/RestaurantsList';
import { StyledContentGrid, StyledFiltersWrapper } from './BrowseRestaurants.styles';

function BrowseRestaurantsSkeleton(): JSX.Element {
  return (
    <Container>
      <MainContent>
        <StyledContentGrid>
          <StyledFiltersWrapper>
            <RestaurantsFiltersSkeleton />
          </StyledFiltersWrapper>

          <RestaurantsListSkeleton />
        </StyledContentGrid>
      </MainContent>
    </Container>
  );
}

export default BrowseRestaurantsSkeleton;
