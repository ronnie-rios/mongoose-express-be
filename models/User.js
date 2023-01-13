const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    token: String,
    address: String,
    Phone: String,
    favoriteGame: String,
    why: String,
    stores: [],
    games: [],
    birthdate: String
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
