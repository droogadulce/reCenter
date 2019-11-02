import React from 'react';
import { connect } from 'react-redux';
import Carrousel from '../components/Carrousel';
import Categories from '../components/Categories';
import '../assets/styles/App.scss';

const Home = ({ tags }) => (
  <>
    <Carrousel />
    {tags.map(item => (
      <Categories {...item} key={item.id} />
    ))}
  </>
);

const mapStateToProps = state => {
  return {
    tags: state.garbageTags,
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
