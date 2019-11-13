import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import userImage from '../assets/static/user.png';

const Header = () => (
  <header className='header'>
    <h1 className='header__logo'>
      <Link to='/'>reCenter</Link>
    </h1>
    {/* se sustituira por el png del logo */}
    <div className='header__buscador'>
      <input type='text' placeholder='Encuentra centros de reciclaje...' />
    </div>
    <div className='header__registro'>
      <img src={userImage} alt='perfil-logo' />
      <p><Link to="/login">Inicia Sesión</Link></p>
      <p><Link to="/register">Regístrate</Link></p>
    </div>
  </header>
);

export default Header;
