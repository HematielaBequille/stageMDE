const db = require("../db");
const MeteorologieStation = require("../models/meteorologieModel");

// GET - Récupérer toutes les stations météorologies - asynchrone
exports.getAllMeteorologieStations = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT source_schema, station, libelle_station FROM referentiels.all_stations_list WHERE source_schema = 'meteorologie'"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "Erreur du serveur lors de la récupération de toutes les stations météorologies"
      );
  }
};

// GET - Récupérer tout les capteurs des stations météorologies - asynchrone
exports.getAllMeteorologieSensors = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT id_capteur, unite_capteur, libelle_capteur FROM referentiels.r_code_capteur WHERE type_station = 'météo'"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "Erreur du serveur lors de la récupération de tout les capteurs des stations météorologies"
      );
  }
};
