import { LanguagesData } from "../models/languagesData";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";

const useTranslate = () => {
  const languages: Array<LanguagesData> = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "fa",
      name: "فارسی",
      dir: "rtl",
      country_code: "ir",
    },
  ];

  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next");
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  useEffect(() => {
    document.body.dir = currentLanguage?.dir || "ltr";
  }, [currentLanguage, t]);

  return { t };
};

export default useTranslate;
