import React from "react";
import CabezalInfoClaseSus from "./CabezalInfoClaseSus";
import ParraHoraClaseSus from "./ParraHoraClaseSus";

const DateInfoClaseSus = ({ day, date }) => {
  const daysMap = {
    Monday: "Lunes",
    Tuesday: "Martes",
    Wednesday: "Miércoles",
    Thursday: "Jueves",
    Friday: "Viernes",
    Saturday: "Sábado",
    Sunday: "Domingo",
  };
  const formatteDate = new Date(date).toLocaleString('es-ES', {
    dateStyle: 'long',
    timeStyle: 'short'
  });
  return (
    <div className="date-info">
        <CabezalInfoClaseSus nivel={2} text='Día y Hora' />
        <ParraHoraClaseSus text={`${daysMap[day]} ${formatteDate}`} type='primary' />
    </div>
  );
};

export default DateInfoClaseSus;
