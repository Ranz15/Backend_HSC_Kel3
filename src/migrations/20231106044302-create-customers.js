'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        length: 10
      },
      fullName: {
        type: Sequelize.STRING,
        length: 255
      },
      dateOfBirth: {
        type: Sequelize.DATE
      },
      address: {
        type: Sequelize.STRING,
        length: 255
      },
      username: {
        type: Sequelize.STRING,
        length: 255
      },
      email: {
        type: Sequelize.STRING,
        length: 255
      },
      password: {
        type: Sequelize.STRING,
        length: 255
      },
      gender: {
        type: Sequelize.STRING,
        length: 1
      },
      phoneNumber: {
        type: Sequelize.INTEGER,
        length: 13
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
    await queryInterface.dropTable('customers');
  }
};