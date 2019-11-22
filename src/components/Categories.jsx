import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/components/Categories.scss';

const Categories = ({ tags }) => (
  <section className='categories'>
    {tags.map(item => (
      <Link to={`/searchmap/${item.tag}`} key={item.id}>
        <div className='categories__item' key={item.id} id={item.id}>
          <p>{item.tag}</p>
          <img
            src={require(`../assets/static/icons/${item.tag}.png`)}
            alt='icono de categoria'
            className='categories__item_img'
          />
        </div>
      </Link>
    ))}
  </section>
);

const mapStateToProps = state => {
  return {
    tags: state.garbageTags,
  };
};

export default connect(
  mapStateToProps,
  null
)(Categories);
