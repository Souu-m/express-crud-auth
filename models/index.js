const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const db = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
	host: dbConfig.host,
	port: dbConfig.port,
	dialect: dbConfig.dialect,
});
try {
	db.authenticate();
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}
// const db = {};
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
// db.tutorials = require("./tutorial.model")(sequelize, Sequelize);
module.exports = db;
