const db = require("../db");
const Job = require("../models/jobModel");

// GET - Récupérer toutes les interventions
exports.getAllJobs = async (req, res) => {
    try {
      const result = await db.query("SELECT * FROM ");
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .send(
          "Erreur du serveur lors de la récupération de toutes les interventions"
        );
    }
  };

// GET - Récupérer une intervention

// POST - Créer une intervention

// PUT - Modifier une intervention

// DELETE - Supprimer une intervention