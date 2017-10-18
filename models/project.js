var mongoose = require("mongoose");

// Set up Schema
var projectSchema = new mongoose.Schema({
   title: String,
   mainImageName: String,
   caption: String,
   text: String,
   videoCode: String,
   extraImageName: String,
   published: Boolean,
   date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Project", projectSchema);