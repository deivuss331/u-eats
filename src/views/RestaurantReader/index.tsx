import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useGetRestaurantData } from 'hooks/api';
import RestaurantReader from './RestaurantReader';
import RestaurantReaderSkeleton from './RestaurantReader.skeleton';
import RestaurantReaderError from './RestaurantReader.error';

function RestaurantReaderRenderer(): JSX.Element {
  const { t } = useTranslation();
  const { id: restaurantId = '' } = useParams();
  const { data: restaurant, isLoading, isError } = useGetRestaurantData({ id: restaurantId });

  if (isLoading) {
    return <RestaurantReaderSkeleton />;
  }

  if (restaurant) {
    return <RestaurantReader {...restaurant} />;
  }

  if (isError) {
    return <RestaurantReaderError msg={t("Couldn't fetch restaurant data...")} />;
  }

  return <RestaurantReaderError msg={t("Couldn't find restaurant...")} />;
}

export default RestaurantReaderRenderer;
