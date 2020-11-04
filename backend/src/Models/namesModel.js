const mongoose = require('mongoose');

const namesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    position:{
        type: Number,
        required: false
    },
    time:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model('RankingName', namesSchema);