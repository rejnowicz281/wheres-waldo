const debug = require("debug")("app:scoresController");

const { Score } = require("../models/score");
const Map = require("../models/map");

const asyncHandler = require("../asyncHandler");

exports.create = asyncHandler(async (req, res, next) => {
    const mapId = req.params.mapId;

    const score = new Score(req.body);

    const map = await Map.findById(mapId);

    if (!map) return next(new Error(`Map ${mapId} not found`));

    map.scores.push(score);

    await map.save();

    const data = {
        message: "Score saved",
        mapId,
        score,
    };

    debug(data);
    res.json(data);
});
