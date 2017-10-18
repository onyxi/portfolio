var mongoose = require("mongoose"),
    User = require("./models/user"),
    Project = require("./models/project"),
    About = require("./models/about"),
    passport = require("passport");

mongoose.Promise = global.Promise; 


// config Admin User object data
var adminUser = {
    username: "Pete",
    password: "Windfa11"
};


// config Project objects data
var today = new Date();
var projectData = [
    {
        title: "The Scarecrow",
        mainImageName: "scarecrow.png",
        caption: "Defend your farm from an onslaught of birds with your bow and arrow!",
        text: "<p>Released on the Apple App Store in July 2013, this project was my first attempt to build a mobile application. The source files are not well organised – relatively messy and overcrowded. It also took a long time to complete – around 10 months, on top of a full time job. However, it was very pleasing to complete a project from conception, through design, building and publishing on the Apple App Store. Furthermore, this is my most successful app to date – with over 5000 downloads, mostly in Malaysia!</p><p>This project was developed in the Lua programming language with the Corona SDK toolkit. I chose to learn to code with these tools because they offered relatively quick development times for simple applications and cross-platform support for distribution across multiple app stores – at the expense of access to native device features. In reality, my development time was still relatively long as I was starting out and I only got round to distributing through one app store – Apple’s (navigating the distribution process is a hefty undertaking in itself).</p><p>The code for this project can be found in <a href='https://github.com/onyxi/The-Scarecrow'>this GitHub repository.</a></p><p>The majority of code developed by me is in the ‘game.lua’ file. This is mostly hand-written code, but using adapted methods here and there – especially where the physics/collisions/object-management gets complicated.</p><p>Aside from this, the project makes use of some external tools to manage custom fonts, graphics/sprite sheets and scene transitions.</p><p>All media assets were created with Serif DrawPlus (images) and making use of few royalty free sounds for audio.</p><p>Note: this app is no longer available on the App Store – the Apple Developer account has since expired and the code has not been maintained. I have not deemed it a priority to re-engineer the code to re-release. This is why the sound is out of synch and a cursor can be seen in the video above – the app is running on a simulator here.</p>",
        videoCode: "Hst0FBwJSbk",
        published: true,
        date: today.getDate()-3
    },
    {
        title: "Sand Rush",
        mainImageName: "sandRush.png",
        caption: "Guide your dung-beetle with it’s precious cargo between spiky cacti.",
        text: "<p>Released in November 2014, this project was for development of an ‘endless runner’-style mobile game whereby you guide a dung beetle safely between cactuses for as long as possible without getting stuck. You can <a href='https://itunes.apple.com/gb/app/timmys-sand-rush/id933331507?mt=8'>download the app for iOS here.</a></p><p>The application was written in the Lua programming language using the Corona SDK toolkit. The code for this project can be found in <a href='https://github.com/onyxi/Sand-Rush'>this GitHub repository.</a> Only my second attempt at building a complete mobile application, I was still very new to programming and this can be seen in the code. Source files are still overly crowded and lack structured. Having said this, it feels like an improvement on my first project – The Scarecrow. Code is a bit more organised, development time was greatly reduced (3 months on top of a full-time job – vs nearly 10 months), and the overall design/look and feel of the app is more ‘polished’.</p><p>The majority of code developed by me can be found in the ‘scene1.lua’ and ‘scene2.lua’ files. This is nearly all hand-written code.</p><p>Aside from this, the project makes use of some external tools to manage custom fonts, graphics/sprite sheets and connections to social-media applications.</p><p>All media assets were created with Pixen (pixel-art) and Autodesk Graphic (vector-art) for images and Garage Band for sound – making use of a few royalty free assets where appropriate.</p>",
        videoCode: "NltvqvS8Ymg",
        published: true,
        date: today.getDate()-2
    },
    {
        title: "4OC - Viper",
        mainImageName: "viper.png",
        caption: "Stay on top of your project portfolio with live analysis of resource utilisation.",
        text:   "<p>During my time working with 4OC as a Business Analyst, we had been trying to polish up and re-sell a configuration of some Microsoft tools that we used internally to give analytical oversight of our deliverable programmes and projects – we called this product Viper. Although many clients saw the benefits and showed significant interest, we faced considerable challenges when seeking commitment – mostly due to the complexity of the product and the potential to break it without close support, which would lead to poor data and unclear business decisions. There was also the issue of branding – or lack-of it. Without our own branding on the product, our clients seemed reluctant to pay us money for it – some felt they could recreate something similar if they could find the expertise somewhere in their own team.</p><p>I decided to design and propose a concept mobile solution that could simplify the process; remove unwanted tools/features; make internal usage more reliable and easily accessible; and increase likelihood of client purchase. The designs <a href='/projects/image/viperDesigns.png'>(you can see them here)</a> replicated the core tools needed for our configuration in a mobile-friendly layout, with consideration of the workflows and project lifecycles we typically worked through.</p><p>I presented these designs to the board of Directors with some accompanying slides to give context and a rationale to the proposed project, as well as to discuss the necessary infrastructure elements of the product. A recording of the presentation slides, with embedded video of the storyboard designs being demoed on a device, can be seen below. The concept was very well received – not simply on account of the UI designs themselves, but for the analysis of the problem, high-level design of the end-to-end solution and approach to gain buy-in from the key stakeholders. While the project concept stirred a lot of interest, a second stage of more detailed requirements gathering and design has yet to be given the go-ahead and resourced appropriately.</p>",
        videoCode: "j4CI9BlK6lI",
        extraImageName: "viperDesigns.png",
        published: true,
        date: today.getDate()-1
    },
    {
        title: "Picho",
        mainImageName: "picho.png",
        caption: "Recapture the excitement of waiting for undeveloped camera films. Contribute with friends to shared photo albums that are only made available to view on your chosen future date.",
        text: "<p>Picho has been my most ambitious project to date. I was looking for a project where I could practise proper programming concepts and project organisation using leading technologies. The decision to step up my learning to industry-standard tools and technologies tied in well with the growth of Apple’s popular, and now open-source, Swift programming language. It has a similar feel to Lua in some respects (type-inference is encouraged) so the transition to this language seemed a logical choice. Also, my personal devices are Apple so running the tools and testing products on native devices was the sensible/economical option.</p><p>I decided I wanted to create something that recaptured the excitement of waiting for a celluloid-film from a traditional camera to be developed. Something that has been lost through the digital camera/smartphone revolution. While learning to code Swift through online resources, I also set about creating conceptual UI designs <a href='/projects/image/pichoDesigns.png'>(you can view the designs here)</a> for the app’s look, feel and layout. These evolved as I learned more about iOS development – with understanding of native structural elements informing what could and couldn’t be achieved.</p><p>The project was started in July 2016, so far taking over a year of evenings and weekends. Since then I have had to learn and incorporate the fundamentals of Object-Oriented-Programming, Swift, iOS, Xcode, Auto-Layout, Cocoa-Touch, Cocoa-Pods, Core Data, Firebase, JSON, NoSQL, Git, GitHub… the list continues to grow. You can see the source code for this project in <a href='https://github.com/onyxi/Picho/tree/Picho/Picho'>this GitHub repository.</a></p><p>Although this project is still ongoing, I am pleased with the overall look and feel of the design – a huge improvement compared to my first attempt at app development, The Scarecrow – and with the quality and organisation of the project, code and source files. This project will keep me busy everyday for the foreseeable future!</p>",
        videoCode: "xIzMxtycOYY",
        extraImageName: "pichoDesigns.png",
        published: true,
        date: today.getDate()
    }
];


