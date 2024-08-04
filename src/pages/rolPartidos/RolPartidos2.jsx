import React, { useEffect, useState } from "react";
import { Cards } from "./components/cards";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import teamsData from "./components/teams.json";

const checkIfClickable = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

export const RolPartidos2 = () => {
  const navigate = useNavigate();
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(teamsData);
  }, []);

  const handleButtonClick = () => {
    navigate("/roldepartidos/verroldepartidos");
  };

  return (
    <div className="container mt-4" style={{ overflowX: 'auto' }}>
      <h2 className="fw-bold">Lista de equipos</h2>
      <Button className="btnC m-4" onClick={handleButtonClick}>
        Ver Rol de Partidos
      </Button>
      <div className="row">
        {teams.map((team, index) => (
          <Cards
            key={index}
            name={team.name}
            logo={team.logo}
            width="200px"
            height="200px"
            fontSize="20px"
            checkIfClickable={checkIfClickable}
            tooltipMessage="Generar partido"
          />
        ))}
      </div>
    </div>
  );
};
