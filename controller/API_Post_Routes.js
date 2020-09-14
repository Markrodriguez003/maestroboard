const Post = require("../db/Posts");
const UserAccount = require("../db/UserAccount");
const e = require("express");
const bCrypt = require("bcrypt");

module.exports = (app) => {
  // * **********************************************************************************
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
    } catch {res.status(500);}
  });

  // * **********************************************************************************
  // * Checks if user exists and checking password
  app.post("/api/login", async (req, res) => {

    // Searches inputted username through db saved usernames a 
    UserAccount.find({ username: req.body.username }).then((chk) => {
      if (chk == 0) { // User does not exist
        console.log("User does not exist");
        console.log("This is what it logs out:::Doesnt Exist:::  " + chk);
        return res.status(500);
      }
      //   Use Bcrypt to compare found username/password with inputted username/password
      bCrypt.compare(req.body.password, chk[0].password, (err, res) => {
        if (err) { console.log("An error has occurred::: " + err); }
        if (res === true) { console.log(" Inputted Username and Password match!"); }
        else { console.log("Inputted Usernamd & Password do not match") }
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
