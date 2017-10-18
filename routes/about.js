var express = require("express");
var router = express.Router();
var About = require("../models/about");
var fileUpload = require('express-fileupload');

// ABOUT SITE PAGE
router.get("/", function(req, res){
   About.find({}, function(err, retrievedAboutObject){
      if (err) {
         console.log(err);
      } else {
          res.render("about/index", {about: retrievedAboutObject[0]});
      }
   });
});

router.get("/edit", function(req, res){
   About.find({}, function(err, retrievedAboutObject){
      if (err) {
         console.log(err);
      } else {
          res.render("about/edit", {about: retrievedAboutObject[0]});
      }
   });
});


// UPDATE PROJECT ROUTE
router.put("/", function(req, res){
   
   var profileImageName = "";
   var aboutObject;
   
   About.find({}, function(err, retrievedAboutObjects){
      if (err) {
         console.log(err);
         res.redirect("/about");
      } else {
         aboutObject = retrievedAboutObjects[0]
         profileImageName = retrievedAboutObjects[0].profileImageName;

         if (req.files.profileImageFile) {
            let uploadedProfileImage = req.files.profileImageFile;
            // move image to 'assets' folder with project title as filename
            uploadedProfileImage.mv('./public/assets/images/profileImages/' + req.files.profileImageFile.name, function(err) {
               if (err) {
                  res.status(500).send(err);
                  console.log(err);
               } else {
                  var aboutUpdate = {
                     title: req.body.title,
                     profileImageName: req.files.profileImageFile.name,
                     text: req.body.text
                  };
                  About.findByIdAndUpdate(aboutObject._id, aboutUpdate, function(err, updatedAboutObject){
                     if (err) {
                         console.log(err);
                         res.redirect("/about");
                     } else {
                        console.log("About Page updated");
                        res.redirect("/about");
                     }
                  });
                  
               }
            });
         } else {
            var aboutUpdate = {
               title: req.body.title,
               profileImageName: profileImageName,
               text: req.body.text
            };
            About.findByIdAndUpdate(aboutObject._id, aboutUpdate, function(err, updatedAboutObject){
               if (err) {
                   console.log(err);
                   res.redirect("/about");
               } else {
                  console.log("About Page updated");
                  res.redirect("/about");
               }
            });
         }
      }
   });
   
   
   
});

module.exports = router;