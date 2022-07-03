import { useTranslation } from 'react-i18next';
import { useGetRestaurantsByParsedBingLocation } from 'hooks/api';
import BrowseRestaurants from './BrowseRestaurants';
import BrowseRestaurantsSkeleton from './BrowseRestaurants.skeleton';
import BrowseRestaurantsError from './BrowseRestaurants.error';

function BrowseRestaurantsRenderer(): JSX.Element {
  const { t } = useTranslation();
  const { data: restaurants, isLoading, isError } = useGetRestaurantsByParsedBingLocation();

  if (isLoading) {
    return <BrowseRestaurantsSkeleton />;
  }

  if (restaurants?.content.length) {
    return <BrowseRestaurants {...restaurants} />;
  }

  if (isError) {
    return <BrowseRestaurantsError msg={t("Couldn't fetch restaurants...")} />;
  }

  return <BrowseRestaurantsError msg={t('No results found...')} />;
}

export default BrowseRestaurantsRenderer;
