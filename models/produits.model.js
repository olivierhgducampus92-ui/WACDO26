const mongoose = require('mongoose');
const produitsSchema = new mongoose.Schema({
    code_produit:{type:String,required:true,unique:true},
    description_produit:{type:String,required:true},
    disponibilite_produit:{type:Boolean},
    image_produit:{type:String},
    nom_produit:{type:String},
    prix_produit:{type:Float16Array},
    qte_produit:{type:Int16Array},
    type_qte: {type:String},
})