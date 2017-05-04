'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Contracts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ContractNumber: {
        type: Sequelize.INTEGER
      },
      ContractStartDate: {
        type: Sequelize.DATE
      },
      ContractEndDate: {
        type: Sequelize.DATE
      },
      ContractDocumentUrl: {
        type: Sequelize.STRING
      },
      GoodCategory: {
        type: Sequelize.STRING
      },
      GoodImageUrl: {
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
    return queryInterface.dropTable('Contracts');
  }
};