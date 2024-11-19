const express = require("express");
const router = express.Router();
const meteorologieController = require("../controllers/meteorologieController");

// GET - Récupérer toutes les stations météorologies
router.get("/stations", meteorologieController.getAllMeteorologieStations);

module.exports = router;