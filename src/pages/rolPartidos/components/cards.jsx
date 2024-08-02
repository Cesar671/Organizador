// src/components/Cards.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';
import ModalForm from './ModalForm';

export const Cards = ({ name, logo }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="col-md-3 mb-4">
        <div className="card card-custom" style={{ borderRadius: '15px', overflow: 'hidden', position: 'relative' }} onClick={handleShowModal}>
          <img src={logo} className="card-img" alt={`${name} logo`} />
          <div className="card-overlay">
            <h5 className="card-title">{name}</h5>
            <button className="btn btn-link">Ver Rol</button>
          </div>
        </div>
      </div>

      <ModalForm show={showModal} handleClose={handleCloseModal} />
    </>
  );
};
