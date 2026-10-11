const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,

    image: {
        type: String,
        default: "https://unsplash.com/photos/people-on-grassy-hill-ilwfkHpE-JU",
        set: (v) => v === "" ? "https://unsplash.com/photos/people-on-grassy-hill-ilwfkHpE-JU" : v
    },

    price: Number,
    location: String,
    country: String
});


const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;