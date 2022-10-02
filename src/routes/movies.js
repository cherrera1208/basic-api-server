'use strict';

const express = require('express');
const { Movie } = require('../models');
const router = express.Router();

router.get('/movie', readMovie);
router.get('/movie', (req, res, next) => {
  res.send('test response');
});
router.post('/movie', (req, res, next) => {
  res.send('test response');
});
router.put('/movie', (req, res, next) => {
  res.send('test response');
});
router.delete('/movie', (req, res, next) => {
  res.send('test response');
});

async function readMovie(req, res, next) {
  let movieRecords = await Movie.findAll();
  res.status(200).send(movieRecords);
};

module.exports = router;
