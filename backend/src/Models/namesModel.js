const mongoose = require('mongoose');

const namesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    position:{
        type: Number,
        required: true
    },
    time:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('RankingName', namesSchema);