var DataTypes = require("sequelize").DataTypes;

var _BRANCHE = require("./BRANCHE");
var _EQUIPEMENT = require("./EQUIPEMENT");
var _LIAISON = require("./LIAISON");
var _SITE = require("./SITE");
var _WILAYA = require("./WILAYA");
var UsersAccounts = require("./UsersAccount");

function initModels(sequelize) {
	var BRANCHE = _BRANCHE(sequelize, DataTypes);
	var EQUIPEMENT = _EQUIPEMENT(sequelize, DataTypes);
	var LIAISON = _LIAISON(sequelize, DataTypes);
	var SITE = _SITE(sequelize, DataTypes);
	var WILAYA = _WILAYA(sequelize, DataTypes);
	var UsersAccount = UsersAccounts(sequelize, DataTypes);

	SITE.belongsTo(BRANCHE, { as: "BRANCHE", foreignKey: "CODE_BR" });
	BRANCHE.hasMany(SITE, { as: "SITE", foreignKey: "CODE_BR" });
	LIAISON.belongsTo(EQUIPEMENT, { as: "EQUIPEMENT", foreignKey: "NS_MODEM" });
	EQUIPEMENT.hasMany(LIAISON, { as: "LAISION", foreignKey: "NS_MODEM" });
	LIAISON.belongsTo(SITE, { as: "SITE", foreignKey: "CODE_SITE" });
	SITE.hasMany(LIAISON, { as: "LIAISON", foreignKey: "CODE_SITE" });
	SITE.belongsTo(WILAYA, { as: "WILAYA", foreignKey: "CODE_WILAYA" });
	WILAYA.hasMany(SITE, { as: "SITE", foreignKey: "CODE_WILAYA" });

	return {
		BRANCHE,
		EQUIPEMENT,
		LIAISON,
		SITE,
		WILAYA,
		UsersAccount,
	};
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
