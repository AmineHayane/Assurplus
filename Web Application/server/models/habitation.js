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
        Habitation.belongsToMany(models.User, {
          as : 'users',
          through : 'UserHabitation',
            foreignKey : 'habitationId',
            otherKey : 'userId'
        });
        Habitation.hasMany(models.Safe, {
          foreignKey : 'habitationId',
            as : 'safes'
        });
        Habitation.belongsTo(models.Address, {
          foreignKey: 'adressId',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return Habitation;
};