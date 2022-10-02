'use strict';

const videoGameSchema = (sequelize, DataTypes) => sequelize.define(
  'Videogame',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false,

    }
  }
);

module.exports = videoGameSchema;
