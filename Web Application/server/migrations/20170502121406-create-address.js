'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      AddressType: {
        type: Sequelize.STRING
      },
      AddressNumber: {
        type: Sequelize.INTEGER
      },
      AddressLabel: {
        type: Sequelize.STRING
      },
      AddressLabelName: {
        type: Sequelize.STRING
      },
      AddressZipCode: {
        type: Sequelize.INTEGER
      },
      AddressCity: {
        type: Sequelize.STRING
      },
      AddressCountry: {
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
    return queryInterface.dropTable('Addresses');
  }
};