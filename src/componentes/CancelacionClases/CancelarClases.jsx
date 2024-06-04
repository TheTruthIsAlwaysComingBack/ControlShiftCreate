import React, { useState } from 'react'
import "./CancelarClases.css"
import { guardarMensajeEnBD } from './guardarMensajeEnBD';

const CancelarClases = () => {
  const [mensaje, setMensaje] = useState('');
  function handleGuardarMensaje() {
    const mensaje = getMensaje();
    guardarMensajeEnBD(mensaje);
  }
  return (
    <div className='ContenedorPrincipal'>
        <h1 className='TituloN'>OH NO!!</h1>
        <h3 className='MensajeN'>Lamentamos que nos dejes, podrias comentarnos el motivo por favor (opcional)</h3>
        <input 
            type="text"
            name=""
            id=""
            placeholder='Escribe el motivo'/>
            value={mensaje}
            onChange={(evento) => setMensaje(evento.target.value)}
        <button className='BotonAceptarN'onClick={() => handleGuardarMensaje()}>Aceptar</button>
    </div>
  )
}

export default CancelarClases