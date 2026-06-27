// modèle pour les utilisateurs
// le role utilisateur doit être en relation avec la collection roles
// plusieurs roles :
// 1 - Compte Administration : gestion des données et des utilisateurs
// 2 - Compte Préparation de commandes : peut voir les commandes et les valider
// 3 - Compte Accueil : peut saisir une commande (au comptoir ou prise par téléphone), et remettre une commande à un client

const mongoose = require("mongoose");
const utilisateursSchema = new mongoose.Schema({
        code_utilisateur:{type:String,required:true,unique:true},
        mdp_utilisateur:{type:String},
        nom_utilisateur:{type:String,required:true},
        prenom_utilisateur:{type:String,required:true},
        role_utilisateur: {type:String},
})
module.exports = mongoose.model("Utilisateurs",utilisateursSchema);