// src/components/ModalForm.js
import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Cards } from "./cards";
import CarouselCards from "./CarouselCards";
import { useNavigate } from "react-router-dom";

const teams = [
  { name: "Club San Martin", logo: "/club1.webp" },
  { name: "Club Olympic", logo: "/club2.jpg" },
  { name: "Club Vipers", logo: "/club3.jpg" },
  { name: "Club Fenix", logo: "/club4.jpg" },
  { name: "Club Albert Einstein", logo: "/equipo2.png" },
  { name: "Club Don Bosco", logo: "/equipo1.png" },
  { name: "Club Panteras", logo: "/club1.webp" },
  { name: "Club Vinto", logo: "/equipo3.png" },
];

const ModalForm = ({ show, handleClose, name, logo }) => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (team) => {
    setSelectedTeam(team);
  };

  const handleSave = () => {
    if (selectedTeam) {
      navigate('/verroldepartidos', {
        state: {
          name1: name,
          logo1: logo,
          name2: selectedTeam.name,
          logo2: selectedTeam.logo
        }
      });
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="md">
      <Modal.Header closeButton>
        <Modal.Title>Agregar Partido para {name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="align-items-start">
          <Col className="">
              <Cards name={name} logo={logo} />
          </Col>
          <Col>
            <CarouselCards teams={teams} onSelect={handleSelect} />
          </Col>
        </Row>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="formDate">
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formTime">
                <Form.Label>Hora</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Col>
          </Row>
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
        <Button variant="primary" onClick={handleSave}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
