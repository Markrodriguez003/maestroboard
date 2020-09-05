const mongoose = require("mongoose"); // Bringing in Mongoose
const Schema = mongoose.Schema; // Defining new Mongoose Schema

const UserAccountSchema = new Schema({
    firstname: {
        type: String,
        // required: "String is Required",
        // required: true
    },
    lastname: {
        type: String,
        // required: "String is Required",
        // required: true
    },
    number: {
        type: String,
    },
    address1: {
        type: String,
        // required: "String is Required",
        // required: true
    },
    address2: {
        type: String,
        // required: "String is Required",
        // required: true
    },
    zip: {
        type: String,
        // required: "String is Required",
        // required: true
    },
    city: {
        type: String,
        // required: "String is Required",
        // required: true
    },
    country: {
        type: String,
        // required: "String is Required",
        // required: true
    },

    email: {
        type: String,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        // required: true
    },
    username: {
        type: String,
        trim: true,
        // required: "String is Required",
        // required: true
    },
    password: {
        type: String,
        trim: true,
        // required: "String is Required",
        // required: true
    },

    posts: Array, 

    datecreated: {
    type: Date,
    default: Date.now
  }

});

// sconst Post = mongoose.model("Post", Posts);
const UserAccount = mongoose.model("UserAccountModel", UserAccountSchema);

module.exports = UserAccount;