// config About object data
var aboutData = {
    title: "About This Site",
    profileImageName: "profile1.jpg",
    text: "My name is Pete. I’m an aspiring software developer and have been learning to code since 2012. Although I currently work as a Business Analyst, often working on technology-heavy projects, I previously spent 5 years teaching IT in schools to children from 6 – 19 years old. My software development journey started here – through necessity. As school curriculums became more focused on practical IT skills and the fundamentals of programming, my own up-skilling activities led me to find this new hobby. Since then it’s become my passion and I code everyday. Through personal study and mostly online resources I now have experience in mobile UI/UX design, Object-Oriented-Programming, Swift, iOS, Xcode, Auto-Layout, Cocoa-Touch, Cocoa-Pods, Core Data, Firebase, JSON, NoSQL, Lua, Corona SDK, Git, GitHub. I have released two mobile apps through the App Store so far and, with other projects underway, am excited about where this journey will lead me."
}

function seedDB(){

    // remove any old User objects
    User.remove({}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("Removed old users");
            
            // create new Admin User and add to database
            var newUser = new User({username: adminUser.username});
            User.register(newUser, adminUser.password, function(err, user){
                if (err){
                    console.log(err);
                }
                console.log("Added new Admin User");
                // authenticate new user for current session
                passport.authenticate('local'),
                function(req, res) {
                    res.redirect('/');
                };
            }); 
        }
    });
    
    // remove any old Project objects
    Project.remove({}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("Removed old projects");
            // add new project objects
            projectData.forEach(function(seed){
                Project.create(seed, function(err, project){
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Added new project");
                    }
                });
            });
        }
    });

    // remove any old About objects
    About.remove({}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("Removed old 'About' info");
            About.create(aboutData, function(err, about){
                if (err) {
                    console.log(err);
                } else {
                    console.log ("Added new 'About' info");
                }
            });
        }
    });

}

module.exports = seedDB;