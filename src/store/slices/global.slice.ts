import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppLang } from 'config/constants';
import type { ApiAppConfig } from 'types';
import i18n from 'i18n';

interface GlobalState extends Partial<ApiAppConfig> {
  lang: AppLang;
  appState: {
    isReady: boolean;
    isError: boolean;
  };
}

interface ChangeAppLangActionPayload {
  appLang: AppLang;
}

const initialState: GlobalState = {
  currency: undefined,
  lang: i18n.language as AppLang,
  appState: {
    isReady: false,
    isError: false,
  },
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    /* eslint-disable no-param-reassign */
    changeAppLang: (state, { payload: { appLang } }: PayloadAction<ChangeAppLangActionPayload>) => {
      state.lang = appLang;
      i18n.changeLanguage(appLang);
    },
    setGlobalState: (
      state,
      {
        payload: { currency, isReady, isError },
      }: PayloadAction<Partial<ApiAppConfig> & { isReady: boolean; isError: boolean }>,
    ) => {
      state.currency = currency;
      state.appState.isReady = isReady;
      state.appState.isError = isError;
    },
    /* eslint-enable */
  },
});

export const { actions } = globalSlice;
export default globalSlice.reducer;
