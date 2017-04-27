'use strict';
module.exports = function(sequelize, DataTypes) {
  var Justificatifs = sequelize.define('Justificatifs', {
    type: DataTypes.STRING,
    fileurl: DataTypes.STRING,
    datedepot: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Justificatifs;
};