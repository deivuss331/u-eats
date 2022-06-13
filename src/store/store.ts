import { configureStore } from '@reduxjs/toolkit';

import deliveryAddressReducer from './slices/deliveryAddress.slice';

const store = configureStore({
  reducer: {
    deliveryAddress: deliveryAddressReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
