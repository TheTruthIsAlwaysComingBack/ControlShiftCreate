import React from 'react';
import './Rutina.css'; // Asegúrate de que este archivo CSS exista y esté en el mismo directorio

const Rutina = () => {
  return (
    <div className="rutina">
      <div className="header">
        <div className="back-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </div>
        <h2 className="titulo">RUTINA</h2>
      </div>
      <div className="dias">
        <div className="dia activo">
          <p>LUN</p>
          <p>20/5</p>
        </div>
        <div className="dia">
          <p>MAR</p>
          <p>21/5</p>
        </div>
        <div className="dia">
          <p>MIR</p>
          <p>22/5</p>
        </div>
        <div className="dia">
          <p>JUE</p>
          <p>23/5</p>
        </div>
        <div className="dia">
          <p>VIE</p>
          <p>24/5</p>
        </div>
        <div className="dia">
          <p>SAB</p>
          <p>25/5</p>
        </div>
        <div className="dia">
          <p>DOM</p>
          <p>26/5</p>
        </div>
      </div>
      <p className="descripcion"> - Pecho y Triceps</p>
      <div className="ejercicios">
        <div className="ejercicio">
          <div className="numero">1</div> 
          <div className="contenido-ejercicio"> {/* Nuevo contenedor */}
            <h3 className="titulo-ejercicio">CALENTAMIENTO</h3>
            <ul className="lista">
              <li>5 minutos de saltar la cuerda</li>
              <li>2 series de 10 flexiones de brazos</li>
            </ul>
          </div>
        </div>
        <div className="ejercicio">
          <div className="numero">2</div>
          <div className="contenido-ejercicio">
            <h3 className="titulo-ejercicio">PRESS DE BANCA</h3>
            <ul className="lista">
              <li>4 series de 10 repeticiones</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rutina;