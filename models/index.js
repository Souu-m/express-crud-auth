const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const initModels = require("./init-models");
const sequelize = new Sequelize(
	dbConfig.database,
	dbConfig.user,
	dbConfig.password,
	{
		host: dbConfig.host,
		port: dbConfig.port,
		dialect: dbConfig.dialect,
		logging: console.log,
	}
);
//-----testing connection -----------------
try {
	sequelize.authenticate();
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}
//-------storing tables--------------------
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//-----add tables into db ----

db.BRANCHE = initModels(sequelize).BRANCHE;
db.BRANCHEMENT = initModels(sequelize).BRANCHEMENT;
db.DATE = initModels(sequelize).DATE;
db.INTERCONNECTION = initModels(sequelize).INTERCONNECTION;
db.LIAISON = initModels(sequelize).LIAISON;
db.MODEM = initModels(sequelize).MODEM;
db.ROUTER = initModels(sequelize).ROUTER;
db.SITE = initModels(sequelize).SITE;
db.WILAYA = initModels(sequelize).WILAYA;
db.UsersAccount = initModels(sequelize).UsersAccount;
module.exports = db;
