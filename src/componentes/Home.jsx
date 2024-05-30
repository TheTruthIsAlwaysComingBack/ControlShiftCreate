import React from "react";
import "./Home.css";
import InformacionUsuario from "./InformacionUsuario";

function Home() {
  return (
    <>
      <header className="header">
        <h1 className="no-margin no-padding">Desarrollo de los componentes</h1>
      </header>
      {/* FIN HEADER */}
      <div className="contenedor">
        <div className="contenido-principal">
          <p className="no-margin">Primer componente</p>
          <div className="info-usuario">
            <InformacionUsuario />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
