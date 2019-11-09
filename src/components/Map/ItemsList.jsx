import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

const ItemsList = ({ centers }) => (
  <div>
    {centers.map(item => (
      <Item {...item} key={item.id} />
    ))}
  </div>
);

const mapStateToProps = state => {
  return {
    centers: state.centers,
  };
};

export default connect(
  mapStateToProps,
  null
)(ItemsList);
