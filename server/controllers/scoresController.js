const debug = require("debug")("app:scoresController");

const { body, validationResult } = require("express-validator");

const { Score } = require("../models/score");
const Map = require("../models/map");

const asyncHandler = require("../asyncHandler");

exports.index = asyncHandler(async (req, res, next) => {
    const mapId = req.params.mapId;

    const map = await Map.findById(mapId);

    if (!map) return next(new Error(`Map ${mapId} not found`));

    const scores = map.scores.sort((a, b) => a.seconds - b.seconds);

    const data = {
        message: "Scores found",
        mapId,
        scores,
    };

    debug(data);
    res.json(data);
});

exports.create = [
    body("playerName").optional().isString().trim().escape(),
    body("seconds", "Seconds are required").isNumeric(),
    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            debug(errors.array());
            return res.status(422).json({ errors: errors.array() });
        }

        const mapId = req.params.mapId;

        const score = new Score({
            playerName: req.body.playerName || undefined,
            seconds: req.body.seconds,
        });

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
    }),
];
