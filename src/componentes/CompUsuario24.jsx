import React from "react";
import "./CompUsuario24.css";

const CompUsuario24 = () => {
  return (
    <div className="chat-container">
      <header className="chat-header">
        <div className="back-button">⟵</div>
        <div className="chat-title">
          <span>COMUNIDAD</span>
          <span className="members-count">42 Miembros</span>
        </div>
        <div className="profile-icon">👤</div>
      </header>
      <div className="chat-messages">
        <div className="message received">
          <div className="message-avatar">👤</div>
          <div className="message-content">
            <p>No se olviden de recordar que al principio, se usa pesos ligeros para practicar la técnica. A medida que te sientas más cómodo y seguro con la forma, puedes aumentar gradualmente la carga. Si no se pueden lastimar y es mejor evitar lesiones a largo plazo.</p>
            <span className="message-time">08:30 A.M.</span>
          </div>
        </div>
        <div className="message sent">
          <div className="message-avatar">👤</div>
          <div className="message-content">
            <p>Gracias bro.</p>
            <span className="message-time">08:30 A.M.</span>
          </div>
        </div>
        <div className="message sent">
          <div className="message-avatar">👤</div>
          <div className="message-content">
            <p>Gracias bro.</p>
            <span className="message-time">08:31 A.M.</span>
          </div>
        </div>
      </div>
      <div className="chat-input-container">
        <input type="text" className="chat-input" placeholder="Escribe aquí ..." />
        <button className="send-button">➤</button>
      </div>
    </div>
  );
};

export default CompUsuario24;
