const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const TournamentSchema = mongoose.Schema({
    Name: String,
    Star_Date: Date,
    End_Date: Date,
    Format: String,
    Reward: String,
    Prize: Number,
    Code: String,
    Stages: Number,
    Location: String
})

TournamentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Tournament", TournamentSchema);