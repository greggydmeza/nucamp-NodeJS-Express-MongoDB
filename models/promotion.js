const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Require mongoose package for currencies
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

//Promotion Schema
const promotionSchema = new Schema ({
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
        required: true
    },
    cost: {
        type: Currency,
        min: 0,
        required: true
    },
    description: {
        type: String,
        required: true 
    }
},
    {
    timestamps: true
});

//Promotion Model
const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;