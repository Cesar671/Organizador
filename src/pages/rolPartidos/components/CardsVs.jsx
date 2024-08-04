import React from "react";
import { Cards } from "./cards";

export const CardsVs = ({ name1, logo1, name2, logo2 }) => {
  const checkIfClickable = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };
  return (
    <div style={{ height: "170px", width: "300px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.6)" }} className="bg-white mb-2 rounded-3">
      <h1 className="titulo1 text-white rounded-top-3">
        {name1} vs {name2}
      </h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className="mx-2">
          <Cards
            name={name1}
            logo={logo1}
            width="120px"
            height="120px"
            fontSize="10px"
            checkIfClickable={checkIfClickable}
            tooltipMessage="Mostrar"
            disableModal={true}
          />
        </div>
        <div className="mx-2">
          <Cards
            name={name2}
            logo={logo2}
            width="120px"
            height="120px"
            fontSize="10px"
            checkIfClickable={checkIfClickable}
            tooltipMessage="Mostrar"
            disableModal={true}
          />
        </div>
      </div>
    </div>
  );
};
