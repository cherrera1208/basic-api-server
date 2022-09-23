'use strict';

const movieSchema = (sequelize, DataTypes) => sequelize.define(
  'Movie',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reviews: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }
);

module.exports = movieSchema;
