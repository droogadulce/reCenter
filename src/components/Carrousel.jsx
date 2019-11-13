import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../assets/styles/components/Carrousel.scss';
import firstSlide from '../assets/static/garbage-lot.jpg';
import secondSlide from '../assets/static/abundance-blur-bundle-close-up-167538.jpg';
import thirdSlide from '../assets/static/cans-1679022_1920.jpg';

const Carrousel = () => (
  <section className="carrousel"> 
    <Carousel controls={false} fade={true}>
      <Carousel.Item>
        <img 
          className="firstSlide" 
          src={firstSlide}
          alt="Primer Slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="secondSlide" 
          src={secondSlide}
          alt="Segundo Slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img 
          className="thirdSlide" 
          src={thirdSlide}
          alt="Tercer Slide"
        />
      </Carousel.Item>
    </Carousel>
  </section>
);

export default Carrousel;