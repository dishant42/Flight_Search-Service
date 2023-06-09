'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flights.init({
    Flightnumber: {
      type: DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    airplaneID: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    departureAirportID: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    arrivalAirportID: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    arrivaltime: {
      type: DataTypes.DATE,
      allowNull:false

    },
    departuretime: {
      type: DataTypes.DATE,
      allowNull:false

    },
    price: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    boardingGate: {
      type: DataTypes.STRING,
    },
    totalseats: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Flights',
  });
  return Flights;
};