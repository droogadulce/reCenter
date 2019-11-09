import React from 'react';

const Schedule = ({ schedule }) => {
  const {
    lunes,
    martes,
    miercoles,
    jueves,
    viernes,
    sabado,
    domingo,
  } = schedule;
  return (
    <div>
      <p>
        <b>Horarios</b>
      </p>
      <p>Lunes: {lunes}</p>
      <p>Martes: {martes}</p>
      <p>Miércoles: {miercoles}</p>
      <p>Jueves: {jueves}</p>
      <p>Viernes: {viernes}</p>
      <p>Sábado: {sabado}</p>
      <p>Domingo: {domingo}</p>
    </div>
  );
};

export default Schedule;
