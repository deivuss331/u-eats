import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type {
  CustomerDetailsWithDeliveryAddress,
  CustomerDetailsFormPayload,
  DeliveryAddressFormPayload,
} from 'types';

const initialState: CustomerDetailsWithDeliveryAddress = {
  firstName: '',
  lastName: '',
  email: '',
  deliveryAddress: {
    addressLine: '',
    locality: '',
    postalCode: '',
    countryRegion: '',
  },
};

export const customerDetails = createSlice({
  name: 'customerDetails',
  initialState,
  reducers: {
    /* eslint-disable no-param-reassign */
    setCustomerDetails: (state, { payload }: PayloadAction<Partial<CustomerDetailsFormPayload>>) => {
      Object.entries(payload).forEach(([key, value]) => {
        state[key as keyof CustomerDetailsFormPayload] = value;
      });
    },
    setDeliveryAddress: (state, { payload }: PayloadAction<Partial<DeliveryAddressFormPayload>>) => {
      Object.entries(payload).forEach(([key, value]) => {
        state.deliveryAddress[key as keyof DeliveryAddressFormPayload] = value;
      });
    },
    /* eslint-enable */
  },
});

export const { actions } = customerDetails;
export default customerDetails.reducer;
