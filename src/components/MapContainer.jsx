import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import ItemsList from './Map/ItemsList';
import Filters from './Map/Filters';
import '../assets/styles/Map/Map.scss';

class MapContainer extends Component {
  render() {
    const { google } = this.props;
    return (
      <section className='map__container'>
        <div className='map__items_filter'>
          <Filters />
        </div>
        <div className='map__items_list'>
          <ItemsList />
        </div>
        <div className='map__items_map'>
          <Map
            google={google}
            zoom={5}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    centers: state.centers,
  };
};

export default connect(
  mapStateToProps,
  null
)(
  GoogleApiWrapper({
    apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
  })(MapContainer)
);
