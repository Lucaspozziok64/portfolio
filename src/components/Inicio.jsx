import ImagenPerfil from "../assets/ImagenPerfil.jpeg";
import blogrecetas from "../assets/blogRecetas.png";
import ListaProyectos from "./ComponentsInicio/listaProyectos";
import xtream from "../assets/xtream.png";
import noticiasApp from "../assets/noticiasApp.png";
import mates from "../assets/meates.png";
import Formulario from "./ComponentsInicio/Fomulario";
import MySkill from "./ComponentsInicio/MySkill";

const Inicio = () => {
  const proyectos = [
    {
      id: 1,
      title: "Prescription Management System",
      pic: blogrecetas,
      proyectoUrl: "https://recetasespeciales.netlify.app/",
      descripcion:
        "Helps users view or copy forgotten or unknown recipes, just by creating an account you have full access to view, read, create, delete",
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
      title: "Web Movies",
      pic: xtream,
      proyectoUrl: "https://moviesxtream.netlify.app/",
      tecnologias: [
        "https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat",
        "https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat",
        "https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat",
        "https://img.shields.io/badge/-API-FF6C37?logo=api&logoColor=white&style=flat",
      ],
    },
    {
      id: 3,
      title: "leaked news",
      pic: noticiasApp,
      proyectoUrl: "https://noticiasfiltradas.netlify.app/",
      tecnologias: [
        "https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat",
        "https://img.shields.io/badge/-Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=flat",
        "https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat",
        "https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat",
      ],
    },
    {
      id: 4,
      title: "Mates Ecommerce Website",
      pic: mates,
      proyectoUrl: "https://mateandoshop.netlify.app/",
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
      <section>
        <h1 className="text-center text-light mb-3 titulo">
          Hey, I'am Lucas Figueroa👋
        </h1>
        <div className="d-flex justify-content-center">
          <div>
            <img
              className="imagenPerfil"
              src={ImagenPerfil}
              alt="Imagen de Lucas Figueroa"
            />
          </div>
        </div>
        <div className="container text-light my-3">
          <h6 className="subtitulo">
            I'm a Full Stack Developer specialized in the MERN stack (MongoDB,
            Express, React, Node.js). I'm passionate about building complete web
            applications—from robust backends to intuitive and dynamic
            interfaces. I also have experience with modern project management
            and deployment tools.
          </h6>
        </div>
        <div className="d-flex justify-content-center my-5">
          <a
            href="/LucasFigueroaCV-min.pdf"
            target="_blank"
            className="botonDescargar"
          >
            📥 Download CV
          </a>
        </div>
      </section>
      <section className="container my-5">
        <article className="container bg-gradient rounded-5">
          <h2 className="text-info text-center">
            ¡Check out my featured projects!!
          </h2>
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
    </>
  );
};

export default Inicio;
