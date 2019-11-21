import React from 'react';
import { Table } from 'react-bootstrap';
import '../../assets/styles/Detail/Tag.scss';

const Tag = ({ id, type, cost }) => (
  <React.Fragment>
    <tbody>
      <tr>
        <td colSpan="1">{type}</td>
        <td>${cost}/Kg</td>
      </tr>
    </tbody>
  </React.Fragment>
);

export default Tag;
