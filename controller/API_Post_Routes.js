
const Post = require("../db/Posts");
const UserAccount = require("../db/UserAccount");
// const CP = require("cookie-parser");

const e = require("express");
// const fetch = require("node-fetch");
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY; // Setting jwt Key
const bCrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = (app) => {

  // * **********************************************************************************

  // TODO Read this to determine to save JWT in local storage (local or web shesh)
  // TODO or save JWT in a cookie - IMPLEMENT REACT ROUTER TO PROTECT ROUTES!
  // TODO and HELMET to help prevent cross-site scripting (XSS) attacks
  // TODO https://stackoverflow.com/questions/


  // * Creates new user account
  app.post("/api/createuser", async (req, res) => {
    try {
      const salt = await bCrypt.genSalt();
      const hashedPass = await bCrypt.hash(req.body.password, salt);

      userAcct = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address1: req.body.address1,
        address2: req.body.address2,
        zip: req.body.zip,
        city: req.body.city,
        state: req.body.state,
        phone: req.body.phone,
        email: req.body.email,
        username: req.body.username,
        password: hashedPass,
        posts: [1, 2, 3, 4],
      };

      // * Creates a new user account
      UserAccount.create(userAcct)
        .then((newUser) => {
          console.log("INSERTED NEW USER::::: " + newUser);
          res.status(201);
        })
        .catch((err) => {
          console.log("An Error has occured inserting a new user::::: " + err);
          res.status(400);
        });

      res.status(200);
    } catch { res.status(500); }
  });

  // * **********************************************************************************
  // * Checks if user exists and checking password
  app.post("/api/login", async (req, res) => {

    // Searches inputted username through db  
    UserAccount.find({ username: req.body.username }).then((chk) => {

      if (chk == 0) { // User does not exist
        console.log("User does not exist!");
        res.status(500);
      }
      //Use Bcrypt to compare found username/password with inputted username/password
      bCrypt.compare(req.body.password, chk[0].password, (err, response) => {
        if (err) {
          console.log("An error has occurred comparing encrypted credentials ::::> " + err)
          res.status(500);
        }
        if (response === true) {
          console.log("Username and Password match!");

          signed_user = {
            id: chk[0].id,
            username: chk[0].username,
            zip: chk[0].zip
          }

          // JWT CREATION
          let expiry_var = Math.floor(Date.now() / 1000) + (60 * 3);

          // User cred. reference object
          let payload = {
            db_id: req.body.id,
            username: req.body.username,
            zip: req.body.zip,
            exp: expiry_var // Timestamp is measured in seconds, not miliseconds. //! Be aware!
          }

          // User session token
          let token = jwt.sign(payload, JWT_KEY); // Save in cookie or Local storage
          
          
          // console.log("Token inside API route =====>" + token);

          // ! REDIRECT EXPRESS/REACT ISSUE
          // TODO https://stackoverflow.com/questions/38105453/how-do-i-redirect-into-react-router-from-express
          // TODO https://stackoverflow.com/questions/51251684/redirect-in-react-node
          // res.redirect(200, '/');

          // Saving user info after authentication / authorization is complete in Local Storage

          // Middleware to validate cookie
          // TODO https://www.youtube.com/watch?v=2so3hh8n-3w&ab_channel=AnsontheDeveloper
          function cookieValidation(){

          }

          // res.cookie("user-session", token);
          res.status(201);
        }
        else {
          console.log("Username & Password do not match!")
          // res.status(500);
        }
      });
    });
  });


  // app.post("/api/insertpost", async (req, res) => {
  app.post("/api/insertpost", async (req, res) => {

    let newPost = {
      username: "test", // Fill user data with session
      email: req.body.email,
      phone: req.body.phone,
      zip: "333test333", // Fill user data with session
      type: req.body.type,
      equipment: req.body.instrument,
      title: req.body.title,
      body: req.body.pBody,
      price: req.body.price
    }

    await Post.create(newPost, (err, confirm) => {
      if (err) { console.log("An error has occured  inserting post::::: " + err) }
      console.log("Insertion of post was successful!::::: " + JSON.stringify(newPost));
      res.status(200);
    })

  })
};

