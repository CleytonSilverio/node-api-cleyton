'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('telefone_tbl', {
      type: 'foreign key',
      fields: ['tipo_telefone'],
      name: 'tipo_telefone',
      references: {
        table: 'tipo_telefone_tbl',
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
