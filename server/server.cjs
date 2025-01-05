const express = require("express"); // Bringing in Express
// const path = require("path"); // Bringing in Path
const mongoose = require("mongoose"); // Mongoose
// const CP = require("cookie-parser");
const app = express(); //Intializing  Express
// require("dotenv").config();

const jwt_key = process.env.JWT_KEY; // Setting jwt Key
const cors = require("cors");

// Loading middleware for body parsing / json / urlecoding / cors
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.use(cookieParser()); // TODO Pass a secret here?

//  Creating Port
const PORT = process.env.PORT || 3005;

// Express Middleware to handle JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Bringing in example posts array AS an object. { [{},{},{},{}] }
const ex = require("./scripts/ExamplePosts.cjs");

// Bringing in POST schema model
const Post = require("./db/Posts.js");
const cookieParser = require("cookie-parser");

// Connecting project to mongoose database.
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/maestroboard",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Assigning "db" to created mongoose link above
const db = mongoose.connection;

// This will handle API GET requests
// require("../controller/API_Get_Routes.js")(app);

// This will handle API POST requests
// require("../controller/API_Post_Routes.js")(app);
//
// * **********************************************************************************
// * **********************************************************************************

// * Creates a single new post
// Post.create()
//   .then(post => {
//     console.log("INSERTED NEW POST::::: " + post);
//   }).catch(err => {
//     console.log("An Error has occured inserting a new post::::: " + err);
//   })

async function loadPosts() {
  await Post.insertMany(ex.examplePosts)
    .then(() => {
      console.log("Successfully inserted test post items to DB");
    })
    .catch((err) => {
      console.log(err);
    });
}

async function deletePosts() {
  await Post.deleteMany({});
}

async function loadUsers() {
  await Post.insertMany(ex.examplePosts, (err, confirm) => {
    if (err) {
      console.log("An error has occured bulk inserting posts::::: " + err);
    }
    console.log("Bulk insert of posts has sucessfully been created!::::: ");
  });
}

// Loads Posts
// loadPosts();

// Deletes Posts
// deletePosts();

// * Testing connection to db
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DB connected");
});

// app.use(express.static(__dirname + '/src/imgs'));

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// * EXPRESS ROUTING
// * **********************************************************************************
//  * BASIC ROUTES

// * LOADS MAIN PAGE
app.get("/", function (req, res) {
  res.send("Hello!");
});

app.get("/api/loadPosts", function (req, res) {
  Post.find({})
    .then((posts) => {
      console.log(
        "There are " + posts.length + " posts currently in the database."
      );
      res.json(posts);
    })
    .catch((err) => {
      console.log("The fuck dude!");
    });
});

// // * **********************************************************************************
// // * ROUTES RELATED TO BOARD/POSTS
// // * Finds and returns all posts in db

// app.get("/api/loadPosts", function (req, res) {
//   Post.find({})
//     .then((posts) => {
//       console.log("There are " + posts.length + " posts currently in the database.");
//       res.json(posts);
//     })
// });

// // * Finds all posts and returns it by descending date ordered
// app.get("/api/loadPosts/date/desc", function (req, res) {
//   Post.find({ }).sort({date: -1}) // -1 means oldest post to earliest
//     .then((posts,err) => {
//       console.log("There are " + posts.length + " posts currently in the database.");
//       console.log("Posts: " + posts);
//       res.json(posts);
//     })
// });

// // * Finds all posts and returns it by ascending date ordered
// app.get("/api/loadPosts/date/asc", function (req, res) {
//   Post.find({ }).sort({date: 1}) // -1 means oldest post to earliest
//     .then((posts,err) => {
//       console.log("There are " + posts.length + " posts currently in the database.");
//       console.log("Posts: " + posts);
//       res.json(posts);
//     })
// });

