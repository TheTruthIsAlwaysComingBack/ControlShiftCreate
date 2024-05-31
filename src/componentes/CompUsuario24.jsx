import React from "react";
import "./CompUsuario24.css";

const CompUsuario24 = () => {
  return (
    <div className="chat-container">
      <header className="chat-header">
        <div className="back-button">⟵</div>
        <div className="chat-title">
          <span>COMUNIDAD</span>
          <span className="members-count">87 Miembros</span>
        </div>
        <div className="profile-icon">👤</div>
      </header>
      <div className="chat-messages">
        <div className="message received">
          <div className="message-avatar">👤</div>
          <div className="message-content">
            <p className="textMessage" >El entrenadro Alex Pheonix me ayudo bastante con mis rutinas de piernas, me negaba pero con su ayuda ahora hago 6 sets</p>
            <span className="message-time">08:30 A.M.</span>
          </div>
        </div>
        <div className="message sent">
          <div className="message-avatar">👤</div>
          <div className="message-content">
            <p className="textMessage" >El entrenador Alex A veces no viene en las clases acordadas :(</p>
            <span className="message-time">09:23 A.M.</span>
          </div>
        </div>
        <div className="message sent">
          <div className="message-avatar">👤</div>
          <div className="message-content">
            <p className="textMessage" >Es porque tiene otro trabajo y aveces no puede llegar, pero creeme que si le pone empeño al gimansio.</p>
            <span className="message-time">09:24 A.M.</span>
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
