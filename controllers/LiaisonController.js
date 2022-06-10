const db = require("../models");
const path = require("path");

const getAll = async (req, res) => {
	let users = await db.SITE.findAll({
		include: [
			{
				model: db.LIAISON,
				as: "LIAISON",
				include: {
					model: db.ABONNEMENT,
					as: "ABONNEMENT",
				},
				include: {
					model: db.EQUIPEMENT,
					as: "EQUIPEMENT",
				},
			},
			"WILAYA",
			"BRANCHE",
		],
	});
	res.status(200).send(users);
};

const getOne = async (req, res) => {
	let users = await db.SITE.findOne({
		include: [
			{
				model: db.LIAISON,
				as: "LIAISON",
				include: {
					model: db.ABONNEMENT,
					as: "ABONNEMENT",
				},
				include: {
					model: db.EQUIPEMENT,
					as: "EQUIPEMENT",
				},
			},
			"WILAYA",
			"BRANCHE",
		],
	});
	res.status(200).send(users);
};

module.exports = {
	getAll,
	getOne,
};
