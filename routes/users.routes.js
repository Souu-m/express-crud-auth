module.exports = (app) => {
	const UsersAccount = require("../controllers/controller");
	var router = require("express").Router();

	router.get("/", UsersAccount.findAll);
	app.use("/api/users", router);
};
