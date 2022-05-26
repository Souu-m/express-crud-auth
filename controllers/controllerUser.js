const db = require("../models");
const users = db.UsersAccount;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
	const books = users.findAll({
		// The following ensure we get plain data
		// Instead of an array of instances
		raw: true,
	});
	console.log(books);
};
