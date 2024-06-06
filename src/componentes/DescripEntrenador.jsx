import React from 'react'
import "./DescripEntrenador.css"
import Entrenador21 from '../assets/Entrenador21.png';

const DescripEntrenador = () => {

  return (
    <div className='descrip-container'>
        <img src={Entrenador21} alt="" />
        <div className='text-container'>
            <h3>Alex Pheonix</h3>
            <p>alexpheonix1@gmail.com</p>
        </div>
    </div>
  )
}

export default DescripEntrenador;
