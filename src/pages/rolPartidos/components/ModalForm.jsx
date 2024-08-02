// src/components/ModalForm.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalForm = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Partido</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formDate">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group controlId="formTime">
            <Form.Label>Hora</Form.Label>
            <Form.Control type="time" />
          </Form.Group>
          <Form.Group controlId="formLocation">
            <Form.Label>Lugar</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el lugar" />
          </Form.Group>
          <Form.Group controlId="formCourt">
            <Form.Label>Cancha</Form.Label>
            <Form.Control type="text" placeholder="Ingrese la cancha" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary">
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
