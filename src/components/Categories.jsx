import React from "react";
import "../assets/styles/components/Categories.scss";

const Categories = ({ tag }) => (
  <section className="categories">
    <div className="categories__item">
      <img src="/" alt="" />
      <h1>{tag}</h1>
    </div>
  </section>
);

export default Categories;
