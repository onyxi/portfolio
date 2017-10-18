var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");


// SITE LANDING PAGE
router.get("/", function(req, res){
   res.render("landing");
});

// USER LOGIN PAGE
router.get("/login", function(req, res){
   res.render("login"); 
});

// LOG IN LOGIC ROUTE
router.post("/login", passport.authenticate("local", 
   {
      successRedirect: "/projects",
      failureRedirect: "/login"
   }), function(req, res){
});

// LOG OUT ROUTE 
router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});



module.exports = router;