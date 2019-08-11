var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  //Return all characters
  app.get("/api/survey", function(req, res) {
    res.json(friends);
  });

  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    var info = req.body;
    var idealCharacter = 0;
    var minDiff = 40;

    for (var i = 0; i < friends.length; i++) {
        var totalDiff = 0;
        for (var j = 0; j < friends[i].scores.length; j++) {
            var difference = Math.abs(info.scores[j] - friends[i].scores[j]);
            totalDiff += difference;
        }
        if(totalDiff < minDiff) {
            idealCharacter = i;
            minDiff = totalDiff;
        }

    }
    
    friends.push(info);

    res.json(friends[idealCharacter]);
    });
  };
    
