import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "../hooks/useTranslation";

const CardProyectos = ({ proyecto }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { t } = useTranslation()

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
        <Modal.Header className="colorFondoModal" closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="w-100 text-center text-light">
            {proyecto.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="colorFondoModal">
          <p className="text-center text-light">{proyecto.descripcion}</p>
          <div className="contenedorImagen">
            <img
              src={proyecto.pic}
              alt={proyecto.title}
              className="card-image img-fluid"
            />
          </div>
          <hr className="text-light"></hr>
          <div>
            <h5 className="text-center my-2 text-light">{t('technologiesUsed')}</h5>
            <ul className="listaSkills list-unstyled d-flex justify-content-evenly">
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
              className="d-block text-end text-light"
            >
              {t('viewProject')}
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardProyectos;
