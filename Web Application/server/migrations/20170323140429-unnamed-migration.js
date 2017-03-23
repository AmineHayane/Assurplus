module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Todos', 'mybool', {
    type: Sequelize.BOOLEAN,
      defaultValue: true,
  }),
  down: (queryInterface) => queryInterface.dropTable('Users'),
};