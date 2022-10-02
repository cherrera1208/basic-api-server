'use strict';

const movieSchema = require('./movies');
const videoGameSchema = require('./videoGames');
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

let sequelize = new Sequelize(DATABASE_URL);

const MovieModel = movieSchema(sequelize, DataTypes);
const VideoGameModel = videoGameSchema(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  Movie: MovieModel,
  VideoGame: VideoGameModel,
};
