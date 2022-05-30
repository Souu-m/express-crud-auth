const db = require("../models");
const path = require("path");
const bcrypt = require("bcrypt");

const { Sequelize } = require("../models");
const { user } = require("../config/db.config");

const AddUser = async (req, res) => {
	let user = {
		Username: req.body.username,
		LastName: req.body.lastname,
		FirstName: req.body.firstname,
		Branch: req.body.branch,
		Password: req.body.password,
	};
	const duplicate = await db.UsersAccount.findOne({
		where: {
			Username: req.body.username,
		},
	});
	if (duplicate) {
		return res.sendStatus(409);
	}
	try {
		const hashPwd = await bcrypt.hash(req.body.password, 10);
		const newUser = await db.UsersAccount.create({
			Username: req.body.username,
			LastName: req.body.lastname,
			FirstName: req.body.firstname,
			Branch: req.body.branch,
			Password: hashPwd,
		});

		res.status(201).json({ success: `New user ${req.body.username} created!` });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const getAllUsers = async (req, res) => {
	let users = await db.UsersAccount.findAll({});
	res.status(200).send(users);
};

module.exports = {
	getAllUsers,
	AddUser,
};
