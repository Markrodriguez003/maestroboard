// LIBRARIES
const express = require("express");
const helmet = require("helmet");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

// Loading middleware for body parsing / json / urlecoding / cors
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// Express Middleware to handle JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  BACKEND PORT HANDLING
const PORT = process.env.PORT || 3005;

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// POST, USER & ARTICLE EXAMPLE OBJECTS
const ex = require("./scripts/ExamplePosts.cjs");
const ar = require("./scripts/ArticlePosts.cjs");
const us = require("./scripts/ExampleUsers.cjs");

// MONGODB MODELS
const Post = require("./db/Posts.js");
const Article = require("./db/Articles");
const UserAccount = require("./db/UserAccount");

// BRINGING IN API ENDPOINT ROUTER (Articles, Users, Posts)
const articles = require("./Routes/articles.cjs");
// const users = require("./Routes/user.cjs");
const posts = require("./Routes/posts.cjs");
const auth = require("./Routes/auth.cjs");
const users = require("./Routes/users.cjs");

// API ENPOINT ROUTES
app.use("/api/articles", articles);
app.use("/api/posts", posts);
app.use("/api/auth", auth);
app.use("/api/users", users);

// Connecting project to mongoose database.
mongoose.connect(
  // process.env.MONGODB_URI || "mongodb://localhost/maestroboard",
  process.env.MONGODB_URI ||
    `mongodb+srv://ModulatorAdmin:${process.env.VITE_MONGODB_PASS}@cluster0.s0c84pg.mongodb.net/`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Assigning "db" to created mongoose link above
const db = mongoose.connection;

// ************************************************************************
//  UTILITY DATABASE FUNCTIONS
// ************************************************************************
async function loadPosts() {
  await Post.insertMany(ex.examplePosts)
    .then(() => {
      console.log("Successfully inserted test post items to DB");
    })
    .catch((err) => {
      console.log(err);
    });
}

async function loadArticles() {
  await Article.insertMany(ar.exampleArticles)
    .then(() => {
      console.log("Successfully inserted test articles items to DB");
    })
    .catch((err) => {
      console.log(err);
    });
}

async function deletePosts() {
  await Post.deleteMany({});
}

async function deleteArticles() {
  await Article.deleteMany({});
}

async function deleteUsers() {
  await UserAccount.deleteMany({});
}

async function loadUsers() {
  await UserAccount.insertMany(us.exampleUsers)
    .then(() => {
      console.log("Successfully inserted test user items to DB");
    })
    .catch((err) => {
      console.log(err);
    });
}

// Loads Posts
// loadPosts();

// Loads Users
// loadUsers();

// Loads Articles
// loadArticles();

// ! DELETES
// Deletes users
// deleteUsers();

// Deletes Posts
// deletePosts();

// Deletes Articles
// deleteArticles();

// * Testing connection to db
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DB connected");
});

// * LOADS MAIN HOME PAGE
app.get("/", function (req, res) {});

// GRABS THE AMOUNT OF USERS IN DB
app.get("/api/load-user-count", function (req, res) {
  UserAccount.find({})
    .then((users) => {
      // console.log("There are " + users + " users currently in the database.");
      res.json(users.length);
    })
    .catch((err) => {
      console.log("articles cannot be loaded from the db!");
    });
});

// Listens to port (3003) for route inputs
app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
