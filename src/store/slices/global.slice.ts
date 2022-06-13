import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppLang } from 'config/constants';
import i18n from 'i18n';

interface GlobalState {
  appLang: AppLang;
}

interface ChangeAppLangActionPayload {
  appLang: AppLang;
}

const initialState: GlobalState = {
  appLang: i18n.language as AppLang,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    /* eslint-disable no-param-reassign */
    changeAppLang: (state, { payload: { appLang } }: PayloadAction<ChangeAppLangActionPayload>) => {
      state.appLang = appLang;
      i18n.changeLanguage(appLang);
    },
    /* eslint-enable */
  },
});

export const { actions } = globalSlice;
export default globalSlice.reducer;
