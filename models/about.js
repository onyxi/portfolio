var mongoose = require("mongoose");

// Set up Schema
var aboutSchema = new mongoose.Schema({
   title: String,
   profileImageName: String,
   text: String
});

module.exports = mongoose.model("About", aboutSchema);