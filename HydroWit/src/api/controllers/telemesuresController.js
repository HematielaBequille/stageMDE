const db = require("../db");
const allowedTables = ["t_00000000c1_0001", "t_00000000c1_0002"]; // TODO trouver où ranger ça et une meilleur façon de gérer ça
const allowedStations = ["00000000C1"]; // TODO pareil

// GET - Récupérer toutes les stations telemesures - asynchrone
exports.getAllStations = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT station, libelle_station FROM referentiels.all_stations_list WHERE source_schema = 'telemesure'"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "Erreur du serveur lors de la récupération de toutes les stations de télémesures"
      );
  }
};

//GET - Récupérer tout les capteurs d'une station telemesure - asynchrone
exports.getAllSensorsOfOneStation = async (req, res) => {
  const stationName = req.params.stationName;

  if (!allowedStations.includes(stationName)) {
    return res.status(400).json({ error: "Accès à la station non autorisé" });
  }

  try {
    const query = `
      SELECT capteur, desc_capteur 
      FROM referentiels.all_tables_list 
      WHERE station = $1
    `;
    const result = await db.query(query, [stationName]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "Erreur du serveur lors de la récupération de tout les capteurs de la station de télémesure"
      );
  }
};

//GET - Récupérer toutes les données d'un capteur d'une station telemesure - asynchrone
exports.getDataOfOneSensorOfOneStation = async (req, res) => {
  const tableName = req.params.tableName;

  if (!allowedTables.includes(tableName)) {
    return res.status(400).json({ error: "Table non autorisée" });
  }

  try {
    const query = `SELECT date, heure, valeur FROM telemesure.${tableName}`;
    const result = await db.query(query);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "Erreur du serveur lors de la récupération des données d'un capteur d'une station télémesure"
      );
  }
};
