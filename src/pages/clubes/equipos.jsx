// src/pages/clubes/Equipos.jsx
import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, MenuItem, FormControl, Select, InputLabel, IconButton, Menu, MenuItem as MenuItemMUI } from '@mui/material';
import {FilterList} from '@mui/icons-material';
import EquipoCard from './components/EquipoCard';
import './styles/Equipos.css';
import club1 from './imagenes/club1.webp';
import club2 from './imagenes/club2.jpg'
import club3 from './imagenes/club3.jpg'
import club4 from './imagenes/club4.jpg'


export const equipos = [
  { id: 1, nombre: 'Club San Martin',
    logo: club2, 
    categoria: 'Juvenil', 
    ciudad: 'Santa Cruz',
    descripcion:"El Fenix cuenta con categorias juveniles y cadetes, es campeon de la Liga Garra, actualmente tiene 45 jugadores tanto en damas como varones.Aferrate a la victoria hazte que ella se aleje. " },
  { id: 2, nombre: 'Club Olympic', logo: club1 , categoria: 'Adultos', ciudad: 'La Paz',descripcion:"El Club Oplympic cuenta con categorias juveniles y cadetes, es campeon de la Liga Garra, actualmente tiene 45 jugadores tanto en damas como varones.Aferrate a la victoria hazte que ella se aleje. " },
  { id: 3, nombre: 'Club Vipers', logo: club3 , categoria: 'Juvenil', ciudad: 'Cochabamba',descripcion:"El club vipers cuenta con categorias juveniles y cadetes, es campeon de la Liga Garra, actualmente tiene 45 jugadores tanto en damas como varones.Aferrate a la victoria hazte que ella se aleje. " },
  { id: 4, nombre: 'Club Fenix', logo: club4, categoria: 'Adultos', ciudad: 'Santa Cruz',descripcion:"El Fenix cuenta con categorias juveniles y cadetes, es campeon de la Liga Garra, actualmente tiene 45 jugadores tanto en damas como varones.Aferrate a la victoria hazte que ella se aleje. " },
  { id: 5, nombre: 'Club Albert Einstein', logo:club1 , categoria: 'Juvenil', ciudad: 'Sucre',descripcion:"El Club Albert Einstein cuenta con categorias juveniles y cadetes, es campeon de la Liga Garra, actualmente tiene 45 jugadores tanto en damas como varones.Aferrate a la victoria hazte que ella se aleje. " },
  { id: 6, nombre: 'Club Don Bosco', logo:club3 , categoria: 'Adultos', ciudad: 'Santa Cruz',descripcion:"El Club Don Bosco cuenta con categorias juveniles y cadetes, es campeon de la Liga Garra, actualmente tiene 45 jugadores tanto en damas como varones.Aferrate a la victoria hazte que ella se aleje. "},
  { id: 7, nombre: 'Club Panteras', logo: club2, categoria: 'Juvenil', ciudad: 'Tarija',descripcion:"El club Panteras cuenta con categorias juveniles y cadetes, es campeon de la Liga Garra, actualmente tiene 45 jugadores tanto en damas como varones.Aferrate a la victoria hazte que ella se aleje. "},
  { id: 8, nombre: 'Club Vinto', logo:club1 , categoria: 'Adultos', ciudad: 'La Paz',descripcion:"El Club Vinto cuenta con categorias juveniles y cadetes, es campeon de la Liga Garra, actualmente tiene 45 jugadores tanto en damas como varones.Aferrate a la victoria hazte que ella se aleje. "},
];

const Equipos = () => {
  const [search, setSearch] = useState('');
  const [categoria, setCategoria] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleCiudadChange = (event) => {
    setCiudad(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const filteredEquipos = equipos.filter(
    (equipo) =>
      equipo.nombre.toLowerCase().includes(search.toLowerCase()) &&
      (categoria ? equipo.categoria === categoria : true) &&
      (ciudad ? equipo.ciudad === ciudad : true)
  );

  return (
    <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant="h4">Lista de Equipos</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          
          {/* Botón de Filtro */}
          <IconButton onClick={handleFilterClick}>
            <FilterList />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleFilterClose}
            sx={{ mt: '10px' }}
          >
            <MenuItemMUI sx={{ minWidth: '200px' }}>
              <FormControl fullWidth>
                <InputLabel>Categoría</InputLabel>
                <Select value={categoria} onChange={handleCategoriaChange} label="Categoría">
                  <MenuItem value="">Todas</MenuItem>
                  <MenuItem value="Juvenil">Juvenil</MenuItem>
                  <MenuItem value="Adultos">Adultos</MenuItem>
                </Select>
              </FormControl>
            </MenuItemMUI>

            <MenuItemMUI sx={{ minWidth: '200px' }}>
              <FormControl fullWidth>
                <InputLabel>Ciudad</InputLabel>
                <Select value={ciudad} onChange={handleCiudadChange} label="Ciudad">
                  <MenuItem value="">Todas</MenuItem>
                  <MenuItem value="Santa Cruz">Santa Cruz</MenuItem>
                  <MenuItem value="La Paz">La Paz</MenuItem>
                  <MenuItem value="Cochabamba">Cochabamba</MenuItem>
                  <MenuItem value="Sucre">Sucre</MenuItem>
                  <MenuItem value="Tarija">Tarija</MenuItem>
                </Select>
              </FormControl>
            </MenuItemMUI>
          </Menu>

          {/* Input de búsqueda */}
          <TextField
            label="Buscar por nombre"
            variant="outlined"
            value={search}
            onChange={handleSearchChange}
          />

          {/* Botón de Búsqueda */}
        </Box>
      </Box>

      {/* Grid de tarjetas filtradas */}
      <Grid container spacing={3}>
        {filteredEquipos.map((equipo, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <EquipoCard equipo={equipo} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Equipos;
