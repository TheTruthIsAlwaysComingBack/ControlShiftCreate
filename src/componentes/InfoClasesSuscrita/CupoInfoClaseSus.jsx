import React from 'react'
import CabezalInfoClaseSus from './CabezalInfoClaseSus'
import ParraHoraClaseSus from './ParraHoraClaseSus'

const CupoInfoClaseSus = ({id, cupos}) => (
  <div className='cupo-info'>
    <CabezalInfoClaseSus nivel={2} text='Cupos' />
    <ParraHoraClaseSus text={`${id} cupos de ${cupos}`} type='primary' />
  </div>
);

export default CupoInfoClaseSus