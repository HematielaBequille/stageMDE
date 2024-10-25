const express = require("express");
const router = express.Router();
const telemesuresController = require("../controllers/telemesuresController");

// GET - Récupérer toutes les stations telemesures
router.get("/stations", telemesuresController.getAllStations);

module.exports = router;