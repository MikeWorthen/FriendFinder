var express = require("express");

var app = express();


//Sets an initial Port 
var PORT = process.env.PORT || 8089;



//Handles Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Allows server to respond when users visit or request from various URL's
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//Used to start Server
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
  });