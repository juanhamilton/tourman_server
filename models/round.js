const mongoose = require("mongoose");

const RoundSchema = mongoose.Schema({
    idTournament: mongoose.Schema.Types.ObjectId,
    round: Number    
},{timestamps: true});

module.exports = mongoose.model("Round", RoundSchema);