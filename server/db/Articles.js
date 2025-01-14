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
    type: String,
  },

  body: {
    type: String,
  },

  link: {
    type: String,
  },

  image: {
    type: String,
  },

  caption: {
    type: String,
  },

  //   ENTER FOREIGN KEY -> TABLE ASSOCIATION TO USER ACCOUNT
});

const Article = mongoose.model("Articles", ArticlesSchema);

module.exports = Article;
