import React from "react";
import { CardsVs } from "../rolPartidos/components/CardsVs";
import teamsData from "../rolPartidos/components/teamsVs.json";

const PartidosDelDia = () => {
  return (
    <div className="w-100">
      <h5 className="w-50 ps-5 ms-5 " style={{color:'white',height:'40px',backgroundColor:'#5197BF'}}>10 DE AGOSTO CAMPEONATO DE COCHABAMBA</h5>
      <div className="d-flex  w-100 px-5">
        <div className="w-75">
          <div
            className="bg-white d-flex rounded-4 w-90 my-1"
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.6)" }}
          >
            <div className="p-3 flex-shrink-0">
              <label className="text-white bg-black px-2 rounded-2">
                Varonces
              </label>
              <label className="text-white bg-secondary mx-2 px-2 rounded-2">
                En espera
              </label>
              <br />
              <label className="pt-2">Cancha del Abra</label>
              <br />
              <label className="pt-2">19:00 - 21:00</label>
              <br />
              <label className="pt-2 text-secondary">Cochabamba</label>
            </div>
            <div className="p-1 ps-5  flex-grow-1">
              <div className="d-flex align-items-center py-1 border-bottom border-secondary">
                <img
                  src="/club2.jpg"
                  alt=""
                  className="rounded-5"
                  style={{ height: "80px", width: "90px" }}
                />
                <h5 className="ps-5">Club San Martin</h5>
                <h4 className="px-5 ms-auto mb-0">
                  <strong>2</strong> 21 21
                </h4>
              </div>
              <div className="d-flex py-1 align-items-center">
                <img
                  src="/club2.jpg"
                  alt=""
                  className="rounded-5"
                  style={{ height: "80px", width: "90px" }}
                />
                <h5 className="ps-5">Club Olympic</h5>
                <h4 className="px-5 ms-auto mb-0">
                  <strong>0</strong>19 18
                </h4>
              </div>
            </div>
          </div>
          <div
            className="bg-white d-flex rounded-4 w-80 my-1"
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.6)" }}
          >
            <div className="p-3 flex-shrink-0">
              <label className="text-white bg-black px-2 rounded-2">
                Varonces
              </label>
              <label className="text-white bg-success mx-2 px-2 rounded-2">
                En juego
              </label>
              <br />
              <label className="pt-2">Cancha del Abra</label>
              <br />
              <label className="pt-2">19:00 - 21:00</label>
              <br />  
              <label className="pt-2 text-secondary">Cochabamba</label>
            </div>
            <div className="p-1 ps-5  flex-grow-1">
              <div className="d-flex align-items-center py-1 border-bottom border-secondary">
                <img
                  src="/club2.jpg"
                  alt=""
                  className="rounded-5"
                  style={{ height: "80px", width: "90px" }}
                />
                <h5 className="ps-5">Club San Martin</h5>
                <h4 className="px-5 ms-auto mb-0">
                  <strong>2</strong> 21 21
                </h4>
              </div>
              <div className="d-flex py-1 align-items-center">
                <img
                  src="/club2.jpg"
                  alt=""
                  className="rounded-5"
                  style={{ height: "80px", width: "90px" }}
                />
                <h5 className="ps-5">Club Olympic</h5>
                <h4 className="px-5 ms-auto mb-0">
                  <strong>0</strong>19 18
                </h4>
              </div>
            </div>
          </div>
          <div
            className="bg-white d-flex rounded-4 w-80 my-1"
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.6)" }}
          >
            <div className="p-3 flex-shrink-0">
              <label className="text-white bg-black px-2 rounded-2">
                Varonces
              </label>
              <label className="text-white bg-danger mx-2 px-2 rounded-2">
                Concluido
              </label>
              <br />
              <label className="pt-2">Cancha del Abra</label>
              <br />
              <label className="pt-2">19:00 - 21:00</label>
              <br />
              <label className="pt-2 text-secondary">Cochabamba</label>
            </div>
            <div className="p-1 ps-5  flex-grow-1">
              <div className="d-flex align-items-center py-1 border-bottom border-secondary">
                <img
                  src="/club2.jpg"
                  alt=""
                  className="rounded-5"
                  style={{ height: "80px", width: "90px" }}
                />
                <h5 className="ps-5">Club San Martin</h5>
                <h4 className="px-5 ms-auto mb-0">
                  <strong>2</strong> 21 21
                </h4>
              </div>
              <div className="d-flex py-1 align-items-center">
                <img
                  src="/club2.jpg"
                  alt=""
                  className="rounded-5"
                  style={{ height: "80px", width: "90px" }}
                />
                <h5 className="ps-5">Club Olympic</h5>
                <h4 className="px-5 ms-auto mb-0">
                  <strong>0</strong>19 18
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="w-25 px-4">
          <h5 className="align-items-center rounded-top-3" style={{color:'white',height:'40px',width:'300px',backgroundColor:'#183153'}}>1D - 2H - 3M</h5>
          <div >
            {teamsData.slice(0, 3).map((team, index) => (
              <React.Fragment key={index}>
                {team.equiposVS.slice(0, 1).map((match, idx) => (
                  <CardsVs
                    key={idx}
                    name1={team.name}
                    logo1={team.logo}
                    name2={match.name}
                    logo2={match.logo}
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PartidosDelDia;
