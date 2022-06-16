const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");

router.post("/auth", authController.handleLogin);

module.exports = router;
