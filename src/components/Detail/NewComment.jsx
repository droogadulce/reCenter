import React from 'react';
import userImage from '../../assets/static/user.png';
import '../../assets/styles/Detail/NewComment.scss';

const NewComment = () => (
  <React.Fragment>
    <p>Deja un comentario:</p>
    <img className='comment__img' src={userImage} alt='User Gravatar' />
    <input placeholder='Escribe tu reseña' />
  </React.Fragment>
);

export default NewComment;
