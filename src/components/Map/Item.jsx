import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../../assets/styles/Map/Item.scss'; 
import likeIcon from '../../assets/static/like-icon.png';
import ratingIcon from '../../assets/static/star-icon.png';
import recycleIcon from '../../assets/static/recycle.png';

const Item = props => {
  const { id, name, address, tags, rating } = props;
  return (
    <Link to={`/searchmap/detail/${id}`}>
      <div className='item__container'>
        <img className='item__img' src={recycleIcon} alt='Center' />
        <h2 className='item__title'>{name}</h2>
        <div className='item__address'>
          <p>{address.address}</p>
        </div>
        <div className='item__tags'>
          <p>{tags.map(item => `${item.type} `)}</p>
        </div>
        <div className='item__rating'>
          <img
            className='item__rating--img'
            src={ratingIcon}
            alt='Rating Icon'
          />
          <p>{rating}</p>
        </div>
        <Button className='item__like_btn' size="sm">
          <img className='item__save--img' src={likeIcon} alt='Like Icon' />
          Guardar
        </Button>
      </div>
    </Link>
  );
};

export default Item;