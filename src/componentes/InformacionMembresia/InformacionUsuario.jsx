import React from "react";
import "./InformacionUsuario.css";

const InformacionUsuario = () => {
  return (
    <div className="contenido-usuario">
      <div className="info-principal">
        <div className="icono-usuario">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2b2024"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
          </svg>
        </div>

        <div className="caracteristicas">
          <p className="name no-margin">Juan Vidal</p>
          <div className="descripcion-estado">
            <p className="estado no-margin">Activo</p>
            <p className="edad no-margin">23 Años</p>
            <p className="sexo no-margin">Hombre</p>
          </div>
        </div>
      </div>

      <div className="info-membresia">
        <div className="bg-mem">
          <p className="tipo-mem no-margin">Golden Membership</p>
          <p className="info-exp no-margin">
            Expira en : <span>31 - agosto 2024</span>
          </p>
        </div>

        <div className="fecha-mem">
          <div className="adquirido">
            <p className="gray no-margin">Adquirido en</p>
            <p className="no-margin">31 - agosto 2024</p>
          </div>
          <div className="activado">
            <p className="gray no-margin">Activado en</p>
            <p className="no-margin">31 - agosto 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformacionUsuario;
