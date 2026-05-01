const Model = require("../models/commandes.model");
const mongoose = require("mongoose");

// Consultation d'un Commande à partir d'un ID commande fourni
exports.getCommandes = async (req, res) => {
  try {
    const id_commandes = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id_commandes)) {
      return res.status(400).json({ error: "ID commande invalide" });
    }

// !!!! Question Aymerik = comment faire pour afficher le détail de la commande ? !!!!

    const commande = await commandesModel
      .findById(id_commandes)
      .select("code_client code_commande date_heure_cmde etat_commande prix_total_cmde");
     // .select("code_client code_commande date_heure_cmde etat_commande prix_total_cmde menus_cmde produits_cmde");

    if (!commande) {
      return res.status(404).json({ error: "Commande inexistante" });
    }

    res.status(200).json(commande);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "impossible de charger la commande" });
  }
};


