const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Import du contrôleur utilisateur

// GET - Récupérer tous les utilisateurs
router.get('/', userController.getAllUsers);

module.exports = router;