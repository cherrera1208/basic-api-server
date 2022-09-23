'use strict';

const videoGameSchema = (sequelize, DataTypes) => sequelize.define(
  'Videogame',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discount: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }
  }
);

module.exports = videoGameSchema;
