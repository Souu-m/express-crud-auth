const express = require("express");
const router = express.Router();
const logoutOutController = require("../Controllers/logOutController");

router.get("/logout", logoutOutController.handleLogout);

module.exports = router;
