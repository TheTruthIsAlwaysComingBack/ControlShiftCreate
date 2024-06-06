import React from 'react'
import "./Consejo.css"

const Consejo = () => {

  const consejo = "Escucha a tu cuerpo, se constante y no te compares con los demas. Cada persona tiene su propio ritmo y progreso. Celebra tus propios logros !"

  return (
    <div className='entre-container'>
        <h2>CONSEJO DEL DIA!</h2>
        <p>{consejo}</p>
    </div>
  )
}

export default Consejo;
