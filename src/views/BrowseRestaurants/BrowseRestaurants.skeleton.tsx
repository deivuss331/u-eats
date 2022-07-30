import { Container, MainContent } from 'ui/layout';
import { RestaurantsFiltersSkeleton } from 'components/RestaurantsFilters';
import { RestaurantsListSkeleton } from 'components/RestaurantsList';
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
