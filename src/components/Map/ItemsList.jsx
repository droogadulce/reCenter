import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

const ItemsList = ({ centers }) => {
  if (centers.length > 0) {
    return (
      <>
        {centers.map(item => (
          <Item {...item} key={item.id} />
        ))}
      </>
    );
  }
  return <p>No hay centros de reciclaje con esa categoría :c</p>;
};

const mapStateToProps = state => {
  return {
    centers: state.centers,
  };
};

export default connect(
  mapStateToProps,
  null
)(ItemsList);
