'use strict';
module.exports = function(sequelize, DataTypes) {
  var Habitation = sequelize.define('Habitation', {
    HabitationPrincipal: DataTypes.BOOLEAN,
    HabitationSurface: DataTypes.INTEGER,
    HabitationRoomNumber: DataTypes.INTEGER,
    HabitationSecurityLevel: DataTypes.INTEGER,
    HabitationFloor: DataTypes.INTEGER,
    HabitationDoorNumber: DataTypes.INTEGER,
    HabitationRoommate: DataTypes.BOOLEAN,
    HabitationRoommateNumber: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Habitation;
};