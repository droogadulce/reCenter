import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Banner from '../components/Detail/Banner';
import Description from '../components/Detail/Description';
import Tag from '../components/Detail/Tag';
import Schedule from '../components/Detail/Schedule';
import RatingInfo from '../components/Detail/RatingInfo';
import NewComment from '../components/Detail/NewComment';
import CommentsList from '../components/Detail/CommentsList';
import '../assets/styles/Detail/Detail.scss';

const Detail = () => (
  <section className='detail__container'>
    <div className='detail__banner'>
      <Banner />
    </div>
    <div className='detail__description'>
      <Description />
    </div>
    <div className='detail__tags'>
      <Tag />
    </div>
    <div className='detail__schedule'>
      <Schedule />
    </div>
    <div className='detail__rating'>
      <h2>Reseñas</h2>
      <RatingInfo />
      <NewComment />
      <CommentsList />
    </div>
    <div className='detail__map'>
      <Map
        google={google}
        zoom={10}
        style={{ maxWidth: '600px', maxHeight: '400px' }}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
      />
    </div>
  </section>
);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(Detail);
