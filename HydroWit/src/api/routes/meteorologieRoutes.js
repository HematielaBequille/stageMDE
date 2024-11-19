const express = require("express");
const router = express.Router();
const meteorologieController = require("../controllers/meteorologieController");

// GET - Récupérer toutes les stations météorologies
router.get("/stations", meteorologieController.getAllMeteorologieStations);

// GET - Récupérer tout les capteurs des stations météorologies
router.get("/sensors", meteorologieController.getAllMeteorologieSensors);

module.exports = router;
