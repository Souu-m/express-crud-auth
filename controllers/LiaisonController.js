const db = require("../models");
const path = require("path");

const getAll = async (req, res) => {
	let users = await db.SITE.findAll({});
	res.status(200).send(users);
};

const getOne = async (req, res) => {
	let users = await db.SITE.findOne({
		include: [{ model: db.LIAISON }],
	});
	res.status(200).send(users);
};

module.exports = {
	getAll,
	getOne,
};
