// src/components/Cards.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
import ModalForm from "./ModalForm";

export const Cards = ({ name, logo, width, height }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="col-md-2 mb-4">
        <div
          className="card card-custom"
          style={{
            borderRadius: "15px",
            overflow: "hidden",
            position: "relative",
            width: width, 
            height: height, 
          }}
          onClick={handleShowModal}
        >
          <img src={logo} className="card-img" alt={`${name} logo`} />
          <div className="card-overlay">
            <h5 className="card-title text-white">{name}</h5>
          </div>
        </div>
      </div>

      <ModalForm
        show={showModal}
        handleClose={handleCloseModal}
        name={name}
        logo={logo}
      />
    </>
  );
};
