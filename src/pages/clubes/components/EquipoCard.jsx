// src/pages/clubes/components/EquipoCard.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Box, useTheme, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ColorThief from 'colorthief';

const EquipoCard = ({ equipo }) => {
  const imgref = useRef(null);
  const [color, setColor] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    if (color === null) {
      const img = imgref.current;
      const colorThief = new ColorThief();

      if (img.complete) {
        extractColor();
      } else {
        img.addEventListener('load', extractColor);
        return () => img.removeEventListener('load', extractColor);
      }

      function extractColor() {
        const dominantColor = colorThief.getColor(img);
        setColor(dominantColor);
      }
    }
  }, [color]);

  return (
    <Button component={Link} to={`/equipos/${equipo.id}`} style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          backgroundColor: color ? `rgb(${color[0]}, ${color[1]}, ${color[2]})` : theme.palette.primary.main,
          width: '200px',
          height: '225px',
          borderRadius: '25px',
          padding: '15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'white',
          gap: '5px',
          transition: '0.3s ease-in-out',
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          <img ref={imgref} src={equipo.logo} alt={equipo.nombre} style={{ width: '100%' }} />
        </Box>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          {equipo.nombre}
        </Typography>
      </Box>
    </Button>
  );
};

export default EquipoCard;
