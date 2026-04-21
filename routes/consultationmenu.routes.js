// Fonctionnel
// Permet la consultation d'un menu avec l'ID associé

// On va avoir besoin d'express pour le routeur d'express
    const express = require("express");
    const {getMenu} = require("../controllers/menus.controller");

    const router = express.Router();

// On aurait pu garder le get mais pour ensuite faire des comparaisons d'id express fait le job
// la fonction a été basculée dans controllers


// pour lister les menus avec un clef de recherche
    router.get('/:id',getMenu);

// Export du routeur
    module.exports = router;