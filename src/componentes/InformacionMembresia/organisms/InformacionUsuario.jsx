import React from "react";
import "./InformacionUsuario.css";
import Membresia from "../molecules/Membresia";
import DatosUsuario from "../molecules/DatosUsuario";

const InformacionUsuario = () => {
  return (
    <div className="contenido-usuario">
      <DatosUsuario />
      <Membresia />
    </div>
  );
};

export default InformacionUsuario;
