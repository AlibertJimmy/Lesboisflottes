import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

/*
const getCurrentHost =
  process.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://main.d1quylqhl0yj4f.amplifyapp.com/";
*/

    const getCurrentHost =
    import.meta.env.MODE === "development"
      ? "http://localhost:3000"
      : "https://main.d2litbm81rf027.amplifyapp.com/";

console.log(`process.env.MODE : ${process.env.MODE}`)
console.log(`getCurrentHost : ${getCurrentHost}`)

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "fr",
    lng: "fr",
    interpolation: {
      escapeValue: false,
    },
    backend: {
        loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
        //loadPath: `http://localhost:3000/i18n/{{lng}}.json`,
    },
  });

export default i18n;
