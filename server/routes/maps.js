const express = require("express");
const scoreRouter = require("./scores");

const { index, show } = require("../controllers/mapsController");

const router = express.Router();

router.use("/:mapId/scores", scoreRouter);
router.get("/", index);
router.get("/:id", show);

module.exports = router;
