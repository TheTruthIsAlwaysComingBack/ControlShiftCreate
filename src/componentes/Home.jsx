import React from "react";
import "./Home.css";
import InformacionUsuario from "./InformacionUsuario";
import InformacionGeneral from "./InformacionGeneral";
import Notificaciones from "./Notificaciones";
import CompUsuario21 from "./CompUsuario21";
import CompUsuario22 from "./CompUsuario22";
import CompUsuario24 from "./CompUsuario24";
import CompUsuario25 from "./CompUsuario25";
import CompUsuario23 from "./CompUsuario23";
import ConfirmarClases from "./ConfirmacionClases/ConfirmarClases";
import CancelarClases from "./CancelacionClases/CancelarClases";
import CoachesPage from "./TarjetaEntrenadores/CoachesPage";
import VentanaGracias from "./VentanaGraciasSus/VentanaGracias";
import TarjetaClaseSuscrita from "./InfoClasesSuscrita/TarjetaClaseSuscrita"
import TarjetaClaseASus from "./TarjetaClaseASuscribirse/TarjetaClaseASus";
import TarjetaDesClase from "./TarjetaDescripciónClase/TarjetaDesClase";



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
          <p className="no-margin">Confirmar Clases</p>
          <div className="componentes-contenedor">
            <ConfirmarClases />
          </div>
          <p className="no-margin">Cancelar Clases</p>
          <div className="componentes-contenedor">
            <CancelarClases />
          </div>
          <p className="no-margin">Tarjeta Entrenadores</p>
          <div className="componentes-contenedor">
            <CoachesPage />
          </div>
          <p className="no-margin">Información Horario Clase Para Suscribirse</p>
          <div className="componentes-contenedor">
            <TarjetaClaseASus />
          </div>
          <p className="no-margin">Información Horario De Clases a las que esta suscrita</p>
          <div className="componentes-contenedor">
            <TarjetaClaseSuscrita />
          </div>
          <p className="no-margin">Ventana Gracias</p>
          <div className="componentes-contenedor">
            <VentanaGracias />
          </div>
          <p className="no-margin">Tarjeta Información de la clase</p>
          <div className="componentes-contenedor">
            <TarjetaDesClase />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
