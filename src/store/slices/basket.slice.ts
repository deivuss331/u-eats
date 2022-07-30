import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import i18n from 'i18n';
import type { RestaurantDishInBasket } from 'types';
import { SESSION_STORAGE_KEYS } from 'config/constants';
import createSessionStorageController from 'utils/createSessionStorageController';

type BasketOrder = RestaurantDishInBasket[];

const orderSessionStorage = createSessionStorageController<BasketOrder>(SESSION_STORAGE_KEYS.ITEMS_IN_BASKET);

interface BasketState {
  order: BasketOrder;
}

const initialState: BasketState = {
  order: orderSessionStorage.getValue() || [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    /* eslint-disable no-param-reassign */
    addOrderDish: (state, { payload: restaurantDish }: PayloadAction<RestaurantDishInBasket>) => {
      const isAlreadyInBasket: boolean = Boolean(state.order.find(({ id }) => id === restaurantDish.id));

      if (isAlreadyInBasket) {
        toast.error(i18n.t('Item already in basket'));
        return;
      }

      state.order.push(restaurantDish);
      orderSessionStorage.setValue(state.order);
    },
    removeOrderDish: (state, { payload }: PayloadAction<RestaurantDishInBasket>) => {
      const filteredDishes = (arr: BasketOrder) => arr.filter(({ id }) => !(payload.id === id));

      state.order = filteredDishes(state.order);
      orderSessionStorage.setValue(state.order);
    },
    clearBasket: (state) => {
      state.order = [];
      orderSessionStorage.setValue(state.order);
    },
    /* eslint-enable */
  },
});

export const { actions } = basketSlice;
export default basketSlice.reducer;
