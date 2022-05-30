var DataTypes = require("sequelize").DataTypes;

var _BRANCHE = require("./BRANCHE");
var _BRANCHEMENT = require("./BRANCHEMENT");
var _DATE = require("./DATE");
var _INTERCONNECTION = require("./INTERCONNECTION");
var _LIAISON = require("./LIAISON");
var _MODEM = require("./MODEM");
var _ROUTER = require("./ROUTER");
var _SITE = require("./SITE");
var _UsersAccount = require("./UsersAccount");
var _WILAYA = require("./WILAYA");

function initModels(sequelize) {
	var BRANCHE = _BRANCHE(sequelize, DataTypes);
	var BRANCHEMENT = _BRANCHEMENT(sequelize, DataTypes);
	var DATE = _DATE(sequelize, DataTypes);
	var INTERCONNECTION = _INTERCONNECTION(sequelize, DataTypes);
	var LIAISON = _LIAISON(sequelize, DataTypes);
	var MODEM = _MODEM(sequelize, DataTypes);
	var ROUTER = _ROUTER(sequelize, DataTypes);
	var SITE = _SITE(sequelize, DataTypes);
	var UsersAccount = _UsersAccount(sequelize, DataTypes);
	var WILAYA = _WILAYA(sequelize, DataTypes);
	/******************************************* */
	SITE.belongsTo(BRANCHE, { as: "CODE_BR_BRANCHE", foreignKey: "CODE_BR" });
	BRANCHE.hasMany(SITE, { as: "SITEs", foreignKey: "CODE_BR" });

	SITE.belongsTo(WILAYA, {
		as: "CODE_WILAYA_WILAYA",
		foreignKey: "CODE_WILAYA",
	});
	WILAYA.hasMany(SITE, { as: "SITEs", foreignKey: "CODE_WILAYA" });

	//***************************************/
	DATE.belongsToMany(LIAISON, { through: INTERCONNECTION });
	LIAISON.belongsToMany(DATE, { through: INTERCONNECTION });

	LIAISON.belongsToMany(SITE, { through: INTERCONNECTION });
	SITE.belongsToMany(LIAISON, { through: INTERCONNECTION });
	//***************************************/

	// INTERCONNECTION.belongsTo(DATE, {
	// 	as: "ID_DATE_DATE",
	// 	foreignKey: "ID_DATE",
	// });
	// DATE.hasMany(INTERCONNECTION, {
	// 	as: "INTERCONNECTIONs",
	// 	foreignKey: "ID_DATE",
	// });

	// LIAISON.hasMany(INTERCONNECTION, {
	// 	as: "INTERCONNECTIONs",
	// 	foreignKey: "NUM_LIGNE",
	// });
	// SITE.hasMany(INTERCONNECTION, {
	// 	as: "INTERCONNECTIONs",
	// 	foreignKey: "CODE_SITE",
	// });

	//******************************************/

	LIAISON.belongsToMany(MODEM, { through: BRANCHEMENT });
	MODEM.belongsToMany(LIAISON, { through: BRANCHEMENT });
	ROUTER.belongsToMany(LIAISON, { through: BRANCHEMENT });
	LIAISON.belongsToMany(ROUTER, { through: BRANCHEMENT });

	// INTERCONNECTION.belongsTo(LIAISON, {
	// 	as: "NUM_LIGNE_LIAISON",
	// 	foreignKey: "NUM_LIGNE",
	// });
	// INTERCONNECTION.belongsTo(SITE, {
	// 	as: "CODE_SITE_SITE",
	// 	foreignKey: "CODE_SITE",
	// });

	// BRANCHEMENT.belongsTo(LIAISON, {
	// 	as: "NUM_LIGNE_LIAISON",
	// 	foreignKey: "NUM_LIGNE",
	// });
	// BRANCHEMENT.belongsTo(MODEM, {
	// 	as: "IP_MODEM_MODEM",
	// 	foreignKey: "IP_MODEM",
	// });
	// MODEM.hasMany(BRANCHEMENT, { as: "BRANCHEMENTs", foreignKey: "IP_MODEM" });
	// BRANCHEMENT.belongsTo(ROUTER, {
	// 	as: "IP_ROUTER_ROUTER",
	// 	foreignKey: "IP_ROUTER",
	// });
	// ROUTER.hasMany(BRANCHEMENT, { as: "BRANCHEMENTs", foreignKey: "IP_ROUTER" });

	return {
		BRANCHE,
		BRANCHEMENT,
		DATE,
		INTERCONNECTION,
		LIAISON,

		MODEM,
		ROUTER,
		SITE,
		UsersAccount,
		WILAYA,
	};
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
