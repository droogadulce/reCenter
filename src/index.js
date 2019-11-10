import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  user: {},
  garbageTags: [
    {
      id: 1,
      tag: 'vidrio',
    },
    {
      id: 2,
      tag: 'papel',
    },
    {
      id: 3,
      tag: 'cartón',
    },
    { id: 4, tag: 'plástico' },
    {
      id: 5,
      tag: 'unicel',
    },
    {
      id: 6,
      tag: 'metales',
    },
    {
      id: 7,
      tag: 'textiles',
    },
    { id: 8, tag: 'tetra brik' },
    { id: 9, tag: 'electrónicos' },
    {
      id: 10,
      tag: 'pilas',
    },
    {
      id: 11,
      tag: 'aceite',
    },
  ],
  centers: [
    {
      id: 1,
      name: 'Recupera del Valle',
      description:
        'Centro de reciclaje de latas y botellas en Ciudad de México',
      address: {
        address:
          'Pilares 129, Col del Valle Sur, 03100 Del. Benito Juárez, CDMX',
        lat: 19.379731,
        lng: -99.170186,
      },
      schedule: {
        lunes: '10:00-17:00',
        martes: '10:00-17:00',
        miercoles: '10:00-17:00',
        jueves: '10:00-17:00',
        viernes: '10:00-17:00',
        sabado: '10:00-14:00',
        domingo: 'cerrado',
      },
      tags: [
        { id: 1, type: 'PET', cost: 1.0 },
        { id: 2, type: 'latas', cost: 17.5 },
        { id: 3, type: 'cartón', cost: 0.5 },
      ],
      rating: 4,
      reward: true,
    },
    {
      id: 2,
      name: 'Recicladora Ecoazteca',
      description: 'Centro de reciclaje de la Ciudad de México',
      address: {
        address:
          'Calle Avena 216, Granjas México, Iztacalco, 08400 Ciudad de México, CDMX',
        lat: 19.404389,
        lng: -99.10918,
      },
      schedule: {
        lunes: '10:00-17:00',
        martes: '10:00-17:00',
        miercoles: '10:00-17:00',
        jueves: '10:00-17:00',
        viernes: '10:00-17:00',
        sabado: '10:00-14:00',
        domingo: 'cerrado',
      },
      tags: [{ id: 1, type: 'aceite', cost: 10.0 }],
      rating: 4,
      reward: true,
    },
    {
      id: 3,
      name: 'Recicla Computadoras',
      description: 'Centro de reciclaje de equipos de cómputo',
      address: {
        address:
          'Calle Gabriel Mancera 330, Col del Valle Centro, Benito Juárez, 03103, CDMX',
        lat: 19.392843,
        lng: -99.162565,
      },
      schedule: {
        lunes: '10:00-17:00',
        martes: '10:00-17:00',
        miercoles: '10:00-17:00',
        jueves: '10:00-17:00',
        viernes: '10:00-17:00',
        sabado: '10:00-14:00',
        domingo: 'cerrado',
      },
      tags: [{ id: 1, type: 'electrónicos', cost: 100.0 }],
      rating: 5,
      reward: true,
    },
    {
      id: 4,
      name: 'Recicla Ortiz',
      description: 'Centro de reciclaje de tetrabrik',
      address: {
        address:
          'Filipinas 1226, Portales Nte, Benito Juárez, 03300 Ciudad de México, CDMX',
        lat: 19.358025,
        lng: -99.149768,
      },
      schedule: {
        lunes: '10:00-17:00',
        martes: '10:00-17:00',
        miercoles: '10:00-17:00',
        jueves: '10:00-17:00',
        viernes: '10:00-17:00',
        sabado: '10:00-14:00',
        domingo: 'cerrado',
      },
      tags: [{ id: 1, type: 'tetrabrik', cost: 2.0 }],
      rating: 5,
      reward: true,
    },
    {
      id: 5,
      name: 'Comisión Nacional De Libros De Texto Gratuitos',
      description: 'Centro de reciclaje de papel',
      address: {
        address:
          'Rafael Checa 2, San Ángel, Álvaro Obregón, 01000 Ciudad de México, CDMX',
        lat: 19.344418,
        lng: -99.189714,
      },
      schedule: {
        lunes: '10:00-17:00',
        martes: '10:00-17:00',
        miercoles: '10:00-17:00',
        jueves: '10:00-17:00',
        viernes: '10:00-17:00',
        sabado: '10:00-14:00',
        domingo: 'cerrado',
      },
      tags: [{ id: 1, type: 'papel', cost: 2.5 }],
      rating: 5,
      reward: true,
    },
    {
      id: 6,
      name: 'Reciclaje de Pilas y Baterías IMU Recicla',
      description: 'Centro de reciclaje de pilas y baterías',
      address: {
        address:
          '11300, Av Ejército Nacional 77, Verónica Anzúres, Miguel Hidalgo, Ciudad de México, CDMX',
        lat: 19.43414,
        lng: -99.174776,
      },
      schedule: {
        lunes: '10:00-17:00',
        martes: '10:00-17:00',
        miercoles: '10:00-17:00',
        jueves: '10:00-17:00',
        viernes: '10:00-17:00',
        sabado: '10:00-14:00',
        domingo: 'cerrado',
      },
      tags: [{ id: 1, type: 'papel', cost: 2.5 }],
      rating: 5,
      reward: true,
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
