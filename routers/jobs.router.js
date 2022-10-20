const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller");
const authorization = require("../middleware/authorization");
const verifyToken = require("../middleware/verifyToken");

router
  .route("/jobs")
  .post(verifyToken, authorization("hiring-manager"), jobController.createJob);
router
  .route("/manager/jobs/:email")
  .get(verifyToken, authorization("hiring-manager"), jobController.getJobs);
router.route("/manager/jobs/:id").get(jobController.findJobById);
router.route("/jobs/:id").patch(jobController.updateJob);

module.exports = router;
