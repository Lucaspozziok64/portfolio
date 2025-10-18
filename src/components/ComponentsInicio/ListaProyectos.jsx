import CardProyectos from "./CardProyectos";

const ListaProyectos = ({ proyectos }) => {
  return (
    <>
      <div className="container row row-cols-1 row-cols-md-2 g-4 my-2">
        {proyectos.map((proyecto) => (
          <CardProyectos key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </>
  );
};

export default ListaProyectos;
