'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('endereco_tbl', {
      type: 'foreign key',
      fields: ['endereco_tipo'],
      name: 'endereco_tipo',
      references: {
        table: 'tipo_endereco_tbl',
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
