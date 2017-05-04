'use strict';
module.exports = function(sequelize, DataTypes) {
  var Contract = sequelize.define('Contract', {
    ContractNumber: DataTypes.INTEGER,
    ContractStartDate: DataTypes.DATE,
    ContractEndDate: DataTypes.DATE,
    ContractDocumentUrl: DataTypes.STRING,
    GoodCategory: DataTypes.STRING,
    GoodImageUrl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Contract;
};