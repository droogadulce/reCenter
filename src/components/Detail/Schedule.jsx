import React from 'react';
import { Table } from 'react-bootstrap';


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
    <Table striped bordered>
      <thead>
        <tr>
          <th colSpan="2">Horario de atención</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lunes:</td>
          <td>{lunes}</td>
        </tr>
        <tr>
          <td>Martes:</td>
          <td>{martes}</td>
        </tr>
        <tr>
          <td>Miercoles:</td>
          <td>{miercoles}</td>
        </tr>
        <tr>
          <td>Jueves:</td>
          <td>{jueves}</td>
        </tr>
        <tr>
          <td>Viernes:</td>
          <td>{viernes}</td>
        </tr>
        <tr>
          <td>Sabado:</td>
          <td>{sabado}</td>
        </tr>
        <tr>
          <td>Domingo:</td>
          <td>{domingo}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Schedule;
