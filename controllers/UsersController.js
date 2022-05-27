const db = require("../models");
const path = require("path");

const getAllUsers = async (req, res) => {
	let users = await db.UsersAccount.findAll({});
	res.status(200).send(users);
};

module.exports = {
	getAllUsers,
};
