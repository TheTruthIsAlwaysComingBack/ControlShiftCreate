import React from 'react'
import "./CardEntrenador.css";

const CardEntrenador = () => { 

    const people = [
        {
          name: 'Joaquin Phoenix',
          skill: 'Agilidad',
          imgSrc: '../src/assets/Entrenador2.png',
        },
    ]
    
  return (
    <div className="app-container">
      {people.map((person, index) => (
        <div key={index} className="person-card">
          <img src={person.imgSrc} alt={person.name} className="person-image" />
          <div className="overlay">
            <div className="text text-pink">{person.name}</div>
            <div className="text">{person.skill}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardEntrenador;


