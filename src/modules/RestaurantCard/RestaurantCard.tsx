import type { RestaurantBriefData, ComponentCommonProps } from 'types';

interface RestaurantCardProps extends ComponentCommonProps {
  restaurant: RestaurantBriefData;
}

function RestaurantCard({ restaurant, className }: RestaurantCardProps): JSX.Element {
  return <p className={className}>{restaurant.name}</p>;
}

export default RestaurantCard;
