const express = require("express"); // Bringing in Express
const helmet = require("helmet");
// const path = require("path"); // Bringing in Path
const mongoose = require("mongoose"); // Mongoose
// const CP = require("cookie-parser");
const app = express(); //Intializing  Express
// USING ENV FILES IN SERVER
require("dotenv").config();

// CLOUDINARY
const cloudinary = require("cloudinary").v2;

// CLOUDINARY ADMIN CONFIG
cloudinary.config({
  cloud_name: "dytbnvgzg",
  api_key: process.env.VITE_CLOUDINARY_API_KEY,
  api_secret: process.env.VITE_CLOUDINARY_API_SECRET,
  secure: false,
  // signature_algorithm: 'sha256'
});

// WORKS
// console.log(cloudinary.config());

const jwt = require("jsonwebtoken");

// USING CORS
const cors = require("cors");

// Loading middleware for body parsing / json / urlecoding / cors
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
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
  // process.env.MONGODB_URI || "mongodb://localhost/maestroboard",
  process.env.MONGODB_URI ||
    `mongodb+srv://ModulatorAdmin:${process.env.VITE_MONGODB_PASS}@cluster0.s0c84pg.mongodb.net/`,
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

// console.log(`API KEY --> ${process.env.VITE_CLOUDINARY_API_KEY}`);
// console.log(`API SECRET --> ${process.env.VITE_CLOUDINARY_API_SECRET}`);

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
  // res.send("Hello!");
});

// LOADS TEST POSTS
app.get("/api/loadPosts", function (req, res) {
  Post.find({})
    .then((posts) => {
      console
        .log
        // "There are " + posts.length + " posts currently in the database."
        ();
      res.json(posts);
    })
    .catch((err) => {
      console.log("posts cannot be loaded from the db!");
    });
});

// LOADS TEST ARTICLES
app.get("/api/loadArticles", function (req, res) {
  Article.find({})
    .then((articles) => {
      // console.log(
      //   "There are " + articles.length + " articles currently in the database."
      // );
      res.json(articles);
    })
    .catch((err) => {
      console.log("articles cannot be loaded from the db!");
    });
});

// * Inserts new post
app.post("/api/insertpost", async (req, res) => {
  let newPost = {
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    zip: req.body.zipcode,
    type: req.body.type,
    equipment: req.body.instrument,
    title: req.body.title,
    body: req.body.pBody,
    price: req.body.price,
    firm_price: req.body.firm_price,
    public_images_id: req.body.public_images_id,
    image_urls: req.body.image_urls,
    secure_images_urls: req.body.secure_images_urls,
  };

  await Post.create(newPost).then((result) => {
    // console.log(result);
    res.json({ response: result });
  });
});

// * Inserts new article
app.post("/api/insert-article", async (req, res) => {
  let newArticle = {
    title: req.body.title,
    subTitle: req.body.subTitle,
    category: req.body.category,
    subCategory: req.body.subCategory,
    author: req.body.author,
    type: req.body.articleType,
    body: req.body.body,
    public_images_id: req.body.public_images_id,
    image_urls: req.body.image_urls,
    secure_images_urls: req.body.secure_images_urls,
    caption: req.body.caption,
    link: req.body.link,
  };

  await Article.create(newArticle).then((result) => {
    // console.log(result);
    res.json({ response: result });
  });
});

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

// LOG IN ROUTE FOR USERS
// ? https://www.geeksforgeeks.org/how-to-send-basic-auth-with-axios-in-react-node/#
// ? https://www.geeksforgeeks.org/how-to-create-and-verify-jwts-with-node-js/
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  let e = email;
  let p = password;

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
        res.status(401).json({ message: "Invalid credentials!", status: 401 });
      }
    })
    .catch((err) => {
      res.status(401).json({ message: `Invalid credentials! :: ${err}` });
    });
});

// https://medium.com/dataseries/public-claims-and-how-to-validate-a-jwt-1d6c81823826
app.get("/api/auth", (req, res) => {
  // GRABS TOKEN FROM THE FRONTEND
  const authorizationToken = req.headers["authorization"].split(" ")[1];
  if (authorizationToken) {
    const verifyToken = jwt.verify(
      authorizationToken,
      process.env.VITE_JWT_SECRET_KEY
    );

    res.json({
      login: true,
      adminLogin: true,
      data: verifyToken,
    });
  } else {
    console.log(`fhuh??`);
    res.json({
      login: false,
      adminLogin: false,
      data: { error: "Error!" },
    });
  }
});

// * Finds all posts by a specific category type
app.get("/api/loadPosts/type/:type", function (req, res) {
  // CAPITALIZES THE LETTER OF CATEGORY TYPE
  const searchTerm =
    req.params.type[0].toUpperCase() + req.params.type.slice(1);
  Post.find({
    // type: `${searchTerm} Gear`,
    type: `${searchTerm}`,
  }).then((posts, err) => {
    res.json(posts.length);
  });
});

