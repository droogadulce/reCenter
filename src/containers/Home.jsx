import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getAllCenters } from '../actions';
import { Link } from 'react-router-dom';
import Carrousel from '../components/Carrousel';
import Categories from '../components/Categories';
import '../assets/styles/App.scss';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCenters());
  }, []);
  return (
    <React.Fragment>
      <Carrousel />
      <div className='recycle'>
        <h2 className='recycle_title'>¿Qué quieres reciclar?</h2>
        <div className='recycle_card'>  
          <Link to="/searchmap">
            <h2 className='recycle--all'>Localizalo en el mapa</h2>
          </Link>
          <h2 className='recycle--tags'>O busca por categorias:</h2>
        </div>
      </div>
      <Categories /> 
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    centers: state.centers,
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
