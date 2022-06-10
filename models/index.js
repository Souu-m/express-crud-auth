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
db.LIAISON = initModels(sequelize).LIAISON;
db.ABONNEMENT = initModels(sequelize).ABONNEMENT;
db.SITE = initModels(sequelize).SITE;
db.WILAYA = initModels(sequelize).WILAYA;
db.EQUIPEMENT = initModels(sequelize).EQUIPEMENT;
db.UsersAccount = initModels(sequelize).UsersAccount;

module.exports = db;
