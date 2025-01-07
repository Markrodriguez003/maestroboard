const mongoose = require("mongoose"); // Bringing in Mongoose
const Schema = mongoose.Schema; // Defining new Mongoose Schema

const ArticlesSchema = new Schema({
  title: {
    type: String,
    trim: true,
    // required: "title is Required",
    // required: true
  },

  subtitle: {
    type: String,
    trim: true,
    // match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    // required: true
  },
  subject: {
    type: String,
    trime: true,
  },

  author: {
    type: String,
    trim: true,
  },

  date: {
    type: String,
    // required: true
  },

  body: {
    type: String,
    // required: true
  },

  link: {
    type: String,
    // required: true
  },

  image: {
    type: String,
  },

  caption: {
    type: String,
  }

  //   ENTER FOREIGN KEY -> TABLE ASSOCIATION TO USER ACCOUNT
});

const Article = mongoose.model("Articles", ArticlesSchema);

module.exports = Article;
