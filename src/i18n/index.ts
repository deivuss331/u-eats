import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ENVIRONMENTS, AppLang } from 'config/constants';

export const langs = {
  [AppLang.EN]: require('i18n/lang/en.json').default,
};

i18n.use(initReactI18next).init({
  resources: langs,
  lng: AppLang.EN,
  fallbackLng: AppLang.EN,
  nsSeparator: false,
  interpolation: {
    escapeValue: false,
  },
  saveMissing: true,
  missingKeyHandler: (ng, ns, key, fallbackValue) => {
    if (process.env.NODE_ENV !== ENVIRONMENTS.PRODUCTION) {
      console.warn(
        `Found missing translation for key "${key}" (ng: "${ng}", ns: "${ns}", fallbackValue: "${fallbackValue}")`,
      );
    }
  },
});

export const defaultLang = langs[AppLang.EN];
export default i18n;
