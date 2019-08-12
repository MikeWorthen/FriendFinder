var path = require("path")
var friends = require("../data/friends")


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  //Return all characters
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // ---------------------------------------------------------------------------

  app.get("/", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"))
  });

  app.post("/api/survey", function(req, res) {

  });

  }

    
