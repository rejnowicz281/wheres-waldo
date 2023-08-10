const mongoose = require("mongoose");
const characterSchema = require("./character");
const { scoreSchema } = require("./score");

const Schema = mongoose.Schema;

const mapSchema = new Schema({
    name: { type: String, required: true },
    imgName: { type: String, required: true },
    characters: [characterSchema],
    scores: [scoreSchema],
});

// Export model
module.exports = mongoose.model("Map", mapSchema);
