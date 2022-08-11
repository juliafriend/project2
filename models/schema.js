//// MONGO DEPENDENCIES ////

const mongoose = require('mongoose');

//// CREATE SCHEMA ////

const backyardSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    pool: { type: Boolean },
    seating: [String],
    cooking: [String],
    petfriendly: { type: Boolean },
    tags: [String],
    availability: [String],
});

const Backyard = mongoose.model('Backyard', backyardSchema);

//// EXPORT SCHEMA ////

module.exports = Backyard;