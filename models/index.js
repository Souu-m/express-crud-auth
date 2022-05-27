const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
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
try {
	sequelize.authenticate();
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//-----add tables into db ----
db.UsersAccount = require("./users.model")(
	sequelize,
	Sequelize,
	Sequelize.DataTypes
);

module.exports = db;
