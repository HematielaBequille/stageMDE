const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController"); // Import du contrôleur utilisateur

// GET - Récupérer tous les utilisateurs
router.get("/", userController.getAllUsers);

// GET - Récupérer un utilisateur en particulier
router.get("/:id", userController.getUserById);

// POST - Créer un utilisateur
router.post("/", userController.createUser);

// PUT - Modifier un utilisateur en particulier
router.put('/:id', userController.modifyUser);

// DELETE - Supprimer un utilisateur en particulier

module.exports = router;
