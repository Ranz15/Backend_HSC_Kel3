"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      products.belongsTo(models.categories);
      products.hasMany(models.orders);
    }
  }
  products.init({
    productName: DataTypes.STRING,
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id'
      }
    },
    price: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    thumbnail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};
