import React from 'react';
import facebookIcon from '../assets/static/facebook.png';
import twitterIcon from '../assets/static/twitter.png';
import instagramIcon from '../assets/static/instagram.png';
import githubIcon from '../assets/static/github.png';
import copyrightIcon from '../assets/static/copyright.png';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
  <footer className='footer'>
    <div className='footer__info'>
      <p>Acerca del proyecto:</p>
    </div>
    <div className='footer__debs'>
      <p> Colaboradores del proyecto:</p>
    </div>
    <div className='footer__tec'>
      <p> Tecnologías usadas en la página:</p>
      <ul>
        <li>HTML</li>
        <li>CSS -> SASS</li>
        <li>JS -> REACT -> REDUX -> ROUTER</li>
      </ul>
    </div>
    <div className='footer__media'>
      <p>Siguenos en nuestras Redes Sociales</p>
      <div className='footer__media--icons'>
        <img src={facebookIcon} alt='facebook' />
        <img src={twitterIcon} alt='twitter' />
        <img src={instagramIcon} alt='instagram' />
        <img src={githubIcon} alt='github' />
      </div>
    </div>
    <div className='footer__rigths'>
      <img src={copyrightIcon} alt='copy_left' />
      <p> Todos los izquiedos reservados </p>
    </div>
  </footer>
);

export default Footer;
