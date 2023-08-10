const debug = require("debug")("app:scoresController");

const { body, validationResult } = require("express-validator");

const { Score } = require("../models/score");
const Map = require("../models/map");

const asyncHandler = require("../asyncHandler");

exports.create = [
    body("playerName").optional({ checkFalsy: true }).isString().trim().escape(),
    body("seconds", "Seconds are required").isNumeric(),
    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            debug(errors.array());
            return res.status(422).json({ errors: errors.array() });
        }

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
    }),
];
