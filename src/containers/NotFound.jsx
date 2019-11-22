import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <div className="page404">
    <div className="page404_container">
      <div className="page404_img">
        <img src="https://static.platzi.com/static/images/error/img404.a1003ad86732.png" alt="notFound"/>
      </div>
      <div className="page404_text">
        <h3>Mmmm...</h3>
        <p>No encontramos lo que buscabas, sorry! 💩</p>
      </div>
    </div>
  </div>
);

export default NotFound;
