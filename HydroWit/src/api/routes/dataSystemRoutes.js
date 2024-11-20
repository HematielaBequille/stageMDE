const express = require("express");
const router = express.Router();
const dataSystemController = require("../controllers/dataSystemController");

// GET - Récupérer les stations selon le système de donnée sélectionné
router.get("/:dataSystemId/stations", dataSystemController.getStationsBySystem);

module.exports = router;
