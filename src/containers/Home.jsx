import React from "react";
import { connect } from "react-redux";
import "../assets/styles/App.scss";

const Home = ({ tags }) => (
  <>
    <section className="carousel">
      <div className="carousel__item">
        <img src="/" alt="" />
      </div>
    </section>
    <section className="categories">
      <div className="categories__item">
        <img src="/" alt="" />
        {tags.map(item => (
          <h1>{item}</h1>
        ))}
      </div>
    </section>
  </>
);

const mapStateToProps = state => {
  return {
    tags: state.garbageTags
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
