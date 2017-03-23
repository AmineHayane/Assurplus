module.exports = {
  up: (queryInterface, Sequelize) => {
     queryInterface.removeColumn('Todos', 'mybool'),
     queryInterface.addColumn('Todos', 'mybool', {type: Sequelize.INTEGER, allowNull: false, defaultValue: 1})
  },
  down: (queryInterface) => queryInterface.dropTable('Users'),
};