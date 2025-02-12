// //? NOTES
//  https://blog.stackademic.com/mastering-route-security-in-express-js-3c7043b3d823

// LIBRARIES
const jwt = require("jsonwebtoken");

//************************************************************** */
// AUTHENTICATES SESSION TOKEN FOR ACCESSING CERTAIN ADMIN PAGES
//************************************************************** */
const authenticate = async (req, res, next) => {
  const authorizationToken = req.headers["authorization"]
    ? req.headers["authorization"].split(" ")[1]
    : null;

  if (authorizationToken) {
    const verifyToken = jwt.verify(
      authorizationToken,
      process.env.VITE_JWT_SECRET_KEY
    );

    if (verifyToken.isAdmin) {
      res.json({
        login: true,
        adminLogin: true,
        // data: verifyToken,
        acceptable: true,
      });

      next();
    }
  } else {
    res.json({
      login: false,
      adminLogin: false,
      data: { error: "Error!" },
    });
  }
};

//************************************************************** */
// AUTHETICATION FOR EXPRESS API ROUTES
//************************************************************** */
const authenticateAPI = async (req, res, next) => {
  const authorizationToken = req.headers["authorization"]
    ? req.headers["authorization"].split(" ")[1]
    : null;

  if (authorizationToken) {
    const verifyToken = jwt.verify(
      authorizationToken,
      process.env.VITE_JWT_SECRET_KEY
    );

    if (verifyToken.isAdmin === true) {
      res.status(200);
      next();
    } else {
      res.status(400);
    }
  }
};

//************************************************************** */
// EXPORTS
//************************************************************** */
module.exports = {
  authenticate,
  authenticateAPI,
};
