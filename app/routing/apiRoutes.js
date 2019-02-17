// DATA
var friends = require("../data/friends");

// ROUTING
module.exports = function(app) {

function calculateDifference(friend1, friend2) {
  var score = 0;
  for (var i = 0; i < 10; i++) {
    score += Math.abs(parseInt(friend1.scores[i]) - parseInt(friend2.scores[i]));
  }
  
  return score;
}



// Displays all friends
app.get("/api/friends", function (req, res) {
  return res.json(friends);
});



// Create New Characters - takes in JSON input
app.post("/api/friends", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newfriend = req.body;

  console.log(newfriend);
  var curmatchIndex = 0;
  var curmatchScore = 99; // dummy score just to initialize
  for (var i = 0; i < friends.length; i++) {
    var match = calculateDifference(newfriend, friends[i]);
    console.log("Match " + match + " at index " + i);
    if (match < curmatchScore) {
      curmatchScore = match;
      curmatchIndex = i;
    }
  }



 

  // We then add the json the user sent to the character array
  friends.push(newfriend);

  // We then display the JSON to the users
  res.json(friends[curmatchIndex]);
});

}


