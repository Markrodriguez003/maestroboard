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
const ar = require("./scripts/ArticlePosts.cjs");
const us = require("./scripts/ExampleUsers.cjs");

// Bringing in POST schema model
const Post = require("./db/Posts.js");
const Article = require("./db/Articles");
const UserAccount = require("./db/UserAccount");
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

// * LOADS
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
      console.log("posts cannot be loaded from the db!");
    });
});

// * Inserts new post
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
    price: req.body.price,
  };

  await Post.create(newPost).then((result) => {
    console.log(result);
    res.json({ response: result });
  });
});

// * Inserts new article
app.post("/api/insert-article", async (req, res) => {
  let newArticle = {
    title: req.body.title,
    subTitle: req.body.subTitle,
    author: req.body.author,
    type: req.body.articleType,
    body: req.body.body,
    // images: req.body.instrument,
    caption: req.body.caption,
    link: req.body.link,
  };

  await Article.create(newArticle).then((result) => {
    console.log(result);
    res.json({ response: result });
  });
});

app.get("/api/loadArticles", function (req, res) {
  Article.find({})
    .then((articles) => {
      console.log(
        "There are " + articles.length + " articles currently in the database."
      );
      res.json(articles);
    })
    .catch((err) => {
      console.log("articles cannot be loaded from the db!");
    });
});

app.get("/api/load-user-count", function (req, res) {
  UserAccount.find({})
    .then((users) => {
      console.log("There are " + users + " users currently in the database.");
      res.json(users.length);
    })
    .catch((err) => {
      console.log("articles cannot be loaded from the db!");
    });
});

// ? https://www.geeksforgeeks.org/how-to-send-basic-auth-with-axios-in-react-node/#

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  let e = email;
  let p = password;

  UserAccount.find({ email: e })
    .then((users) => {
      let foundAccountEmail = users[0].email;
      let foundAccountPassword = users[0].password;

      if (
        foundAccountEmail !== undefined &&
        foundAccountEmail === "admin@admin.com" &&
        p === users[0].password
      ) {
        res.status(200).json({
          message: `Signed in!`,
          status: "successful",
        });
      } else {
        res.status(401).json({ message: "Invalid credentials!", status: 401 });
      }
    })
    .catch((err) => {
      res.status(401).json({ message: `Invalid credentials! :: ${err}` });
    });
});

// * Finds all posts by specific type / Selling%20Gear /Buying%20Gear
app.get("/api/loadPosts/type/selling", function (req, res) {
  Post.find({ type: "Selling Gear" }) // -1 means oldest post to earliest
    .then((posts, err) => {
      console.log("Posts made by: " + posts.length + " + posts");
      res.json(posts.length);
    });
});

// * Finds all posts by specific type / Selling%20Gear /Buying%20Gear
app.get("/api/loadPosts/type/buying", function (req, res) {
  Post.find({ type: "Buying Gear" }) // -1 means oldest post to earliest
    .then((posts, err) => {
      console.log("Posts made by: " + posts.length + " + posts");
      res.json(posts.length);
    });
});

// app.get("/api/login", function (req, res) {
//   UserAccount.find({ username: "Admin" })
//     .then((users) => {
//       res.json(users[0]);
//     })
//     .catch((err) => {
//       console.log("users cannot be received from the db!");
//     });
// });

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
