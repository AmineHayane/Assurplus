'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Insurances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      InsuranceName: {
        type: Sequelize.STRING
      },
      InsuranceJoiningDate: {
        type: Sequelize.DATEONLY
      },
      InsuranceLogin: {
        type: Sequelize.STRING
      },
      InsurancePassword: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Insurances');
  }
};