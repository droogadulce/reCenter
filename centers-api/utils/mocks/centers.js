const centersMock = [
  {
    id: '507f1f77bcf86cd799439011',
    name: 'Recupera del Valle',
    description: 'Centro de reciclaje de latas y botellas en Ciudad de México',
    address: {
      address: 'Pilares 129, Col del Valle Sur, 03100 Del. Benito Juárez, CDMX',
      lat: 19.379731,
      lng: -99.170186
    },
    schedule: {
      lunes: '10:00-17:00',
      martes: '10:00-17:00',
      miercoles: '10:00-17:00',
      jueves: '10:00-17:00',
      viernes: '10:00-17:00',
      sabado: '10:00-14:00',
      domingo: 'cerrado'
    },
    tags: [
      { id: 1, type: 'PET', cost: 1.0 },
      { id: 2, type: 'latas', cost: 17.5 },
      { id: 3, type: 'cartón', cost: 0.5 }
    ],
    rating: 4,
    reward: true,
    garbageTypes: ['PET', 'latas', 'cartón']
  },
  {
    id: '107f1f77bcf86cd799439011',
    name: 'Recicladora Ecoazteca',
    description: 'Centro de reciclaje de la Ciudad de México',
    address: {
      address:
        'Calle Avena 216, Granjas México, Iztacalco, 08400 Ciudad de México, CDMX',
      lat: 19.404389,
      lng: -99.10918
    },
    schedule: {
      lunes: '10:00-17:00',
      martes: '10:00-17:00',
      miercoles: '10:00-17:00',
      jueves: '10:00-17:00',
      viernes: '10:00-17:00',
      sabado: '10:00-14:00',
      domingo: 'cerrado'
    },
    tags: [{ id: 1, type: 'aceite', cost: 10.0 }],
    rating: 4,
    reward: true,
    garbageTypes: ['aceite']
  },
  {
    id: '207f1f77bcf86cd799439011',
    name: 'Recicla Computadoras',
    description: 'Centro de reciclaje de equipos de cómputo',
    address: {
      address:
        'Calle Gabriel Mancera 330, Col del Valle Centro, Benito Juárez, 03103, CDMX',
      lat: 19.392843,
      lng: -99.162565
    },
    schedule: {
      lunes: '10:00-17:00',
      martes: '10:00-17:00',
      miercoles: '10:00-17:00',
      jueves: '10:00-17:00',
      viernes: '10:00-17:00',
      sabado: '10:00-14:00',
      domingo: 'cerrado'
    },
    tags: [{ id: 1, type: 'electrónicos', cost: 100.0 }],
    rating: 5,
    reward: true,
    garbageTypes: ['electrónicos']
  },
  {
    id: '607f1f77bcf86cd799439011',
    name: 'Recicla Ortiz',
    description: 'Centro de reciclaje de tetrabrik',
    address: {
      address:
        'Filipinas 1226, Portales Nte, Benito Juárez, 03300 Ciudad de México, CDMX',
      lat: 19.358025,
      lng: -99.149768
    },
    schedule: {
      lunes: '10:00-17:00',
      martes: '10:00-17:00',
      miercoles: '10:00-17:00',
      jueves: '10:00-17:00',
      viernes: '10:00-17:00',
      sabado: '10:00-14:00',
      domingo: 'cerrado'
    },
    tags: [{ id: 1, type: 'tetrabrik', cost: 2.0 }],
    rating: 5,
    reward: true,
    garbageTypes: ['tetrabrik']
  },
  {
    id: '307f1f77bcf86cd799439011',
    name: 'Comisión Nacional De Libros De Texto Gratuitos',
    description: 'Centro de reciclaje de papel',
    address: {
      address:
        'Rafael Checa 2, San Ángel, Álvaro Obregón, 01000 Ciudad de México, CDMX',
      lat: 19.344418,
      lng: -99.189714
    },
    schedule: {
      lunes: '10:00-17:00',
      martes: '10:00-17:00',
      miercoles: '10:00-17:00',
      jueves: '10:00-17:00',
      viernes: '10:00-17:00',
      sabado: '10:00-14:00',
      domingo: 'cerrado'
    },
    tags: [{ id: 1, type: 'papel', cost: 2.5 }],
    rating: 5,
    reward: true,
    garbageTypes: ['papel']
  },
  {
    id: '407f1f77bcf86cd799439011',
    name: 'Reciclaje de Pilas y Baterías IMU Recicla',
    description: 'Centro de reciclaje de pilas y baterías',
    address: {
      address:
        '11300, Av Ejército Nacional 77, Verónica Anzúres, Miguel Hidalgo, Ciudad de México, CDMX',
      lat: 19.43414,
      lng: -99.174776
    },
    schedule: {
      lunes: '10:00-17:00',
      martes: '10:00-17:00',
      miercoles: '10:00-17:00',
      jueves: '10:00-17:00',
      viernes: '10:00-17:00',
      sabado: '10:00-14:00',
      domingo: 'cerrado'
    },
    tags: [{ id: 1, type: 'pilas', cost: 2.5 }],
    rating: 5,
    reward: true,
    garbageTypes: ['pilas']
  }
];

function filteredCentersMock(tag) {
  return centersMock.filter(center => center.tags.includes(tag));
}

class CentersServiceMock {
  // eslint-disable-next-line class-methods-use-this
  async getCenters() {
    return Promise.resolve(centersMock);
  }

  // eslint-disable-next-line class-methods-use-this
  async createCenter() {
    return Promise.resolve(centersMock[0]);
  }
}

module.exports = { centersMock, filteredCentersMock, CentersServiceMock };
