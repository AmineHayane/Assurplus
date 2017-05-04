'use strict';
module.exports = function(sequelize, DataTypes) {
  var Safe = sequelize.define('Safe', {
    SafeValue: DataTypes.STRING,
    SafeLastUpdate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Safe;
};