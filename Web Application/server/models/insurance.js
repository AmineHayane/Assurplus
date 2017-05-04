'use strict';
module.exports = function(sequelize, DataTypes) {
  var Insurance = sequelize.define('Insurance', {
    InsuranceName: DataTypes.STRING,
    InsuranceJoiningDate: DataTypes.DATEONLY,
    InsuranceLogin: DataTypes.STRING,
    InsurancePassword: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Insurance;
};