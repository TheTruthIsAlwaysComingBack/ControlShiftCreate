import React, { useState } from 'react'
import MensajeCanceClas from "./MensajeCanceClas"
import InputMotivoCanceClase from './InputMotivoCanceClase'
import BotonAceptarCance from './BotonAceptarCance'
import { guardarMensajeEnBD } from './guardarMensajeEnBD'
import "./CancelarClases.css"


const CancelarClases = () => {
  const [mensaje, setMensaje] = useState(''); 

  const handleGuardarMensaje = () => {
    guardarMensajeEnBD(menjase)
  }


  return (
    <div className='contenedor-principal'>
      <MensajeCanceClas
        titulo='OH NO!!' 
        text='Lamentamos que nos dejes, podrías comentarnos el motivo por favor (opcional)' 
      />
      <InputMotivoCanceClase
        placeholder='Escribe el motivo'
        value={mensaje}
        onChange={(evento) => setMensaje(evento.target.value)} 
      />
      <BotonAceptarCance
        text='Aceptar' 
        onClick={handleGuardarMensaje} 
      />
    </div>
  )
}

export default CancelarClases