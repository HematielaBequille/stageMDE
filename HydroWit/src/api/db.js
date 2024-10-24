const pgp = require('pg-promise')();  // Initialisation de pg-promise

// Configuration de la connexion PostgreSQL
const db = pgp({
  host: '192.168.96.204',
  port: 5432,
  database: 'hydraulique',
  user: 'postgres',
  password: 'password',
});

module.exports = db;
