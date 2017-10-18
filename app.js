// IMPORT PACKAGES
var express = require("express"),
    app     = express(),
    bodyParser  = require("body-parser"),
    mongoose = require("mongoose"),
    Project = require("./models/project"),
    User = require("./models/user"),
    About = require("./models/about"),
    seedDB = require("./seeds"),
    methodOverride = require("method-override"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    fileUpload = require('express-fileupload');
    

// CONNECT DATABASE
mongoose.connect("mongodb://localhost/portfolio", {useMongoClient: true});
 seedDB(); // Seed the database with project data


// CONFIGURE APP
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/assets/images/projectImages"));
app.use(methodOverride("_method"));
app.use(fileUpload());

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "This is the encryption secret I think...",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
});


// CONNECT ROUTES
app.use("/", require("./routes/index"));
app.use("/projects", require("./routes/projects"));
app.use("/about", require("./routes/about"));




// ACTIVATE SERVER LISTENER 
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server Is Running"); 
});

