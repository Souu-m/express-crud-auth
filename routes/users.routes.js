const express = require("express");
const router = express.Router();
const db = require("../models");
const UsersAccountController = require("../controllers/UsersController");

router.post("/adduser", UsersAccountController.AddUser);
router.get("/allUsers", UsersAccountController.getAllUsers);

module.exports = router;
