import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SEARCH_PARAMS_PAGE_KEY: string = 'page';

interface Props {
  defaultPage?: number;
}

const usePageableSearchParams = ({ defaultPage = 0 }: Props | undefined = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsPage = Number(searchParams.get(SEARCH_PARAMS_PAGE_KEY)) || defaultPage;
  const [page, setPage] = useState<number>(Number.isNaN(searchParamsPage) ? defaultPage : searchParamsPage);

  useEffect(() => {
    searchParams.set(SEARCH_PARAMS_PAGE_KEY, page.toString());

    setSearchParams(searchParams);
  }, [page]);

  return {
    page,
    setPage,
  };
};

export default usePageableSearchParams;
