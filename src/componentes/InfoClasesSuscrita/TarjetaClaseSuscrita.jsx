import React, {useEffect, useState} from "react";
import InfoClaseSus from "./InfoClaseSus";


const TarjetaClaseSuscrita = () => {
  const [ claseSelleccionada, setClaseSeleccionada] = useState(null);

  useEffect(() =>{
    const storedClass = localStorage.getItem('claseSeleccionada');
    if (storedClass) {
      setClaseSeleccionada(JSON.parse(storedClass));  
    }
  }, []);

  return (
    <div className="ClaseInfoTarjeta">
      {claseSelleccionada ? (
        <div>
          <h2>Clase seleccionada:</h2>
          <p>Día: {claseSelleccionada.Day}</p>
          <p>Hora: {new Date(claseSelleccionada.selectedTime).toLocaleString('es-ES', { dateStyle: 'long', timeStyle: 'short' })}</p>
        </div>
      ) : (
        <p>No hay clases seleccionadas.</p>
      )}
      <InfoClaseSus />
    </div>
  );
};

export default TarjetaClaseSuscrita;
