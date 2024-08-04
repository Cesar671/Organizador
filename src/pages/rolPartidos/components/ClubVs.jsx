import React, { useState, useEffect } from "react";
import { Cards } from "./cards";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import CarouselCards from "./CarouselCards";
import teamsData from "./teams.json";

export const ClubVs = ({ name, logo, equiposVS, onUpdateEquipo }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedEquipo, setSelectedEquipo] = useState(null);
  const [formData, setFormData] = useState({});
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    setTeams(teamsData);
  }, []);

  const handleShowEditModal = (equipo) => {
    setSelectedEquipo(equipo);
    setFormData({
      Lugar: equipo.Lugar,
      Cancha: equipo.Cancha,
      Hora: equipo.Hora,
      Fecha: equipo.Fecha,
      "Tipo de Partido": equipo["Tipo de Partido"],
    });
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedEquipo(null);
  };

  const handleSaveChanges = () => {
    setShowConfirmModal(true);
    setShowEditModal(false);
  };

  const handleConfirmSave = () => {
    if (onUpdateEquipo) {
      onUpdateEquipo(selectedEquipo.name, formData);
    }
    setShowConfirmModal(false);
    handleCloseEditModal();
  };

  const handleCancelSave = () => {
    setShowConfirmModal(false);
    setShowEditModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelect = (team) => {
    setSelectedTeam(team);
  };

  return (
    <div className="mx-5">
      <h2>Rol de partidos {name}</h2>
      {equiposVS.map((equipo, index) => (
        <div
          key={index}
          className="bg-white mb-2 rounded-3"
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.6)" }}
        >
          <h1 className="titulo2 text-white rounded-top-3">
            {name} vs {equipo.name}
          </h1>
          <div className="d-flex">
            <div className="mx-5 mt-3">
              <Cards
                name={name}
                logo={logo}
                width="150px"
                height="130px"
                fontSize="12px"
                checkIfClickable={() => Promise.resolve(false)}
              />
            </div>
            <div className="vs-container">
              <span className="text-black">VS</span>
            </div>
            <div className="mx-5 mt-3">
              <Cards
                name={equipo.name}
                logo={equipo.logo}
                width="150px"
                height="130px"
                fontSize="12px"
                checkIfClickable={() => Promise.resolve(false)}
              />
            </div>
            <div className="my-3 flex-grow-1 position-relative">
              <Button
                className="position-absolute top-0 end-0 me-3"
                onClick={() => handleShowEditModal(equipo)}
              >
                <ModeEditOutlineIcon />
              </Button>
              <p className="text-black">
                <strong>DATOS DEL PARTIDO:</strong>
                <br />
                <strong>Fecha:&nbsp;&nbsp;&nbsp;</strong> {equipo.Fecha}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>Hora:&nbsp;&nbsp;&nbsp;</strong> {equipo.Hora} <br />
                <strong>Lugar:&nbsp;&nbsp;&nbsp;</strong> {equipo.Lugar}{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>Cancha:&nbsp;&nbsp;&nbsp;</strong> {equipo.Cancha}{" "}
                <br />
                <strong>Tipo de Partido: &nbsp;&nbsp;&nbsp;</strong>{" "}
                {equipo["Tipo de Partido"]}
              </p>
            </div>
          </div>
        </div>
      ))}

      {selectedEquipo && (
        <Modal show={showEditModal} onHide={handleCloseEditModal} className="text-secondary">
          <Modal.Header closeButton>
            <Modal.Title>Editar Datos del Partido</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex align-items-center mb-3">
              <div className="">
                <Cards
                  name={name}
                  logo={logo}
                  width="200px"
                  height="200px"
                  fontSize="20px"
                  checkIfClickable={() => Promise.resolve(false)}
                />
              </div>
              <span className="mx-3">VS</span>
              <CarouselCards teams={teams} onSelect={handleSelect} />
            </div>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control
                      type="text"
                      name="Fecha"
                      value={formData.Fecha || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="">
                    <Form.Label>Hora</Form.Label>
                    <Form.Control
                      type="text"
                      name="Hora"
                      value={formData.Hora || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="">
                    <Form.Label>Cancha</Form.Label>
                    <Form.Control
                      type="text"
                      name="Cancha"
                      value={formData.Cancha || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="">
                    <Form.Label>Lugar</Form.Label>
                    <Form.Control
                      type="text"
                      name="Lugar"
                      value={formData.Lugar || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="">
                <Form.Label>Tipo de Partido</Form.Label>
                <Form.Control
                  type="text"
                  name="Tipo de Partido"
                  value={formData["Tipo de Partido"] || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btnCC" onClick={handleCloseEditModal}>
              Cancelar
            </Button>
            <Button className="btnC" onClick={handleSaveChanges}>
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <Modal show={showConfirmModal} onHide={handleCancelSave}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Cambios</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿Estás seguro de que deseas guardar los cambios?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btnCC" onClick={handleCancelSave}>
            Cancelar
          </Button>
          <Button className="btnC" onClick={handleConfirmSave}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
