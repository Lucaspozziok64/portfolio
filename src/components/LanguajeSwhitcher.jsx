import { useLanguage } from "./context/LanguajeContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="btn btn-outline-light btn-sm"
      style={{
        position: "fixed",
        top: "80px",
        right: "15px",
        zIndex: 1000,
      }}
    >
      {language === "en" ? "ES" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
