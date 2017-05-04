'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Avenants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      AvenantCreationDate: {
        type: Sequelize.DATE
      },
      AvenantValidation: {
        type: Sequelize.BOOLEAN
      },
      AvenantReason: {
        type: Sequelize.STRING
      },
      AvenantResiliation: {
        type: Sequelize.BOOLEAN
      },
      AvenantStartingDate: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('Avenants');
  }
};