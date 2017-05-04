'use strict';
module.exports = function(sequelize, DataTypes) {
  var Avenant = sequelize.define('Avenant', {
    AvenantCreationDate: DataTypes.DATE,
    AvenantValidation: DataTypes.BOOLEAN,
    AvenantReason: DataTypes.STRING,
    AvenantResiliation: DataTypes.BOOLEAN,
    AvenantStartingDate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Avenant;
};