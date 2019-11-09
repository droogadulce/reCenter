import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { getCenterDetail } from '../actions';
import Banner from '../components/Detail/Banner';
import Description from '../components/Detail/Description';
import Tag from '../components/Detail/Tag';
import Schedule from '../components/Detail/Schedule';
import RatingInfo from '../components/Detail/RatingInfo';
import NewComment from '../components/Detail/NewComment';
import CommentsList from '../components/Detail/CommentsList';
import '../assets/styles/Detail/Detail.scss';

const Detail = props => {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCenterDetail(id));
  }, []);

  if (props.detail) {
    const { detail } = props;
    const { name, description, address, rating, schedule, tags } = detail;
    return (
      <section className='detail__container'>
        <div className='detail__banner'>
          <Banner />
        </div>
        <div className='detail__description'>
          <Description name={name} description={description} />
        </div>
        <div className='detail__tags'>
          {tags.map(item => (
            <Tag {...item} key={item.id} />
          ))}
        </div>
        <div className='detail__schedule'>
          <Schedule schedule={schedule} />
        </div>
        <div className='detail__rating'>
          <h2>Reseñas</h2>
          <RatingInfo rating={rating} />
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
  }
  return <p>Loading...</p>;
};

const mapStateToProps = state => {
  return {
    detail: state.detail,
  };
};

export default connect(
  mapStateToProps,
  null
)(
  GoogleApiWrapper({
    apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
  })(Detail)
);
