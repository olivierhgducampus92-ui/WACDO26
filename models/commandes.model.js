const mongoose = require('mongoose');
const commandesSchema = new mongoose.Schema({
    code_client:{type:String,required:true,unique:true},
    code_commande:{type:String,required:true,unique:true},
    date_heure_cmde: {type:Date},
    etat_commande:{type:String,required:true},
    prix_total_cmde:{type:Number,required:true},
    menus_cmde : [
        {
            menu_id: {type:mongoose.Schema.Types.ObjectId, ref: "menus", required: true},
            qte: {type: Number, required: true},
        }
                 ],
    produits_cmde : [
        {
            produit_id: {type:mongoose.Schema.Types.ObjectId, ref: "produits", required: true},
            qte: {type: Number, required: true},
        }
                 ],
});
module.exports = mongoose.model("commandes",commandesSchema);