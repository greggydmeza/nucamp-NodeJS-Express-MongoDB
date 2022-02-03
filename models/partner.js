const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Partner Schema
const partnerSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: true
    }
},  
    {
        timestamps: true
    
});

//Partner Model
const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;