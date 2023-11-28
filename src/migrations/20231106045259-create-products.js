"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        length: 10,
      },
      productName: {
        type: Sequelize.STRING,
        length: 255,
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id'
        },
        length: 10
      },
      price: {
        type: Sequelize.DECIMAL,
      },
      description: {
        type: Sequelize.STRING,
        length: 255,
      },
      stock: {
        type: Sequelize.INTEGER,
        length: 10,
      },
      thumbnail: {
        type: Sequelize.STRING,
        length: 255,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
