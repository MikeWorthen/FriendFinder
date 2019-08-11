var express = require("express");

var app = express();


//Sets an initial Port 
var PORT = process.env.PORT || 8080;


//Handles Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Allows server to respond when users visit or request from various URL's
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


//Used to start Server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });