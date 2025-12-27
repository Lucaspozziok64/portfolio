import { useLanguage } from "../context/LanguajeContext";
import enTranslations from "../translation/en.json";
import esTranslations from "../translation/es.json";

const translations = {
  en: enTranslations,
  es: esTranslations,
};

const cvFiles = {
  en: "/LucasFigueroaCVEn.pdf",
  es: "/LucasFigueroaCVEs.pdf",
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      value = value[k];
    }

    return value || key;
  };
  
  const getCV = () => {
    return cvFiles[language];
  };

  return { t, language, getCV };
};
