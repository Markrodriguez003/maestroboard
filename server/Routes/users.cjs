// LIBRARIES
const express = require("express");

// SETS UP ROUTER OBJECT
let router = express.Router();

// AUTHENTICATATION MIDDLEWARE
const {
  authenticate,
  authenticateAPI,
} = require("../controller/authController.cjs");

// CONTROLLER FOR ROUTE LOGIC
const userController = require("../controller/userController.cjs");

module.exports = router;

//************************************************************** */
// LOADS ALL USERS FROM DB
//************************************************************** */
router.get("/fetch-all/count", userController.fetchAllUsersCount);
