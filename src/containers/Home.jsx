import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
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
      <h2 className='recycle_title'>¿Qué quieres reciclar?</h2>
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
