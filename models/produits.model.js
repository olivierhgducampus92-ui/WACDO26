const mongoose = require('mongoose');
const produitsSchema = new mongoose.Schema({
    code_produit:{type:String,required:true,unique:true},
    description_produit:{type:String,required:true},
    disponibilite_produit:{type:Boolean},
    image_produit:{type:String},
    nom_produit:{type:String},
    prix_produit:{type:Number},
    qte_produit:{type:Number},
    type_qte: {type:String},
    categorie: {type:String},
});
module.exports = mongoose.model("produits",produitsSchema);