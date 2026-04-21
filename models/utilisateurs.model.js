const mongoose = require("mongoose");
const utilisateursSchema = new mongoose.Schema({
      code_utilisateur:{type:String,required:true,unique:true},
       mdp_utilisateur:{type:String},
       nom_utilisateur:{type:String,required:true},
        prenom_utilisateur:{type:String,required:true},
    role_utilisateur: {type:String},
})
module.exports = mongoose.model("Utilisateurs",utilisateursSchema);