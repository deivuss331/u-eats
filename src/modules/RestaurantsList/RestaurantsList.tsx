import { RestaurantCard } from 'modules';
import type { RestaurantBriefData, ComponentCommonProps } from 'types';

interface RestaurantsListProps extends ComponentCommonProps {
  restaurants: RestaurantBriefData[];
}

function RestaurantsList({ restaurants, className }: RestaurantsListProps): JSX.Element {
  return (
    <ul className={className}>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <RestaurantCard restaurant={restaurant} />
        </li>
      ))}
    </ul>
  );
}

export default RestaurantsList;
