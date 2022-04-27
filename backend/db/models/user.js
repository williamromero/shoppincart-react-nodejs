'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init(
    {
      name: {
        type: DataTypes.TEXT,
        validate: {
          len: {
            args: [10, 255],
            msg: "El nombre tiene que poseer al menos 10 caractéres.",
          },
        },       
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
        unique: true,      
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [10, 255],
            msg: "El nombre tiene que poseer al menos 10 caractéres.",
          },
        },      
      },
      isAdmin: DataTypes.BOOLEAN,
      uuid: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Address, { as: "addresses", foreignKey: "userId" });
  };

  return User;
};
