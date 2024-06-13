import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../componentes/BodyPresentacion/Presentacion";
import PersonalTrainerProfile from "../componentes/PerfEntrenador/PerfEntrenador";

const Navegacion = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PerfEntrenador" element={<PersonalTrainerProfile />} />
        </Routes>
      </Router>
    </>
  );
};

export default Navegacion;
