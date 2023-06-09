'use strict';

const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[{
      name:'kampegowda international airport',
      cityID:14,
      createdAt:new Date(),
      updatedAt:new Date()
      },
    {
      name:'Mysore international airport',
      cityID:14,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
    name:'Indira gandhi international airport',
      cityID:15,
      createdAt:new Date(),
      updatedAt:new Date()
      },
      { 
        name:'Belgavi international airport',
      cityID:14,
      createdAt:new Date(),
      updatedAt:new Date()
      }], {} )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
