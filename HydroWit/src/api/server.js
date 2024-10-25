const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3000;

// Middleware pour traiter les requêtes en JSON
//app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/users", userRoutes); // Utilise les routes définies pour les utilisateurs

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
