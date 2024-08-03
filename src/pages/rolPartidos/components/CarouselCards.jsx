// src/components/CarouselCards.js
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Cards } from './cards'; // Asegúrate de que la ruta sea correcta

const CarouselCards = ({ teams, onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelect = (index) => {
    setSelectedIndex(index);
    onSelect(teams[index]); // Notifica al componente padre
  };

  return (
    <Carousel onSelect={handleSelect}>
      {teams.map((team, index) => (
        <Carousel.Item key={index}>
            <Cards name={team.name} logo={team.logo} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselCards;
