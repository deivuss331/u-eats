import { useTranslation } from 'react-i18next';
import { usePageableSearchParams } from 'hooks';
import { useGetRestaurantsByParsedBingLocation } from 'hooks/api';
import { RestaurantsList, RestaurantsFilters } from 'modules';
import { RestaurantsFiltersSkeleton } from 'modules/RestaurantsFilters';
import { RestaurantsListSkeleton } from 'modules/RestaurantsList';
import { Container, MainContent, Alert } from 'ui/layout';
import { StyledPagination, StyledContentGrid, StyledFiltersWrapper } from './BrowseRestaurants.styles';

// import { appPaths } from 'routes';

function BrowseRestaurants(): JSX.Element {
  const { t } = useTranslation();
  const { page, setPage } = usePageableSearchParams();
  const { data, isLoading, isError } = useGetRestaurantsByParsedBingLocation();

  return (
    <Container>
      <MainContent>
        <StyledContentGrid>
          <StyledFiltersWrapper>
            {isLoading ? <RestaurantsFiltersSkeleton /> : <RestaurantsFilters />}
          </StyledFiltersWrapper>

          {isLoading ? (
            <RestaurantsListSkeleton />
          ) : data?.content.length ? (
            <div>
              <RestaurantsList restaurants={data.content} />
              <StyledPagination
                count={data.totalPages}
                page={page}
                onChange={(_, newPage) => setPage(newPage)}
              />
            </div>
          ) : isError ? (
            <Alert severity="error">{t("Couldn't fetch restaurants...")}</Alert>
          ) : (
            <Alert severity="info">{t('No results found...')}</Alert>
          )}
        </StyledContentGrid>
      </MainContent>
    </Container>
  );
}

export default BrowseRestaurants;
