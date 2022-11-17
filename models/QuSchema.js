const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const questionSchema = new Schema({
  userName:String,
  question:String,
});

const question = mongoose.model("question", questionSchema);
// exports
module.exports = question;
