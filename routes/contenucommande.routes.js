// En cours de développement

// On va avoir besoin d'express pour le routeur d'express
const express = require("express");
const { getCommandes } = require("../controllers/commandes.controller");
const router = express.Router();

// On aurait pu garder le get mais pour ensuite faire des comparaisons d'id express fait le job
// la fonction a été basculée dans controllers
router.get('/', getCommandes);

// Export du routeur
module.exports = router;