const express = require("express");

const { create, index } = require("../controllers/scoresController");

const router = express.Router({ mergeParams: true });

router.get("/", index);
router.post("/", create);

module.exports = router;
