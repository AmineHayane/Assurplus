'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rib = sequelize.define('Rib', {
    RibUrl: DataTypes.STRING,
    RibIban: DataTypes.STRING,
    RibBic: DataTypes.STRING,
    RibNom: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Rib;
};