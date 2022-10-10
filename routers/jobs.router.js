const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller");

router.route("/jobs").post(jobController.createJob);
router.route("/manager/jobs").get(jobController.getJobs);
router.route("/manager/jobs/:id").get(jobController.findJobById);
router.route("/jobs/:id").patch(jobController.updateJob);

module.exports = router;