// //  ! FIGURE OUT HOW TO MAKE USERNAMES SEARCHABLE BY LOWERCASE, PERHAPS IT NEEDS TO BE DONE DURING DB POST INSERTION
// // * Finds all posts by specific username
// app.get("/api/loadPosts/username/:username", function (req, res) {
//   Post.find({username: req.params.username }) // -1 means oldest post to earliest
//     .then((posts,err) => {
//       console.log("Posts made by: " + req.params.username + " + posts");
//       res.json(posts);
//     })
// });

// // * Finds all posts by specific type / Selling%20Gear /Buying%20Gear
// app.get("/api/loadPosts/type/:type", function (req, res) {
//   Post.find({type: req.params.type }) // -1 means oldest post to earliest
//     .then((posts,err) => {
//       console.log("Posts made by: " + req.params.type + " + posts");
//       res.json(posts);
//     })
// });

// // * Finds all posts by specific Zipcode
// app.get("/api/loadPosts/zip/:zip", function (req, res) {
//   Post.find({zip: req.params.zip }) // -1 means oldest post to earliest
//     .then((posts,err) => {
//       console.log("Posts made by: " + req.params.zip + " + posts");
//       res.json(posts);
//     })
// });

// // * Finds all posts by asc price
// app.get("/api/loadPosts/price/asc", function (req, res) {
//   Post.find({}).sort({price: 1}) // -1 means least expensive gear price to most expensive price
//     .then((posts,err) => {
//       res.json(posts);
//     })
// });

// // * Finds all posts by desc price
// app.get("/api/loadPosts/price/desc", function (req, res) {
//   Post.find({}).sort({price: -1}) // -1 means most expensive gear price to lowest price
//     .then((posts,err) => {
//       res.json(posts);
//     })
// });

// * **********************************************************************************

// Listens to port (3003) for route inputs
app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// import * as express from "express";
// import * as path from "path";
// import * as mongoose from "mongoose";

// import * as cors from "cors";
// import * as bodyParser from "body-parser";

// const app = express();
// const jwt_key = import.meta.env.JWT_KEY;

// // Loading middleware for body parsing / json / urlecoding / cors
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());
// // app.use(cookieParser()); // TODO Pass a secret here?

// //  Creating Port
// const PORT = import.meta.env.PORT || 3005;

// // Express Middleware to handle JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Serve up static assets (usually on heroku)
// if (import.meta.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// // Bringing in example posts array AS an object. { [{},{},{},{}] }
// import * as ex from "./ExamplePosts.js";

// // Bringing in POST schema model
// import * as Post from "./db/Posts.js";

// // Connecting project to mongoose database.
// mongoose.connect(
//   import.meta.env.MONGODB_URI || "mongodb://localhost/maestroboard",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );

// // Assigning "db" to created mongoose link above
// const db = mongoose.connection;

// // This will handle API GET requests
// // require("./controller/API_Get_Routes.js")(app);

// // This will handle API POST requests
// // require("./controller/API_Post_Routes.js")(app);

// // * **********************************************************************************
// // * **********************************************************************************

// // * Creates a single new post
// // Post.create(*insert post object here)
// //   .then(post => {
// //     console.log("INSERTED NEW POST::::: " + post);
// //   }).catch(err => {
// //     console.log("An Error has occured inserting a new post::::: " + err);
// //   })

// // * Loads an array of "post objects Used function to have async / await before running any routes
// async function loadPosts() {
//   await Post.insertMany(ex.examplePosts, (err, confirm) => {
//     if (err) {
//       console.log("An error has occured bulk inserting posts::::: " + err);
//     }
//     console.log("Bulk insert of posts has sucessfully been created!::::: ");
//   });
// }

// async function deletePosts() {
//   await Post.deleteMany({});
// }

// async function loadUsers() {
//   await Post.insertMany(ex.examplePosts, (err, confirm) => {
//     if (err) {
//       console.log("An error has occured bulk inserting posts::::: " + err);
//     }
//     console.log("Bulk insert of posts has sucessfully been created!::::: ");
//   });
// }

