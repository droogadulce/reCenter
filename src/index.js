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
      address: 'Pilares 129, Col del Valle Sur, 03100 Del. Benito Juárez, CDMX',
      schedule: {
        lunes: '10:00-17:00',
        martes: '10:00-17:00',
        miercoles: '10:00-17:00',
        jueves: '10:00-17:00',
        viernes: '10:00-17:00',
        sabado: '10:00-14:00',
        domingo: 'cerrado',
      },
      tags: ['PET', 'latas', 'cartón'],
      rating: 4,
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
