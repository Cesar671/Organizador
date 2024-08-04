import React, { useState } from 'react';
import './App.css';
import Muitheme from './theme/Muitheme';
import AsideMenu from './global/AsideMenu';
import { Routes, Route } from 'react-router-dom';
import TopMenu from './global/TopMenu';
import ClubesOrg from './pages/ClubesOrg';
import Home from './pages/Home';
import TablaPosiciones from './pages/TablaPosiciones';
import PartidosDelDia from './pages/PartidosDelDia/PartidosDelDia';
import Jugadores from './pages/Jugadores';
import Reglamento from './pages/Reglamento';
import Noticias from './pages/Noti/Noticias';
import { RolPartidos2 } from './pages/rolPartidos/RolPartidos2';
import { VerRolPartidos } from './pages/rolPartidos/VerRolPartidos';
import { EquipoVs } from './pages/rolPartidos/EquipoVs';
import VistaClubOrg from './pages/VistaClubOrg';
import { FullDataCtxt } from './global/contexts/equipContext';
import { equipos, jugadores } from './data';
import Equipos from "./pages/clubes/equipos"
import EquipoDetalle from './pages/clubes/equipoDetalles';
import Planilla from './pages/clubes/planilla';

function App() {
  const [equiposN, setEquipos] = useState(equipos)
  const [jugadoresN, setJugadores] = useState(jugadores)
  const [selected, setSelected] = React.useState(window.location.href.split("/")[3])
  return (
    <Muitheme>
      <div className="App">
        <FullDataCtxt.Provider value={{equiposN, jugadoresN, setEquipos, setJugadores, selected, setSelected}}>
          <AsideMenu/>
          <div className='MainContainer'>
            <TopMenu/>
            <Routes>
              <Route path= "/" element= { <Home /> }/>
              <Route path= "/equipos" element= { <Equipos /> }/>
              <Route path= "/equiposOrg" element= { <ClubesOrg /> }/>
              <Route path= "/roldepartidos" element= { <RolPartidos2 /> }/>
              <Route path= "/roldepartidos/verroldepartidos" element= { <VerRolPartidos /> }/>
              <Route path= "/roldepartidos/verroldepartidos/Equipo" element= { <EquipoVs /> }/>
              <Route path= "/tabladeposiciones" element= { <TablaPosiciones /> }/>
              <Route path= "/partidosdeldia" element= { <PartidosDelDia /> }/>
              <Route path= "/jugadores" element= { <Jugadores /> }/>
              <Route path= "/reglamento" element= { <Reglamento /> }/>
              <Route path= "/noticias" element= { <Noticias /> }/>
              <Route path="/equipos/:equipoId" element={<EquipoDetalle />} />
              <Route path="/equipos/:equipoId/plantilla" element={<Planilla />} />
              <Route path="/equiposOrg/:id" element={<VistaClubOrg/>} />
            </Routes>
          </div>
        </FullDataCtxt.Provider>    
      </div>
    </Muitheme>
  );
}

export default App;
