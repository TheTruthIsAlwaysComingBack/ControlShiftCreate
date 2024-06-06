import React, { useEffect, useState } from "react";
import DateInfoTarClaseASus from "../TarjetaClaseASuscribirse/DateInfoTarClaseASus";
import "./InfoClaseSus.css";

const InfoClaseSus = () => {
  const [classData, SetClassData] = useState([]);

  useEffect(() => {
    fetch("https://661037cf0640280f219c98d3.mockapi.io/api/gym/Clases")
      .then((response) => response.json())
      .then((data) => SetClassData(data));
  }, []);

  return (
    <div className="InfoClaseConTiempo">
      <h1 className="TituloClaseConTiempo">HORA</h1>
      {classData.map((classInfo) => (
        <DateInfoTarClaseASus
          key={classInfo.id}
          day={classInfo.Day}
          date1={classInfo.Date}
          date2={classInfo.Date2}
          slots={`${classInfo.id} cupos de ${classInfo.Cupos}`}
        />
      ))}
    </div>
  );
};

export default InfoClaseSus;
