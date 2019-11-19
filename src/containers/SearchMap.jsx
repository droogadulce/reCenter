import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getFilteredCenters } from '../actions';
import MapContainer from '../components/MapContainer';

const SearchMap = props => {
  const { tag } = props.match.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilteredCenters(tag));
  }, []);
  console.log(tag);
  return <MapContainer />;
};

const mapStateToProps = state => {
  return {
    centers: state.detail,
  };
};

export default connect(
  mapStateToProps,
  null
)(SearchMap);
