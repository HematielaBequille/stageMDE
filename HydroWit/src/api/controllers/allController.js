const db = require("../db");
const Station = require("../models/allModel");
const Sensor = require("../models/allModel");

// GET - Récupérer toutes les stations - asynchrone
exports.getAllStations = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT station, libelle_station FROM referentiels.all_stations_list"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("Erreur du serveur lors de la récupération de toutes les stations");
  }
};

// GET - Récupérer tout les capteurs - asynchrone
exports.getAllSensors = async (req, res) => {
  try {
    const result = await db.query(
      ""
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("Erreur du serveur lors de la récupération de tous les capteurs");
  }
};
