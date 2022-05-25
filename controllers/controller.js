const db = require("../models");
const users = db.UsersAccount;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
	const FirstName = req.query.FirstName;
	var condition = FirstName
		? { FirstName: { [Op.like]: `%${FirstName}%` } }
		: null;
	users
		.findAll({ where: condition })
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
