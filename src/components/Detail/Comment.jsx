import React from 'react';
import '../../assets/styles/Detail/Comment.scss';
import userImage from '../../assets/static/user.png';

const Comment = () => (
  <div className='comment__container'>
    <div className='comment__user-info'>
      <img className='comment__img' src={userImage} alt='User Gravatar' />
      <p className='comment__user'>Ana Vázquez</p>
    </div>
    <p className='comment__content'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
);

export default Comment;
