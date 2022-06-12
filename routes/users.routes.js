const express = require("express");
const router = express.Router();
const db = require("../models");
const UsersAccountController = require("../controllers/UsersController");

//go to the middleware puis userscontroler
router.post(
	"/adduser",
	// verifyRoles(ROLES_LIST.Admin),
	UsersAccountController.AddUser
);
router.get(
	"/allUsers",
	// verifyRoles(ROLES_LIST.Admin),
	UsersAccountController.getAllUsers
);

// router.put("/updateUser",verifyRoles(ROLES_LIST.Admin),UsersAccountController.updateUser);
// router.delete("/deleteUser",verifyRoles(ROLES_LIST.Admin),UsersAccountController.deleteUser);

// ki ytauthentifya ndiro
// router.route('/:UserId')
//     .get(UsersAccountController.getUser );
module.exports = router;
