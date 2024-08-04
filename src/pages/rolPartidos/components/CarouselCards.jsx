import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Cards } from "./cards";

const checkIfClickable = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

const CarouselCards = ({ teams, onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelect = (index) => {
    setSelectedIndex(index);
    onSelect(teams[index]);
  };

  return (
    <Carousel onSelect={handleSelect} variant="dark"  interval={null} >
      {teams.map((team, index) => (
        <Carousel.Item key={index}>
          <Cards
            name={team.name}
            logo={team.logo}
            width="200px"
            height="200px"
            fontSize="20px"
            checkIfClickable={checkIfClickable}
            tooltipMessage="Seleccionar Equipo"
            disableModal={true}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselCards;
