'use strict';
module.exports = function(sequelize, DataTypes) {
  var Good = sequelize.define('Good', {
    GoodDescription: DataTypes.STRING,
    GoodPrice: DataTypes.STRING,
    GoodBuyDate: DataTypes.DATE,
    GoodEvaluation: DataTypes.STRING,
    GoodCategory: DataTypes.STRING,
    GoodImageUrl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Good;
};