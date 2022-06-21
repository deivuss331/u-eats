import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetRestaurantData } from 'hooks/api';

function RestaurantReader(): JSX.Element {
  const { id = '' } = useParams();
  const { data } = useGetRestaurantData({ id });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <p>eee</p>;
}

export default RestaurantReader;
