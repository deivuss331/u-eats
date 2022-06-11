// import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import type { BrowseRestaurantsSearchParams } from 'types';
// import { appPaths } from 'routes';

function BrowseRestaurants(): JSX.Element {
  const { search } = useLocation();
  // const navigate = useNavigate();

  const { locality, countryRegion, query }: BrowseRestaurantsSearchParams = queryString.parse(search);

  console.log(locality, countryRegion, query);

  // useEffect(() => {
  //   if (!locality || !countryRegion) {
  //     navigate(appPaths.root());
  //   }
  // }, [locality, countryRegion]);

  return <p>eee</p>;
}

export default BrowseRestaurants;
