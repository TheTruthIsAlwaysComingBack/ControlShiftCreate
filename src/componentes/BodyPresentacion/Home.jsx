import React from "react";
import "./Home.css";
import InformacionUsuario from "../InformacionMembresia/InformacionUsuario";
import InformacionGeneral from "../InformacionRecursos/InformacionGeneral";
import Notificaciones from "../Notificaciones/Notificaciones";

function Home() {
  return (
    <>
      <header className="header">
        <h1 className="no-margin no-padding">Desarrollo de los componentes</h1>
      </header>
      {/* FIN HEADER */}
      <div className="contenedor">
        <div className="contenido-principal">
          <p className="no-margin">Primer Componente</p>
          <div className="componentes-contenedor">
            <InformacionUsuario />
          </div>
          <p className="no-margin">Segundo Componente</p>
          <div className="componentes-contenedor">
            <Notificaciones />
          </div>
          <p className="no-margin">Tercer Componente</p>
          <div className="componentes-contenedor">
            <InformacionGeneral />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
