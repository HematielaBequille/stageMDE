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
    res.status(500).send("Erreur du serveur 1");
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
    res.status(500).send("Erreur du serveur");
  }
};

// PUT - Modifier un utilisateur en particulier

// DELETE - Supprimer un utilisateur en particulier
