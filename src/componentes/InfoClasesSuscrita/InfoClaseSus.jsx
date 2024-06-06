import React, { useEffect, useState } from 'react'
import DateInfoClaseSus from './DateInfoClaseSus'
import CupoInfoClaseSus from './CupoInfoClaseSus'
import CabezalInfoClaseSus from './CabezalInfoClaseSus'
import "./InfoClaseSus.css"

const InfoClaseSus = () => {
    const [classes, SetClasses] = useState([]);
    useEffect(() => {
        fetch('https://661037cf0640280f219c98d3.mockapi.io/api/gym/Clases')
        .then(response => response.json())
        .then(data => SetClasses(data));
    }, []);

  return (
    <div className='ClaseSusInfo'>
        <CabezalInfoClaseSus nivel={1} text='HORA' />
        {classes.length > 0 ? (
            classes.map(clase => (
                <div key={clase.id} className='TarjetaClaseSus'>
                    <DateInfoClaseSus day={clase.Day} date={clase.Date} />
                    <CupoInfoClaseSus id={clase.id} cupos={clase.Cupos} />
                </div>
            ))
        ) : (
            <p>Loading...</p>
        )}
    </div>
  );
};

export default InfoClaseSus