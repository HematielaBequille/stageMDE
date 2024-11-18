const db = require("../db");
const MeteorologieStation = require("../models/meteorologie.Model");

// GET - - asynchrone
exports. = async (req, res) => {
    try {
        const result = await db.query(
          ""
        );
        res.json(result.rows);
      } catch (err) {
        console.error(err);
        res
          .status(500)
          .send("Erreur du serveur lors de ");
      }
}