const db = require("../models/index");
const user = db.UsersTable;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
	const FirstName = req.query.FirstName;
	var condition = FirstName
		? { FirstName: { [Op.like]: `%${FirstName}%` } }
		: null;
	UsersTable.findAll({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving tutorials.",
			});
		});
};

// exports.create = (req, res) => {
// 	// Validate request
// 	if (!req.body.FirstName) {
// 		res.status(400).send({
// 			message: "Content can not be empty!",
// 		});
// 		return;
// 	}
// 	// Create a Tutorial
// 	const user = {
// 		FirstName: req.body.FirstName,
// 		LastName: req.body.LastName,
// 		Branche: req.body.Branche,
// 		Password: req.body.Password,
// 	};
// 	// Save Tutorial in the database
// 	.create(tutorial)
// 		.then((data) => {
// 			res.send(data);
// 		})
// 		.catch((err) => {
// 			res.status(500).send({
// 				message:
// 					err.message || "Some error occurred while creating the Tutorial.",
// 			});
// 		});
// };

// // exports.findAll = (req, res) => {
// // 	Tutorial.findAll({ where: { FirstName: "sali" } })
// // 		.then((data) => {
// // 			res.send(data);
// // 		})
// // 		.catch((err) => {
// // 			res.status(500).send({
// // 				message:
// // 					err.message || "Some error occurred while retrieving tutorials.",
// // 			});
// // 		});
// // };
