import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import enTranslations from './i18n/en.json';
// import csTranslations from './i18n/cs.json';
// import ukTranslations from './i18n/uk.json';

const enTranslations = require('./i18n/en.json');
const csTranslations = require('./i18n/cs.json');
const ukTranslations = require('./i18n/uk.json');

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      cs: { translation: csTranslations },
      uk: { translation: ukTranslations },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;