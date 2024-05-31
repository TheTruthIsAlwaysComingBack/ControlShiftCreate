import React from "react";
import "./CompUsuario21.css";

const CompUsuario21 = () => {
  return (
    <div className="class-info-container">
      <div className="class-info">
        <div className="coach-info">
          <img src="../assets/Entrenador1.png" alt="Coach" className="coach-image" />
          <div className="coach-name">ALEX PHOENIX</div>
          <div className="coach-role">BODYBUILDING COACH</div>
        </div>
        <div className="class-details">
          <div className="detail">
            <span className="label">Día</span>
            <span className="value">                Lunes 27/5/24</span>
          </div>
          <div className="detail">
            <span className="label">Hora</span>
            <span className="value">           12:00pm a 13:00pm</span>
          </div>
          <div className="detail">
            <span className="label">Cupos</span>
            <span className="value">        20 cupos de 30</span>
          </div>
          <div className="buttons">
            <button className="cancel-button">CANCELAR 💔</button>
            <button className="confirm-button">CONFIRMAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompUsuario21;
