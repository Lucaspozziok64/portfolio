const CardProyectos = ({ proyecto }) => {
  return (
    <div className="col">
      <a href={proyecto.proyectoUrl} target="_blank">
        <div className="contenedorImagen">
          <div>
            <h3 className="text-center">{proyecto.title}</h3>
          </div>
          <div className="container my-3">
            <img
              src={proyecto.pic}
              alt={proyecto.title}
              className="card-image img-fluid"
            />
          </div>
          <p className="container-fluid text-decoration-none">
            {proyecto.descripcion}
          </p>
        </div>
      </a>
    </div>
  );
};

export default CardProyectos;
