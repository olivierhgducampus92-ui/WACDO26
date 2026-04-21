const mongoose = require('mongoose');
const menusSchema = new mongoose.Schema({
    code_menu:{type:String,required:true,unique:true},
    designation_menu:{type:String,required:true},
    prix_menu:{type:Number,required:true},
    //contenu_menu : [{type:String}],
});
module.exports = mongoose.model("menus",menusSchema);