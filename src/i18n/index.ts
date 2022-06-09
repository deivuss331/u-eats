import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {AppLang} from 'types/enums';

export const langs = {
  [AppLang.EN]: require('i18n/lang/en.json').default,
};

i18n.use(initReactI18next).init({
  resources: langs,
  lng: AppLang.EN,
  fallbackLng: AppLang.EN,
  interpolation: {
    escapeValue: false,
  },
});

export const defaultLang = langs[AppLang.EN];
export default i18n;
