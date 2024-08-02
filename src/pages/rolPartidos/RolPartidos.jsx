import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RolPartidos.css";
import { FaEdit } from "react-icons/fa";
import ColorThief from "color-thief-browser";

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

const initialMatchSchedule = [
  {
    team1: "Club San Martin",
    team2: "Club Olympic",
    date: "22/07/2024",
    time: "17:15 - 19:00",
    place: "Sacaba Abra",
    court: "Cancha del Abra",
    type: "Torneo",
  },
  {
    team1: "Club Panteras",
    team2: "Club Vinto",
    date: "22/07/2024",
    time: "17:15 - 19:00",
    place: "Sacaba Abra",
    court: "Cancha del Abra",
    type: "Torneo",
  },
  {
    team1: "Club Vipers",
    team2: "Club Fenix",
    date: "22/07/2024",
    time: "17:15 - 19:00",
    place: "Sacaba Abra",
    court: "Cancha del Abra",
    type: "Torneo",
  },
];

const RolPartidos = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [opponentIndex, setOpponentIndex] = useState(0);
  const [cardColors, setCardColors] = useState({});
  const [showSchedule, setShowSchedule] = useState(false);
  const [matchSchedule, setMatchSchedule] = useState(initialMatchSchedule);
  const [editMatch, setEditMatch] = useState(null);

  const colorThief = new ColorThief();

  useEffect(() => {
    const extractColors = () => {
      const colors = {};
      teams.forEach((team) => {
        const img = new Image();
        img.src = team.logo;
        img.crossOrigin = "Anonymous";
        img.onload = () => {
          const color = colorThief.getColor(img);
          colors[team.name] = `rgb(${color.join(",")})`;
          setCardColors({ ...colors });
        };
      });
    };

    extractColors();
  }, []);

  const handleShowModal = (team) => {
    setSelectedTeam(team);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTeam(null);
  };

  const handleSelect = (selectedIndex, e) => {
    setOpponentIndex(selectedIndex);
  };

  const handleToggleSchedule = () => {
    setShowSchedule(!showSchedule);
  };

  const handleEditMatch = (match, index) => {
    setEditMatch({ ...match, index });
  };

  const handleCloseEditModal = () => {
    setEditMatch(null);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedMatchSchedule = [...matchSchedule];
    updatedMatchSchedule[editMatch.index] = {
      team1: editMatch.team1,
      team2: editMatch.team2,
      date: e.target.date.value,
      time: e.target.time.value,
      place: e.target.place.value,
      court: e.target.court.value,
      type: e.target.type.value,
    };
    setMatchSchedule(updatedMatchSchedule);
    handleCloseEditModal();
  };

  return (
    <div className="container my-5">
      <h1>{showSchedule ? "Rol del Partidos" : "Lista de equipos"}</h1>
      <button className="btn btn-primary" onClick={handleToggleSchedule}>
        {showSchedule ? "Equipos" : "Partidos"}
      </button>

      {showSchedule ? (
        <div className="schedule mt-4">
          {matchSchedule.map((match, index) => (
            <div
              key={index}
              className="match-card mb-3 p-3"
              style={{ border: "1px solid #ccc", borderRadius: "5px" }}
            >
              <Row>
                <Col xs={2}>
                  <div>
                    <img
                      src={teams.find((t) => t.name === match.team1).logo}
                      alt={match.team1}
                      className="img-fluid"
                    />
                    <p>{match.team1}</p>
                  </div>
                </Col>
                <Col xs={2}>
                  <img
                    src={teams.find((t) => t.name === match.team2).logo}
                    alt={match.team2}
                    className="img-fluid"
                  />
                  <p>{match.team2}</p>
                </Col>
                <Col className="bg-white border rounded p-3 shadow-sm position-relative">
                  <div className="position-relative">
                    <FaEdit
                      onClick={() => handleEditMatch(match, index)}
                      style={{
                        cursor: "pointer",
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        fontSize: "30px", 
                      }}
                    />
                    <p>
                      <strong>Fecha:</strong> {match.date}
                    </p>
                    <p>
                      <strong>Hora:</strong> {match.time}
                    </p>
                    <p>
                      <strong>Lugar:</strong> {match.place}
                    </p>
                    <p>
                      <strong>Cancha:</strong> {match.court}
                    </p>
                    <p>
                      <strong>Tipo de Partido:</strong> {match.type}
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      ) : (
        <div className="row text-center">
          {teams.map((team) => (
            <div key={team.name} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div
                className="card h-100"
                onClick={() => handleShowModal(team)}
                style={{ backgroundColor: cardColors[team.name] }}
              >
                <img
                  src={team.logo}
                  alt={`${team.name} logo`}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-white">{team.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Generar Rol de Partido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTeam && (
            <Form>
              <Row className="align-items-center mb-3">
                <Col>
                  <img
                    src={selectedTeam.logo}
                    alt={`${selectedTeam.name} logo`}
                    className="img-fluid"
                  />
                </Col>
                <Col className="text-center">
                  <h5>VS</h5>
                </Col>
                <Col>
                  <Carousel activeIndex={opponentIndex} onSelect={handleSelect}>
                    {teams
                      .filter((team) => team.name !== selectedTeam.name)
                      .map((team, index) => (
                        <Carousel.Item key={index}>
                          <img
                            src={team.logo}
                            alt={`${team.name} logo`}
                            className="img-fluid"
                          />
                        </Carousel.Item>
                      ))}
                  </Carousel>
                </Col>
              </Row>
              <Form.Group controlId="formDate">
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="text" placeholder="dd/mm/aa" />
              </Form.Group>
              <Form.Group controlId="formTime">
                <Form.Label>Horario</Form.Label>
                <Form.Control type="text" placeholder="hh:mm - hh:mm" />
              </Form.Group>
              <Form.Group controlId="formPlace">
                <Form.Label>Lugar</Form.Label>
                <Form.Control type="text" placeholder="descripción" />
              </Form.Group>
              <Form.Group controlId="formCourt">
                <Form.Label>Cancha</Form.Label>
                <Form.Control type="text" placeholder="descripción" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={handleCloseModal}
              >
                Generar Partido
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>

      {editMatch && (
        <Modal show={editMatch !== null} onHide={handleCloseEditModal}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Partido</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleEditSubmit}>
              <Form.Group controlId="formEditTeam1">
                <Form.Label>Equipo 1</Form.Label>
                <Form.Control type="text" readOnly value={editMatch.team1} />
              </Form.Group>
              <Form.Group controlId="formEditTeam2">
                <Form.Label>Equipo 2</Form.Label>
                <Form.Control type="text" readOnly value={editMatch.team2} />
              </Form.Group>
              <Form.Group controlId="formEditDate">
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={editMatch.date}
                  name="date"
                />
              </Form.Group>
              <Form.Group controlId="formEditTime">
                <Form.Label>Horario</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={editMatch.time}
                  name="time"
                />
              </Form.Group>
              <Form.Group controlId="formEditPlace">
                <Form.Label>Lugar</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={editMatch.place}
                  name="place"
                />
              </Form.Group>
              <Form.Group controlId="formEditCourt">
                <Form.Label>Cancha</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={editMatch.court}
                  name="court"
                />
              </Form.Group>
              <Form.Group controlId="formEditType">
                <Form.Label>Tipo de Partido</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={editMatch.type}
                  name="type"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Guardar Cambios
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default RolPartidos;
