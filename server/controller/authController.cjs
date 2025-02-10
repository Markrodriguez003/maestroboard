// //? NOTES
//  https://blog.stackademic.com/mastering-route-security-in-express-js-3c7043b3d823

// LIBRARIES
const jwt = require("jsonwebtoken");

//************************************************************** */
// AUTHENTICATES ROUTE SO NO API OR WEBPAGE CAN BE CALLED WITHOUT
// PROPER AUTHENTICATION CHECK PASS
//************************************************************** */
const authenticate = async (req, res, next) => {
  // GRABS TOKEN FROM THE FRONTEND
  const authorizationToken = req.headers["authorization"].split(" ")[1];
  if (authorizationToken) {
    const verifyToken = await jwt.verify(
      authorizationToken,
      process.env.VITE_JWT_SECRET_KEY
    );

    res.json({
      login: true,
      adminLogin: true,
      data: verifyToken,
    });
    // next();
  } else {
    res.json({
      login: false,
      adminLogin: false,
      data: { error: "Error!" },
    });
  }
};

//************************************************************** */
// EXPORTS
//************************************************************** */
module.exports = {
  authenticate,
};
