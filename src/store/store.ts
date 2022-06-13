import { configureStore } from '@reduxjs/toolkit';

import globalReducer from './slices/global.slice';
import deliveryAddressReducer from './slices/deliveryAddress.slice';

const store = configureStore({
  reducer: {
    global: globalReducer,
    deliveryAddress: deliveryAddressReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
