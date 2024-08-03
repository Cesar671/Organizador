import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const JugadorCard = ({ jugador, vista }) => {
  return (
    <Card
      sx={{
        height: 280,
        width: 200,
        backgroundColor: '#74C0FC',
        color: '#000000',
        display: 'flex',
        flexDirection: vista === 'grid' ? 'column' : 'row',
        margin: 4,
        boxShadow: 10, 
        borderRadius: 4, 
      }}
    >
      <CardMedia
        component="img"
        height={vista === 'grid' ? '200' : '200'}
        image={jugador.imagen}
        alt={jugador.nombre}
        sx={{ width: vista === 'list' ? 300 : 'auto', objectFit: 'contain', padding: 2, borderRadius:6}}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1, textAlign: 'center'}}>
          {jugador.nombre}
        </Typography>
        <Typography variant="body2">Posición: {jugador.posicion}</Typography>
      </CardContent>
    </Card>
  );
};

export default JugadorCard;
