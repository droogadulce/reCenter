import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { getCenterDetail } from '../actions';
import { Table } from 'react-bootstrap';
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
    const { lat, lng } = address;
    return (
      <section className='detail__container'>
        <div className='detail__banner'>
          <Banner />
        </div>
        <div className='detail__description'>
          <Description name={name} description={description} />
        </div>
        <div className='detail__tags'>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Type</th>
                <th>Cost</th>
              </tr>
            </thead>
            {tags.map(item => (
              <Tag {...item} key={item.id} />
            ))}
          </Table>
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
            zoom={15}
            style={{ maxWidth: '600px', maxHeight: '400px' }}
            initialCenter={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
          >
            <Marker
              title={name}
              name={name}
              position={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
            />
          </Map>
        </div>
      </section>
    );
  }
  return <div className="loading"><p>Loading...</p></div>;
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
