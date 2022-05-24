const UsersTable = require("../models/users");
const express = require("express");
const router = express.Router();
const db = require("../models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Get gig list
router.get("/", (req, res) =>
	UsersTable.findAll()
		.then((UsersTable) =>
			res.render("UsersTable", {
				UsersTable,
			})
		)
		.catch((err) => res.render("error", { error: err }))
);

module.exports = router;
