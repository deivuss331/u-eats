import { configureStore } from '@reduxjs/toolkit';

import globalReducer from './slices/global.slice';
import deliveryAddressReducer from './slices/deliveryAddress.slice';
import basketReducer from './slices/basket.slice';

const store = configureStore({
  reducer: {
    global: globalReducer,
    deliveryAddress: deliveryAddressReducer,
    basket: basketReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
