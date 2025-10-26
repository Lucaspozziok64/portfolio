import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "../hooks/useTranslation";

const CardProyectos = ({ proyecto }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="col">
        <Button onClick={handleShow} variant="white" className="bg-gradient">
          <div className="contenedorVideo">
            <div>
              <h3 className="text-center">{proyecto.title}</h3>
            </div>
            <div className="container my-3">
              <img
                src={proyecto.pic}
                muted
                alt={proyecto.title}
                className="card-image img-fluid"
                preload="metadata"
                style={{ objectFit: "cover" }}
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
        className="colorFondo"
      >
        <Modal.Header className="colorFondoModal" closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="w-100 text-center text-light"
          >
            {proyecto.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="colorFondoModal">
          <p className="text-center text-light">{proyecto.descripcion}</p>
          <div
            className="contenedorVideoModal text-center"
            style={{ position: "relative" }}
          >
            {!videoLoaded && (
              <div
                className="spinner-border text-light"
                role="status"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  zIndex: 2,
                }}
              >
              </div>
            )}
            <video
              src={proyecto.video}
              muted
              loop
              controls={false}
              autoPlay
              onCanPlay={() => setVideoLoaded(true)}
              className="img-fluid"
            />
          </div>
          <hr className="text-light"></hr>
          <div>
            <h5 className="text-center my-2 text-light">
              {t("technologiesUsed")}
            </h5>
            <ul className="listaSkills list-unstyled d-flex flex-column align-items-center flex-md-row justify-content-md-evenly">
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
              {t("viewProject")}
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardProyectos;
