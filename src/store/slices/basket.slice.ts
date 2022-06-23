import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import i18n from 'i18n';
import type { RestaurantDishInBasket } from 'types';

interface BasketState {
  order: RestaurantDishInBasket[];
}

const initialState: BasketState = {
  order: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    /* eslint-disable no-param-reassign */
    addOrderDish: (state, { payload: restaurantDish }: PayloadAction<RestaurantDishInBasket>) => {
      const isAlreadyInBasket: boolean = Boolean(
        state.order.find(({ dishId }) => dishId === restaurantDish.dishId),
      );

      if (isAlreadyInBasket) {
        toast.error(i18n.t('Item already in basket'));
        return;
      }

      state.order.push(restaurantDish);
    },
    removeOrderDish: (
      state,
      { payload }: PayloadAction<Pick<RestaurantDishInBasket, 'dishId' | 'restaurantId'>>,
    ) => {
      state.order = state.order.filter(({ dishId }) => !(payload.dishId === dishId));
    },
    /* eslint-enable */
  },
});

export const { actions } = basketSlice;
export default basketSlice.reducer;
