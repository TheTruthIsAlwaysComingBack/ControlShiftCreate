import React, { useState, useEffect } from "react";
import "./Notificaciones.css";
import Imagen from "../../assets/Vector.svg";

const Notificaciones = () => {
  const [notificaciones, setNotificaciones] = useState(null);

  // Simulación de llamada a una API
  useEffect(() => {
    const fetchNotificaciones = async () => {
      const data = [
        {
          descripcion:
            "No te pierdas de nuestras nuevas ofertas, comunicate con el gimnasio",
          hora: "hace 1 hora",
        },
        {
          descripcion: "Nueva clase de yoga disponible los miércoles",
          hora: "hace 3 horas",
        },
        {
          descripcion: "Descuento del 20% en la tienda de suplementos",
          hora: "hace 1 día",
        },
        {
          descripcion:
            "Recordatorio: El gimnasio estará cerrado el 25 de diciembre",
          hora: "hace 2 días",
        },
      ];
      setNotificaciones(data);
    };

    fetchNotificaciones();
  }, []);

  if (!notificaciones) return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos

  return (
    <div className="contenido-notificaciones">
      {notificaciones.map((notificacion, index) => (
        <div key={index} className="notificacion">
          <div className="imagen-notificaciones">
            <img src={Imagen} alt="imagen de la notificacion" />
          </div>
          <div className="descripcion-not">
            <p className="info-not">{notificacion.descripcion}</p>
            <p className="hora">{notificacion.hora}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notificaciones;
