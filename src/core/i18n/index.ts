import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";
import id from "./locales/id.json";
import en from "./locales/en.json";

const resources = {
    id: { translation: id },
    en: { translation: en },
};

const deviceLanguage = getLocales()[0]?.languageCode ?? "id";
const initialLanguage = deviceLanguage in resources ? deviceLanguage : "id";

i18n.use(initReactI18next).init({
    resources,
    lng: initialLanguage,
    fallbackLng: "id",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;