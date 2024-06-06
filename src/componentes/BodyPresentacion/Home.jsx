import React from "react";
import "./Home.css";
import InformacionUsuario from "../InformacionMembresia/organisms/InformacionUsuario";
import InformacionGeneral from "../InformacionRecursos/InformacionGeneral";
import Notificaciones from "../Notificaciones/Notificaciones";
import ConfirmarClases from "../ConfirmacionClases/ConfirmarClases";
import CancelarClases from "../CancelacionClases/CancelarClases";
import CoachesPage from "../TarjetaEntrenadores/CoachesPage";
import InfoClaseSus from "../InfoClasesSuscrita/InfoClaseSus";
import VentanaGracias from "../VentanaGraciasSus/VentanaGracias";
import PaginaComunidad from "../Comunidad/pages/PaginaComunidad";
import BarraNav from "../NavLink/organisms/BarraNav";
import TarjetaClaseASus from "../TarjetaClaseASuscribirse/TarjetaClaseASus";
import TarjetaDesClase from "../TarjetaDescripciónClase/InfoDesClase";

function Home() {
  return (
    <>
      <header className="header">
        <h1 className="no-margin no-padding">Desarrollo de los componentes</h1>
      </header>
      {/* FIN HEADER */}
      <div className="contenedor">
        <div className="contenido-principal">
          <div className="componentes-contenedor">
            <InformacionUsuario />
          </div>
          <div className="componentes-contenedor">
            <Notificaciones />
          </div>
          <div className="componentes-contenedor-general">
            <InformacionGeneral />
          </div>
          <div className="componentes-contenedor">
            <ConfirmarClases />
          </div>
          <div className="componentes-contenedor">
            <CancelarClases />
          </div>
          <div className="componentes-contenedor">
            <CoachesPage />
          </div>
          <div className="componentes-contenedor">
            <InfoClaseSus />
          </div>
          <div className="componentes-contenedor">
            <VentanaGracias />
          </div>
          <div className="componentes-contenedor">
            <PaginaComunidad />
          </div>
          <div className="componentes-contenedor">
            <BarraNav />
          </div>
          <div className="componentes-contenedor">
            <TarjetaClaseASus />
          </div>
          {/* <div className="componentes-contenedor">
            <TarjetaDesClase />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
