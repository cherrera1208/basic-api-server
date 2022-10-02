'use strict';

const express = require('express');
const movieRouter = require('./routes/movies.js');
// const videoGameRouter = require('./routes/videoGames.js');
const app = express();

app.use(movieRouter);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(':: : app.listen : port', port);
    })
  },
  app
}
