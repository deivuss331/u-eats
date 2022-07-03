import Decimal from 'decimal.js-light';
import { getHumanFriendlyPrice } from 'utils/apiPriceUtils';
import useAppSelector from './useAppSelector';

const useBasketHelper = () => {
  const {
    basket: { order },
  } = useAppSelector((state) => state);

  const totalValueInCents = order.reduce<number>(
    (totalVal, { pricePerItem, quantity }) =>
      new Decimal(pricePerItem).times(quantity).add(totalVal).toNumber(),
    0,
  );

  return {
    basketItemsQty: order.length,
    totalValue: {
      cents: totalValueInCents,
      humanFriendly: getHumanFriendlyPrice(totalValueInCents),
    },
  };
};

export default useBasketHelper;
