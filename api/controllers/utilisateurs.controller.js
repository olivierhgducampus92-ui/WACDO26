
const Utilisateurs = require('../models/utilisateurs.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Création d'un nouveau Utilisateur avec vérification existance sur code_utilisateur
exports.register = async (req,res) => {
    try {
        const {nom_utilisateur, prenom_utilisateur, code_utilisateur,mdp_utilisateur, role_utilisateur} = req.body;
        if(!code_utilisateur || !mdp_utilisateur)
                return res.status(400).json({message:'Code utilisateur et mot de passe obligatoires'});
        const existeUtilisateur = await Utilisateurs.findOne({code_utilisateur});

        //vérification de l'existance de l'utilisateur sur son code_utilisateur
        if(existeUtilisateur)
             return res.status(400).json({message:'Compte déjà existant'});
        const hashedPassword = await bcrypt.hash(mdp_utilisateur,10);
   
        // Paramètres de la collection à intégrer ensuite dans la collection des utilisateurs
        const newUtilisateur = new Utilisateurs({
            nom_utilisateur,
            prenom_utilisateur,
            code_utilisateur,
            mdp_utilisateur: hashedPassword,
            role_utilisateur
        });
        await newUtilisateur.save();
        //permet en cas de réussite d'afficher les données enregistrées dans la collection MongoDb et de récupérer le code ID
        res.status(201).json(newUtilisateur);
   
    } catch(err) {
        console.error(err);
        res.status(500).json({message: 'Erreur serveur'});
    }

};

// Login d'un utilisateur
exports.login = async(req,res) => {
try {
        const {code_utilisateur,mdp_utilisateur} = req.body;
        if(!code_utilisateur || !mdp_utilisateur)
                return res.status(400).json({message:'Code utilisateur et mot de passe obligatoires'});
        const existeUtilisateur = await Utilisateurs.findOne({code_utilisateur});

        //vérification de l'existance de l'utilisateur sur son code_utilisateur
        if(!existeUtilisateur)
             return res.status(400).json({message:'Utilisateur non valide'});

        const isMdpCorrect = await bcrypt.compare(mdp_utilisateur, existeUtilisateur.mdp_utilisateur);
        if(!isMdpCorrect)
            return res.status(400).json({message:'Utilisateur non valide'});
        const token = jwt.sign(
            {userID:existeUtilisateur._id},
            'CLEF_SECRETE_A_NE_PAS_DIVULGUER',
            {expiresIn:'15d'}
        );
        res.status(200).json({token, Utilisateurs:existeUtilisateur});

    } catch(err) {
        console.error(err);
        res.status(500).json({message: 'Erreur serveur'});
    }
};
