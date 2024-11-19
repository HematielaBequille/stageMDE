const db = require("../db");
const MareegrapheStation = require("../models/mareegrapheModel");

// GET - Récupérer toutes les stations maréegraphes - asynchrone
exports.getAllMareegrapheStations = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT source_schema, station, libelle_station FROM referentiels.all_stations_list WHERE source_schema = 'maregraphe'"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "Erreur du serveur lors de la récupération de toutes les stations maréegraphe"
      );
  }
};
