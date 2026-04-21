
// Param BD
const mongoose = require("mongoose")
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://hugotolivier_db_user:UZIWo4mN27XG7kcJ@cluster0.gfxflqh.mongodb.net/WACDO?appName=Cluster0');
        console.log("Mongo DB connecté");
    } catch(err) {
        console.error(err.message);
    }
}
module.exports = connectDB;
