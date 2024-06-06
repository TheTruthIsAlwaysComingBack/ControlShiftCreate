import React from "react";
import "./CabezalInfoClaseSus.css";

const CabezalInfoClaseSus = ({ nivel, text }) => {
  const Tag = `h${nivel}`;
  return <Tag className={`CabezalInfoClaseSus nivel-${nivel}`}>{text}</Tag>;
};

export default CabezalInfoClaseSus;
