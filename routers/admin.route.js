const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");

router.route("/allCandidate").get(adminController.getAllCandidates);
router.route("/allHiringManagers").get(adminController.getAllHiringManagers);

module.exports = router;
