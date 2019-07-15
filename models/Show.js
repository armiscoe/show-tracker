const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ShowSchema = new Schema({
    venue: {
        type: String,
        required: true
    },
    band: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },

    date: {
        type: Date,
        required: true
    }
});

module.exports = Show = mongoose.model('show', ShowSchema);