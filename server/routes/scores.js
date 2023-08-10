const express = require("express");

const { create } = require("../controllers/scoresController");

const router = express.Router({ mergeParams: true });

router.post("/", create);

module.exports = router;
