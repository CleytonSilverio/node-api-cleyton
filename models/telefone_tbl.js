const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('telefone_tbl', {
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
    tipo_telefone: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'tipo_telefone_tbl',
        key: 'id'
      }
    },
    ddd: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'telefone_tbl',
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
        name: "tipo_telefone",
        using: "BTREE",
        fields: [
          { name: "tipo_telefone" },
        ]
      },
    ]
  });
};
