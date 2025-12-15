import imagenPerfil from "../assets/imagenPerfil.jpeg";
import noticiasApp from "../assets/noticiasApp.png";
import imagenRecetas from "../assets/blogRecetas.png";
import imagenXtream from "../assets/xtream.png";
import Formulario from "./ComponentsInicio/Fomulario";
import MySkill from "./ComponentsInicio/MySkill";
import { useTranslation } from "./hooks/useTranslation";
import LanguageSwitcher from "./LanguajeSwhitcher";
import ListaProyectos from "./ComponentsInicio/ListaProyectos";
import WhatsAppButton from "./ComponentsInicio/WhatsAppButton";
import MyCertificates from "./ComponentsInicio/MyCertificates";

const Inicio = () => {
  const { t, getCV } = useTranslation();
  const proyectos = [
    {
      id: 1,
      title: t("projects.project1.title"),
      pic: "https://res.cloudinary.com/dduqetzqk/image/upload/v1765423688/Captura_de_pantalla_2025-10-06_151449_myl4cb.png",
      video:
        "https://res.cloudinary.com/dduqetzqk/video/upload/v1765467191/grabacion-de-pantalla-2025-12-11-122352_4tHcAiIz_ws4wby.mp4",
      proyectoUrl: "https://tiendalannister.netlify.app/",
      descripcion: t("projects.project1.description"),
      tecnologias: [
        "https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat",
        "https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=flat",
        "https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=flat",
        "https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat",
        "https://img.shields.io/badge/-Mercadopago-FFE600?logo=mercadopago&logoColor=white&style=flat",
      ],
    },
    {
      id: 2,
      title: t("projects.project2.title"),
      pic: imagenRecetas,
      video:
        "https://res.cloudinary.com/dduqetzqk/video/upload/v1761448303/blogRecetas_fepsop.mp4",
      proyectoUrl: "https://recetasespeciales.netlify.app/",
      descripcion: t("projects.project2.description"),
      tecnologias: [
        "https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat",
        "https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=flat",
        "https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat",
        "https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=flat",
        "https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat",
      ],
    },
    {
      id: 3,
      title: t("projects.project3.title"),
      pic: imagenXtream,
      video:
        "https://res.cloudinary.com/dduqetzqk/video/upload/v1761448295/xtream_imuoly.mp4",
      proyectoUrl: "https://moviesxtream.netlify.app/",
      descripcion: t("projects.project3.description"),
      tecnologias: [
        "https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat",
        "https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat",
        "https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat",
        "https://img.shields.io/badge/-API-FF6C37?logo=api&logoColor=white&style=flat",
      ],
    },
    {
      id: 4,
      title: t("projects.project4.title"),
      pic: noticiasApp,
      video:
        "https://res.cloudinary.com/dduqetzqk/video/upload/v1761448169/Grabaci%C3%B3n_de_pantalla_2025-10-25_214137_k1avem.mp4",
      proyectoUrl: "https://noticiasfiltradas.netlify.app/",
      descripcion: t("projects.project3.description"),
      tecnologias: [
        "https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat",
        "https://img.shields.io/badge/-Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=flat",
        "https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat",
        "https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat",
      ],
    },
  ];
  const titulos = [
    {
      id: 1,
      title: t("titulos.titulo1.title"),
      pic: "https://certs.rollingcodeschool.com/bHVrYWZpZ3Vlcm9hNjRAZ21haWwuY29t-1763515093630-1.png",
    },
    {
      id: 2,
      title: t("titulos.titulo2.title"),
      pic: "https://certs.rollingcodeschool.com/bHVrYWZpZ3Vlcm9hNjRAZ21haWwuY29t-1763415531263-1.png",
    },
    {
      id: 3,
      title: t("titulos.titulo3.title"),
      pic: "https://certs.rollingcodeschool.com/bHVrYWZpZ3Vlcm9hNjRAZ21haWwuY29t-1763514877437-1.png",
    },
    {
      id: 4,
      title: t("titulos.titulo4.title"),
      pic: "https://certs.rollingcodeschool.com//bHVrYWZpZ3Vlcm9hNjRAZ21haWwuY29t-1735969131707-1.png",
    },
  ];
  return (
    <>
      <LanguageSwitcher />
      <section>
        <h1 className="text-center text-light my-3 mb-3 titulo">
          {t("welcome")}
        </h1>
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
          <h5 className="bebas">{t("description")}</h5>
        </div>
        <div className="d-flex justify-content-center my-5">
          <a href={getCV()} target="_blank" className="botonDescargar titulo">
            {t("downloadCV")}
          </a>
        </div>
      </section>
      <section className="container my-5">
        <h2 className="text-info text-center bebas">{t("featuredProjects")}</h2>
        <article className="container bg-gradient rounded-5">
          <ListaProyectos proyectos={proyectos} />
        </article>
      </section>
      <section className="container">
        <article>
          <MySkill />
        </article>
      </section>
      <section className="container my-5">
        <h2 className="text-center text-info my-2 bebas">{t("My Certificates")}</h2>
        <MyCertificates titulos={titulos} />
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
