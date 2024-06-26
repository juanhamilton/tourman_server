const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const TournamentSchema = mongoose.Schema({
    name: String,
    startDate: Date,
    endDate: Date,
    formats: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Format"
    }],
    reward: String,
    price: Number,
    code: String,
    stageNumber: Number,
    location: String,
    active: Boolean,
    typeTournaments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Type"
    }],
    competitors:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
},{timestamps: true})

TournamentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Tournament", TournamentSchema);