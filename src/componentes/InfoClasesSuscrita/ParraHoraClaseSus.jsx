import React from 'react'
import "./ParraHoraClaseSus.css"

const ParraHoraClaseSus = ({text, type}) => (
  <p className={`ParraHoraClaseSus ${type}`}>{text}</p>
);

export default ParraHoraClaseSus