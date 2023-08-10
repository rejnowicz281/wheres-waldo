const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    playerName: {
        type: String,
        default: "Anonymous",
        trim: true,
    },
    seconds: {
        type: Number,
        required: true,
    },
});

exports.Score = mongoose.model("Score", scoreSchema);
exports.scoreSchema = scoreSchema;
