const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente_tbl', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    cliente_nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cliente_nasc: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    endereco_resi: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'endereco_tbl',
        key: 'id'
      }
    },
    endereco_comer: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'endereco_tbl',
        key: 'id'
      }
    },
    telefone: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'telefone_tbl',
        key: 'id'
      }
    },
    celular: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'telefone_tbl',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'cliente_tbl',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "endereco_resi",
        using: "BTREE",
        fields: [
          { name: "endereco_resi" },
        ]
      },
      {
        name: "endereco_comer",
        using: "BTREE",
        fields: [
          { name: "endereco_comer" },
        ]
      },
      {
        name: "telefone",
        using: "BTREE",
        fields: [
          { name: "telefone" },
        ]
      },
      {
        name: "celular",
        using: "BTREE",
        fields: [
          { name: "celular" },
        ]
      },
    ]
  });
};
