const mongoose = require('mongoose');
const menusSchema = new mongoose.Schema({
    code_menu:{type:String,required:true,unique:true},
    designation_menu:{type:String,required:true},
    prix_menu:{type:Number,required:true},
    produits_menu : [
            {
                _id: false,
                type:mongoose.Schema.Types.ObjectId, ref: "produits", required: true
            }
                     ],
});
module.exports = mongoose.model("menus",menusSchema);