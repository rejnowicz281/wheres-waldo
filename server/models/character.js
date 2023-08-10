const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    x: {
        type: Number,
        required: true,
    },
    y: {
        type: Number,
        required: true,
    },
});

// Export schema
module.exports = characterSchema;
