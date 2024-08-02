import React from 'react';
import { Cards } from './components/cards'; // Asegúrate de que la ruta sea correcta

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
  return (
    <div className="container mt-4">
      <div className="row">
        {teams.map((team, index) => (
          <Cards key={index} name={team.name} logo={team.logo} />
        ))}
      </div>
    </div>
  );
};
