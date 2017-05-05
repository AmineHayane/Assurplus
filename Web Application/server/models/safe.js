'use strict';
module.exports = function(sequelize, DataTypes) {
  var Safe = sequelize.define('Safe', {
    SafeValue: DataTypes.STRING,
    SafeLastUpdate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Safe.belongsTo(models.Habitation, {
          foreignKey: 'habitationId',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return Safe;
};