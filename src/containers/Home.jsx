import React from 'react';
import Carrousel from '../components/Carrousel';
import Categories from '../components/Categories';
import '../assets/styles/App.scss';

const Home = ({ tags }) => (
  <>
    <Carrousel />
    <Categories />
  </>
);

export default Home;