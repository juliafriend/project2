//// MONGO DEPENDENCIES ////

const mongoose = require('mongoose');

//// CREATE SCHEMA ////

const backyardSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    pool: { type: Boolean },
    seating: [ {type:string} ],
    cooking: [ {type:string} ],
    petfriendly: { type: Boolean },
    tags: [{type:string}],
    availability: [ {type:string} ],
});

const Backyard = mongoose.model('Backyard', backyardSchema);

//// EXPORT SCHEMA ////

module.exports = Backyard;