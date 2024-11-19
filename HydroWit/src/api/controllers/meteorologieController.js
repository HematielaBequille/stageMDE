const db = require("../db");
const MeteorologieStation = require("../models/meteorologie.Model");

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
