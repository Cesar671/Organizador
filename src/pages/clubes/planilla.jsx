import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, IconButton, Switch, FormControlLabel, Menu, MenuItem } from '@mui/material';
import { ArrowBack, FilterList } from '@mui/icons-material';
import { useParams, Link } from 'react-router-dom';
import jugador from './imagenes/modelo.jpg';

const jugadoresData = [
  { id: 1, nombre: 'Ariel', posicion: 'central', edad: 26, imagen: jugador },
  { id: 2, nombre: 'Juan', posicion: 'Izquierda', edad: 28, imagen: jugador },
  { id: 3, nombre: 'Beimar', posicion: 'central', edad: 24, imagen: jugador },
  { id: 4, nombre: 'Alex', posicion: 'armador', edad: 27, imagen: jugador },
  { id: 5, nombre: 'Marco', posicion: 'Izquierda', edad: 30, imagen: jugador },
  { id: 6, nombre: 'Jhon', posicion: 'central', edad: 22, imagen: jugador },
  { id: 7, nombre: 'Fernando', posicion: 'armador', edad: 29, imagen: jugador },
  { id: 8, nombre: 'Alden', posicion: 'Izquierda', edad: 26, imagen: jugador }
];

const Planilla = () => {
  const { equipoId } = useParams();
  const [vista, setVista] = useState('list');
  const [search, setSearch] = useState('');
  const [filterPosicion, setFilterPosicion] = useState('');
  const [filterEdad, setFilterEdad] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleVistaChange = (event) => {
    setVista(event.target.checked ? 'list' : 'grid');
  };

  const handleFilterPosicionChange = (event) => {
    setFilterPosicion(event.target.value);
    setAnchorEl(null);
  };

  const handleFilterEdadChange = (event) => {
    setFilterEdad(event.target.value);
    setAnchorEl(null);
  };

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const filteredJugadores = jugadoresData.filter(jugador => {
    const matchesNombre = jugador.nombre.toLowerCase().includes(search.toLowerCase());
    const matchesPosicion = filterPosicion ? jugador.posicion === filterPosicion : true;
    const matchesEdad = filterEdad ? jugador.edad.toString() === filterEdad : true;
    return matchesNombre && matchesPosicion && matchesEdad;
  });

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Lista de jugadores
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <FormControlLabel
          control={<Switch checked={vista === 'list'} onChange={handleVistaChange} />}
        />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Buscar"
            variant="outlined"
            sx={{ width: '200px', marginRight: 2 }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <IconButton onClick={handleFilterClick}>
            <FilterList />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleFilterClose}
            PaperProps={{
              sx: {
                padding: 1,
                borderRadius: 2,
                minWidth: '200px'
              }
            }}
          >
            <MenuItem>
              <TextField
                select
                label="Posición"
                value={filterPosicion}
                onChange={handleFilterPosicionChange}
                variant="outlined"
                fullWidth
                sx={{ fontSize: '1.2rem' }}
              >
                <MenuItem value="" sx={{ fontSize: '1.2rem', padding: 1.5 }}>
                  <em>Todos</em>
                </MenuItem>
                <MenuItem value="central" sx={{ fontSize: '1.2rem', padding: 1.5 }}>
                  Central
                </MenuItem>
                <MenuItem value="Izquierda" sx={{ fontSize: '1.2rem', padding: 1.5 }}>
                  Izquierda
                </MenuItem>
                <MenuItem value="armador" sx={{ fontSize: '1.2rem', padding: 1.5 }}>
                  Armador
                </MenuItem>
              </TextField>
            </MenuItem>
            <MenuItem>
              <TextField
                select
                label="Edad"
                value={filterEdad}
                onChange={handleFilterEdadChange}
                variant="outlined"
                fullWidth
                sx={{ fontSize: '1.2rem' }}
              >
                <MenuItem value="" sx={{ fontSize: '1.2rem', padding: 1.5 }}>
                  <em>Todos</em>
                </MenuItem>
                {Array.from(new Set(jugadoresData.map(j => j.edad))).map(edad => (
                  <MenuItem key={edad} value={edad.toString()} sx={{ fontSize: '1.2rem', padding: 1.5 }}>
                    {edad}
                  </MenuItem>
                ))}
              </TextField>
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      <Grid container spacing={vista === 'grid' ? 3 : 2}>
        {filteredJugadores.map((jugador) => (
          <Grid item xs={vista === 'grid' ? 12 : 12} sm={vista === 'grid' ? 6 : 12} md={vista === 'grid' ? 3 : 12} key={jugador.id}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: vista === 'grid' ? 'column' : 'row',
                justifyContent: vista === 'grid' ? 'center' : 'space-between',
                alignItems: 'center',
                backgroundColor: '#74C0FC',
                padding: 2,
                borderRadius: 2,
              }}
            >
              <Box>
                <Typography variant="h6">{jugador.nombre}</Typography>
                <Typography>Posición: {jugador.posicion}</Typography>
                <Typography>Edad: {jugador.edad}</Typography>
              </Box>
              <Box
                component="img"
                src={jugador.imagen}
                alt={jugador.nombre}
                sx={{
                  width: vista === 'grid' ? 100 : 80,
                  height: vista === 'grid' ? 100 : 80,
                  borderRadius: '50%',
                  marginTop: vista === 'grid' ? 2 : 0
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Botón para volver a los detalles del equipo */}
      <Box sx={{ display: 'flex', justifyContent: 'left', marginTop: 2 }}>
        <IconButton
          sx={{
            backgroundColor: '#0a2540',
            color: '#74C0FC',
            '&:hover': { transform: 'scale(1.1)' },
            transition: 'transform 0.3s',
          }}
          component={Link}
          to="/equipos"
        >
          <ArrowBack sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Planilla;
