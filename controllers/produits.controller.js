const produitModel = require("../models/produits.model");
const mongoose = require("mongoose");


//liste des produits
exports.getProduits = async (req, res) => {
  try {
    const produits = await produitModel.find();
    res.status(200).json(produits);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'impossible de charger les données Produits' });
  }
};