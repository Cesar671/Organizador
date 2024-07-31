import './App.css';
import Muitheme from './theme/Muitheme';
import AsideMenu from './global/AsideMenu';
import { Routes, Route } from 'react-router-dom';
import TopMenu from './global/TopMenu';
import Clubes from './pages/Clubes';
import Home from './pages/Home';
import RolPartidos from './pages/RolPartidos';
import TablaPosiciones from './pages/TablaPosiciones';
import PartidosDelDia from './pages/PartidosDelDia';
import Jugadores from './pages/Jugadores';
import Reglamento from './pages/Reglamento';
import Noticias from './pages/Noticias';
function App() {
  return (
    <Muitheme>
      <div className="App">
        <AsideMenu/>
          <div className='MainContainer'>
          <TopMenu />
            <Routes>
              <Route path= "/" element= { <Home /> }/>
              <Route path= "/equipos" element= { <Clubes /> }/>
              <Route path= "/roldepartidos" element= { <RolPartidos /> }/>
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
