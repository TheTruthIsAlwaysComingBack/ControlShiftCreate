import React from "react";
import "./Notificaciones.css";
import Imagen from "../../assets/Vector.svg";

const Notificaciones = () => {
  return (
    <div className="contenido-notificaciones">
      <div className="imagen-notificaciones">
        <img src={Imagen} alt="imagen de la notificacion" />
      </div>

      <div className="descripcion-not">
        <p className="info-not">
          No te pierdas de nuestras nuevas ofertas, comunicate con el gimnasio
        </p>
        <p className="hora">hace 1 hora</p>
      </div>
    </div>
  );
};

export default Notificaciones;
