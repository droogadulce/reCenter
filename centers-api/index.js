const express = require('express');

const app = express();

const { config } = require('./config/index');
const centersApi = require('./routes/centers.js');

// body parser
app.use(express.json());

centersApi(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
