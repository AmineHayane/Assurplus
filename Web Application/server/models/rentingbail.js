'use strict';
module.exports = function(sequelize, DataTypes) {
  var RentingBail = sequelize.define('RentingBail', {
    AdministrativeDocumentRentingBail: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return RentingBail;
};