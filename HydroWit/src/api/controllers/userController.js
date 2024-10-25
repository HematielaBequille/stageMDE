// base de données distante
const db = require("../db");

// user model
const User = require("../models/userModel");

// GET - Récupérer tous les utilisateurs - asynchrone
exports.getAllUsers = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "Erreur du serveur lors de la récupération de tous les utilisateurs"
      );
  }
};

// GET - Récupérer un utilisateur en particulier
exports.getUserById = async (req, res) => {
  const userId = parseInt(req.params.id);

  // on vérifie si l'id est bien un nombre entier
  if (isNaN(userId)) {
    return res.status(400).send("ID invalide");
  }

  // on essaie la requête
  try {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [
      userId,
    ]);
    const user = result.rows[0];

    // si l'utilisateur existe ou non
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("Utilisateur non trouvé");
    }

    // on attrape l'erreur
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur du serveur");
  }
};

// POST - Créer un utilisateur - asynchrone
exports.createUser = async (req, res) => {
  const { name, firstName, rank } = req.body;
  const newUser = new User(null, name, firstName, rank);
  try {
    const result = await db.query(
      "INSERT INTO users (name, firstname, rank) VALUES ($1, $2, $3) RETURNING *",
      [newUser.name, newUser.firstName, newUser.rank]
    );
    newUser.id = result.rows[0].id;
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("Erreur du serveur lors de la création de l'utilisateur");
  }
};

// PUT - Modifier un utilisateur en particulier
exports.modifyUser = async (req, res) => {
  const { id } = req.params;
  const { name, firstName, rank } = req.body;
  try {
    const result = await db.query(
      "UPDATE users SET name = $1, firstname = $2, rank = $3 WHERE id = $4 RETURNING *",
      [name, firstName, rank, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).send("Utilisateur non trouvé");
    }

    const updatedUser = new User(
      result.rows[0].id,
      result.rows[0].name,
      result.rows[0].firstname,
      result.rows[0].rank
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("Erreur du serveur lors de la modification de l'utilisateur");
  }
};

// DELETE - Supprimer un utilisateur en particulier
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send("Utilisateur non trouvé");
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("Erreur du serveur lors de la suppression de l'utilisateur");
  }
};
