import React, { createContext, useContext, useState } from "react";

const ContextoSuscripcion = createContext();

export const ContextoProveedor = ({ children }) => {
  const [ selectedClass, setSelectedClass] = useState(null);
  return (
    <ContextoSuscripcion.Provider value={{ selectedClass, setSelectedClass }}>
      {children}
    </ContextoSuscripcion.Provider>
  );
};

export const useSubscription = () => useContext(ContextoSuscripcion);
