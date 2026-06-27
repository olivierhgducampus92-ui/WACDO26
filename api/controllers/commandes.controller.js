const CommandesModel = require("../models/commandes.model");
const Client = require("../models/client.model");
const mongoose = require("mongoose");

// Consultation d'une Commande à partir d'un ID commande fourni
exports.getCommandes = async (req, res) => {
  try {
    const id_commandes = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id_commandes)) {
      return res.status(400).json({ error: "ID commande invalide" });
    }
    const commande = await CommandesModel
      .findById(id_commandes)
      .select("code_client code_commande date_heure_cmde etat_commande prix_total_cmde menus_cmde produits_cmde");

    if (!commande) {
      return res.status(404).json({ error: "Commande inexistante" });
    }

    res.status(200).json(commande);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "impossible de charger la commande" });
  }
};

// Création d'une nouvelle Commande

exports.createCommande = async (req, res) => {
console.log(req.body);    
try {
        const {
          code_client,
          code_commande,
          date_heure_cmde,
          etat_commande,
          prix_total_cmde,
          menus_cmde,
          produits_cmde} = req.body;
          if(!code_client)
                return res.status(400).json({message:'Code client obligatoire'});
        const existeClient = await Client.findOne({code_client});

        //vérification de l'existance du client sur son code_client
        if(!existeClient)
             return res.status(400).json({message:'Code client inexistant'});
   
        // Paramètres de la collection à intégrer ensuite dans la collection Commandes
        const newCommande = new CommandesModel({
            code_client,
            code_commande,
            date_heure_cmde,
            etat_commande,
            prix_total_cmde,
            menus_cmde,
            produits_cmde
        });

        await newCommande.save();

        //permet en cas de réussite d'afficher les données enregistrées dans la collection MongoDb et de récupérer le code ID
        res.status(201).json(newCommande);
   
    } catch(err) {

      //console.error(err);
        res.status(500).json({
          message: 'Erreur serveur',
          error: err.message
        });
    }

};
