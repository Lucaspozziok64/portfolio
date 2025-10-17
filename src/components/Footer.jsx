import { useTranslation } from "./hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="bg-gradient text-light text-center p-3">
      <h4 className="mb-0">{t('footerTitle')}</h4>
      <div>
        <a
          href="https://linkedin.com/in/lucas-figueroa-579b0b30b"
          target="_blank"
          className="text-decoration-none text-info"
        >
          <i className="bi bi-linkedin fs-1"></i>
        </a>
        <a
          href="https://github.com/Lucaspozziok64"
          target="_blank"
          className="text-decoration-none text-dark"
        >
          <i className="bi bi-github text-light mx-2 fs-1"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
