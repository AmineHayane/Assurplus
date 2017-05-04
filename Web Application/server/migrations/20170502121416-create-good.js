'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Goods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      GoodDescription: {
        type: Sequelize.STRING
      },
      GoodPrice: {
        type: Sequelize.STRING
      },
      GoodBuyDate: {
        type: Sequelize.DATE
      },
      GoodEvaluation: {
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
    return queryInterface.dropTable('Goods');
  }
};