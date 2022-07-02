import { configureStore } from '@reduxjs/toolkit';

import globalReducer from './slices/global.slice';
import customerDetailsReducer from './slices/customerDetails.slice';
import basketReducer from './slices/basket.slice';

const store = configureStore({
  reducer: {
    global: globalReducer,
    customerDetails: customerDetailsReducer,
    basket: basketReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
