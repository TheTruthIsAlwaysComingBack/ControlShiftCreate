import React from 'react';
import './PerfEntrenador.css';

const PersonalTrainerProfile = () => {
  return (
    <div className="personal-trainer-profile">
      <div className="profile-header">
        <h1 className="profile-name">Alex Pheonix</h1>
        <a href="mailto:alexpheonix@gmail.com" className="profile-email">alexpheonix@gmail.com</a>
      </div>

      <div className="profile-stats">
        <div className="stat">
          <label>Peso:</label>
          <span>80 kg</span>
        </div>
        <div className="stat">
          <label>Altura:</label>
          <span>1.80 m</span>
        </div>
        <div className="stat">
          <label>Edad:</label>
          <span>32 años</span>
        </div>
      </div>

      <div className="profile-classes">
        <h2>Clases:</h2>
        <ul>
          <li>Crossfit</li>
          <li>Plyometria</li>
          <li>Boxeo</li>
        </ul>
      </div>

      <div className="profile-schedule">
        <h2>Horarios:</h2>
        <p>09:00-12:00</p>
        <h2>Días:</h2>
        <ul>
          <li>Lunes</li>
          <li>Miércoles</li>
          <li>Viernes</li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalTrainerProfile;