import imagenPerfil from "../assets/imagenPerfil.jpeg"
import blogRecetas from "../assets/blogRecetas.png";
import xtream from "../assets/xtream.png";
import noticiasApp from "../assets/noticiasApp.png";
import mates from "../assets/meates.png";
import imagenRecetas from "../assets/blogRecetas.png"
import imagenXtream from "../assets/xtream.png"
import Formulario from "./ComponentsInicio/Fomulario";
import MySkill from "./ComponentsInicio/MySkill";
import { useTranslation } from "./hooks/useTranslation";
import LanguageSwitcher from "./LanguajeSwhitcher";
import ListaProyectos from "./ComponentsInicio/ListaProyectos"
import WhatsAppButton from "./ComponentsInicio/WhatsAppButton";

const Inicio = () => {
  const { t, getCV } = useTranslation();
  const proyectos = [
    {
      id: 1,
      title: t('projects.project1.title'),
      pic: imagenRecetas,
      video: "https://res.cloudinary.com/dduqetzqk/video/upload/v1761448303/blogRecetas_fepsop.mp4",
      proyectoUrl: "https://recetasespeciales.netlify.app/",
      descripcion: t('projects.project1.description'),
      tecnologias: [
        "https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat",
        "https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=flat",
        "https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat",
        "https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=flat",
        "https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat",
      ],
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      pic: imagenXtream,
      video: "https://res.cloudinary.com/dduqetzqk/video/upload/v1761448295/xtream_imuoly.mp4",
      proyectoUrl: "https://moviesxtream.netlify.app/",
      descripcion:
        t('projects.project2.description'),
      tecnologias: [
        "https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat",
        "https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat",
        "https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat",
        "https://img.shields.io/badge/-API-FF6C37?logo=api&logoColor=white&style=flat",
      ],
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      pic: noticiasApp,
      video: "https://res.cloudinary.com/dduqetzqk/video/upload/v1761448169/Grabaci%C3%B3n_de_pantalla_2025-10-25_214137_k1avem.mp4",
      proyectoUrl: "https://noticiasfiltradas.netlify.app/",
      descripcion: t('projects.project3.description'),
      tecnologias: [
        "https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat",
        "https://img.shields.io/badge/-Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=flat",
        "https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat",
        "https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat",
      ],
    },
    {
      id: 4,
      title: t('projects.project4.title'),
      pic: mates,
      video: "https://res.cloudinary.com/dduqetzqk/video/upload/v1761447976/Grabaci%C3%B3n_de_pantalla_2025-10-25_212145_t7patr.mp4",
      proyectoUrl: "https://mateandoshop.netlify.app/",
      descripcion:
        t('projects.project4.description'),
      tecnologias: [
        "https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat",
        "https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=flat",
        "https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat",
        "https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat",
        "https://img.shields.io/badge/-Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=flat",
      ],
    },
  ];
  return (
    <>
      <LanguageSwitcher />
      <section>
        <h1 className="text-center text-light mb-3 titulo">{t("welcome")}</h1>
        <div className="d-flex justify-content-center">
          <div>
            <img
              className="imagenPerfil"
              src={imagenPerfil}
              alt="Imagen de Lucas Figueroa"
            />
          </div>
        </div>
        <div className="container text-light my-3">
          <h6 className="subtitulo">{t("description")}</h6>
        </div>
        <div className="d-flex justify-content-center my-5">
          <a
            href={getCV()}
            target="_blank"
            className="botonDescargar"
          >
            {t("downloadCV")}
          </a>
        </div>
      </section>
      <section className="container my-5">
        <article className="container bg-gradient rounded-5">
          <h2 className="text-info text-center">{t("featuredProjects")}</h2>
          <ListaProyectos proyectos={proyectos} />
        </article>
      </section>
      <section className="container">
        <article>
          <MySkill />
        </article>
      </section>
      <section className="container my-5">
        <hr className="text-light" />
        <article>
          <Formulario />
        </article>
      </section>
      <WhatsAppButton />
    </>
  );
};

export default Inicio;
