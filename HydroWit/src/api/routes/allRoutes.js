const express = require("express");
const router = express.Router();
const allController = require("../controllers/allController");

// GET - Récupérer toutes les stations
router.get("/stations", allController.getAllStations);

// GET - Récupérer tout les capteurs
router.get("/sensors", allController.getAllSensors);

module.exports = router;