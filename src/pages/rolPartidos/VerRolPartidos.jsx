// src/components/VerRolPartidos.js
import React from "react";
import { useLocation } from "react-router-dom";
import { Cards } from "./components/cards";
import "./components/Cards.css";
import { Row, Col } from "react-bootstrap";

export const VerRolPartidos = () => {
  const location = useLocation();
  const { name1, logo1, name2, logo2 } = location.state || {};

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="principal">
        <h1 className="bg-primary text-white">
          {name1} vs {name2}
        </h1>
        <div className="fondo">
          <Row>
            <Col>
              <Cards name={name1} logo={logo1} width="150px" height="150px" />
              <div>
                <p className="text-white">
                    <strong>Entrenador:</strong>Profe Eddy Perez Garnica <br/>
                    <strong>Jugadores : </strong>Elver Garnica,
                    Juan Perez,<br/>
                    Mateo Vargas, 
                    Eddy Choque<br/>
                    Carlos Castellon,
                    Faccio Daniel<br/>
                    Sergio Ramos,
                    Cristhian Perez<br/>
                </p>

              </div>
            </Col>
            <Col>
              <Cards name={name2} logo={logo2} width="150px" height="150px" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
