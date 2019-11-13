import React from "react";
import { connect } from 'react-redux';
import "../assets/styles/components/Categories.scss";

const Categories = ({ tags }) => (
  <section className="categories">
    {tags.map(item => (
      <div className="categories__item" key={item.id} id={`item${item.id}`}>
        <p>{item.tag}</p>
        <img src="/" alt="icono de categoria" />
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