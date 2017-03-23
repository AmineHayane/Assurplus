module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn('Todos', 'mybool', {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false

  }),
  down: (queryInterface) => queryInterface.dropTable('Users'),
};