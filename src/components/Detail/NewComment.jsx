import React from 'react';
import userImage from '../../assets/static/user.png';

const NewComment = () => (
  <>
    <img className='comment__img' src={userImage} alt='User Gravatar' />
    <input placeholder='Dejar una reseña' />
  </>
);

export default NewComment;
