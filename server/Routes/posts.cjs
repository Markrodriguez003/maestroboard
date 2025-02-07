// LIBRARIES
const express = require("express");
const deleteImages = require("../scripts/deleteImages.cjs");
// MONGODB
// ARTICLE DB SCHEMA
const Post = require("../db/Posts");
// SETS ROUTER OBJECT
let router = express.Router();

// CONTROLLER FOR ROUTE LOGIC
let postController = require("../controller/postController.cjs");

module.exports = router;

//************************************************************** */
// LOADS ALL POSTS FROM DB
//************************************************************** */
router.get("/fetch-all", postController.fetchAllPosts);
//************************************************************** */
// LOADS A SPECIFIC AMOUNT OF POSTS BY COUNT FROM DB
//************************************************************** */
router.get("/fetch-all/limit/:count", postController.fetchAllPostsByCount);
//************************************************************** */
// LOADS All TOTAL AMOUNT OF POSTS BY TYPE FROM DB
//************************************************************** */
router.get("/fetch-all/type/:type", postController.fetchAllPostsTypeAmount);
//************************************************************** */
// LOADS All POST BASE-INFO FROM DB
//************************************************************** */
// * Finds all posts and returns all article base info (ID, DATE, TITLE, SUBTITLE) by ascending date ordered
router.get("/fetch-all/base-info", postController.fetchAllPostBaseInfo);
//************************************************************** */
// FINDS A POST BY ID FROM DB
//************************************************************** */
router.get("/id/:id", postController.fetchPostById);
//************************************************************** */
// INSERTS A NEW POST TO DB
//************************************************************** */
router.post("/insert", postController.insertPost);
//************************************************************** */
// INSERTS A NEWLY EDITED POST TO DB
//************************************************************** */
router.put("/edit/id/:id", postController.insertEditedPost);

//************************************************************** */
// DELETES POST BY ID FROM DB
//************************************************************** */
router.delete("/delete/id/:id", postController.deletePost);
