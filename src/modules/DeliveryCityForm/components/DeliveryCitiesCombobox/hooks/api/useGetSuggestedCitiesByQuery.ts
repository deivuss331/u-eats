import { useDebounce } from 'hooks';
import { useGetLocationsByQuery } from 'hooks/api';
import { filterBingLocationsByConfidence } from 'utils';

const DEBOUNCE_DELAY: number = 350 as const;

interface ReturnProps extends ReturnType<typeof useGetLocationsByQuery> {
  searchQuery: string;
}

const useGetSuggestedCitiesByQuery = (query?: string): ReturnProps => {
  const debouncedQuery: ReturnProps['searchQuery'] = useDebounce(query, DEBOUNCE_DELAY) || '';
  const { data, isLoading, isError } = useGetLocationsByQuery({ query: debouncedQuery });

  return {
    data: data ? filterBingLocationsByConfidence(data) : undefined,
    searchQuery: debouncedQuery,
    isLoading,
    isError,
  };
};

export default useGetSuggestedCitiesByQuery;
