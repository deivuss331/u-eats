import { configureStore } from '@reduxjs/toolkit';

import appReducer from './slices/app.slice';
import customerDetailsReducer from './slices/customerDetails.slice';
import basketReducer from './slices/basket.slice';

const store = configureStore({
  reducer: {
    app: appReducer,
    customerDetails: customerDetailsReducer,
    basket: basketReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
