'use strict';
module.exports = function(sequelize, DataTypes) {
  var Claim = sequelize.define('Claim', {
    ClaimDate: DataTypes.DATE,
    ClaimValidation: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Claim;
};