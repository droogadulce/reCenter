import React from 'react';
import '../../assets/styles/Detail/Tag.scss';

const Tag = ({ id, type, cost }) => (
  <div className='tag__container'>
    <div className='tag__container__item'>{type}</div>
    <div className='tag__container__item'>${cost}/kg</div>
  </div>
);

export default Tag;
