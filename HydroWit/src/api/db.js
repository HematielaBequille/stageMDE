const { Pool } = require("pg");

// Crée une instance du pool de connexions
const pool = new Pool({
  user: "hydrowit",
  host: "192.168.96.204",
  database: "hydraulique",
  password: "password",
  port: 5432,
});

// Fonction pour exécuter des requêtes SQL
const query = (text, params) => {
  return pool.query(text, params);
};

module.exports = {
  query,
};
