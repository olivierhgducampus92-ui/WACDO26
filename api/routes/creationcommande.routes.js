const express = require("express");
const ctrl = require("../controllers/commandes.controller");

const router = express.Router();

router.post('/', ctrl.createCommande);

module.exports = router;
