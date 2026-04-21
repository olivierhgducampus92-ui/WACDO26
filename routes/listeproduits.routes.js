// En cours de développement

// On va avoir besoin d'express pour le routeur d'express
const express = require("express");
const { getProduits } = require("../controllers/produits.controller");
const router = express.Router();

// On aurait pu garder le get mais pour ensuite faire des comparaisons d'id express fait le job
// la fonction a été basculée dans controller
router.get('/', getProduits);

// Export du routeur
module.exports = router;