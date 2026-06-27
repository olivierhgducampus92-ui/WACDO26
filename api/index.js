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

// Permet de retourner la liste des menus avec les codes ID des produits du menu (manque le détail des produits)
app.use('/api/menus', require('./routes/listemenus.routes'));

// Permet de retourner le contenu d'un menu avec les codes ID des produits du menu (manque le détail des produits)
app.use('/api/menu', require('./routes/consultationmenu.routes'));

// REGISTER : Permet de créer un utilisateur en renvoyant son code ID et confirmation de création
// LOGIN : Permet de retourner le jeton pour un utilisateur existant avec bon user et mdp
app.use('/api/utilisateurs', require('./routes/utilisateurs.routes'));

// Permet de retourner la liste des produits qui sont la base des menus (manque le tri par catégorie et le détail des ingrédients)
app.use('/api/produits', require('./routes/listeproduits.routes'));

// Permet de retourner le détail d'une commande
app.use('/api/commandes', require('./routes/contenucommande.routes'));

// Permet de créer une commande
app.use('/api/commande', require('./routes/creationcommande.routes'));

// lancement du serveur :
app.listen(5000, () => console.log('Serveur WACDO running'));

// faire node app : serveur running
// dans le navigateur faire : http://localhost:5000/api/xxxx
// Affichage des données ci dessus