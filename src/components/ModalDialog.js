import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalDialog({ isShow, initModal, id, title, handleDelete }) {
  return (
    <>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Delete {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the recipe?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={(e) => handleDelete(id)}>
            Yes
          </Button>
          <Button variant="dark" onClick={initModal}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDialog;
