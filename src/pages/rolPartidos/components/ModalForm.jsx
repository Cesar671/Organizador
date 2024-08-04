import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Cards } from "./cards";
import CarouselCards from "./CarouselCards";
import { useNavigate } from "react-router-dom";
import teamsData from "./teams.json";

const checkIfClickable = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(false);
    }, 1000);
  });
};

const ModalForm = ({ show, handleClose, name, logo }) => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teams, setTeams] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [court, setCourt] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showMainModal, setShowMainModal] = useState(show);
  const navigate = useNavigate();

  useEffect(() => {
    setTeams(teamsData);
  }, []);

  useEffect(() => {
    setShowMainModal(show);
  }, [show]);

  const handleSelect = (team) => {
    setSelectedTeam(team);
  };

  const handleSave = () => {
    const errors = [];
    if (!selectedTeam) errors.push("Seleccione un equipo.");
    if (!date) errors.push("Ingrese la fecha.");
    if (!time) errors.push("Ingrese la hora.");
    if (!location) errors.push("Ingrese el lugar.");
    if (!court) errors.push("Ingrese la cancha.");

    if (errors.length > 0) {
      setErrorMessage(errors.join(" "));
      setShowErrorModal(true);
      setShowMainModal(false); 
    } else {
      navigate("/roldepartidos/verroldepartidos", {
        state: {
          name1: name,
          logo1: logo,
          name2: selectedTeam.name,
          logo2: selectedTeam.logo,
          date,
          time,
          location,
          court,
        },
      });
    }
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
    setShowMainModal(true); 
  };

  return (
    <>
      <Modal show={showMainModal} onHide={handleClose} size="md" className="text-secondary">
        <Modal.Header closeButton>
          <Modal.Title>Agregar Partido para {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="align-items-start">
            <Col className="">
              <Cards
                name={name}
                logo={logo}
                width="200px"
                height="200px"
                fontSize="20px"
                checkIfClickable={checkIfClickable}
              />
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
                  <Form.Control
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formTime">
                  <Form.Label>Hora</Form.Label>
                  <Form.Control
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formLocation">
              <Form.Label>Lugar</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el lugar"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formCourt">
              <Form.Label>Cancha</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la cancha"
                value={court}
                onChange={(e) => setCourt(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btnCC" onClick={handleClose}>
            Cerrar
          </Button>
          <Button className="btnC" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showErrorModal} onHide={handleCloseErrorModal} size="md" className="text-secondary">
        <Modal.Header closeButton>
          <Modal.Title>Ingrese todos los campos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{errorMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btnCC" onClick={handleCloseErrorModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalForm;
