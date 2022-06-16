const express = require("express");
const router = express.Router();
const refreshTokenController = require("../Controllers/refreshTokenController");

router.get("/refresh", refreshTokenController.handleRefreshToken);

module.exports = router;
