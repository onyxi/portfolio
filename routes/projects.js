var express = require("express"),
    router = express.Router(),
    Project = require("../models/project"),
    fileUpload = require('express-fileupload');


// PROJECTS INDEX PAGE
router.get("/", function(req, res){
    // get projects from database
    Project.find({}).sort({date: 'desc'}).exec( function(err, foundProjects){
        if (err) {
            console.log(err);
        } else {
            res.render("projects/index", {projects: foundProjects});
        }
    });
    
});

// CREATE PROJECT
router.post("/", function(req, res){
    
    var mainImageName = "";
    var extraImageName = "";
    
    // If an image file has been uploaded...
    if (req.files.mainImageFile) {
        let uploadedMainImage = req.files.mainImageFile;
        mainImageName = uploadedMainImage.name;
       
        // move image to 'uploads' folder with project title as filename
        uploadedMainImage.mv('./public/assets/images/projectImages/' + req.files.mainImageFile.name, function(err) {
            if (err) {
                res.status(500).send(err);
                console.log(err);
            }
        });
        
    }
    if (req.files.extraImageFile) {
        let uploadedExtraImage = req.files.extraImageFile;
        extraImageName = uploadedExtraImage.name;
       
        // move image to 'uploads' folder with project title as filename
        uploadedExtraImage.mv('./public/assets/images/projectImages/' + req.files.extraImageFile.name, function(err) {
            if (err) {
                res.status(500).send(err);
                console.log(err);
            }
        });
        
    }
    
    
    // create a new project and save to db
    var newProject = {
        title: req.body.title,
        mainImageName: mainImageName,
        caption: req.body.caption,
        text: req.body.text,
        videoCode: req.body.videoCode,
        extraImageName: extraImageName,
        published: req.body.publish,
        date: new Date()
    }
    
    console.log(newProject);

    Project.create(newProject, function(err, newlyCreatedProject){
        if (err) {
            console.log(err);
        } else {
            console.log("Added new project");
        }
    });
    // redirect back to projects index page
    res.redirect("/projects");
});

// CREATE NEW PROJECT/POST PAGE
router.get("/new", function(req, res){
    res.render("projects/new");
});



// SHOW INDIVIDUAL PROJECT/POST PAGE
router.get("/:id", function(req, res){
     // find project with provided id
    Project.findById(req.params.id).exec(function(err, foundProject){
        if (err) {
            console.log(err);
        } else {
            // render show template with retrieved project
            res.render("projects/show", {project: foundProject});
        }
    });
});

// SHOW LARGE IMAGE PAGE
router.get("/image/:imageName", function(req, res){
    res.render("projects/image", {imageName: req.params.imageName});
});


// EDIT A PROJECT/POST PAGE
router.get("/:id/edit", function(req, res){
    Project.findById(req.params.id, function(err, foundProject){
        if (err) {
            console.log(err);
        } else {
            res.render("projects/edit", {project: foundProject});   
        }
    });
});


// UPDATE PROJECT ROUTE
router.put("/:id", function(req, res){
    
    
    Project.findById(req.params.id, function(err, project){
        if (err) {
            console.log(err);
        } else {
            
            var mainImageName;
            var extraImageName;
            
            if (project.mainImageName) {
                mainImageName = project.mainImageName;
            }
            if (project.extraImageName) {
                extraImageName = project.extraImageName;
            }
            
            // If a main image file has been uploaded...
            if (req.files.mainImageFile) {
                let uploadedMainImage = req.files.mainImageFile;
                mainImageName = uploadedMainImage.name;
                
                // move image to 'assets' folder with project title as filename
                uploadedMainImage.mv('./public/assets/images/projectImages/' + req.files.mainImageFile.name, function(err) {
                    if (err) {
                        res.status(500).send(err);
                        console.log(err);
                    }
                });
        
            }
            
            // If an extra image file has been uploaded...
            if (req.files.extraImageFile) {
                let uploadedExtraImage = req.files.extraImageFile;
                extraImageName = uploadedExtraImage.name;
               
                // move image to 'uploads' folder with project title as filename
                uploadedExtraImage.mv('./public/assets/images/projectImages/' + req.files.extraImageFile.name, function(err) {
                    if (err) {
                        res.status(500).send(err);
                        console.log(err);
                    }
                });
            }
            
            
            // create a project object with updated details and save to db
            var projectUpdate = {
                title: req.body.title,
                mainImageName: mainImageName,
                caption: req.body.caption,
                text: req.body.text,
                videoCode: req.body.videoCode,
                extraImageName: extraImageName,
                published: req.body.publish
            }
        
            
             // find and update the correct project in db
            Project.findByIdAndUpdate(req.params.id, projectUpdate, function(err, updatedProject){
                if (err) {
                    console.log(err);
                    res.redirect("/projects");
                } else {
                    console.log("Project updated");
                    res.redirect("/projects/" + req.params.id);
                }
            });
            
            
        }
    });
    
    
});


// DESTROY PROJECT ROUTE
router.delete("/:id", function(req, res){
   Project.findByIdAndRemove(req.params.id, function(err){
      if (err) {
          console.log(err);
          res.redirect("/projects");
      } else {
          console.log("Project deleted");
          res.redirect("/projects");
      }
   });
});


module.exports = router;