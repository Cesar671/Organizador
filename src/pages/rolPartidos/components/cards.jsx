import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
import ModalForm from "./ModalForm";

export const Cards = ({ name, logo, width, height, fontSize, checkIfClickable }) => {
  const [showModal, setShowModal] = useState(false);
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    checkIfClickable().then((result) => {
      setIsClickable(result);
    });
  }, [checkIfClickable]);

  const handleShowModal = () => {
    if (isClickable) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="col-md-2 mb-4">
        <div 
          className={`card card-custom ${isClickable ? '' : 'card-disabled'}`}
          style={{
            borderRadius: "15px",
            overflow: "hidden",
            position: "relative",
            width: width,
            height: height,
            cursor: isClickable ? 'pointer' : 'not-allowed',
          }}
          onClick={handleShowModal}
        >
          <img src={logo} className="card-img" alt={`${name} logo`} />
          <div className="card-overlay">
            <h5 className="card-title text-white" style={{ fontSize: fontSize }}>{name}</h5>
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
