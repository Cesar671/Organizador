import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, IconButton, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { equipos } from './equipos';
import { Facebook, Instagram, Twitter, WhatsApp, ArrowBack } from '@mui/icons-material';
import entrenador from './imagenes/coach.jpg';
import qrWhatsapp from './imagenes/qr-code.png';
 

const EquipoDetalle = () => {
  const { equipoId } = useParams();
  const equipo = equipos.find(e => e.id === parseInt(equipoId));

  if (!equipo) {
    return <Typography variant="h6">Equipo no encontrado</Typography>;
  }

  
  const jugador = {
    nombre: 'DT Freddy Moya',
    imagen: entrenador,
    descripcion: 'Exentrenador de otros equipos como Don Bosco. Diez años de experiencia formando grandes deportistas, con bases sólidas donde su lema motivacional es “Disfruta el proceso”.',
  };

  return (
    <Box sx={{ padding: 2}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: 4 }}>
      
        
        {/* Card del equipo */}
        <Card sx={{ backgroundColor: '#74C0FC', color: '#0a2540', padding: 2, maxWidth: 250, boxShadow: 3, borderRadius: 2, maxHeight: 450 }}>
          <CardMedia
            component="img"
            sx={{ height: 140, objectFit: 'contain' }} // Asegura que la imagen se ajuste correctamente
            image={equipo.logo}
            alt={equipo.nombre}
          />
          <CardContent>
            <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
              {equipo.nombre}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 2, textAlign: 'justify', fontSize: 14 }}>
              {equipo.descripcion}
            </Typography>
          </CardContent>
        </Card>

        {/* Botón "Planilla de jugadores" en el centro */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button 
            variant="contained" 
            sx={{ backgroundColor: '#0a2540', color: '#fff', margin: 2, padding: '10px 20px', fontWeight: 'bold', borderRadius: 4 }}
            component={Link} 
            to={`/equipos/${equipoId}/plantilla`}
          >
            Planilla de jugadores
          </Button>
        </Box>

        {/* Card del jugador y WhatsApp al costado */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Card sx={{ backgroundColor: '#74C0FC', color: '#0a2540', padding: 2, maxWidth: 250, boxShadow: 3, borderRadius: 2, maxHeight: 450 }}>
            <CardMedia
              component="img"
              sx={{ height: 140, objectFit: 'contain' }} 
              image={jugador.imagen}
              alt={jugador.nombre}
            />
            <CardContent>
              <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                {jugador.nombre}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 2, textAlign: 'justify', fontSize: 14 }}>
                {jugador.descripcion}
              </Typography>
            </CardContent>
          </Card>

          {/* WhatsApp al costado */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ textAlign: 'center', color: '#0a2540', fontWeight: 'bold', marginBottom: 1 }}>
            Contacto
           </Typography>
            <IconButton 
              color="primary" 
              component="a" 
              href="https://wa.me/1234567890"  // Enlace de WhatsApp
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ marginBottom: 2 }}
            >
              <WhatsApp sx={{ color: '#25D366', fontSize: 40 }} />
            </IconButton>
            <CardMedia
              component="img"
              sx={{ height: 100, width: 100, objectFit: 'contain' }} 
              image={qrWhatsapp}
              alt="QR WhatsApp"
            />
          </Box>
        </Box>
      </Box>

      {/* Redes sociales */}
      <Typography variant="h6" sx={{ textAlign: 'center', color: '#0a2540', fontWeight: 'bold', marginBottom: 1 }}>
        Redes Sociales
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton 
          color="primary" 
          component="a" 
          href="https://www.facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{ fontSize: 40 }}
        >
          <Facebook sx={{ color: '#3b5998', fontSize: 40 }} />
        </IconButton>
        <IconButton 
          color="primary" 
          component="a" 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{ fontSize: 40 }}
        >
          <Instagram sx={{ color: '#E1306C', fontSize: 40 }} />
        </IconButton>
        <IconButton 
          color="primary" 
          component="a" 
          href="https://www.twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{ fontSize: 40 }}
        >
          <Twitter sx={{ color: '#1DA1F2', fontSize: 40 }} />
        </IconButton>
      </Box>

      {/* Botón para regresar a equipos*/}
      <Box sx={{ display: 'flex', justifyContent: 'rigth', marginTop:-6}}>
        <IconButton 
          sx={{ backgroundColor: '#0a2540', color: '#74C0FC', '&:hover': { transform: 'scale(1.1)' }, transition: 'transform 0.3s' }}
          component={Link}
          to="/equipos"
        >
          <ArrowBack sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default EquipoDetalle;
