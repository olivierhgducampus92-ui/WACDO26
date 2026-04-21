// Fonctionnel

// On va avoir besoin d'express pour le routeur d'express
    const express = require("express");
    const { getMenus, createMenu } = require("../controllers/menus.controller");

    const router = express.Router();

// On aurait pu garder le get mais pour ensuite faire des comparaisons d'id express fait le job
// la fonction a été basculée dans controllers

// pour lister les menus
    router.get('/', getMenus);

// pour créer un menu
    router.post('/',createMenu);

// Export du routeur
    module.exports = router;