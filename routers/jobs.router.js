const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller");
const authorization = require("../middleware/authorization");
const verifyToken = require("../middleware/verifyToken");

router.route("/jobs").post(jobController.createJob);
router
  .route("/manager/jobs")
  .get(verifyToken, authorization("admin"), jobController.getJobs);
router.route("/manager/jobs/:id").get(jobController.findJobById);
router.route("/jobs/:id").patch(jobController.updateJob);

module.exports = router;
