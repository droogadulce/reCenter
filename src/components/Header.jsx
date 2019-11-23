import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import userImage from '../assets/static/user.png';
import { logoutRequest } from '../actions';

const Header = props => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    props.logoutRequest({});
  };
  return (
    <header className='header'>
      <h1 className='header__logo'>
        <Link to='/'>reCenter</Link>
      </h1>
      {/* se sustituira por el png del logo */}
      <div className='header__buscador'>
        <input type='text' placeholder='Encuentra centros de reciclaje...' />
      </div>
      <div className='header__registro'>
        {hasUser ? (
          <img src={gravatar(user.email)} alt={user.email} />
        ) : (
          <img src={userImage} alt='' />
        )}
        {hasUser ? null : (
          <p>
            <Link to='/login'>Inicia Sesión</Link>
          </p>
        )}
        {hasUser ? null : (
          <p>
            <Link to='/register'>Regístrate</Link>
          </p>
        )}
        {hasUser ? (
          <a className="header_cerrar" href='#logout' onClick={handleLogout}>
            Cerrar sesión
          </a>
        ) : null}
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
