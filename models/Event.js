const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: String,
    location: String,
    startDate: String,
    endDate: String
}, { timestamps: true });

const Events = mongoose.model('Events', EventSchema);

module.exports = Events;