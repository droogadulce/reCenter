import React from 'react';
import { Card, Button } from 'react-bootstrap';
import likeIcon from '../../assets/static/like-icon.png';
import '../../assets/styles/Detail/Description.scss';

const Description = ({ name, description }) => {
  return ( 
    <Card>
      <Card.Header as="h5">Datos del centro:</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button className='item__like_btn' size="sm">
          Guardar
          <img className='item__save--img' src={likeIcon} alt='Like Icon' />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Description;
