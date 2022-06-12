const express = require("express");
const router = express.Router();
const LiaisonController = require("../controllers/LiaisonController");

router.get("/all", LiaisonController.getAll);
router.get("/One", LiaisonController.getOne);
router.get("/mob", LiaisonController.getMobilis);
router.get("/try", LiaisonController.getTry);
module.exports = router;
