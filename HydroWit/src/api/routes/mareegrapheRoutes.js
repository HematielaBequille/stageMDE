const express = require("express");
const router = express.Router();
const mareegrapheController = require("../controllers/mareegrapheController");

// GET - Récupérer toutes les stations météorologies
router.get("/stations", mareegrapheController.getAllMareegrapheStations);

module.exports = router;