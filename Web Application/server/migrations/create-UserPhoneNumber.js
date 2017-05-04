'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('UserPhoneNumber', {
      id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
      phoneNumberId: {
        type: Sequelize.INTEGER,
          references: {
          model: 'PhoneNumbers',
          key: 'id',
          as: 'phoneNumberId',
        },
      },
        userId: {
        type: Sequelize.INTEGER,
            references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
