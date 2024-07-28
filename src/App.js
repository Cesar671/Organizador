import './App.css';
import Muitheme from './theme/Muitheme';
import AsideMenu from './global/AsideMenu';
import { Box } from '@mui/material';

function App() {
  return (
    <Muitheme>
      <div className="App">
        <AsideMenu />
        <div>

        </div>
      </div>
    </Muitheme>
  );
}

export default App;
