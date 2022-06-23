const express = require("express");
const router = express.Router();
const db = require("../models");
const UsersAccountController = require("../Controllers/UsersController");
const verifyJWT = require("../middleware/verifyJWT");
const ROLES_LIST = require("../config/roles_list");
const verifyRoles = require("../middleware/verifyRoles");
// router
// 	.route("/users")
// 	.get(
// 		verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Consultant),
// 		UsersAccountController.getAllUsers
// 	)
// 	.post(verifyRoles(ROLES_LIST.Admin), UsersAccountController.AddUser);

//go to the middleware puis userscontroler
router
	.route("/users")
	.post(UsersAccountController.AddUser)
	.get(UsersAccountController.getAllUsers);
router
	.route("/:id")
	.put(UsersAccountController.updateUser)
	.get(UsersAccountController.getByID)
	.delete(UsersAccountController.deleteUser);
// router.get("/ver", verifyJWT, UsersAccountController.getAllUsers);
// router.put("/updateUser",verifyRoles(ROLES_LIST.Admin),UsersAccountController.updateUser);
// router.delete("/deleteUser",verifyRoles(ROLES_LIST.Admin),UsersAccountController.deleteUser);

// ki ytauthentifya ndiro
// router.route('/:UserId')
//     .get(UsersAccountController.getUser );
module.exports = router;
