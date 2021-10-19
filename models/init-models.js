var DataTypes = require("sequelize").DataTypes;
var _cidade_tbl = require("./cidade_tbl");
var _cliente_tbl = require("./cliente_tbl");
var _endereco_tbl = require("./endereco_tbl");
var _sequelizemeta = require("./sequelizemeta");
var _telefone_tbl = require("./telefone_tbl");
var _tipo_endereco_tbl = require("./tipo_endereco_tbl");
var _tipo_telefone_tbl = require("./tipo_telefone_tbl");

function initModels(sequelize) {
  var cidade_tbl = _cidade_tbl(sequelize, DataTypes);
  var cliente_tbl = _cliente_tbl(sequelize, DataTypes);
  var endereco_tbl = _endereco_tbl(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);
  var telefone_tbl = _telefone_tbl(sequelize, DataTypes);
  var tipo_endereco_tbl = _tipo_endereco_tbl(sequelize, DataTypes);
  var tipo_telefone_tbl = _tipo_telefone_tbl(sequelize, DataTypes);

  endereco_tbl.belongsTo(cidade_tbl, { as: "cidade_cidade_tbl", foreignKey: "cidade"});
  cidade_tbl.hasMany(endereco_tbl, { as: "endereco_tbls", foreignKey: "cidade"});
  cliente_tbl.belongsTo(endereco_tbl, { as: "endereco_resi_endereco_tbl", foreignKey: "endereco_resi"});
  endereco_tbl.hasMany(cliente_tbl, { as: "cliente_tbls", foreignKey: "endereco_resi"});
  cliente_tbl.belongsTo(endereco_tbl, { as: "endereco_comer_endereco_tbl", foreignKey: "endereco_comer"});
  endereco_tbl.hasMany(cliente_tbl, { as: "endereco_comer_cliente_tbls", foreignKey: "endereco_comer"});
  cliente_tbl.belongsTo(telefone_tbl, { as: "telefone_telefone_tbl", foreignKey: "telefone"});
  telefone_tbl.hasMany(cliente_tbl, { as: "cliente_tbls", foreignKey: "telefone"});
  cliente_tbl.belongsTo(telefone_tbl, { as: "celular_telefone_tbl", foreignKey: "celular"});
  telefone_tbl.hasMany(cliente_tbl, { as: "celular_cliente_tbls", foreignKey: "celular"});
  endereco_tbl.belongsTo(tipo_endereco_tbl, { as: "endereco_tipo_tipo_endereco_tbl", foreignKey: "endereco_tipo"});
  tipo_endereco_tbl.hasMany(endereco_tbl, { as: "endereco_tbls", foreignKey: "endereco_tipo"});
  telefone_tbl.belongsTo(tipo_telefone_tbl, { as: "tipo_telefone_tipo_telefone_tbl", foreignKey: "tipo_telefone"});
  tipo_telefone_tbl.hasMany(telefone_tbl, { as: "telefone_tbls", foreignKey: "tipo_telefone"});

  return {
    cidade_tbl,
    cliente_tbl,
    endereco_tbl,
    sequelizemeta,
    telefone_tbl,
    tipo_endereco_tbl,
    tipo_telefone_tbl,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
