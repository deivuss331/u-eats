import Skeleton from 'react-loading-skeleton';
import type { ComponentCommonProps } from 'types';
import { StyledForm } from './RestaurantsFilters.styles';

function RestaurantsFiltersSkeleton(commonProps: ComponentCommonProps): JSX.Element {
  return (
    <StyledForm as="div" {...commonProps}>
      <Skeleton style={{ width: '90%', lineHeight: 1.5 }} />
      <Skeleton style={{ width: '60%' }} />
      <Skeleton style={{ width: '60%' }} />
      <Skeleton style={{ width: '60%', marginBottom: '30px' }} />
      <Skeleton style={{ width: '90%', lineHeight: 1.5 }} />
      <Skeleton style={{ width: '60%' }} />
      <Skeleton style={{ width: '60%' }} />
      <Skeleton style={{ width: '60%' }} />
      <Skeleton style={{ width: '60%' }} />
    </StyledForm>
  );
}

export default RestaurantsFiltersSkeleton;
