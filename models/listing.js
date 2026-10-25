const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        filename: {
            type: String
        },
        url: {
            type: String,
        }
    },

    price: {
        type: Number,
        required: true
    },

    location: {
        type: String
    },

    country: {
        type: String,
        required: true
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    geometry: {
        type: {
            type: String, 
            enum: ['Point'], 
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    category: {
        type: String,
        enum: ['Apartment', 'House', 'Mountains', 'Villa', 'Cottage', 'Castles', 'Bungalow', 'Amazing Pools', 'Camping','Farms','Arctic','Beach', 'Other'],
        required: true
    }
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;