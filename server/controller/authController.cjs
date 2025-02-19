// //? NOTES
//  https://blog.stackademic.com/mastering-route-security-in-express-js-3c7043b3d823

// LIBRARIES
const jwt = require("jsonwebtoken");

const axios = require("axios");

// USER ACCOUNT DB INFO
const UserAccount = require("../db/UserAccount");

//************************************************************** */
// AUTHENTICATES USER LOGIN
//************************************************************** */
const login = async (req, res) => {
  const { email, password, gToken } = req.body;
  let e = email;
  let p = password;
  let g = gToken;

  // JWT OPTIONS FOR GENERATING TOKEN
  const JWT_OPTIONS = {
    expiresIn: "1h",
  };

  // FINDS USER IN DB
  UserAccount.find({ email: e })
    .then((users) => {
      const foundAccountEmail = users[0].email;
      const foundAccountPassword = users[0].password;
      const foundAccountID = users[0]._id;

      if (
        foundAccountEmail !== undefined &&
        foundAccountEmail === "admin@admin.com" &&
        p === foundAccountPassword
      ) {
        // MB's JWT SECRET KEY
        const SECRET_KEY = process.env.VITE_JWT_SECRET_KEY;
        // PAYLOAD FOR JWT
        const PAYLOAD = {
          // USER'S EMAIL
          id: foundAccountID,
          // USER'S ID
          email: foundAccountEmail,
          // WILL DETERMINE IF USER SIGNING IN IS AN ADMIN OR USER
          isAdmin: true,
        };

        // CREATES UNIQUE JWT TOKEN USING PAYLOAD + MB JWT_SECRET_KEY
        const token = jwt.sign(PAYLOAD, SECRET_KEY, JWT_OPTIONS);

        res.status(200).json({
          message: `Signed in!`,
          status: "successful",
          token: token,
        });
      } else {
        console.log(
          "Cannot secure create user session! Please try again later!"
        );
        res.status(401).json({ message: "Invalid credentials!" });
      }
    })
    .catch((err) => {
      res.status(401).json({ message: `Invalid credentials! :: ${err}` });
    });
};
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
// AUTHENTICATES GOOGLE CAPTCHA WHEN USER LOGS IN
//************************************************************** */
const authenticateCaptcha = async (req, res, next) => {
  // const TOKEN = req.body.gToken;

  const TOKEN = req.headers["g-captcha"] ? req.headers["g-captcha"] : null;

  const SECRET_CATPCHA_KEY = process.env.VITE_GOOGLE_CAPTCHA_SECRET_KEY;

  // console.log(`G-TOKEN!!!! ${TOKEN}`);
  try {
    // Sending secret key and response token to Google Recaptcha API for authentication.
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_CATPCHA_KEY}&response=${TOKEN}`
    );

    // Check response status and send back to the client-side
    if (response.data.success) {
      next();
    } else {
      res.status(500).send({
        error: "Google captcha check could not be verified!",
      });
    }
  } catch (error) {
    // Handle any errors that occur during the reCAPTCHA verification process
    console.error(error);
    res.status(500).send("Error verifying reCAPTCHA");
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
  login,
  authenticate,
  authenticateCaptcha,
  authenticateAPI,
};
