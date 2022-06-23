const db = require("../models");
const path = require("path");
const bcrypt = require("bcrypt");

const { Sequelize } = require("../models");
const { user } = require("../config/db.config");

const AddUser = async (req, res) => {
	let user = {
		Username: req.body.Username,
		LastName: req.body.Lastname,
		FirstName: req.body.Firstname,
		Branch: req.body.Branch,
		Password: req.body.Password,
		roles: req.body.roles,
	};
	const duplicate = await db.UsersAccount.findOne({
		where: {
			Username: req.body.Username,
		},
	});
	if (duplicate) {
		return res.sendStatus(409);
	}
	try {
		const hashPwd = await bcrypt.hash(req.body.Password, 10);
		if (!req.body.roles) {
			req.body.roles = 2000;
		}
		const newUser = await db.UsersAccount.create({
			Username: req.body.Username,
			LastName: req.body.Lastname,
			FirstName: req.body.Firstname,
			Branch: req.body.Branch,
			Password: hashPwd,
			roles: req.body.roles,
		});

		res.status(201).json({ success: `New user ${req.body.Username} created!` });
	} catch (err) {
		console.log("is it here?");
		res.status(500).json({ message: err.message });
	}
};
const getAllUsers = async (req, res) => {
	let users = await db.UsersAccount.findAll({});
	res.status(200).send(users);
};
const getByID = async (req, res) => {
	await db.UsersAccount.findAll({
		where: {
			UserID: req.params.id,
		},
	}).then((user) => res.status(200).send(user));
};
const deleteUser = async (req, res) => {
	await db.UsersAccount.destroy({
		where: {
			UserID: req.params.id,
		},
	}).then(() => res.status(201).json("success"));
};
const updateUser = async (req, res) => {
	await db.UsersAccount.update(
		{
			Username: req.body.Username,
			LastName: req.body.Lastname,
			FirstName: req.body.Firstname,
			Email: req.body.Email,
			Branch: req.body.Branch,
			Password: req.body.Password,
		},
		{
			where: { UserID: req.body.id },
		}
	).then(() => res.status(201).json("success"));
};
module.exports = {
	getAllUsers,
	AddUser,
	getByID,
	deleteUser,
	updateUser,
};
