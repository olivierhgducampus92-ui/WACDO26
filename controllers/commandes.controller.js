exports.getCommandes = (req, res) => {
    // Statut 200 par défaut
    res.status(200).json([{
        id:1,
        code_cmde: '5774GGEG26'
    }]);
};
