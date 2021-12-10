const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    bio: {
        type: String,
        default: "Write a little bit about yourself"
    },

    profileImgUrl: {
        type: String,
        default: 'https://ubisoft-avatars.akamaized.net/46564bd6-ef0b-4b05-97ec-68d8473167c6/default_256_256.png'
    },
    backLogGames: {
        type: Array,
        default: []
    },

    playedGames: {
        type: Array,
        default: []
    }

    // recommendedList: {
    //     type: Array,
    //     default: []
    // }
})

const User = mongoose.model('users', UserSchema);
module.exports = User;
