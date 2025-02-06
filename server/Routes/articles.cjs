// LIBRARIES
const express = require("express");
const deleteImages = require("../scripts/deleteImages.cjs");

// SETS UP ROUTER OBJECT
let router = express.Router();

// MONGODB
// ARTICLE DB SCHEMA
const Article = require("../db/Articles");

module.exports = router;

//************************************************************** */
// LOADS ALL ARTICLES FROM DB
//************************************************************** */
router.get("/fetch-all", function (req, res) {
  Article.find({})
    .then((articles) => {
      res.json(articles);
    })
    .catch((err) => {
      console.log("Articles cannot be loaded from the db!");
    });
});
//************************************************************** */
// LOADS A TOTAL AMOUNT OF ARTICLES FROM DB
//************************************************************** */
router.get("/fetch-all/limit/:count", function (req, res) {
  //   ! CHECK TO SEE IF COUND IS EMPTY OR NOT ALLOWED AND HAVE A DEFAULT (FRONTEND?)
  Article.find({})
    .limit(req.params.count)
    .then((articles) => {
      res.json(articles);
    })
    .catch((err) => {
      console.log("articles cannot be loaded from the db!");
    });
});
//************************************************************** */
// FINDS ARTICLE BY DB _ID
//************************************************************** */
router.get("/id/:id", function (req, res) {
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
//************************************************************** */
// FINDS ALL ARTICLES BY SPECIFIC CATEGORY TYPE
//************************************************************** */
// Ex. Selling%20Gear /Buying%20Gear, ect
router.get("/fetch-all/category/:category", function (req, res) {
  let searchArticleTerm = req.params.category.replace(
    /(^\w{1})|(\s+\w{1})/g,
    (letter) => letter.toUpperCase()
  );
  Article.find({ category: `${searchArticleTerm}` }).then((articles, err) => {
    res.json(articles.length);
  });
});
//************************************************************** */
// FINDS & SENDS ALL ARTICLES BY DATE ORDER
//************************************************************** */
router.get("/fetch-all/date/:sort", function (req, res) {
  let sort_type = req.params.sort.toLowerCase() === "latest" ? -1 : 1;

  Article.find({})
    .sort({ date: sort_type }) // -1 means oldest post to earliest
    .then((posts, err) => {
      res.json(posts);
    });
});
//************************************************************** */
// FINDS & SENDS ALL ARTICLES BY DB _ID IN DATE ORDER
//************************************************************** */
router.get("/fetch-all-id/date/:sort", function (req, res) {
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

//************************************************************** */
// FINDS & SENDS ALL ARTICLES BASE INFO (_id, date, title, subtitle)
//************************************************************** */
router.get("/fetch-all/base-info", function (req, res) {
  Article.find({}).then((articles, err) => {
    const article_info = articles.map((article) => ({
      _id: article._id,
      date: article.date,
      title: article.title,
      subTitle: article.subTitle,
    }));

    // and sends it back
    res.json(article_info);
  });
});
//************************************************************** */
// INSERTS NEW ARTICLE TO DB
//************************************************************** */
router.post("/insert", async (req, res) => {
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
//************************************************************** */
// UPDATES NEWLY EDITED ARTICLE BY ID
//************************************************************** */
router.put("/edit/id/:id", async function (req, res) {
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

//************************************************************** */
// DELETES ARTICLE BY ID FROM DB
//************************************************************** */
router.delete("/delete/id/:id", async function (req, res) {
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
