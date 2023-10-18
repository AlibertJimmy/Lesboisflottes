import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const getCurrentHost =
  process.env.MODE === "development"
    ? "http://localhost:3000"
    : "LINK TO PROD";

console.log(`getCurrentHost : ${getCurrentHost}`)

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "fr",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
        //loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
        loadPath: `http://localhost:3003/i18n/{{lng}}.json`,
    },
  });

export default i18n;
