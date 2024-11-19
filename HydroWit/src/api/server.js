const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
//const jobRoutes = require("./routes/jobRoutes");
const allRoutes = require("./routes/allRoutes");
const telemesuresRoutes = require("./routes/telemesuresRoutes");
const meteorologieRoutes = require("./routes/meteorologieRoutes");

const app = express();
const port = 3000;

// Middleware pour traiter les requêtes en JSON
//app.use(express.json());
app.use(bodyParser.json());

// Middleware pour activer CORS -> a creuser
app.use(cors());

// Routes
app.use("/users", userRoutes);
//app.use("/jobs", jobRoutes);
app.use("/field/all", allRoutes);
app.use("/field/telemesures", telemesuresRoutes);
app.use("/field/meteorologie", meteorologieRoutes);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
