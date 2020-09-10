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
    trim: true,
    // match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    // required: true
  },
  phone: {
    type: String,
  },

  zip: {
    type: String,
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
    type: Number
  },

 images: Array,

  date: {
    type: Date,
    default: Date.now
  },

 //   ENTER FOREIGN KEY -> TABLE ASSOCIATION TO USER ACCOUNT

});

// sconst Post = mongoose.model("Post", Posts);
const Post = mongoose.model("PostModel", PostsSchema);

module.exports = Post;