import './App.css';
import Muitheme from './theme/Muitheme';
import AsideMenu from './global/AsideMenu';
import { Routes, Route } from 'react-router-dom';
import TopMenu from './global/TopMenu';
import ClubesOrg from './pages/ClubesOrg';
import Home from './pages/Home';
import RolPartidos from './pages/RolPartidos';
import TablaPosiciones from './pages/TablaPosiciones';
import PartidosDelDia from './pages/PartidosDelDia';
import Jugadores from './pages/Jugadores';
import Reglamento from './pages/Reglamento';
import Noticias from './pages/Noticias';
import Equipos from "./pages/clubes/equipos"
import EquipoDetalle from './pages/clubes/equipoDetalles';
import Planilla from './pages/clubes/planilla';

function App() {
  return (
    <Muitheme>
      <div className="App">
        <AsideMenu/>
          <div className='MainContainer'>
          <TopMenu />
            <Routes>
              <Route path= "/" element= { <Home /> }/>
              <Route path= "/equipos" element= { <Equipos /> }/>
              <Route path= "/equiposOrg" element= { <ClubesOrg /> }/>
              <Route path= "/roldepartidos" element= { <RolPartidos /> }/>
              <Route path= "/tabladeposiciones" element= { <TablaPosiciones /> }/>
              <Route path= "/partidosdeldia" element= { <PartidosDelDia /> }/>
              <Route path= "/jugadores" element= { <Jugadores /> }/>
              <Route path= "/reglamento" element= { <Reglamento /> }/>
              <Route path= "/noticias" element= { <Noticias /> }/>
              <Route path="/equipos/:equipoId" element={<EquipoDetalle />} />
              <Route path="/equipos/:equipoId/plantilla" element={<Planilla />} />
            </Routes>
          </div>
        
      </div>
    </Muitheme>
  );
}

export default App;
