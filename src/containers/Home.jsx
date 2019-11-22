import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCenters } from '../actions';
import Carrousel from '../components/Carrousel';
import Categories from '../components/Categories';
import '../assets/styles/App.scss';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCenters());
  }, []);
  return (
    <>
      <Carrousel />
      <div className='recycle'>
        <h2 className='recycle_title'>¿Qué quieres reciclar?</h2>
        <div className='recycle_card'>
          <Link to='/searchmap'>
            <h2 className='recycle--all'>Localízalo en el mapa</h2>
          </Link>
          <h2 className='recycle--tags'>O busca por categorias:</h2>
        </div>
      </div>
      <Categories />
    </>
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
