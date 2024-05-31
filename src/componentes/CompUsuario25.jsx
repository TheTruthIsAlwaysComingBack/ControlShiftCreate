import React from "react";
import "./CompUsuario25.css";

const CompUsuario25 = () => {
  return (
    <div className="class-info">
      <h1>INFORMACIÓN DE LA CLASE</h1>
      <div className="class-description">
        <h2>Zumba</h2>
        <p>
          Zumba Fitness es un programa de entrenamiento dinámico que combina ritmos latinos explosivos con movimientos de baile fáciles de seguir. Quema calorías, tonifica músculos, reduce el estrés y mejora tu estado de ánimo, todo mientras te diviertes en un ambiente fiestero. ¡Únete a la comunidad Zumba y descubre una forma contagiosamente divertida de ponerte en forma!
        </p>
      </div>
      <div className="class-details">
        <div className="coach-info">
          <img className="coach-pic" src="path/to/coach-pic.jpg" alt="Alex Phoenix" />
          <p>Alex Phoenix</p>
          <p>Certified Coach</p>
        </div>
        <div className="schedule-info">
          <p><strong>Día:</strong> Lunes 27/5/24</p>
          <p><strong>Hora:</strong></p>
          <ul>
            <li>12:00pm a 13:00pm</li>
            <li>18:00pm a 19:00pm</li>
          </ul>
          <p><strong>Cupos:</strong> 20 cupos de 30</p>
        </div>
      </div>
      <button className="subscribe-button">SUSCRIBIRSE :)</button>
    </div>
  );
};

export default CompUsuario25;
