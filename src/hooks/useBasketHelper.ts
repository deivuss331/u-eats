import { getHumanFriendlyPrice } from 'utils/apiPriceUtils';
import useAppSelector from './useAppSelector';

const useBasketHelper = () => {
  const {
    basket: { order },
  } = useAppSelector((state) => state);

  const totalValueInCents = order.length;

  return {
    totalValue: {
      cents: totalValueInCents,
      humanFriendly: getHumanFriendlyPrice(totalValueInCents),
    },
  };
};

export default useBasketHelper;
