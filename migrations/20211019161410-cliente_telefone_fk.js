'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('cliente_tbl', {
      type: 'foreign key',
      fields: ['telefone'],
      name: 'telefone',
      references: {
        table: 'telefone_tbl',
        field: 'id',
      },
    });
    await queryInterface.addConstraint('cliente_tbl', {
      type: 'foreign key',
      fields: ['celular'],
      name: 'celular',
      references: {
        table: 'telefone_tbl',
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
