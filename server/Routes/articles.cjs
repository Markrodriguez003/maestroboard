// LIBRARIES
const express = require("express");
const deleteImages = require("../scripts/deleteImages.cjs");

// SETS UP ROUTER OBJECT
let router = express.Router();

// MONGODB
// ARTICLE DB SCHEMA
const Article = require("../db/Articles");

// AUTHENTICATATION MIDDLEWARE
const {
  authenticate,
  authenticateAPI,
} = require("../controller/authController.cjs");

// CONTROLLER FOR ROUTE LOGIC
const articleController = require("../controller/articleController.cjs");

module.exports = router;

//************************************************************** */
// LOADS ALL ARTICLES FROM DB
//************************************************************** */
router.get("/fetch-all", authenticateAPI, articleController.fetchAllArticles);
// router.get("/fetch-all", articleController.fetchAllArticles);
//************************************************************** */
// LOADS A TOTAL AMOUNT OF ARTICLES FROM DB
//************************************************************** */
router.get("/fetch-all/limit/:count", articleController.fetchArticlesByLimit);
//************************************************************** */
// FINDS ARTICLE BY DB _ID
//************************************************************** */
router.get("/id/:id", articleController.fetchArticleById);
//************************************************************** */
// FINDS ALL ARTICLES BY SPECIFIC CATEGORY TYPE
//************************************************************** */
router.get(
  "/fetch-all/category/:category",
  articleController.fetchAllArticlesCategories
);
//************************************************************** */
// FINDS & SENDS ALL ARTICLES BY DATE ORDER
//************************************************************** */
router.get("/fetch-all/date/:sort", articleController.fetchAllArticlesByDate);
//************************************************************** */
// FINDS & SENDS ALL ARTICLES BY DB _ID IN DATE ORDER
//************************************************************** */
router.get(
  "/fetch-all-id/date/:sort",
  articleController.fetchAllArticleIdsByDate
);

//************************************************************** */
// FINDS & SENDS ALL ARTICLES BASE INFO (_id, date, title, subtitle)
//************************************************************** */
router.get("/fetch-all/base-info", articleController.fetchAllArticleBaseInfo);
//************************************************************** */
// INSERTS NEW ARTICLE TO DB
//************************************************************** */
router.post("/insert", authenticateAPI, articleController.insertArticle);
//************************************************************** */
// UPDATES NEWLY EDITED ARTICLE BY ID
//************************************************************** */
router.put(
  "/edit/id/:id",
  authenticateAPI,
  articleController.insertEditedArticle
);

//************************************************************** */
// DELETES ARTICLE BY ID FROM DB
//************************************************************** */
router.delete("/delete/id/:id", articleController.deleteArticleById);
