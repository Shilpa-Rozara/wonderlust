const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

mongoose.connect('mongodb://localhost:27017/wonderlust')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "6ac5285841e006de6e71b2ba" }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}
initDB();