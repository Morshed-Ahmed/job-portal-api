const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authorization = require("../middleware/authorization");
const verifyToken = require("../middleware/verifyToken");

router.route("/signup").post(userController.signUp);
router.route("/login").post(userController.logIn);
router.route("/me").get(verifyToken, userController.getMe);
router
  .route("/makeAdmin")
  .patch(verifyToken, authorization("admin"), userController.makeAdmin);
router
  .route("/hiringManager")
  .patch(verifyToken, authorization("admin"), userController.makeHiringManager);

module.exports = router;
