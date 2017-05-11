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
        Good.hasMany(models.SupportingDocument, {foreignKey : 'supportingDocumentId'});
        Good.belongsToMany(models.Safe, {
          as : 'safes',
          through:'GoodSafe',
            foreignKey: 'goodId',
            otherKey : 'safeId'
        });
      }
    }
  });
  return Good;
};
