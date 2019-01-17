const mongoose = require('mongoose');

const trackModel = new mongoose.Schema({
    userId: {
        type: String,
        index: true,
        unique:true,
        required: true
    },
    loggedIn: {
        type: Date,
        default:Date.now()
    },
    loggedOut:{
        type:Date
    }
});

mongoose.model('Track', trackModel);