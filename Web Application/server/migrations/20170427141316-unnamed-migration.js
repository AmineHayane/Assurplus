'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
        queryInterface.addColumn(
          'Users',
          'UserGender',
          Sequelize.STRING
        ),
        queryInterface.addColumn(
          'Users',
          'UserFirstName',
          Sequelize.STRING
        ),
        queryInterface.addColumn(
          'Users',
          'UserLastName',
          Sequelize.STRING
        ),
        queryInterface.addColumn(
          'Users',
          'UserLivingSituation',
          Sequelize.STRING
        ),
        queryInterface.addColumn(
          'Users',
          'UserJob',
          Sequelize.STRING
        ),
        queryInterface.addColumn(
          'Users',
          'UserPaymentType',
          Sequelize.STRING
        ),
        queryInterface.addColumn(
          'Users',
          'UserIncome',
          Sequelize.STRING
        ),
        queryInterface.addColumn(
          'Users',
          'UserIdentityDocument',
          Sequelize.STRING
        ),
        queryInterface.addColumn(
          'Users',
          'UserBirthDate',
          Sequelize.DATE
        )

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
