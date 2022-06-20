import { useForm, FormProvider } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import type { RestaurantsFiltersFormPayload, ComponentCommonProps } from 'types';
import { useSetFiltersSearchParams } from './hooks';
import { SortByFilters, PriceRangeFilters } from './components';
import { StyledForm } from './RestaurantsFilters.styles';

function RestaurantsFilters(commonProps: ComponentCommonProps): JSX.Element {
  const [searchParams] = useSearchParams();
  const { watch, ...formMethods } = useForm<RestaurantsFiltersFormPayload>({
    defaultValues: Object.fromEntries(searchParams),
  });

  useSetFiltersSearchParams({
    sortBy: watch('sortBy'),
    priceRange: watch('priceRange'),
  });

  return (
    <FormProvider watch={watch} {...formMethods}>
      <StyledForm {...commonProps}>
        <SortByFilters />
        <PriceRangeFilters />
      </StyledForm>
    </FormProvider>
  );
}

export default RestaurantsFilters;
