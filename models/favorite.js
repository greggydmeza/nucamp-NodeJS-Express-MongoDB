const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Favorite Schema
const favoriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    campsites:[{
        type: mongoose.Schema.Types.ObjectId,
        required: 'Campsites'
    }]
});

//Favorite Model base on favoriteSchema
const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;