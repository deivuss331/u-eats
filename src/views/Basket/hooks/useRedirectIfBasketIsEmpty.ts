import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBasketHelper } from 'hooks';
import { appPaths } from 'routes';

const useRedirectIfBasketIsEmpty = () => {
  const navigate = useNavigate();
  const { basketItemsQty } = useBasketHelper();

  useEffect(() => {
    if (!basketItemsQty) {
      navigate(appPaths.root());
    }
  }, [basketItemsQty]);
};

export default useRedirectIfBasketIsEmpty;
