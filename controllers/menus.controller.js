const menuModel = require("../models/menus.model");
const mongoose = require("mongoose");


//liste des menus
exports.getMenus = async (req, res) => {
  try {
    const menus = await menuModel.find();
    res.status(200).json(menus);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'impossible de charger les données Menus' });
  }
};

// Consultation d'un Menu à partir d'une clef Id fournie
exports.getMenu = async (req, res) => {
  try {
    const id_menu = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id_menu)) {
      return res.status(400).json({ error: "ID invalide" });
    }

// !!!! Question Aymerik = comment faire pour afficher le détail des produits ? !!!!

    const menu = await menuModel
      .findById(id_menu)
      .select("code_menu designation_menu produits_menu prix_menu ");

    if (!menu) {
      return res.status(404).json({ error: "Menu inexistant" });
    }

    res.status(200).json(menu);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "impossible de charger le menu" });
  }
};


// Création d'un Menu

exports.createMenu = async(req, res) => {
  try {
    const {code_menu, designation_menu, prix_menu} = req.body;
    if(!code_menu)
        return res.status(400).json({error: 'Code Menu obligatoire'});
    const menu = new Menu({
      code_menu,
      designation_menu,
      prix_menu,
      produits_menu,
    });
    const savedMenu = await menu.save();
    res.status(201).json(savedMenu);
} catch(err) {
  console.error(err);
  res.status(500).json({error : 'Erreur lors de la création du Menu'});
};
};
