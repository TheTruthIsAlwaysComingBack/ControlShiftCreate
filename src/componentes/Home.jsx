import React from "react";
import "./Home.css";
import InformacionUsuario from "./InformacionUsuario";
import Notificaciones from "./Notificaciones";
import CompUsuario21 from "./CompUsuario21";
import CompUsuario22 from "./CompUsuario22";
import CompUsuario24 from "./CompUsuario24";
import CompUsuario25 from "./CompUsuario25";
import CompUsuario23 from "./CompUsuario23";

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
          <p className="no-margin">Componente Usuario 21</p>
          <div className="componentes-contenedor">
            <CompUsuario21 />
          </div>
          <p className="no-margin">Componente Usuario 22</p>
          <div className="componentes-contenedor">
            <CompUsuario22 />
          </div>
          <p className="no-margin">Componente Usuario 23</p>
          <div className="componentes-contenedor">
            <CompUsuario23 />
          </div>
          <p className="no-margin">Componente Usuario 24</p>
          <div className="componentes-contenedor">
            <CompUsuario24 />
          </div>
          <p className="no-margin">Componente Usuario 25</p>
          <div className="componentes-contenedor">
            <CompUsuario25 />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
