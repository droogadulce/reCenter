import React from 'react';
import '../../assets/styles/Map/Item.scss';
import likeIcon from '../../assets/static/like-icon.png';
import ratingIcon from '../../assets/static/star-icon.png';
import recycleIcon from '../../assets/static/recycle.png';

const Item = ({ children }) => (
  <div className='item__container'>
    <img className='item__img' src={recycleIcon} alt='Center' />
    <h2 className='item__title'>Recupera del Valle</h2>
    <p className='item__address'>
      Pilares 129, Col del Valle Sur, 03100 Del. Benito Juárez, CDMX
    </p>
    <div className='item__tags'>
      <p>PET</p>
    </div>
    <div className='item__rating'>
      <img className='item__rating--img' src={ratingIcon} alt='Rating Icon' />
      <p className='border'>4.9</p>
    </div>
    <button className='item__like_btn' type='button'>
      <img className='item__save--img' src={likeIcon} alt='Like Icon' />
      Guardar
    </button>
  </div>
);

export default Item;
