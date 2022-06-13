import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { DeliveryAddressFormPayload } from 'types';

const initialState: DeliveryAddressFormPayload = {};

export const deliveryAddress = createSlice({
  name: 'deliveryAddress',
  initialState,
  reducers: {
    /* eslint-disable no-param-reassign */
    setFormPayload: (state, { payload }: PayloadAction<Partial<DeliveryAddressFormPayload>>) => {
      Object.entries(payload).forEach(([key, value]) => {
        state[key as keyof DeliveryAddressFormPayload] = value;
      });
    },
    /* eslint-enable */
  },
});

export const { actions } = deliveryAddress;
export default deliveryAddress.reducer;
