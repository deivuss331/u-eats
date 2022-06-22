import { actions } from 'store/slices/basket.slice';
import useAppSelector from './useAppSelector';
import useAppDispatch from './useAppDispatch';

const useBasketController = () => {
  const dispatch = useAppDispatch();
  const { basket } = useAppSelector((state) => state);

  const addOrderDish = (param: Parameters<typeof actions.addOrderDish>[0]) =>
    dispatch(actions.addOrderDish(param));

  const removeOrderDish = (param: Parameters<typeof actions.removeOrderDish>[0]) =>
    dispatch(actions.removeOrderDish(param));

  return {
    state: basket,
    addOrderDish,
    removeOrderDish,
  };
};

export default useBasketController;
