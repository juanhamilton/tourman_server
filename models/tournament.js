const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const TournamentSchema = mongoose.Schema({
    name: String,
    startDate: Date,
    endDate: Date,
    format: String,
    reward: String,
    price: Number,
    code: String,
    stageNumber: Number,
    location: String,
    typeTournament:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Type",
        unique: true
    }]
})

TournamentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Tournament", TournamentSchema);