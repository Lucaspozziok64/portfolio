import { useLanguage } from "../context/LanguajeContext";
import enTranslations from "../translation/en.json"
import esTranslations from "../translation/es.json"

const translations = {
  en: enTranslations,
  es: esTranslations,
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      value = value[k];
    }

    return value || key; // Si no encuentra la traducción, devuelve la key
  };

  return { t, language };
};
