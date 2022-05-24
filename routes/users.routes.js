module.exports = (app) => {
	const UsersTable = require("../controllers/controller");
	var router = require("express").Router();

	// Retrieve all Tutorials
	router.get("/", UsersTable.findAll);

	// Create a new Tutorial
	router.post("/", UsersTable.create);
	// // Retrieve all published Tutorials
	// router.get("/published", tutorials.findAllPublished);
	// // Retrieve a single Tutorial with id
	// router.get("/:id", tutorials.findOne);
	// // Update a Tutorial with id
	// router.put("/:id", tutorials.update);
	// // Delete a Tutorial with id
	// router.delete("/:id", tutorials.delete);
	// // Delete all Tutorials
	// router.delete("/", tutorials.deleteAll);
	// app.use("/api/tutorials", router);
};
