'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cliente_tbl', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      cliente_nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cliente_nasc: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      endereco_resi: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      endereco_comer: {
        type: Sequelize.UUID,
      },
      telefone: {
        type: Sequelize.UUID,
      },
      celular: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
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
