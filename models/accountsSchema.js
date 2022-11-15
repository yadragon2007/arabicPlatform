const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const accountsSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  password: String,
  academicYear: String,
  admin: String,
  ban: String,
});

const Accounts = mongoose.model("Accounts", accountsSchema);
// exports
module.exports = Accounts;
