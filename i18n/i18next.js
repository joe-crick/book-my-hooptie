import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resources from "i18n/locales/index";

i18n.use(LanguageDetector).init({
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false
  },
  lng: "en",
  resources,
  react: {
    wait: false,
    bindI18n: "languageChanged loaded",
    bindStore: "added removed",
    nsMode: "default"
  }
});

export default i18n;
