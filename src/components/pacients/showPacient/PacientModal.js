import React from "react";
import Modal from "react-bootstrap/Modal";

export function PacientModal({ openModal, closeModal }) {
  return (
    <Modal size="lg" show={openModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title className="titleModalDetail col-md-6 col-xs-12">
          {" "}
          Informacion del Paciente
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      </Modal.Body>
    </Modal>
  );
}
