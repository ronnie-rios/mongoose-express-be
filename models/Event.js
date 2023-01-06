const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    jobRole: String,
    company: String,
    technologies: String,
    fromWhere: String,
    interview: Boolean,
    phoneScreening: Boolean,
    accepted: Boolean,
    denied: Boolean
}, { timestamps: true });

const Events = mongoose.model('Events', EventSchema);

module.exports = Events;