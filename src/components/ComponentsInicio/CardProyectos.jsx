import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const CardProyectos = ({ proyecto }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="col">
        <Button onClick={handleShow} variant="white" className="bg-gradient">
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
          </div>
        </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="text-end" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {proyecto.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{proyecto.descripcion}</p>
          <div className="contenedorImagen border border-black">
            <img
              src={proyecto.pic}
              alt={proyecto.title}
              className="card-image img-fluid"
            />
          </div>
          <hr></hr>
          <div>
            <h5 className="text-center my-2">Tecnologias empleadas:</h5>
            <ul className="list-unstyled d-flex justify-content-evenly">
              {proyecto.tecnologias.map((tecnologia, index) => (
                <li key={index} className="my-1">
                  <img
                    src={tecnologia}
                    alt={`Tecnología ${index + 1}`}
                    className="imagenTecnologia"
                  />
                </li>
              ))}
            </ul>
            <a
              href={proyecto.proyectoUrl}
              target="_blank"
              className="d-block text-end text-dark"
            >
              Ver proyecto
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardProyectos;
