import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import ItemsList from './Map/ItemsList';
import Filters from './Map/Filters';
import '../assets/styles/Map/Map.scss';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    const { centers } = props;

    this.state = {
      centers,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  /**
   * Displays the marker's info.
   */
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  /**
   * If the map is clicked, hides the marker.
   */
  onMapClicked = props => {
    const { showingInfoWindow } = this.state;
    if (showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    const { google } = this.props;
    const {
      activeMarker,
      showingInfoWindow,
      selectedPlace,
      centers,
    } = this.state;

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
            zoom={12}
            initialCenter={{ lat: 19.367812, lng: -99.126761 }}
          >
            {centers.map(center => {
              const { name, address } = center;
              const { lat, lng } = address;
              return (
                <Marker
                  title={name}
                  name={name}
                  position={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
                  onClick={this.onMarkerClick}
                  key={center.id}
                />
              );
            })}

            <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
              <div>
                <h1>{selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
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
