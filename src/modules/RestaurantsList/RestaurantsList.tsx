import type { RestaurantBriefData, ComponentCommonProps } from 'types';
import { RestaurantCard } from 'modules';
import { StyledUl } from './RestaurantsList.styles';

interface RestaurantsListProps extends ComponentCommonProps {
  restaurants: RestaurantBriefData[];
}

function RestaurantsList({ restaurants, className }: RestaurantsListProps): JSX.Element {
  return (
    <StyledUl className={className}>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <RestaurantCard restaurant={restaurant} />
        </li>
      ))}
    </StyledUl>
  );
}

export default RestaurantsList;
