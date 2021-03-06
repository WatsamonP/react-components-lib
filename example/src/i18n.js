import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from './locales/en/translation.json';
import translationTH from './locales/th/translation.json';

// the translations
const resources = {
  en: { translation: translationEN },
  th: { translation: translationTH }
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    // lng: "th",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }, react: {
      wait: true,
    },
  });
i18n.changeLanguage("th");
export default i18n;