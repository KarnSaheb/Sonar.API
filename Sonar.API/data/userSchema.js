﻿// import the mongoose package
var mongoose = require('mongoose'); // import the model

// define the schema
var userSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String }, 
    push_token: { type: String },
    device_type: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    following: { type: Array, "default": [] },
    followers: { type: Array, "default": [] },
    track_count: { type: Number, "default": 0 },
    starred_artists: { type: Array, "default": [] },
    liked_tracks: { type: Array, "default": [] }
});

// compile schema into a model
var User = mongoose.model('Users', userSchema);

// expose the schema
module.exports = User;