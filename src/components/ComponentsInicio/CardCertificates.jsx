import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const CardCertificates = ({ titulo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="col">
        <Button onClick={handleShow} variant="white" className="bg-gradient">
          <div className="contenedorVideo">
            <div>
              <h3 className="text-center bebas">{titulo.title}</h3>
            </div>
            <div className="container my-3">
              <img
                src={titulo.pic}
                className="card-image img-fluid"
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
        centered
        className="colorFondo"
        backdrop="static"
      >
        <Modal.Header className="colorFondoModal" closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="w-100 text-center text-light titulo"
          >
            {titulo.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="colorFondoModal">
          <div>
            <img
              src={titulo.pic}
              className="card-image img-fluid"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardCertificates;
