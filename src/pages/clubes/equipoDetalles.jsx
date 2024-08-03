import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button, IconButton } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { equipos } from './equipos';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import entrenador from './imagenes/coach.jpg';

const EquipoDetalle = () => {
  const { equipoId } = useParams();
  const equipo = equipos.find(e => e.id === parseInt(equipoId));

  if (!equipo) {
    return <Typography variant="h6">Equipo no encontrado</Typography>;
  }

  // Ejemplo de un jugador
  const jugador = {
    nombre: 'DT Freddy Moya',
    imagen: entrenador,
    descripcion: 'Exentrenador de otros equipos como Don Bosco. Diez años de experiencia formando grandes deportistas, con bases sólidas donde su lema motivacional es “Disfruta el proceso”.',
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        {equipo.nombre}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: 4 }}>
        {/* Card del equipo */}
        <Card sx={{ backgroundColor: '#0a2540', color: '#fff', padding: 2, maxWidth: 300 }}>
          <CardMedia
            component="img"
            sx={{ height: 140, objectFit: 'contain' }} // Asegura que la imagen se ajuste correctamente
            image={equipo.logo}
            alt={equipo.nombre}
          />
          <CardContent>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
              {equipo.nombre}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 2 }}>
              {equipo.descripcion}
            </Typography>
          </CardContent>
        </Card>

        {/* Botón "Planilla de jugadores" en el centro */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button 
            variant="contained" 
            sx={{ backgroundColor: '#0a2540', color: '#fff', margin: 2 }}
            component={Link} 
            to={`/equipos/${equipoId}/plantilla`}
          >
            Planilla de jugadores
          </Button>
        </Box>

        {/* Card del jugador */}
        <Card sx={{ backgroundColor: '#0a2540', color: '#fff', padding: 2, maxWidth: 300 }}>
          <CardMedia
            component="img"
            sx={{ height: 140, objectFit: 'contain' }} // Asegura que la imagen se ajuste correctamente
            image={jugador.imagen}
            alt={jugador.nombre}
          />
          <CardContent>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
              {jugador.nombre}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 2 }}>
              {jugador.descripcion}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Redes sociales */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 4 }}>
        <IconButton 
          color="primary" 
          component="a" 
          href="https://www.facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Facebook sx={{ color: '#3b5998' }} />
        </IconButton>
        <IconButton 
          color="primary" 
          component="a" 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Instagram sx={{ color: '#E1306C' }} />
        </IconButton>
        <IconButton 
          color="primary" 
          component="a" 
          href="https://www.twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Twitter sx={{ color: '#1DA1F2' }} />
        </IconButton>
      </Box>

      {/* Botón para regresar a la lista de equipos */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        <Button 
          variant="outlined" 
          sx={{ backgroundColor: '#fff', color: '#0a2540' }}
          component={Link}
          to="/equipos"
        >
          Volver a la lista de equipos
        </Button>
      </Box>
    </Box>
  );
};

export default EquipoDetalle;
