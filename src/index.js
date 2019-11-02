import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import App from "./routes/App";

const initialState = {
  user: {},
  garbageTags: [
    "vidrio",
    "papel",
    "cartón",
    "plástico",
    "unicel",
    "metales",
    "textiles",
    "tetra brik",
    "electrónicos",
    "pilas",
    "aceite"
  ],
  centers: [
    {
      id: 1,
      name: "Recupera del Valle",
      description:
        "Centro de reciclaje de latas y botellas en Ciudad de México",
      address: "Pilares 129, Col del Valle Sur, 03100 Del. Benito Juárez, CDMX",
      schedule: {
        lunes: "10:00-17:00",
        martes: "10:00-17:00",
        miercoles: "10:00-17:00",
        jueves: "10:00-17:00",
        viernes: "10:00-17:00",
        sabado: "10:00-14:00",
        domingo: "cerrado"
      },
      tags: ["PET", "latas", "cartón"],
      rating: 4,
      reward: true
    }
  ]
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
