import React from 'react';
import './App.css';
import Muitheme from './theme/Muitheme';
import AsideMenu from './global/AsideMenu';
import { Routes, Route } from 'react-router-dom';
import TopMenu from './global/TopMenu';
import ClubesOrg from './pages/ClubesOrg';
import Home from './pages/Home';
import TablaPosiciones from './pages/TablaPosiciones';
import PartidosDelDia from './pages/PartidosDelDia';
import Jugadores from './pages/Jugadores';
import Reglamento from './pages/Reglamento';
import Noticias from './pages/Noticias';
import { RolPartidos2 } from './pages/rolPartidos/RolPartidos2';
import { VerRolPartidos } from './pages/rolPartidos/VerRolPartidos';
import { EquipoVs } from './pages/rolPartidos/EquipoVs';
import VistaClubOrg from './pages/VistaClubOrg';
function App() {
  const [selected, setSelected] = React.useState(window.location.href.split("/")[3])
  return (
    <Muitheme>
      <div className="App">
        <AsideMenu selected = {selected} setSelected = {setSelected}/>
          <div className='MainContainer'>
          <TopMenu selected = {selected} setSelected = {setSelected}/>
            <Routes>
              <Route path= "/" element= { <Home /> }/>
              <Route path= "/equipos" element= { <Clubes /> }/>
              <Route path= "/equipos" element= { <ClubesOrg /> }/>
              <Route path= "/equiposOrg/:id" element= { <VistaClubOrg /> }/>
              <Route path= "/equiposOrg" element= { <ClubesOrg /> }/>
              <Route path= "/roldepartidos" element= { <RolPartidos2 /> }/>
              <Route path= "/roldepartidos/verroldepartidos" element= { <VerRolPartidos /> }/>
              <Route path= "/roldepartidos/verroldepartidos/Equipo" element= { <EquipoVs /> }/>
              <Route path= "/tabladeposiciones" element= { <TablaPosiciones /> }/>
              <Route path= "/partidosdeldia" element= { <PartidosDelDia /> }/>
              <Route path= "/jugadores" element= { <Jugadores /> }/>
              <Route path= "/reglamento" element= { <Reglamento /> }/>
              <Route path= "/noticias" element= { <Noticias /> }/>
            </Routes>
          </div>
        
      </div>
    </Muitheme>
  );
}

export default App;
