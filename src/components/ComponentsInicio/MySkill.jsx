import React from "react";
import { useTranslation } from "../hooks/useTranslation.js";
import LanguageSwitcher from "../LanguajeSwhitcher";

const MySkill = () => {
  const { t } = useTranslation()
  return (
    <>
    <LanguageSwitcher />
      <div className="container my-5 bg-gradient rounded-5">
        <h2 className="text-info text-center subtitulo my-5">{t('skillsTitle')}</h2>
        <div className="container">
          <div className="row justify-content-md-between gy-sm-3 text-light">
            <article className="col-12 col-md-12 col-lg-3 text-center text-md-center">
              <h4 className="bebas">📋 Project Management</h4>
              <ul className="list-unstyled">
                <li>
                  <img
                    src="https://img.shields.io/badge/-Taiga-13C4A3?logo=taiga&logoColor=white&style=flat"
                    alt="Imagen de Taiga"
                  />
                </li>
                <li>
                  <img
                    src="https://img.shields.io/badge/-Trello-0052CC?logo=trello&logoColor=white&style=flat"
                    alt="Imagen de Trello"
                  />
                </li>
                <li>
                  <img
                    src="https://img.shields.io/badge/-Jira-0052CC?logo=jira&logoColor=white&style=flat"
                    alt="Imagen de Jira"
                  />
                </li>
              </ul>
            </article>
            <article className="col-12 col-md-3 col-lg-3 text-center text-md-start gy-3">
              <h4 className="bebas">💻{t('skills.frontend')}</h4>
              <ul className="list-unstyled">
                <li>
                  <img
                    src="https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=flat"
                    alt="Imagen de Html5"
                  />
                </li>
                <li>
                  <img
                    src="https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat"
                    alt="Imagen de Css3"
                  />
                </li>
                <li>
                  <img
                    src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat"
                    alt="Imagen de JavaScript"
                  />
                </li>
                <li>
                  <img
                    src="https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat"
                    alt="Imagen de React"
                  />
                </li>
                <li>
                  <img
                    src="https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat"
                    alt="Imagen de React + Vite"
                  />
                </li>
                <li>
                  <img
                    src="https://img.shields.io/badge/-Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=flat"
                    alt="Imagen de Bootstrap"
                  />
                </li>
                <li>
                  <img
                    src="https://img.shields.io/badge/-React--Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=flat"
                    alt="Imagen de React Bootstrap"
                  />
                </li>
              </ul>
            </article>
            <article className="col-12 col-md-3 col-lg-3 text-center text-md-start gy-3">
              <h4 className="bebas">🧠 {t('skills.backend')}</h4>
              <ul className="list-unstyled">
                <li>
                  <img
                    src="https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=flat"
                    alt="Imagen de NodeJs"
                  />
                </li>
                <li>
                  <img
                    src="https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=flat"
                    alt="Imagen de Express"
                  />
                </li>
                <li>
                  <img
                    src="https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=fla"
                    alt="Imagen de MongoDB"
                  />
                </li>
                <li>
                  <img
                    src="https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white&style=flat"
                    alt="Imagen de MySql"
                  />
                </li>
                <li>
                  <img
                    src="https://img.shields.io/badge/-SQL%20Server-CC2927?logo=microsoft-sql-server&logoColor=white&style=flat"
                    alt="Imagen de SqlServer"
                  />
                </li>
                <li>
                  <img
                    src="https://img.shields.io/badge/-git-E34F26?logo=git&logoColor=white&style=flat"
                    alt="Imagen de git"
                  />
                </li>
              </ul>
            </article>
            <article className="col-12 col-md-3 col-lg-3 text-center text-md-start gy-3">
              <h4 className="bebas">🗓️ Agile methodologies:</h4>
              <div className="d-flex flex-column bebas">
                <strong>**Daily stand-ups**</strong>
                <strong>**Sprint planning**</strong>
                <strong>**Retrospectives**</strong>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkill;