// * Finds Article by a specific ID
app.get("/api/article/id/:id", function (req, res) {
  Article.find({
    _id: `${req.params.id}`,
  })
    .then((article, err) => {
      res.status(200).json({ article });
    })
    .catch((error) => {
      console.log(`Error trying to find Article!`);
      res.status(404).json(error);
    });
});

// * SAVES AN ENTIRE ARTICLE
app.put("/api/edit/article/id/:id", async function (req, res) {
  try {
    const updatedItem = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// * DELETES AN ENTIRE ARTICLE + IMAGES ASSOCIATED IN CLOUDINARY
// ? NOTES https://support.cloudinary.com/hc/en-us/articles/203465641-How-can-I-delete-an-image-via-the-API-Programmable-Media
// ? https://stackoverflow.com/questions/57247914/how-can-i-remove-an-image-in-a-custom-folder-in-cloudinary-by-nodejs

async function deleteImages(image_id_array) {
  // TESTING
  console.log(`Images to be deleted! --> ${JSON.stringify(image_id_array)}  `);

  // DELETING IMAGES ASSOCIATED WITH ARTICLE
  cloudinary.api.delete_resources(image_id_array, (error, result) => {
    if (error) {
      console.error("Error deleting resources:", error);
    } else {
      console.log("Resources deleted successfully:", result);
    }
  });
}

app.delete("/api/delete/article/id/:id", async function (req, res) {
  // FIND ARTICLE FROM DB AND GRAB ASSETS
  await Article.findById(req.params.id)
    .then((result) => {
      try {
        // CHECKS TO SEE IF ARTICLE HAS IMAGES
        if (result.public_images_id || result.public_images_id.length === 0) {
          // CALLS FUNCTION TO DELETE IMAGES
          deleteImages(result.public_images_id);
        }
        Article.findByIdAndDelete(req.params.id)
          .then((result) => {
            console.log(
              `ARTICLE IN THE BACKEND HAS BEEN DELETED:: ${JSON.stringify(
                result
              )}`
            );
            res.json(result);
          })
          .catch((error) => {
            console.log(
              `ARTICLE COULD NOT BE DELETED:: ${JSON.stringify(error)}`
            );
          });
      } catch (error) {
        console.log(`error: ${error}`);
      }
    })
    .catch((error) => {
      console.log(`ARTICLE COULD NOT BE FOUND!:: ${JSON.stringify(error)}`);
    });
});

// * Finds all articles by a specific category type / Selling%20Gear /Buying%20Gear

app.get("/api/loadarticles/category/:category", function (req, res) {
  let searchArticleTerm = req.params.category.replace(
    /(^\w{1})|(\s+\w{1})/g,
    (letter) => letter.toUpperCase()
  );
  Article.find({ category: `${searchArticleTerm}` }).then((articles, err) => {
    // console.log(`${searchArticleTerm} - ${articles.length} `);
    res.json(articles.length);
  });
});

// * Finds all posts and returns it by ascending date ordered
app.get("/api/articles/date/:sort", function (req, res) {
  let sort_type = req.params.sort.toLowerCase() === "latest" ? -1 : 1;

  Article.find({})
    .sort({ date: sort_type }) // -1 means oldest post to earliest
    .then((posts, err) => {
      res.json(posts);
    });
});

// * Finds all posts and returns all article IDs by ascending date ordered
app.get("/api/articles/id/date/:sort", function (req, res) {
  let sort_type = req.params.sort.toLowerCase() === "latest" ? -1 : 1;

  Article.find({})
    .sort({ date: sort_type }) // -1 means oldest post to earliest
    .then((posts, err) => {
      // Grabs all article IDs
      const article_ids = posts.map((id) => id._id);

      // and sends it back
      res.json(article_ids);
    });
});

// * Finds all posts and returns all article base info (ID, DATE, TITLE, SUBTITLE) by ascending date ordered
app.get("/api/articles/base-info", function (req, res) {
  Article.find({}).then((posts, err) => {
    const article_info = posts.map((article) => ({
      _id: article._id,
      date: article.date,
      title: article.title,
      subTitle: article.subTitle,
    }));

    // and sends it back
    res.json(article_info);
  });
});

// **********************************************************************************
//  old notes
// **********************************************************************************

// * Finds all posts by specific type / Selling%20Gear /Buying%20Gear
// app.get("/api/loadPosts/type/selling", function (req, res) {
//   Post.find({ type: "Selling Gear" }) // -1 means oldest post to earliest
//     .then((posts, err) => {
//       console.log("Posts made by: " + posts.length + " + posts");
//       res.json(posts.length);
//     });
// });

// // * Finds all posts by specific type / Selling%20Gear /Buying%20Gear
// app.get("/api/loadPosts/type/buying", function (req, res) {
//   Post.find({ type: "Buying Gear" }) // -1 means oldest post to earliest
//     .then((posts, err) => {
//       console.log("Posts made by: " + posts.length + " + posts");
//       res.json(posts.length);
//     });
// });

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
