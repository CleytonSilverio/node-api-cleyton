'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('endereco_tbl', {
      type: 'foreign key',
      fields: ['cidade'],
      name: 'cidade',
      references: {
        table: 'cidade_tbl',
        field: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
