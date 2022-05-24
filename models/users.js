const Sequelize = require("Sequelize");
const db = require("../models/index");
const UsersTable = db.define("user", {
	FirstName: {
		type: Sequelize.STRING,
	},
	LastName: {
		type: Sequelize.STRING,
	},
	Branche: {
		type: Sequelize.STRING,
	},
	Password: {
		type: Sequelize.STRING,
	},
});
UsersTable.sync({ force: true }).then(() => {
	console.log("Drop and re-sync db.");
});
module.exports = UsersTable;
