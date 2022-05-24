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
	}
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.UsersTable = require("./users")(sequelize, Sequelize);
module.exports = db;
