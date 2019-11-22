import React from 'react';
import '../../assets/styles/Detail/RatingInfo.scss';
import ratingIcon from '../../assets/static/star-icon.png';

const RatingInfo = ({ rating }) => (
  <div className='rating__container'>
    <img className='rating__icon' src={ratingIcon} alt='Rating Icon' />
    <p className='rating__rate'>{rating} | </p>
    <p className='rating__info-reviews'> 10 reseñas</p>
  </div>
);

export default RatingInfo;
