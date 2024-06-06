import React from 'react'
import "./DescripEntrenador.css"
import Entrenador2 from '../assets/Entrenador2.png';

const DescripEntrenador = () => {

  return (
    <div className='descrip-container'>
        <img src={Entrenador2} alt="" />
        <div>
            <h3>Alex Pheonix</h3>
            <p>alexpheonix1@gmail.com</p>
        </div>
    </div>
  )
}

export default DescripEntrenador;
