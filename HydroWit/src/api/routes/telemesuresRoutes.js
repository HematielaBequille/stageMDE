const express = require("express");
const router = express.Router();
const telemesuresController = require("../controllers/telemesuresController");

// GET - Récupérer toutes les stations telemesures
router.get("/stations", telemesuresController.getAllStations);

// GET - Récupérer tous les capteurs de toutes les stations telemesures
router.get(
  "/stations/sensors/:tableName/data",
  telemesuresController.getDataOfOneSensorOfOneStation
);

//GET - Récupérer tous les capteurs d'une station telemesure
router.get(
  "/stations/:stationName/sensors",
  telemesuresController.getAllSensorsOfOneStation
);

module.exports = router;
