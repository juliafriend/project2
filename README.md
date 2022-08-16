# project2
BackyardBorrow
Hosted on Heroku:
https://stark-stream-11381.herokuapp.com/backyard

////Concept////
Users are either backyard borrowers or listers. 

Borrowers are looking for an outside space that they can borrow for a day to enjoy! The home page shows them the title of all listings and their location. They can click on the title to take them to a "show page" where they are able to see more detail, a photo, and submit a form to "borrow the backyard."

Listers are property owners who are listing their yard. From the "show page", they are able to edit their listing or delete it from the database. 

////7 Restful Routes////
1// index route:  get/backyard: Takes user to index.ejs. User can view all listings, click to access show page, and leave a review

2// new route:  get/backyard:/new: Takes user to new.ejs where there is a form to create a new listing

3// show route:  get/backyard/:id: Takes user to show.ejs by clicking on title link. This page displays more detail, including info about pool, seating, cooking, pets, additional tags, and availability (schema keys). There is a form to borrow backyard and 2 buttons for listing owners to edit or delete.

4// edit route:  get/backyard/:id/edit: Takes user to edit.ejs. Gives lister opportunity to edit any keys.

5// create route:  post/backyard: Adds new listings to database, can be seen when home page is reloaded

6// update route:  put/backyard/:id: Updates data with user edits

7// destroy route:  delete/backyard/:id: Deletes listing from database

////Partials////
I utilized partials for the head tag and header tag in EJS files.

////Styling////
I utilized Bootstrap for the containers, font, and responsiveness. My CSS file contains color choices, some sizing and alignment preferences, and padding/margins. 

////Technology////
This application was built with a Javascript server, Express, MongoDB, Mongoose, EJS files, Bootstrap framework, CSS, Node.js, and Nodemon.

////Future Updates////
-Authentication so listers are able to login and only after loggin in, have access to edit or delete listings
-Have feedback and reservation forms actually go somewhere 