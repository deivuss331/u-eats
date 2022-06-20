import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { RestaurantsFiltersFormPayload } from 'types';

const useSetFiltersSearchParams = ({ sortBy, priceRange }: RestaurantsFiltersFormPayload) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    [
      { key: 'sortBy', value: sortBy },
      { key: 'priceRange', value: priceRange },
    ].forEach(({ key, value }) => (value ? searchParams.set(key, value) : searchParams.delete(key)));

    setSearchParams(searchParams);
  }, [sortBy, priceRange]);
};

export default useSetFiltersSearchParams;
