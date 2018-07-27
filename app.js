//
//
var express = require("express");
var app = express();

/* in order to read HTTP POST data , we have to use "body-parser" node module. body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body  

body-parser extract the entire body portion of an incoming request stream and exposes it on req.body*/
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.set("view engine", "ejs");

var campgrounds = [
  {
    name: "salmon creek",
    image: "https://www.photosforclass.com/download/flickr-2229707213"
  },
  {
    name: "granite hill",
    image: "https://www.photosforclass.com/download/flickr-3871440451"
  },
  {
    name: "goat's rest",
    image: "https://www.photosforclass.com/download/flickr-14435096036"
  },
  {
    name: "salmon creek",
    image: "https://www.photosforclass.com/download/flickr-2229707213"
  },
  {
    name: "granite hill",
    image: "https://www.photosforclass.com/download/flickr-3871440451"
  },
  {
    name: "goat's rest",
    image: "https://www.photosforclass.com/download/flickr-14435096036"
  },
  {
    name: "salmon creek",
    image: "https://www.photosforclass.com/download/flickr-2229707213"
  },
  {
    name: "granite hill",
    image: "https://www.photosforclass.com/download/flickr-3871440451"
  },
  {
    name: "goat's rest",
    image: "https://www.photosforclass.com/download/flickr-14435096036"
  }  
];

app.get("/", function(req, res) {
  res.render("landing.ejs");
});

//1st REST form
app.get("/campgrounds", function(req, res) {
  //passing the array as {nameBeingGiven: dataBeingPassed}
  res.render("campgrounds.ejs", { campgrounds: campgrounds }); 
});

//2nd REST form
app.post("/campgrounds", function(req, res){
  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;

  // an object that holds name and image
  // {nameBeingGiven: dataBeingPassed}
  var newCampground = {name: name, image: image}; 
  campgrounds.push(newCampground); //adds newly created campground into the current array
  
  //redirect back to campgrounds page
  res.redirect("/campgrounds"); //by default it redirects as a GET request
});

//3rd REST form; used to send data to /campgrounds post route
app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

// use port 3000 unless there exists a preconfigured port
const port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function() {
  console.log("Server has started: " + process.env.IP + ":" + process.env.PORT);
});