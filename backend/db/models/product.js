'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    name: DataTypes.TEXT,
    image: DataTypes.TEXT,
    description: DataTypes.TEXT,
    brand: DataTypes.TEXT,
    category: DataTypes.TEXT,
    price: DataTypes.DECIMAL(10, 2),
    countInStock: DataTypes.INTEGER,
    rating: DataTypes.DECIMAL(10, 2),
    numReviews: DataTypes.INTEGER,
    uuid: DataTypes.UUID,
    slug: DataTypes.TEXT
  },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
    }
  );
  return Product;
};
