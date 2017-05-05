'use strict';
module.exports = function(sequelize, DataTypes) {
  var Good = sequelize.define('Good', {
    GoodDescription: DataTypes.STRING,
    GoodPrice: DataTypes.STRING,
    GoodBuyDate: DataTypes.DATE,
    GoodEvaluation: DataTypes.STRING,
    GoodCategory: DataTypes.STRING,
    GoodImageUrl: DataTypes.STRING,
    GoodInsured: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: (models) => {
        Good.hasMany(models.SupportingDocument);
        Good.hasMany(models.Safe, {through:'GoodSafe', foreignKey: 'goodId'}); 
      }
    }
  });
  return Good;
};
