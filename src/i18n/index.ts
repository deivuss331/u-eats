import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { ENVIRONMENTS, AppLang, DEFAULT_LANG } from 'config/constants';

import enTranslations from 'i18n/lang/en.json';
import plTranslations from 'i18n/lang/pl.json';

export const langs = {
  [AppLang.EN]: enTranslations,
  [AppLang.PL]: plTranslations,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: langs,
    supportedLngs: Object.values(AppLang),
    fallbackLng: DEFAULT_LANG,
    interpolation: {
      escapeValue: false,
    },
    saveMissing: true,
    missingKeyHandler: (ng, ns, key, fallbackValue) => {
      if (process.env.NODE_ENV !== ENVIRONMENTS.PRODUCTION) {
        console.warn(
          `Translation hasn't been found for key "${key}" (ng: "${ng}", ns: "${ns}", fallbackValue: "${fallbackValue}")`,
        );
      }
    },
  });

export default i18n;
