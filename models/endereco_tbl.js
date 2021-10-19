const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('endereco_tbl', {
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
    endereco_tipo: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'tipo_endereco_tbl',
        key: 'id'
      }
    },
    rua: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    complemento: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cep: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cidade: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'cidade_tbl',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'endereco_tbl',
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
        name: "endereco_tipo",
        using: "BTREE",
        fields: [
          { name: "endereco_tipo" },
        ]
      },
      {
        name: "cidade",
        using: "BTREE",
        fields: [
          { name: "cidade" },
        ]
      },
    ]
  });
};
