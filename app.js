// APP WACDO - projet etude GDU

// On va avoir besoin de l'application Express
const express = require('express');
const app = express();

// Accès à la base Mongodb
const connectDB = require('./config/db');
connectDB();

// Middleware pour indiquer que l'on va traiter du Json
// utilisation pour recevoir des données d'un Front
app.use(express.json());

// Création d'une route API
// Api qui va répondre en mode GET
// pour récupération de la liste des xxxx
// GET .. Route puis Fonction appliquée (requete et réponse)

// API Fonctionnelles

app.use('/api/menus', require('./routes/listemenus.routes'));

app.use('/api/menu', require('./routes/consultationmenu.routes'));

app.use('/api/utilisateurs', require('./routes/utilisateurs.routes'));

// API à développer

app.use('/api/produits', require('./routes/listeproduits.routes'));

app.use('/api/commandes', require('./routes/contenucommande.routes'));

// lancement du serveur :
app.listen(5000, () => console.log('Serveur WACDO running'));

// faire node app : serveur running
// dans le navigateur faire : http://localhost:5000/api/xxxx
// Affichage des données ci dessus