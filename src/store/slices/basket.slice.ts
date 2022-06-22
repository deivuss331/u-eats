import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
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
      state.order.push(restaurantDish);
    },
    removeOrderDish: (
      state,
      { payload }: PayloadAction<Pick<RestaurantDishInBasket, 'dishId' | 'restaurantId'>>,
    ) => {
      state.order = state.order.filter(
        ({ dishId, restaurantId }) => !(payload.dishId === dishId && payload.restaurantId === restaurantId),
      );
    },
    /* eslint-enable */
  },
});

export const { actions } = basketSlice;
export default basketSlice.reducer;
