import { useLanguage } from "./context/LanguajeContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="btn btn-outline-light btn-sm"
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      {language === "en" ? "ES" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
