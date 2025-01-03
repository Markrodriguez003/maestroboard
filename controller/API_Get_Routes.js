// Bringing in POST schema model
const Post = require("../db/Posts");

module.exports = (app) => {
  // * **********************************************************************************
  // * ROUTES RELATED TO BOARD/POSTS
  // * Finds and returns all posts in db
  app.get("/api/loadPosts", function (req, res) {
    Post.find({}).then((posts) => {
      console.log(
        "There are " + posts.length + " posts currently in the database."
      );
      res.json(posts);
    });
  });

  // * Finds all posts and returns it by descending date ordered
  app.get("/api/loadPosts/date/desc", function (req, res) {
    Post.find({})
      .sort({ date: -1 }) // -1 means oldest post to earliest
      .then((posts, err) => {
        console.log(
          "There are " + posts.length + " posts currently in the database."
        );
        console.log("Posts: " + posts);
        res.json(posts);
      });
  });

  // * Finds all posts and returns it by ascending date ordered
  app.get("/api/loadPosts/date/asc", function (req, res) {
    Post.find({})
      .sort({ date: 1 }) // -1 means oldest post to earliest
      .then((posts, err) => {
        console.log(
          "There are " + posts.length + " posts currently in the database."
        );
        console.log("Posts: " + posts);
        res.json(posts);
      });
  });

  //  ! FIGURE OUT HOW TO MAKE USERNAMES SEARCHABLE BY LOWERCASE, PERHAPS IT NEEDS TO BE DONE DURING DB POST INSERTION
  // * Finds all posts by specific username
  app.get("/api/loadPosts/username/:username", function (req, res) {
    Post.find({ username: req.params.username }) // -1 means oldest post to earliest
      .then((posts, err) => {
        console.log("Posts made by: " + req.params.username + " + posts");
        res.json(posts);
      });
  });

  // * Finds all posts by specific type / Selling%20Gear /Buying%20Gear
  app.get("/api/loadPosts/type/:type", function (req, res) {
    Post.find({ type: req.params.type }) // -1 means oldest post to earliest
      .then((posts, err) => {
        console.log("Posts made by: " + req.params.type + " + posts");
        res.json(posts);
      });
  });

  // * Finds all posts by specific Zipcode
  app.get("/api/loadPosts/zip/:zip", function (req, res) {
    Post.find({ zip: req.params.zip }) // -1 means oldest post to earliest
      .then((posts, err) => {
        console.log("Posts made by: " + req.params.zip + " + posts");
        res.json(posts);
      });
  });

  // * Finds all posts by asc price
  app.get("/api/loadPosts/price/asc", function (req, res) {
    Post.find({})
      .sort({ price: 1 }) // -1 means least expensive gear price to most expensive price
      .then((posts, err) => {
        res.json(posts);
      });
  });

  // * Finds all posts by desc price
  app.get("/api/loadPosts/price/desc", function (req, res) {
    Post.find({})
      .sort({ price: -1 }) // -1 means most expensive gear price to lowest price
      .then((posts, err) => {
        res.json(posts);
      });
  });
};
