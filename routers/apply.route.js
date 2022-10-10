const express = require("express");
const router = express.Router();
const applyController = require("../controllers/job.controller");

router.route("/").get(applyController.getJobs);
router.route("/:id").get(applyController.findJobById);

module.exports = router;
