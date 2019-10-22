import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    const { google } = this.props;
    return (
      <div>
        <Map
          google={google}
          zoom={5}
          initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
