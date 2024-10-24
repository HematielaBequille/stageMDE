const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3000;

const { getAllUsers, createUser } = require("./models/user");

// Middleware pour traiter les requêtes en JSON
//app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/users", userRoutes); // Utilise les routes définies pour les utilisateurs

app.get("/users", async (req, res) => {
  try {
    const users = await getAllUsers(); // Appelle la fonction pour récupérer tous les utilisateurs
    res.json(users); // Retourne les utilisateurs en JSON
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur du serveur 4");
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
