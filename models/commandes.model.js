const mongoose = require('mongoose');
const commandesSchema = new mongoose.Schema({
    code_client:{type:String,required:true,unique:true},
    code_commande:{type:String,required:true,unique:true},
    date_heure_cmde: {type:String},
    etat_commande:{type:String,required:true},
    prix_total_cmde:{type:Number,required:true},
 //   menus_cmde : [{type:String}],
 //   produits_cmde : [{type:String}],
});
module.exports = mongoose.model("commandes",commandesSchema);