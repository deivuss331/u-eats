import { RestaurantCardSkeleton } from 'components/RestaurantCard';
import { StyledUl } from './RestaurantsList.styles';

const SKELETON_CARDS_QTY: number = 20;

function RestaurantsListSkeleton(): JSX.Element {
  return (
    <StyledUl>
      {new Array(SKELETON_CARDS_QTY).fill(null).map((_, index) => (
        <RestaurantCardSkeleton key={index} />
      ))}
    </StyledUl>
  );
}

export default RestaurantsListSkeleton;
