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
const getAllSitesDG = async (req, res) => {
	let site = await db.SITE.findAll({
		where: { CODE_BR: "DG" },
	});
	res.status(200).send(site);
};
const getAllSitesCOM = async (req, res) => {
	let site = await db.SITE.findAll({
		where: { CODE_BR: "COM" },
	});
	res.status(200).send(site);
};
const getAllSitesCBR = async (req, res) => {
	let site = await db.SITE.findAll({
		where: { CODE_BR: "CBR" },
	});
	res.status(200).send(site);
};
const getAllSitesGPL = async (req, res) => {
	let site = await db.SITE.findAll({
		where: { CODE_BR: "GPL" },
	});
	res.status(200).send(site);
};
const getAllLiaison = async (req, res) => {
	let liaison = await db.LIAISON.findAll({
		where: {
			TYPE: "4GLTE",
		},
	});
	res.status(200).send(liaison);
};
const getAllWilaya = async (req, res) => {
	let wilaya = await db.WILAYA.findAll({});
	res.status(200).json(wilaya);
};
const getIDCode = async (codeBrWil) => {
	console.log(codeBrWil);
	const codes = await db.SITE.findAll({
		attributes: ["CODE_SITE"],
	});

	var extract6 = codeBrWil.substring(0, 6);
	var extract5 = codeBrWil.substring(0, 5);

	if (codeBrWil[3] == "-") {
		var res1 = "0";
		var max1 = 0;
		var i = codes.length - 1;
		while (i >= 0) {
			var comp1;
			if (codes[i].CODE_SITE.substring(0, 5) === extract5) {
				console.log("tell me", codes[i].CODE_SITE.substring(7, 10));
				comp1 = codes[i].CODE_SITE.substring(7, 10);
			}
			i--;
			if (parseInt(comp1) > parseInt(max1)) {
				max1 = comp1;
			}
		}
		console.log("tell me what u got", max1);
		return max1;
		// for (var i = 0; i < codes.length; i++) {
		// 	console.log("u here");
		// 	console.log(extract6);
		// 	console.log(codes[0].CODE_SITE.substring(0, 6));

		// 	if (codes[i].CODE_SITE.substring(0, 6) === extract6) {
		// 		// resp = codes[i].CODE_SITE.substring(7, 10);
		// 		console.log("res of my func", codes[i].CODE_SITE.substring(0, 6));
		// 		console.log(codes[i].CODE_SITE.substring(7, 10));
		// 		return codes[i].CODE_SITE.substring(7, 10);
		// 		// res.status(200).send(codes[i].CODE_SITE.substring(7, 10));
		// 	}
		// }
		// console.log("res of my func", codeBrWil);
		// return "0";
	} else {
		var res = "0";
		var j = codes.length - 1;
		var max = 0;
		while (j >= 0) {
			var comp;
			console.log("what is in 14", codes[j].CODE_SITE);
			if (codes[j].CODE_SITE.substring(0, 5) === extract5) {
				console.log("inside inside", codes[j].CODE_SITE.substring(0, 5));
				console.log("inside inside", extract5);
				console.log("im inside", codes[j].CODE_SITE.substring(6, 9));
				comp = codes[j].CODE_SITE.substring(6, 9);
				console.log("how is comp inside", comp);
			}
			j--;
			console.log("how is comp", comp);
			if (parseInt(comp) > parseInt(max)) {
				max = comp;
			}
		}
		console.log("this is max", max);
		return max;
		// for (var j = 0; j < codes.length; j++) {
		// 	console.log("here!!!!!!!!!!!!!!!!", codes[j].CODE_SITE.substring(0, 5));
		// 	res = 0;

		// 	if (codes[j].CODE_SITE.substring(0, 5) === extract5) {
		// 		var indice = j;
		// 		//cas 5
		// 		// console.log("test test", codes[j].CODE_SITE.substring(6, 9));
		// 		// res = codes[j].CODE_SITE.substring(6, 9);
		// 		// console.log(res);
		// 		// return codes[j].CODE_SITE.substring(6, 9);
		// 		// resp2 = codes[j].CODE_SITE.substring(6, 9);
		// 		// res.status(200).send(codes[j].CODE_SITE.substring(6, 9));
		// 	}
		// 	console.log("did u save", indice);
		// 	res = codes[j].CODE_SITE.substring(6, 9);
		// }
		// console.log("did u save", indice);
		// console.log("tell me what u got", res);
		// return res;
		// res.status(200).send(resp2);
	}
};
// let users = await db.SITE.findAll({
// 	include: [
// 		{
// 			model: db.LIAISON,
// 			as: "LIAISON",
// 			include: {
// 				model: db.EQUIPEMENT,
// 				as: "EQUIPEMENT",
// 			},
// 		},
// 		"WILAYA",
// 		"BRANCHE",
// 	],
// });
// res.status(200).send(users);

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
	let users = await db.LIAISON.findAll({
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

const getOoredeoo = async (req, res) => {
	let users = await db.LIAISON.findAll({
		where: { TYPE: "OOREDOO" },
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

const AddSite = async (req, res) => {
	try {
		//get code wilaya that corresponds to nom_wilaya

		if (req.body.Date_Act == "") {
			req.body.Date_Act = null;
		}
		if (req.body.Date_exp == "") {
			req.body.Date_exp = null;
		}
		if (req.body.MISE_SERVICE == "") {
			req.body.MISE_SERVICE = null;
		}
		const duplicateLigne = await db.LIAISON.findOne({
			where: {
				NUM_LIGNE: req.body.NUM_LIGNE,
			},
		});
		const duplicateEquip = await db.LIAISON.findOne({
			where: {
				NS_MODEM: req.body.NS_MODEM,
			},
		});

		if (duplicateEquip !== null || duplicateLigne !== null) {
			console.log("did u enter in dup ligne and equup?");
			return res.sendStatus(409);
		} else {
			//***get code wilaya + code site */
			console.log("not dup create site");
			const getIDWilaya = await db.WILAYA.findOne({
				where: {
					NOM_WILAYA: req.body.NOM_WILAYA,
				},
			});
			var CODE_WILAYA = getIDWilaya.CODE_WILAYA;

			const CODE_BR = req.body.CODE_BR;
			const foundSite = await db.SITE.findOne({
				where: {
					DESIGNATION_STRUCTURE: req.body.DESIGNATION_STRUCTURE,
					CODE_BR: CODE_BR,
					CODE_WILAYA: CODE_WILAYA,
				},
			});
			if (foundSite !== null) {
				console.log(foundSite.CODE_SITE);
				const equipement = await db.EQUIPEMENT.create({
					NS_MODEM: req.body.NS_MODEM,
					NS_SIM: req.body.NS_SIM,
					IMEI_MODEM: req.body.IMEI_MODEM,
					ADR_WAN_RSM: req.body.ADR_WAN_RSM,
					ADR_WAN_CLIENT: req.body.ADR_WAN_CLIENT,
				});

				const liaison = await db.LIAISON.create({
					NUM_LIGNE: req.body.NUM_LIGNE,
					NS_MODEM: req.body.NS_MODEM,
					TYPE: req.body.TYPE,
					CODE_SITE: foundSite.CODE_SITE,
					Date_Act: req.body.Date_Act,
					Date_exp: req.body.Date_exp,
					DEBIT: req.body.DEBIT,
					RMRQ: req.body.RMRQ,
				});
			} else {
				console.log("u didnt find the same site");
				var codeSite = CODE_BR + "-" + CODE_WILAYA;
				console.log("CODE_BR", CODE_BR);
				console.log("CODE_WILAYA", CODE_WILAYA);
				var id = await getIDCode(codeSite);
				id = parseInt(id) + 1;

				console.log("new id", CODE_BR + "-" + CODE_WILAYA + "-" + id);
				const site = await db.SITE.create({
					ID: id,
					CODE_SITE: CODE_BR + "-" + CODE_WILAYA + "-" + id,
					DESIGNATION_STRUCTURE: req.body.DESIGNATION_STRUCTURE,
					LATITUDE: req.body.LATITUDE,
					LONGITUDE: req.body.LONGITUDE,
					CODE_WILAYA: CODE_WILAYA,
					CODE_BR: CODE_BR,
				});
				const equipement = await db.EQUIPEMENT.create({
					NS_MODEM: req.body.NS_MODEM,
					NS_SIM: req.body.NS_SIM,
					IMEI_MODEM: req.body.IMEI_MODEM,
					ADR_WAN_RSM: req.body.ADR_WAN_RSM,
					ADR_WAN_CLIENT: req.body.ADR_WAN_CLIENT,
				});
				const liaison = await db.LIAISON.create({
					NUM_LIGNE: req.body.NUM_LIGNE,
					NS_MODEM: req.body.NS_MODEM,
					TYPE: req.body.TYPE,
					CODE_SITE: CODE_BR + "-" + CODE_WILAYA + "-" + id,
					Date_Act: req.body.Date_Act,
					Date_exp: req.body.Date_exp,
					DEBIT: req.body.DEBIT,
					RMRQ: req.body.RMRQ,
				});
			}
			// console.log("what do u have !!?", foundSite);
			// if (foundSite == null) {
			// 	console.log("there is not!!!");
			// console.log("new code ", CODE_BR + "-" + CODE_WILAYA + "-" + id);

			// const foundequip = await db.EQUIPEMENT.findOne({
			// 	where: {
			// 		NS_MODEM: req.body.NS_MODEM,
			// 	},
			// });

			// if (foundequip == null) {
			// 	console.log("dont come here");

			// console.log("what is in foundsite", foundSite.CODE_SITE);
			// const liaison = await db.LIAISON.create({
			// 	NUM_LIGNE: req.body.NUM_LIGNE,
			// 	NS_MODEM: req.body.NS_MODEM,
			// 	TYPE: req.body.TYPE,
			// 	// CODE_SITE: foundSite.CODE_SITE,
			// 	CODE_SITE: CODE_BR + "-" + CODE_WILAYA + "-" + id,
			// 	Date_Act: req.body.Date_Act,
			// 	Date_exp: req.body.Date_exp,
			// 	DEBIT: req.body.DEBIT,
			// 	RMRQ: req.body.RMRQ,
			// });

			res.status(201).json({
				success: `New Site ${req.body.DESIGNATION_STRUCTURE} created!`,
			});
		}
	} catch (err) {
		console.log("is it here?");
		res.status(500).json({ message: err.message });
	}
};
const deleteSite = async (req, res) => {
	const getNS_Modem = await db.LIAISON.findOne({
		attributes: ["NS_MODEM"],
		where: { CODE_SITE: req.params.id },
	});

	await db.LIAISON.destroy({
		where: {
			CODE_SITE: req.params.id,
		},
	});
	if (true) {
		console.log(getNS_Modem.NS_MODEM);
	}
	await db.EQUIPEMENT.destroy({
		where: {
			NS_MODEM: getNS_Modem.NS_MODEM,
		},
	});

	const codes = await db.SITE.findAll({
		where: {
			CODE_SITE: req.params.id,
		},
	});
	if (codes.length == 1) {
		await db.SITE.destroy({
			where: {
				CODE_SITE: req.params.id,
			},
		});
	}

	res.status(201).json("success");
};
const updateLiaison = async (req, res) => {
	// const getOldNS_Modem = await db.LIAISON.findOne({
	// 	attributes: ["NS_MODEM"],
	// 	where: { CODE_SITE: req.params.id },
	// });
	// const OldWilaya = await db.SITE.findOne({
	// 	attributes: ["CODE_WILAYA"],
	// 	where: { CODE_SITE: req.params.id },
	// });
	// const OldBr = await db.SITE.findOne({
	// 	attributes: ["CODE_BR"],
	// 	where: { CODE_SITE: req.params.id },
	// });
	// console.log("which id u r in ", getOldNS_Modem);
	// console.log("which id u r in ", req.params.id);
	// const getIDWilaya = await db.WILAYA.findOne({
	// 	where: {
	// 		NOM_WILAYA: req.body.NOM_WILAYA,
	// 	},
	// });
	// if (req.body.Date_Act == "") {
	// 	req.body.Date_Act = null;
	// }
	// if (req.body.Date_exp == "") {
	// 	req.body.Date_exp = null;
	// }
	// if (req.body.MISE_SERVICE == "") {
	// 	req.body.MISE_SERVICE = null;
	// }
	// var CODE_WILAYA = getIDWilaya.CODE_WILAYA;
	// const CODE_BR = req.body.CODE_BR;
	// var codeSite = CODE_BR + "-" + CODE_WILAYA;
	// console.log("code wilya", CODE_WILAYA);
	// console.log("code that i sent", codeSite);
	// var id = await getIDCode(codeSite);
	// console.log("I got this", id);
	// id = parseInt(id) + 1;
	// const OldNSMODEM = getOldNS_Modem.NS_MODEM;
	// console.log("here us my ns", OldNSMODEM);
	// if (OldNSMODEM != req.body.NS_MODEM) {
	// 	await db.EQUIPEMENT.create({
	// 		NS_MODEM: req.body.NS_MODEM,
	// 		NS_SIM: req.body.NS_SIM,
	// 		IMEI_MODEM: req.body.IMEI_MODEM,
	// 	});
	// }
	// if (OldWilaya == CODE_WILAYA && OldBr == CODE_BR) {
	// 	await db.SITE.update(
	// 		{
	// 			DESIGNATION_STRUCTURE: req.body.DESIGNATION_STRUCTURE,
	// 			LATITUDE: req.body.LATITUDE,
	// 			LONGITUDE: req.body.LONGITUDE,
	// 		},
	// 		{
	// 			where: { CODE_SITE: req.params.id },
	// 		}
	// 	);
	// 	const newLiaison = await db.LIAISON.update(
	// 		{
	// 			NUM_LIGNE: req.body.NUM_LIGNE,
	// 			NS_MODEM: req.body.NS_MODEM,
	// 			TYPE: req.body.TYPE,
	// 			Date_Act: req.body.Date_Act,
	// 			Date_exp: req.body.Date_exp,
	// 		},
	// 		{
	// 			where: { CODE_SITE: req.params.id },
	// 		}
	// 	);
	// } else {
	// 	await db.SITE.create({
	// 		ID: id,
	// 		CODE_SITE: CODE_BR + "-" + CODE_WILAYA + "-" + id,
	// 		DESIGNATION_STRUCTURE: req.body.DESIGNATION_STRUCTURE,
	// 		LATITUDE: req.body.LATITUDE,
	// 		LONGITUDE: req.body.LONGITUDE,
	// 		CODE_WILAYA: CODE_WILAYA,
	// 		CODE_BR: req.body.CODE_BR,
	// 	});
	// 	const newLiaison = await db.LIAISON.update(
	// 		{
	// 			CODE_SITE: CODE_BR + "-" + CODE_WILAYA + "-" + id,
	// 			NUM_LIGNE: req.body.NUM_LIGNE,
	// 			NS_MODEM: req.body.NS_MODEM,
	// 			TYPE: req.body.TYPE,
	// 			Date_Act: req.body.Date_Act,
	// 			Date_exp: req.body.Date_exp,
	// 		},
	// 		{
	// 			where: { CODE_SITE: req.params.id },
	// 		}
	// 	);
	// 	await db.SITE.destroy({
	// 		where: { CODE_SITE: req.params.id },
	// 	});
	// 	await db.EQUIPEMENT.destroy({
	// 		where: { NS_MODEM: OldNSMODEM },
	// 	});
	// }
	// const duplicateLigne = await db.LIAISON.findOne({
	// 	where: {
	// 		NUM_LIGNE: req.body.NUM_LIGNE,
	// 	},
	// });
	// const duplicateEquip = await db.EQUIPEMENT.findOne({
	// 	where: {
	// 		NS_MODEM: req.body.NS_MODEM,
	// 	},
	// });
	// if (duplicateLigne || duplicateEquip) {
	// 	return res.sendStatus(409);
	// } else {
};
const deleteAll = async (req, res) => {
	await db.SITE.destroy({
		where: {},
		force: true,
	});
	await db.EQUIPEMENT.destroy({
		where: {},
		force: true,
	});
	res.status(201).json("success");
};
module.exports = {
	getAll,
	getOne,
	getMobilis,
	getOoredeoo,
	getTry,
	AddSite,
	deleteSite,
	updateLiaison,
	deleteAll,
	getAllWilaya,
	getAllLiaison,
	getAllSitesDG,
	getAllSitesCOM,
	getAllSitesGPL,
	getAllSitesCBR,
};
