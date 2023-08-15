import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.css";
import "./css/general.css"
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs : ['ar' , 'de' , 'en' ,  'fa' ],
    fallbackLng: "en",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "path",
        "subdomain",
      ],
      caches : ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',

    },
  });



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
