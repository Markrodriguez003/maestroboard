// LIBRARIES
const express = require("express");

// SETS UP ROUTER OBJECT
let router = express.Router();

// LOGIC CONTROLLER
const authController = require("../controller/authController.cjs");

module.exports = router;

//************************************************************** */
// AUTHENTICATES USER/ADMIN
//************************************************************** */
router.get("/user", authController.authenticate);
router.post("/login", authController.authenticateCaptcha, authController.login);
// router.get("/verify-google-captcha", authController.googleCaptcha);
