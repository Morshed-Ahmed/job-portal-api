const express = require("express");
const router = express.Router();
const applyController = require("../controllers/apply.controller");
const authorization = require("../middleware/authorization");
const verifyToken = require("../middleware/verifyToken");

router.route("/").get(applyController.getJobs);
router.route("/date/:dateQuery").get(applyController.getJobsDate);
router.route("/:id").get(applyController.findJobById);
router
  .route("/manager/apply-details/:id")
  .get(applyController.userAllayDetails);
router.route("/:id/apply").post(
  // verifyToken,
  // authorization("admin", "hiring-manager"),
  applyController.jobApply
);

module.exports = router;
