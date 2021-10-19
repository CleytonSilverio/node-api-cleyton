'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('cliente_tbl', {
      type: 'foreign key',
      fields: ['endereco_resi'],
      name: 'endereco_resi',
      references: {
        table: 'endereco_tbl',
        field: 'id',
      },
    });
    await queryInterface.addConstraint('cliente_tbl', {
      type: 'foreign key',
      fields: ['endereco_comer'],
      name: 'endereco_comer',
      references: {
        table: 'endereco_tbl',
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
