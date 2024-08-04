import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
import ModalForm from "./ModalForm";

export const Cards = ({ name, logo, width, height, fontSize, checkIfClickable, tooltipMessage, disableModal }) => {
  const [showModal, setShowModal] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    checkIfClickable().then((result) => {
      setIsClickable(result);
    });
  }, [checkIfClickable]);

  const handleShowModal = () => {
    if (isClickable && !disableModal) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

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
            cursor: 'pointer',
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.6)"
          }}
          onClick={handleShowModal}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={logo} className="card-img" alt={`${name} logo`} />
          <div className="card-overlay">
            <h5 className="card-title text-white" style={{ fontSize: fontSize }}>{name}</h5>
          </div>
          {showTooltip && isClickable && (
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              fontSize: "16px",
              pointerEvents: "none"
            }}>
              {tooltipMessage}
            </div>
          )}
        </div>
      </div>

      {!disableModal && (
        <ModalForm
          show={showModal}
          handleClose={handleCloseModal}
          name={name}
          logo={logo}
        />
      )}
    </>
  );
};
