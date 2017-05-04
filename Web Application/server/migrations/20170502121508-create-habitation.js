'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Habitations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      HabitationPrincipal: {
        type: Sequelize.BOOLEAN
      },
      HabitationSurface: {
        type: Sequelize.INTEGER
      },
      HabitationRoomNumber: {
        type: Sequelize.INTEGER
      },
      HabitationSecurityLevel: {
        type: Sequelize.INTEGER
      },
      HabitationFloor: {
        type: Sequelize.INTEGER
      },
      HabitationDoorNumber: {
        type: Sequelize.INTEGER
      },
      HabitationRoommate: {
        type: Sequelize.BOOLEAN
      },
      HabitationRoommateNumber: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Habitations');
  }
};