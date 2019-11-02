import React from 'react';
import '../assets/styles/components/Header.scss';
import userImage from '../assets/static/user.png';

const Header = () => (
  <header className='header'>
    <h1 className='header__logo'>
      <a href='/'>reCenter</a>
    </h1>
    {/* se sustituira por el png del logo */}
    <div className='header__buscador'>
      <input type='text' placeholder='Encuentra centros de reciclaje...' />
    </div>
    <div className='header__registro'>
      <img src={userImage} alt='perfil-logo' />
      <p>Inicia Sesión</p>
      <p>Regístrate</p>
    </div>
  </header>
);

export default Header;
