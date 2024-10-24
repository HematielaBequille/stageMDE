const db = require('../db');  // Importer la connexion pg-promise

// Fonction pour récupérer tous les utilisateurs
const getAllUsers = async () => {
  return db.any('SELECT * FROM users');  // Requête pour récupérer tous les utilisateurs
};

// Fonction pour créer un nouvel utilisateur
const createUser = async (name) => {
  return db.one('INSERT INTO users(name) VALUES($1) RETURNING *', [name]);  // Insérer un utilisateur et retourner l'utilisateur créé
};

module.exports = {
  getAllUsers,
  createUser,
};
