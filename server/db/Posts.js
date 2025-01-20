const mongoose = require("mongoose"); // Bringing in Mongoose
const Schema = mongoose.Schema; // Defining new Mongoose Schema

const PostsSchema = new Schema({
  username: {
    type: String,
    trim: true,
    // required: "String is Required",
    // required: true
  },

  email: {
    type: String,
    // trim: true,
    // match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    // required: true
  },
  phone: {
    type: String,
  },

  zip: {
    type: Number,
  },

  type: {
    type: String,
    // required: true
  },

  equipment: {
    type: String,
    // required: true
  },

  title: {
    type: String,
    // required: true
  },

  body: {
    type: String,
  },

  price: {
    type: Number,
  },
  firm_price: {
    type: String,
  },

  public_images_id: [String],
  image_urls: [String],
  secure_images_urls: [String],

  date: {
    type: Date,
    default: Date.now,
  },

  //   ENTER FOREIGN KEY -> TABLE ASSOCIATION TO USER ACCOUNT
});

// sconst Post = mongoose.model("Post", Posts);
const Post = mongoose.model("PostModel", PostsSchema);

module.exports = Post;
