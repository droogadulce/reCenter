import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

const ItemsList = ({ centers }) => (
  <>
    {centers.map(item => (
      <Item {...item} key={item.id} />
    ))}
  </>
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
