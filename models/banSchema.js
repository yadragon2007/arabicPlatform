const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const banSchema = new Schema({
  IP:String,
});

const ban = mongoose.model("ban", banSchema);
// exports
module.exports = ban;
