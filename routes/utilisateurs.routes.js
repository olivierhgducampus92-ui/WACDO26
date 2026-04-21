// Fonctionnel

// On va avoir besoin d'express pour le routeur d'express
    const express = require("express");
    const { register, login } = require("../controllers/utilisateurs.controller");
   
    const router = express.Router();

// On aurait pu garder le get mais pour ensuite faire des comparaisons d'id express fait le job
// la fonction a été basculée dans controllers

// on ne met pas registrer car on part du principe que l'appel API utilisateur permettra par défaut la création d'un utilisateur
    router.post('/', register);

// 
    router.post('/login', login);

// Export du routeur
    module.exports = router;