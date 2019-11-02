import React from 'react';
import '../../assets/styles/Detail/Banner.scss';
import recycleIcon from '../../assets/static/recycle.png';

const Banner = () => (
  <div className='banner__container'>
    <div className='banner__img'>
      <img src={recycleIcon} alt='Default' />
    </div>
    <div className='banner__img'>
      <img src={recycleIcon} alt='Default' />
    </div>
    <div className='banner__img'>
      <img src={recycleIcon} alt='Default' />
    </div>
    <div className='banner__img'>
      <img src={recycleIcon} alt='Default' />
    </div>
    <div className='banner__img'>
      <img src={recycleIcon} alt='Default' />
    </div>
  </div>
);

export default Banner;
