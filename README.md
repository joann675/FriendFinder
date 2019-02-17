# FriendFinder

### Overview

FriendFinder is a full stack application that will allow the user to enter their answers to 10 questions. 
Based on the user's response, their compatibility to other users will be determined and they will be shown the name and picture of their best match.

This application is deployed on Heroku.


### Dependencies

package.json lists the dependencies that are needed. 
This includes express and path.

### Implementation

This application uses Express to handle routing.

The htmlRoutes.js file includes two routes:

   * A GET Route to `/survey` which displays the survey page.
   * A default route that leads to `home.html` which displays the home page.

The apiRoutes.js file includes two routes:

   * A GET route with the url `/api/friends` to display the JSON of all possible friends.
   * A POST routes `/api/friends`  to handle incoming survey results. This route contains the compatibility logic.

Data is stored in `app/data/friends.js` as an array of objects. Each of these objects follow the format below.

{
   name: "Clark Kent",
   photo: "http://t0.gstatic.com/images?q=tbn:ANd9GcTzEMn9FI59qysZbAAnImz7GVhhx2Z2rd7xdyB5FXSnDh3YtbIa",
   scores: [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "5",
      "1",
      "1"
    ]
}

Compatibility is determined by comparing the difference between current user's scores against those from other users, question by question. 
The absolute value of the differences is then added up to calculate the total Difference` and the closest match is the user with the least
amount of difference.

The result is displayed back to the user as a modal pop-up.
    







