import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Cards } from "./components/cards";
import "./components/Cards.css";
import { CardsVs } from "./components/CardsVs";
import teamsData from "./components/teams.json";

const checkIfClickable = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

export const VerRolPartidos = () => {
  const location = useLocation();
  const { name1, logo1, name2, logo2 } = location.state || {};
  const [teams, setTeams] = useState([]);
  const [currentMatch, setCurrentMatch] = useState({ team1: name1, team2: name2 });
  const [selectedTeam1, setSelectedTeam1] = useState(null);
  const [selectedTeam2, setSelectedTeam2] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTeams(teamsData);
  }, []);

  useEffect(() => {
    if (teams.length > 0) {
      setNextMatch();
    }
  }, [teams]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNextMatch();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [teams]);

  const setNextMatch = () => {
    const nextIndex1 = currentIndex % teams.length;
    const nextIndex2 = (currentIndex + 1) % teams.length;

    setCurrentMatch({ team1: teams[nextIndex1].name, team2: teams[nextIndex2].name });
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    setSelectedTeam1(getTeamData(currentMatch.team1));
    setSelectedTeam2(getTeamData(currentMatch.team2));
  }, [currentMatch, teams]);

  const getTeamData = (teamName) => {
    return teams.find((team) => team.name === teamName);
  };

  const handlePrincipalClick = (team) => {
    navigate("/roldepartidos/verroldepartidos/Equipo", {
      state: { name: team.name, logo: team.logo },
    });
  };

  const handleTeamClick = (team1, team2) => {
    setCurrentMatch({ team1, team2 });
  };

  return (
    <div>
      <h1>Rol de Partidos</h1>
      <div className="d-flex mx-5">
        <div className="principal rounded-3 h-75" style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.6)" }}>
          <h1 className="titulo text-white rounded-top-3">
            {selectedTeam1?.name} vs {selectedTeam2?.name}
          </h1>
          <div className="fondo d-flex justify-content-between pt-4">
            <div className="d-flex flex-column align-items-center">
              <div onClick={() => handlePrincipalClick(selectedTeam1)}>
                <Cards
                  name={selectedTeam1?.name}
                  logo={selectedTeam1?.logo}
                  width="200px"
                  height="230px"
                  fontSize="20px"
                  checkIfClickable={checkIfClickable}
                  tooltipMessage="Ver rol de equipo"
                  disableModal={true}
                />
              </div>
              {selectedTeam1 && (
                <p className="text-white mx-5">
                  <strong>Entrenador:</strong> {selectedTeam1.coach} <br />
                  <strong>Jugadores:</strong> {selectedTeam1.players.join(", ")}
                  <br />
                  <strong>Lugar:</strong> Sacaba - El Abra <br />
                  <strong>Cancha:</strong> Cancha del Abra
                </p>
              )}
            </div>
            <div className="vs-container">
              <span className="text-white">VS</span>
            </div>
            <div className="d-flex flex-column align-items-center text-center">
              <div onClick={() => handlePrincipalClick(selectedTeam2)}>
                <Cards
                  name={selectedTeam2?.name}
                  logo={selectedTeam2?.logo}
                  width="200px"
                  height="230px"
                  fontSize="20px"
                  checkIfClickable={checkIfClickable}
                  tooltipMessage="Ver rol de equipo"
                  disableModal={true}
                />
              </div>
              {selectedTeam2 && (
                <p className="text-white mx-5">
                  <strong>Entrenador:</strong> {selectedTeam2.coach} <br />
                  <strong>Jugadores:</strong> {selectedTeam2.players.join(", ")}
                  <br />
                  <strong>Lugar:</strong> Sacaba - El Abra <br />
                  <strong>Cancha:</strong> Cancha del Abra
                </p>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex flex-column mx-5 align-items-center text-center">
            {teams.slice(1, 5).map((team, index) => (
              <div
                key={index}
                onClick={() => handleTeamClick(teams[0].name, team.name)}
                style={{ cursor: "pointer" }}
              >
                <CardsVs
                  name1={teams[(currentIndex + index) % teams.length].name}
                  logo1={teams[(currentIndex + index) % teams.length].logo}
                  name2={team.name}
                  logo2={team.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
