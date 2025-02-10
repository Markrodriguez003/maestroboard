// LIBRARIES
const express = require("express");

// SETS UP ROUTER OBJECT
let router = express.Router();

const authController = require("../controller/authController.cjs");

module.exports = router;

//************************************************************** */
// AUTHENTICATES USER/ADMIN
//************************************************************** */
router.get("/user", authController.authenticate);
