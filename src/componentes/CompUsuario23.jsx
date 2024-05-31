import React from "react";
import "./CompUsuario23.css";

const CompUsuario23 = () => {
  return (
    <div className="trainer-profile">
      <div className="header">
        <img className="profile-pic" src="path/to/profile-pic.jpg" alt="Alex Pheonix" />
        <div className="trainer-info">
          <h1>Alex Pheonix</h1>
          <p>alexpheonix@gmail.com</p>
          <div className="rating">
            <span>★★★★☆</span>
          </div>
        </div>
      </div>
      <div className="schedule">
        <p>Miércoles</p>
        <p>Viernes</p>
      </div>
      <button className="rate-button">Calificar entrenador</button>
      <div className="rating-stars">
        <span>★★★★★</span>
        <button>Añadir calificación</button>
      </div>
      <div className="reviews">
        <h2>Opiniones del entrenador</h2>
        <textarea placeholder="Escribir opinión sobre el entrenador"></textarea>
        <div className="review">
          <p>El entrenador es bueno y las clases de boxeo son intensas, pero las sesiones de pliometría necesitan más estructura...</p>
        </div>
        <div className="review">
          <p>Buena energía y clases desafiantes. Las sesiones de CrossFit y pliometría son efectivas, pero el boxeo necesita más enfoque en técnicas defensivas...</p>
        </div>
        <div className="review">
          <p>Clases intensas y bien diseñadas.</p>
        </div>
        <button>Leer más opiniones</button>
      </div>
    </div>
  );
};

export default CompUsuario23;
