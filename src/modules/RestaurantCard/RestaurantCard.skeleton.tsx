import Skeleton from 'react-loading-skeleton';
import type { ComponentCommonProps } from 'types';

function RestaurantCardSkeleton(commonProps: ComponentCommonProps): JSX.Element {
  return (
    <div {...commonProps}>
      <Skeleton style={{ height: '220px', marginBottom: '15px' }} />
      <Skeleton style={{ width: '50%', marginBottom: '10px' }} />
      <Skeleton style={{ width: '80%' }} />
    </div>
  );
}

export default RestaurantCardSkeleton;
