const express = require("express");
const router = express.Router();
const LiaisonController = require("../Controllers/LiaisonController");

router.get("/all", LiaisonController.getAll);
router.get("/One", LiaisonController.getOne);
router.get("/mob", LiaisonController.getMobilis);
router.get("/oor", LiaisonController.getOoredeoo);
module.exports = router;
