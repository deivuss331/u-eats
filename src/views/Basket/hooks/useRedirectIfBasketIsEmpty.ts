import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBasketHelper } from 'hooks';
import { appPaths } from 'routes';

const useRedirectIfBasketIsEmpty = () => {
  const navigate = useNavigate();
  const isMountedRef = useRef<boolean>(true);
  const { basketItemsQty } = useBasketHelper();

  useEffect(() => {
    if (isMountedRef.current && !basketItemsQty) {
      navigate(appPaths.root());
    }

    return () => {
      isMountedRef.current = false;
    };
  }, [basketItemsQty]);
};

export default useRedirectIfBasketIsEmpty;
