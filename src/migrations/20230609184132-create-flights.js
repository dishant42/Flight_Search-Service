'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Flightnumber: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      airplaneID: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      departureAirportID: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      arrivalAirportID: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      arrivaltime: {
        type: Sequelize.DATE,
        allowNull:false
      },
      departuretime: {
        type: Sequelize.DATE,
        allowNull:false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      boardingGate: {
        type: Sequelize.STRING
      },
      totalseats: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};