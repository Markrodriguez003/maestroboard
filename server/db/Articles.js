const mongoose = require("mongoose"); // Bringing in Mongoose
const Schema = mongoose.Schema; // Defining new Mongoose Schema

const ArticlesSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },

  subTitle: {
    type: String,
  },
  category: {
    type: String,
    // trime: true,
  },
  subCategory: {
    type: String,
    // trime: true,
  },
  author: {
    type: String,
    trim: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  body: {
    type: String,
  },

  link: {
    type: String,
  },

  public_images_id: [String],
  image_urls: [String],
  secure_images_urls: [String],

  caption: String,

  //   ENTER FOREIGN KEY -> TABLE ASSOCIATION TO USER ACCOUNT
});

const Article = mongoose.model("Articles", ArticlesSchema);

module.exports = Article;
