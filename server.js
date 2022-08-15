//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
require('dotenv').config()
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

//___________________
//Models
//___________________
const Backyard = require('./models/schema.js');
const seed = require('./models/seed.js');
//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI);

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form


//___________________
// Routes
//___________________
// localhost:3000

//redirect home route
app.get('/' , (req, res) => {
  res.redirect('/backyard');
});

////index route////
app.get('/backyard', (req, res) => {
    Backyard.find({}, (error, allBackyards) => {  
        res.render(
            'index.ejs',
            {
                backyard: allBackyards
            }
        );
    });
});
//seed route////
// app.get('/backyard/seed', (req, res) => {
//     Backyard.create(
//         seed,
//         (error, data) => {
//             res.redirect('/backyard');
//         }
//     );
// });

////new  Route////
app.get('/backyard/new', (req, res) => {
    res.render('new.ejs');
});

////show route////
app.get('/backyard/:id', (req, res) => {
    Backyard.findById(req.params.id, (error, foundBackyard) => {
        res.render(
            'show.ejs',
            {
                backyard: foundBackyard
            }
        );
    });
});
//// edit route //// 
app.get('/backyard/:id/edit', (req, res) => {
    Backyard.findById(req.params.id, (error, foundBackyard) => {
        res.render(
            'edit.ejs',
        {
            backyard: foundBackyard
        }
        );
    });
});
app.put('/backyard/:id', (req, res) => {
    // Re-Formatting arrays
    req.body.seating = req.body.seating.split(' ');
    req.body.cooking = req.body.cooking.split(' ');
    req.body.tags = req.body.tags.split(' ');
    req.body.availability = req.body.availability.split(' ');
    // Updating Backyard with New Object
    Backyard.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, foundBackyard) => {
            res.redirect('/backyard');
        });
});
//// Create Post route////
app.post('/backyard', (req, res) => {
  // Re-Formatting arrays
  req.body.seating = req.body.seating.split(' ');
  req.body.cooking = req.body.cooking.split(' ');
  req.body.tags = req.body.tags.split(' ');
    // Create in MongoDB
    Backyard.create(req.body, (error, createdBackyard) => {
        // Redirect to Index
        res.redirect('/backyard');
    });
});
//// delete route////
app.delete('/backyard/:id', (req, res) => {
    Backyard.findByIdAndRemove(req.params.id, (error, foundBackyard) => {
        res.redirect('/backyard');
    });
});







//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));