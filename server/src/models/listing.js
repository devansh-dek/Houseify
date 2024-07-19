'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Listing.hasMany(models.Bid, {
        foreignKey: 'listingId',
        as: 'bids'
      })
      // define association here
    }
  }
  Listing.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false
      },
      furnishing: {
        type: DataTypes.STRING,
        allowNull: false
      },
      flooring: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
    sequelize,
    modelName: 'Listing',
  });

  return Listing;
};