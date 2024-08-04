import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ClubVs } from "./components/ClubVs";

const teamsData = [
    {
      name: "Club San Martin",
      logo: "/club1.webp",
      equiposVS: [
        {
          name: "Club Olympic",
          logo: "/club2.jpg",
          Lugar: "Sacaba - El Abra",
          Cancha: "Cancha Del Abra",
          Hora: "17:00 - 19:00",
          "Tipo de Partido": "Torneo",
          Fecha: "2024-08-10"
        },
        {
          name: "Club Vipers",
          logo: "/club3.jpg",
          Lugar: "Quillacollo - CEFED",
          Cancha: "Cancha Principal",
          Hora: "15:00 - 17:00",
          "Tipo de Partido": "Amistoso",
          Fecha: "2024-08-12"
        },
        {
          name: "Club Fenix",
          logo: "/club4.jpg",
          Lugar: "Tiquipaya - Coliseo",
          Cancha: "Coliseo Municipal",
          Hora: "16:00 - 18:00",
          "Tipo de Partido": "Torneo",
          Fecha: "2024-08-15"
        }
      ]
    },
    {
      name: "Club Olympic",
      logo: "/club2.jpg",
      equiposVS: [
        {
          name: "Club San Martin",
          logo: "/club1.webp",
          Lugar: "Sacaba - El Abra",
          Cancha: "Cancha Del Abra",
          Hora: "17:00 - 19:00",
          "Tipo de Partido": "Torneo",
          Fecha: "2024-08-10"
        },
        {
          name: "Club Albert Einstein",
          logo: "/equipo2.png",
          Lugar: "Cochabamba - La Recoleta",
          Cancha: "Cancha Recoleta",
          Hora: "14:00 - 16:00",
          "Tipo de Partido": "Amistoso",
          Fecha: "2024-08-17"
        },
        {
          name: "Club Don Bosco",
          logo: "/equipo1.png",
          Lugar: "Cochabamba - Cala Cala",
          Cancha: "Cancha Cala Cala",
          Hora: "18:00 - 20:00",
          "Tipo de Partido": "Torneo",
          Fecha: "2024-08-20"
        }
      ]
    },
    {
      name: "Club Vipers",
      logo: "/club3.jpg",
      equiposVS: [
        {
          name: "Club Panteras",
          logo: "/club1.webp",
          Lugar: "Cochabamba - San Pedro",
          Cancha: "Cancha San Pedro",
          Hora: "15:00 - 17:00",
          "Tipo de Partido": "Torneo",
          Fecha: "2024-08-11"
        },
        {
          name: "Club Fenix",
          logo: "/club4.jpg",
          Lugar: "Quillacollo - CEFED",
          Cancha: "Cancha Principal",
          Hora: "16:00 - 18:00",
          "Tipo de Partido": "Amistoso",
          Fecha: "2024-08-18"
        },
        {
          name: "Club Vinto",
          logo: "/equipo3.png",
          Lugar: "Vinto - Coliseo",
          Cancha: "Coliseo Vinto",
          Hora: "17:00 - 19:00",
          "Tipo de Partido": "Torneo",
          Fecha: "2024-08-22"
        }
      ]
    },
    {
      name: "Club Fenix",
      logo: "/club4.jpg",
      equiposVS: [
        {
          name: "Club Albert Einstein",
          logo: "/equipo2.png",
          Lugar: "Cochabamba - Cala Cala",
          Cancha: "Cancha Cala Cala",
          Hora: "14:00 - 16:00",
          "Tipo de Partido": "Amistoso",
          Fecha: "2024-08-12"
        },
        {
          name: "Club Don Bosco",
          logo: "/equipo1.png",
          Lugar: "Sacaba - El Abra",
          Cancha: "Cancha Del Abra",
          Hora: "15:00 - 17:00",
          "Tipo de Partido": "Torneo",
          Fecha: "2024-08-16"
        },
        {
          name: "Club Panteras",
          logo: "/club1.webp",
          Lugar: "Tiquipaya - Coliseo",
          Cancha: "Coliseo Municipal",
          Hora: "16:00 - 18:00",
          "Tipo de Partido": "Amistoso",
          Fecha: "2024-08-21"
        }
      ]
    },
    {
      name: "Club Albert Einstein",
      logo: "/equipo2.png",
      equiposVS: [
        {
          name: "Club Vinto",
          logo: "/equipo3.png",
          Lugar: "Cochabamba - La Recoleta",
          Cancha: "Cancha Recoleta",
          Hora: "17:00 - 19:00",
          "Tipo de Partido": "Torneo",
          Fecha: "2024-08-14"
        },
        {
          name: "Club Olympic",
          logo: "/club2.jpg",
          Lugar: "Cochabamba - La Recoleta",
          Cancha: "Cancha Recoleta",
          Hora: "14:00 - 16:00",
          "Tipo de Partido": "Amistoso",
          Fecha: "2024-08-19"
        },
        {
          name: "Club Fenix",
          logo: "/club4.jpg",
          Lugar: "Cochabamba - Cala Cala",
          Cancha: "Cancha Cala Cala",
          Hora: "14:00 - 16:00",
          "Tipo de Partido": "Amistoso",
          Fecha: "2024-08-25"
        }
      ]
    },
    {
      name: "Club Don Bosco",
      logo: "/equipo1.png",
      equiposVS: [
        {
          name: "Club San Martin",
          logo: "/club1.webp",
          Lugar: "Sacaba - El Abra",
          Cancha: "Cancha Del Abra",
          Hora: "17:00 - 19:00",
          "Tipo de Partido": "Torneo",
          Fecha: "2024-08-11"
        },
        {
          name: "Club Olympic",
          logo: "/club2.jpg",
          Lugar: "Cochabamba - Cala Cala",
          Cancha: "Cancha Cala Cala",
          Hora: "18:00 - 20:00",
          "Tipo de Partido": "Torneo",
          Fecha: "2024-08-18"
        },
        {
          name: "Club Vipers",
          logo: "/club3.jpg",
          Lugar: "Cochabamba - San Pedro",
          Cancha: "Cancha San Pedro",
          Hora: "15:00 - 17:00",
          "Tipo de Partido": "Torneo",
          Fecha: "2024-08-23"
        }
      ]
    },
    {
      name: "Club Panteras",
      logo: "/club1.webp",
      equiposVS: [
        {
          name: "Club Vipers",
          logo: "/club3.jpg",
          Lugar: "Cochabamba - San Pedro",
          Cancha: "Cancha San Pedro",
          Hora: "15:00 - 17:00",
          "Tipo de Partido": "Torneo",
          Fecha: "2024-08-13"
        },
        {
          name: "Club Fenix",
          logo: "/club4.jpg",
          Lugar: "Tiquipaya - Coliseo",
          Cancha: "Coliseo Municipal",
          Hora: "16:00 - 18:00",
          "Tipo de Partido": "Amistoso",
          Fecha: "2024-08-20"
        },
        {
          name: "Club Don Bosco",
          logo: "/equipo1.png",
          Lugar: "Sacaba - El Abra",
          Cancha: "Cancha Del Abra",
          Hora: "17:00 - 19:00",
          "Tipo de Partido": "Torneo",
          Fecha: "2024-08-25"
        }
      ]
    },
    {
      name: "Club Vinto",
      logo: "/equipo3.png",
      equiposVS: [
        {
          name: "Club Albert Einstein",
          logo: "/equipo2.png",
          Lugar: "Cochabamba - La Recoleta",
          Cancha: "Cancha Recoleta",
          Hora: "17:00 - 19:00",
          "Tipo de Partido": "Torneo",
          Fecha: "2024-08-14"
        },
        {
          name: "Club Vipers",
          logo: "/club3.jpg",
          Lugar: "Vinto - Coliseo",
          Cancha: "Coliseo Vinto",
          Hora: "17:00 - 19:00",
          "Tipo de Partido": "Torneo",
          Fecha: "2024-08-21"
        },
        {
          name: "Club Olympic",
          logo: "/club2.jpg",
          Lugar: "Cochabamba - La Recoleta",
          Cancha: "Cancha Recoleta",
          Hora: "14:00 - 16:00",
          "Tipo de Partido": "Amistoso",
          Fecha: "2024-08-28"
        }
      ]
    }
  ];

export const EquipoVs = () => {
    const location = useLocation();
    const { name, logo } = location.state || {};
    const [data, setData] = useState(teamsData);
  
    const selectedTeam = data.find(team => team.name === name);
    const equiposVS = selectedTeam ? selectedTeam.equiposVS : [];
  
    const handleUpdateEquipo = (teamName, updatedData) => {
      setData(prevData => 
        prevData.map(team =>
          team.name === name
            ? {
                ...team,
                equiposVS: team.equiposVS.map(equipo =>
                  equipo.name === teamName ? { ...equipo, ...updatedData } : equipo
                )
              }
            : team
        )
      );
    };
  
    return (
      <div style={{overflowX:"auto"}}>
        <ClubVs name={name} logo={logo} equiposVS={equiposVS} onUpdateEquipo={handleUpdateEquipo} />
      </div>
    );
};
