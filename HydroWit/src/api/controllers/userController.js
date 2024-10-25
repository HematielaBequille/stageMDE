// Simulons une base de données en mémoire
let users = [
  { id: 1, name: "Alice", firstName: "bla", rank: "ble" },
  { id: 2, name: "Bob", firstName: "bla", rank: "ble" },
];

// base de données distante
const db = require("../db");

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

  //res.json(users);
};

// GET - Récupérer un utilisateur en particulier
exports.getUserById = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("Utilisateur non trouvé");
  }
};

// POST - Créer un utilisateur - asynchrone
exports.createUser = async (req, res) => {
  const { name, firstName, rank } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO users (name, firstname, rank) VALUES ($1, $2, $3) RETURNING *",
      [name, firstName, rank]
    );
    res.status(201).json(result.rows[0]);
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

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("Erreur du serveur lors de la modification de l'utilisateur");
  }
};

// DELETE - Supprimer un utilisateur en particulier
