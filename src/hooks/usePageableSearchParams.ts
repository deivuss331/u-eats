import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SEARCH_PARAMS_PAGE_KEY: string = 'page';

interface Props {
  defaultPage?: number;
}

const usePageableSearchParams = ({ defaultPage = 0 }: Props | undefined = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get(SEARCH_PARAMS_PAGE_KEY)) || defaultPage;
  const validPage = Number.isNaN(page) ? defaultPage : page;

  useEffect(() => {
    searchParams.set(SEARCH_PARAMS_PAGE_KEY, validPage.toString());

    setSearchParams(searchParams);
  }, [searchParams]);

  return {
    page: validPage,
  };
};

export default usePageableSearchParams;
