// src/components/RolPartidos2.js
import React from 'react';
import { Cards } from './components/cards';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'; 

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

export const RolPartidos2 = () => {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/verroldepartidos');
  };

  return (
    <div className="container mt-4">
     <h2 className='fw-bold'>Lista de equipos</h2>
      <Button className='m-4' onClick={handleButtonClick}>Ver Rol de Partidos</Button>
      <div className="row">
        {teams.map((team, index) => (
          <Cards 
            key={index} 
            name={team.name} 
            logo={team.logo} 
            width="200px" 
            height="200px" 
          />
        ))}
      </div>
    </div>
  );
};
