import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import en from "./assets/locales/en/en.json"
import da from "./assets/locales/da/da.json"

const resources = {
  en: {
    translation: en
  },
	da: {
		translation: da
	}
};

i18n.use(LanguageDetector).use(initReactI18next).init({
	resources: resources,
	fallbackLng: "en",
	debug: true,
	detection: {
		order: ['queryString', 'cookie'],
		caches: ['cookie']
	},
	interpolation: {
		escapeValue: false
	}
})