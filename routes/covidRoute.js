const express = require("express");
const covidController = require("../controllers/covidController");

const router = express.Router();

router.route("/").get(covidController.getData);
router.route("/chartdata/:date").get(covidController.getTimeData);

module.exports = router;
