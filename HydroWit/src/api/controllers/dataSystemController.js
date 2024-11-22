const db = require("../db");
const allowedDataSystems = ["telemesure", "maregraphe"]; //meteorologie

// GET - Récupérer les stations selon le système de donnée sélectionné - asynchrone
exports.getStationsBySystem = async (req, res) => {
  const dataSystemId = req.params.dataSystemId;

  if (!allowedDataSystems.includes(dataSystemId)) {
    return res
      .status(400)
      .json({ error: "Accès au système de données non autorisé" });
  }

  try {
    const query =
      "SELECT station, libelle_station FROM referentiels.all_stations_list WHERE source_schema = $1";
    const result = await db.query(query, [dataSystemId]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "Erreur du serveur lors de la récupération des stations du système de donnés sélectionné"
      );
  }
};
