import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/components/Categories.scss';

const Categories = ({ tags }) => (
  <section className='categories'>
    {tags.map(item => (
      <div className='categories__item' key={item.id} id={item.id}>
        <Link to={`/searchmap/${item.tag}`}>
          <p>{item.tag}</p>
          <img
            src={require(`../assets/static/icons/${item.tag}.png`)}
            alt='icono de categoria'
            className='categories__item_img'
          />
        </Link>
      </div>
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
