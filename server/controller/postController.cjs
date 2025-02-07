// DELETE ALL CLOUDINARY IMAGES FUNC
const deleteImages = require("../scripts/deleteImages.cjs");

// MONGODB
// ARTICLE DB SCHEMA
const Post = require("../db/Posts");

//************************************************************** */
// LOADS ALL ARTICLES FROM DB
// GET --> api/posts/fetch-all
//************************************************************** */
const fetchAllPosts = (req, res) => {
  Post.find({})
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log("posts cannot be loaded from the db!");
    });
};
//************************************************************** */
// LOADS A SPECIFIC AMOUNT OF POSTS BY COUNT FROM DB
// GET --> api/posts/fetch-all/limit/:count
//************************************************************** */
const fetchAllPostsByCount = (req, res) => {
  Post.find({})
    .limit(req.params.count)
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log("posts cannot be loaded from the db!");
    });
};
//************************************************************** */
// LOADS All TOTAL AMOUNT OF POSTS BY TYPE FROM DB
// GET --> api/posts/fetch-all/type/:type
//************************************************************** */
const fetchAllPostsTypeAmount = (req, res) => {
  // CAPITALIZES THE LETTER OF CATEGORY TYPE
  const searchTerm =
    req.params.type[0].toUpperCase() + req.params.type.slice(1);
  Post.find({
    type: `${searchTerm}`,
  }).then((posts, err) => {
    res.json(posts.length);
  });
};

//************************************************************** */
// LOADS All POST BASE-INFO FROM DB
// GET --> api/posts/fetch-all/base-info
//************************************************************** */
// * Finds all posts and returns all article base info (ID, DATE, TITLE, SUBTITLE) by ascending date ordered
const fetchAllPostBaseInfo = (req, res) => {
  Post.find({}).then((posts, err) => {
    const post_info = posts.map((post) => ({
      _id: post._id,
      date: post.date,
      type: post.type,
      title: post.title,
      username: post.username,
      email: post.email,
    }));
    // and sends it back
    res.json(post_info);
  });
};
//************************************************************** */
// FINDS A POST BY ID FROM DB
// GET --> api/posts/id/:id
//************************************************************** */
const fetchPostById = (req, res) => {
  Post.find({
    _id: `${req.params.id}`,
  })
    .then((post, err) => {
      res.status(200).json({ post });
    })
    .catch((error) => {
      console.log(`Error trying to find Post!`);
      res.status(404).json(error);
    });
};
//************************************************************** */
// INSERTS A NEW POST TO DB
// POST --> api/insert
//************************************************************** */
const insertPost = async (req, res) => {
  let newPost = {
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    zip: req.body.zipcode,
    type: req.body.type,
    subType: req.body.subType,
    title: req.body.title,
    body: req.body.pBody,
    price: req.body.price,
    firm_price: req.body.firm_price,
    trade: req.body.trade,
    public_images_id: req.body.public_images_id,
    image_urls: req.body.image_urls,
    secure_images_urls: req.body.secure_images_urls,
  };

  await Post.create(newPost).then((result) => {
    // console.log(result);
    res.json({ response: result });
  });
};
//************************************************************** */
// INSERTS A NEWLY EDITED POST TO DB
// PUT --> api/edit/id/:id
//************************************************************** */
const insertEditedPost = async (req, res) => {
  try {
    const updatedItem = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
//************************************************************** */
// DELETES POST BY ID FROM DB
// DELETE --> api/delete/id/:id
//************************************************************** */
const deletePost = async (req, res) => {
  // FIND POST FROM DB AND GRAB ASSETS
  await Post.findById(req.params.id)
    .then((result) => {
      try {
        // CHECKS TO SEE IF POST HAS IMAGES
        if (result.public_images_id || result.public_images_id.length === 0) {
          // CALLS FUNCTION TO DELETE IMAGES
          deleteImages(result.public_images_id);
        }
        Post.findByIdAndDelete(req.params.id)
          .then((result) => {
            console.log(
              `POST IN THE BACKEND HAS BEEN DELETED:: ${JSON.stringify(result)}`
            );
            res.json(result);
          })
          .catch((error) => {
            console.log(`POST COULD NOT BE DELETED:: ${JSON.stringify(error)}`);
          });
      } catch (error) {
        console.log(`error: ${error}`);
      }
    })
    .catch((error) => {
      console.log(`POST COULD NOT BE FOUND!:: ${JSON.stringify(error)}`);
    });
};

//************************************************************** */
// EXPORTS
//************************************************************** */
module.exports = {
  fetchAllPosts,
  fetchAllPostsByCount,
  fetchAllPostsTypeAmount,
  fetchAllPostBaseInfo,
  fetchPostById,
  insertPost,
  insertEditedPost,
  deletePost,
};
