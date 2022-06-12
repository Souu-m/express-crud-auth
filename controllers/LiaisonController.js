const db = require("../models");
const path = require("path");

const getAll = async (req, res) => {
	let users = await db.SITE.findAll({
		include: [
			{
				model: db.LIAISON,
				as: "LIAISON",
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

const getTry = async (req, res) => {
	let users = await db.LIAISON.findAll({
		include: [
			{
				model: db.SITE,
				as: "SITE",
				include: [
					{
						model: db.WILAYA,
						as: "WILAYA",
					},
					{
						model: db.BRANCHE,
						as: "BRANCHE",
					},
				],
			},
			"EQUIPEMENT",
		],
	});
	res.status(200).send(users);
};

const getMobilis = async (req, res) => {
	let users = await db.LIAISON.findOne({
		where: { TYPE: "MOBILIS" },
		include: [
			{
				model: db.SITE,
				as: "SITE",
				include: [
					{
						model: db.WILAYA,
						as: "WILAYA",
					},
					{
						model: db.BRANCHE,
						as: "BRANCHE",
					},
				],
			},
			"EQUIPEMENT",
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
				// include: {
				// 	model: db.ABONNEMENT,
				// 	as: "ABONNEMENT",
				// },
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
	getMobilis,
	getTry,
};
