const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  adresse_client: { type: String},
  cdp_client: { type: String },
  code_client: { type: String, required: true, unique: true },
  nom_client: { type: String, required: true },
  prenom_client: { type: String, required: true },
  num_tel_client: { type: String },
  ville_client: { type: String},
  },
);

module.exports = mongoose.model("Clients", clientSchema);
