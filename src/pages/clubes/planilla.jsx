import React, { useState } from 'react';
import { Box, Typography, Grid, Button, TextField } from '@mui/material';
import { useParams, Link } from 'react-router-dom';  // Asegúrate de importar Link
import JugadorCard from './components/JugadorCard';
import jugador from './imagenes/modelo.jpg'

const jugadoresData = [
  { id: 1, nombre: 'Ariel', posicion: 'central', imagen: jugador },
  { id: 2, nombre: 'Juan', posicion: 'Izquierda', imagen: jugador} ,
  { id: 3, nombre: 'Beimar', posicion: 'central', imagen: jugador} ,
  { id: 4, nombre: 'Alex', posicion: 'armador', imagen: jugador} ,
  { id: 5, nombre: 'Marco', posicion: 'Izquierda', imagen: jugador} ,
  { id: 6, nombre: 'Jhon', posicion: 'central', imagen: jugador} ,
  { id: 7, nombre: 'Fernando', posicion: 'armador', imagen: jugador} ,
  { id: 8, nombre: 'Alden', posicion: 'Izquierda', imagen: jugador} 
];

const Planilla = () => {
  const { equipoId } = useParams();
  const [vista, setVista] = useState('grid'); // 'grid' o 'list'
  const [search, setSearch] = useState('');

  const filteredJugadores = jugadoresData.filter(jugador =>
    jugador.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Lista de jugadores
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <Button 
          variant="contained" 
          sx={{ backgroundColor: '#0a2540', color: '#fff' }}
          onClick={() => setVista(vista === 'grid' ? 'list' : 'grid')}
        >
          {vista === 'grid' ? 'Lista' : 'Columna'}
        </Button>
        <TextField
          label="Buscar"
          variant="outlined"
          sx={{ width: '200px' }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      
      <Grid container spacing={3}>
        {filteredJugadores.map((jugador) => (
          <Grid item xs={vista === 'grid' ? 12 : 12} sm={vista === 'grid' ? 6 : 12} md={vista === 'grid' ? 3 : 12} key={jugador.id}>
            <JugadorCard jugador={jugador} vista={vista} />
          </Grid>
        ))}
      </Grid>

      {/* Botón para volver a los detalles del equipo */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        <Button 
          variant="outlined" 
          sx={{ backgroundColor: '#fff', color: '#0a2540' }}
          component={Link}
          to={`/equipos/${equipoId}`} // Navega de regreso a la página de detalles del equipo
        >
          Volver a detalles del equipo
        </Button>
      </Box>
    </Box>
  );
};

export default Planilla;
