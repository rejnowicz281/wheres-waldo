const debug = require("debug")("app:mapsController");

const asyncHandler = require("../asyncHandler");

const Map = require("../models/map");

exports.index = asyncHandler(async (req, res) => {
    const maps = await Map.find().select("name imgName _id").sort("name");

    debug("Map Index successful");
    res.send(maps);
});

exports.show = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const map = await Map.findById(id);

    if (!map) return next(new Error("Map not found"));

    const data = {
        message: "Map Show successful",
        map: map,
    };

    debug(data);
    res.json(data);
});