// // Loads Posts
// // loadPosts();

// // Deletes Posts
// // deletePosts();

// // * Testing connection to db
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("DB connected");
// });

// // app.use(express.static(__dirname + '/src/imgs'));

// // Send every request to the React app
// // Define any API routes before this runs
// // app.get("*", function(req, res) {
// //   res.sendFile(path.join(__dirname, "./public/index.html"));
// // });

// // * EXPRESS ROUTING
// // * **********************************************************************************
// //  * BASIC ROUTES

// // * LOADS MAIN PAGE
// app.get("/", function (req, res) {
//   // res.send("Hello!");
// });

// // // * **********************************************************************************
// // // * ROUTES RELATED TO BOARD/POSTS
// // // * Finds and returns all posts in db

// // app.get("/api/loadPosts", function (req, res) {
// //   Post.find({})
// //     .then((posts) => {
// //       console.log("There are " + posts.length + " posts currently in the database.");
// //       res.json(posts);
// //     })
// // });

// // // * Finds all posts and returns it by descending date ordered
// // app.get("/api/loadPosts/date/desc", function (req, res) {
// //   Post.find({ }).sort({date: -1}) // -1 means oldest post to earliest
// //     .then((posts,err) => {
// //       console.log("There are " + posts.length + " posts currently in the database.");
// //       console.log("Posts: " + posts);
// //       res.json(posts);
// //     })
// // });

// // // * Finds all posts and returns it by ascending date ordered
// // app.get("/api/loadPosts/date/asc", function (req, res) {
// //   Post.find({ }).sort({date: 1}) // -1 means oldest post to earliest
// //     .then((posts,err) => {
// //       console.log("There are " + posts.length + " posts currently in the database.");
// //       console.log("Posts: " + posts);
// //       res.json(posts);
// //     })
// // });

// // //  ! FIGURE OUT HOW TO MAKE USERNAMES SEARCHABLE BY LOWERCASE, PERHAPS IT NEEDS TO BE DONE DURING DB POST INSERTION
// // // * Finds all posts by specific username
// // app.get("/api/loadPosts/username/:username", function (req, res) {
// //   Post.find({username: req.params.username }) // -1 means oldest post to earliest
// //     .then((posts,err) => {
// //       console.log("Posts made by: " + req.params.username + " + posts");
// //       res.json(posts);
// //     })
// // });

// // // * Finds all posts by specific type / Selling%20Gear /Buying%20Gear
// // app.get("/api/loadPosts/type/:type", function (req, res) {
// //   Post.find({type: req.params.type }) // -1 means oldest post to earliest
// //     .then((posts,err) => {
// //       console.log("Posts made by: " + req.params.type + " + posts");
// //       res.json(posts);
// //     })
// // });

// // // * Finds all posts by specific Zipcode
// // app.get("/api/loadPosts/zip/:zip", function (req, res) {
// //   Post.find({zip: req.params.zip }) // -1 means oldest post to earliest
// //     .then((posts,err) => {
// //       console.log("Posts made by: " + req.params.zip + " + posts");
// //       res.json(posts);
// //     })
// // });

// // // * Finds all posts by asc price
// // app.get("/api/loadPosts/price/asc", function (req, res) {
// //   Post.find({}).sort({price: 1}) // -1 means least expensive gear price to most expensive price
// //     .then((posts,err) => {
// //       res.json(posts);
// //     })
// // });

// // // * Finds all posts by desc price
// // app.get("/api/loadPosts/price/desc", function (req, res) {
// //   Post.find({}).sort({price: -1}) // -1 means most expensive gear price to lowest price
// //     .then((posts,err) => {
// //       res.json(posts);
// //     })
// // });

// // * **********************************************************************************

// // Listens to port (3003) for route inputs
// app.listen(PORT, function () {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
