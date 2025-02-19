// USER MONGO SCHEMA
const UserAccount = require("../db/UserAccount");

//************************************************************** */
// FETCHES ALL USERS FROM BACKEND
// GET --> api/users/fetch-all/count
//************************************************************** */
const fetchAllUsersCount = (req, res) => {
  UserAccount.find({})
    .then((users) => {
      res.json(users.length);
    })
    .catch((err) => {
      console.log("user count cannot be loaded from the db!");
    });
};

//************************************************************** */
// EXPORTS
//************************************************************** */
module.exports = {
  fetchAllUsersCount,
};
