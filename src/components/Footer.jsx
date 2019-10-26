import React from "react";
import facebook_icon from "../assets/static/facebook.png";
import twitter_icon from "../assets/static/twitter.png";
import instagram_icon from "../assets/static/instagram.png";
import github_icon from "../assets/static/github.png";
import copyright_icon from "../assets/static/copyright.png";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__info">
      <p>Acerca del poryecto:</p>
    </div>
    <div className="footer__debs">
      <p> Colaboradores del poryecto:</p>
    </div>
    <div className="footer__tec">
      <p> Tecnologias usadas en la pagina:</p>
      <ul>
        <li>HTML</li>
        <li>CSS -> SASS</li>
        <li>JS -> REACT -> REDUX -> ROUTER</li>
      </ul>
    </div>
    <div className="footer__media">
      <p>Siguenos en nuestras Redes Sociales</p>
      <div className="footer__media--icons">
        <img src={facebook_icon} alt="facebook" />
        <img src={twitter_icon} alt="twitter" />
        <img src={instagram_icon} alt="instagram" />
        <img src={github_icon} alt="github" />
      </div>
    </div>
    <div className="footer__rigths">
      <img src={copyright_icon} alt="copy_left" />
      <p> Todos los izquiedos reservados </p>
    </div>
  </footer>
);

export default Footer;
